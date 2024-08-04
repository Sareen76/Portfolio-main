import axios from 'axios'
import { API_NOTIFICATIONS_MEASSAGES, SERVICE_URLS} from '../constants/config.js'

// Axios Instance --> Aios Interceptors --> defining the process error and process response -> form an API 

const API_URL = 'http://localhost:3000';

// Benefits of Using an Axios Instance
// Reusability: You can define default settings once and reuse the instance throughout your application.
// Consistency: Ensures that all requests share common settings, reducing the chances of inconsistencies.
// Separation of Concerns: Helps keep your code organized by separating configuration from actual request logic.
const axiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 10000,
    headers: {
        "Content-Type" : "application/json"
    }
});

// Build INTERCEPTORS
//  INTERCEPTORS - In Axios, interceptors are functions that allow you to intercept and manipulate requests or responses before they are handled by then or catch. Interceptors are useful for adding custom behavior, such as logging, modifying headers, handling authentication, or handling errors globally.
axiosInstance.interceptors.request.use(
    function(config){
         // Do something before the request is sent
        // For example, add an authorization header
        // config.headers.Authorization = `Bearer ${yourToken}`;
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        //here we can stop global loader here or the loader you have set on a project 
        return processResponse(response);
    },
    function (error){
        //stop global loader here and show error message
        return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
        // 200 OK: The request was successful, and the server returned the requested resource.
        // 201 Created: The request was successful, and a new resource was created.
        // 202 Accepted: The request has been accepted for processing, but the processing is not complete.
        // 203 Non-Authoritative Information: The request was successful, but the returned information may be from a third-party.
        // 204 No Content: The request was successful, but there is no content to return.
        // 205 Reset Content: The request was successful, and the client should reset its view.
        // 206 Partial Content: The request was successful, and the server is returning only part of the resource.
        
    if(response?.status === 200){
        return {isSuccess : true, data: response.data, optional : "From here we can also send custom Datas"};
    }
    else{
        return{
            isFailure: true,
            status : response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError = (error) => {
    if(error.response){
        //request made and server responsed with a status other than 200
        //that falls out of the range 2.x.x (200)
        console.log('ERROR IN RESPONSE: ', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATIONS_MEASSAGES.ResponseFailure,
            code: error.response.status
        }
    }else if(error.request) {
        //Request made but no rensponse was received
        console.log('ERROR IN REQUEST: ', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATIONS_MEASSAGES.requestFailure,
            code: ""
        }
    }else{
        // Something happened in setting up request that triggers an error
        console.log('ERROR IN NETWORK: ', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATIONS_MEASSAGES.networkError,
            code: ""
        }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            //it will act as progress loader of 1 to 100%
            onUploadProgress: function (ProgressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((ProgressEvent.loaded * 100)/ ProgressEvent.total);
                    showUploadProgress(percentageCompleted)
                }
            },
            onDownloadProgress: function (ProgressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((ProgressEvent.loaded * 100)/ ProgressEvent.total);
                    showUploadProgress(percentageCompleted)
                }
            }
        })
}

export { API };