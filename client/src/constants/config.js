export const API_NOTIFICATIONS_MEASSAGES = {
    loading: {
        title: 'Loading...',
        meassage: 'Data is beiing loaded, please wait'
    },
    success: {
        title: 'Success',
        message: 'Data Successfully loaded'
    },
    ResponseFailure: {
        title: 'error',
        message: 'An error occured while fetching response from the server . please try again later'
    },
    requestFailure: {
        title: 'error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'error',
        message: 'Unable to connect with the server. please check internet connectivity and try again later'
    }
}


export const SERVICE_URLS = {
    personalDetails: {url:'/getinfo', method: 'GET'}
}