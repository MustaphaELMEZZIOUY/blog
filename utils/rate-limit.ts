import LRU from 'lru-cache';
import { NextApiResponse } from 'next';
import { rateLimitOptions } from '../constant/interfaces';
// import { rateLimitOptions } from '../interfaces';

const rateLimit = ({ uniqueTokenPerInterval, interval }: rateLimitOptions) => {
    const checkedUTPI = parseInt(uniqueTokenPerInterval + '', 10); // to make sure the number is an integer
    const checkedI = parseInt(interval + '', 10); // to make sure the number is an integer

    const tokenCache = new LRU({
        max: checkedUTPI || 500,
        // maxAge: checkedI || 60000,
        ttl: checkedI || 60000,
    })

    return {
        check: (res: NextApiResponse, limit: number, token: string) =>
            new Promise((resolve: (value?: unknown) => void, reject: (reason?: any) => void) => {
                const tokenCount: number[] = tokenCache.get(token) || [0];
                
                if (tokenCount[0] === 0) {
                    tokenCache.set(token, tokenCount)
                }
                tokenCount[0] += 1

                const currentUsage = tokenCount[0]
                const isRateLimited = currentUsage >= parseInt(limit + '', 10);
                res.setHeader('X-RateLimit-Limit', limit)
                res.setHeader(
                    'X-RateLimit-Remaining',
                    isRateLimited ? 0 : limit - currentUsage
                )

                return isRateLimited ? reject() : resolve()
            }),
    }
}

export default rateLimit;