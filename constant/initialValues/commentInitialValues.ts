const commentInitialValues = (name?: string, email?: string, storeData?: boolean) => {    
    return {
        name: name || '',
        email: email || '',
        comment: '',
        storeData: storeData || false,
    }
}

export default commentInitialValues;