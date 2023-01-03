import type { NextApiRequest, NextApiResponse } from 'next'
import { limiter } from '../../constant/limiter';
import { subscriptionsFormSchema } from '../../constant/schemas';
import SibApiV3Sdk from 'sib-api-v3-sdk'

type Data = {
    response: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    try {
        await limiter.check(res, 3, 'CACHE_TOKEN') // 3 requests per minute

        // console.log('hello');
        
        const values = req?.body || {};
        await subscriptionsFormSchema.validate(values);

        let defaultClient = SibApiV3Sdk.ApiClient.instance;
        
        let apiKey = defaultClient.authentications['api-key'];
        
        apiKey.apiKey = process.env.NEWSLETTERBLOGKEY;

        let apiInstance = new SibApiV3Sdk.ContactsApi();

        let createContact = new SibApiV3Sdk.CreateContact();

        createContact.email = values.email;
        createContact.listIds = [3];

        const createContactRes = await apiInstance.createContact(createContact);

        
        // .then(function (data: any) {
        //     console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        // }, function (error: any) {
        //     console.error(error);
        // });

    } catch (error) {
        console.log({error});
        
        res.status(429).json({ response: 'Rate limit exceeded' })
    }

    res.status(200).json({ response: 'John Doe' })
}