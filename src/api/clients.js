import { API_HOST } from "../utils/constants";


export function getClientApi() {
    const url=`${API_HOST}`;

    return fetch(url)
    .then((Response) => {
        return Response.json()
    })
    .then((result)=>{
        console.log(result);
        return result;
    })
    
}