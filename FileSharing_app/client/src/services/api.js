import axios from 'axios';

const API_URL = 'https://file-share-ruddy.vercel.app'

export const  uploadFile = async (data) =>{
    try{
     let response = await axios.post(`${API_URL}/upload`,data);
     return response.data;
    }catch(error){
        console.error('Error while calling the api', error.message);

    }

}

//  axious returns a object   . we only want data part in axious object
