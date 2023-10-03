const ITEMS_REQUEST = 'ITEMS_REQUEST';
const ITEMS_REQUEST_SUCCESS = 'ITEMS_REQUEST_SUCCESS';

export function itemsRequest(bool, startindex, endindex) {
    let payload = {
        isLoading: bool,
        startindex,
        endindex
    }
    return {
        type: ITEMS_REQUEST,
        payload
    }
}

export function itemsRequestSuccess(bool) {
    return {
        type: ITEMS_REQUEST_SUCCESS,
        isLoading: bool,
    }
}