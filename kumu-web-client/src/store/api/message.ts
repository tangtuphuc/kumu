export const fetchMessage: () => void = () => {
    // return fetch()
    return {
        data: {
            message: [
                {
                    text: 'Hello'
                },
                {
                    text: 'Yeah ?'
                }
            ]
        }
    };
};
