export function storeRequest(item) {
    return {
        type: '@itemList/STORE_REQUEST',
        payload: { item },
    };
}

export function resetRequest() {
    return {
        type: '@itemList/RESET_REQUEST',
    };
}
