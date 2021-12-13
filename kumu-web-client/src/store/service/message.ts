export const loadMessageLocalStorage = () => {
    const message = localStorage.getItem('message');
    if (message) {
        return JSON.parse(message);
    }
    return [];
};

export const saveMessageLocalStorage = (data: object) => {
    return localStorage.setItem('message', JSON.stringify(data));
};
