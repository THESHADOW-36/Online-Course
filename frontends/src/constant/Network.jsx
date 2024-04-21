import { Observable } from 'rxjs';
import axios from 'axios';


const getHeaders = () => {
   const userToken = localStorage.getItem("userToken");

   let headers = {};

   // If token exists and is not null, set up headers
   if (userToken !== null) {
      headers = { Authorization: 'Bearer ' + userToken };
   } else {
      console.log("token is not found")
   }

   return headers;
}


const post = (url, paramsObj) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .post(url, params, { headers })
            .then((response) => {
               console.log(response)
               observer.next(response)
               observer.complete()
            })
            .catch((error) => {
               console.log(error)
               observer.next(error)
               observer.complete()
            })
      })
   } catch (error) {
      console.log('catch error', error);
   }
}

const get = (url, paramsObj) => {
   console.log("url :", url)
   const headers = getHeaders()
   console.log(headers)
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .get(url, { params, headers })
            .then((response) => {
               console.log(response)
               observer.next(response)
               observer.complete()
            })
            .catch((error) => {
               console.log(error)
               observer.next(error)
               observer.complete()
            })
      })
   } catch (error) {
      console.log('catch error', error);
   }
}

const put = (url, paramsObj) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .put(url, params, { headers })
            .then((response) => {
               console.log(response)
               observer.next(response)
               observer.complete()
            })
            .catch((error) => {
               console.log(error)
               observer.next(error)
               observer.complete()
            })
      })
   } catch (error) {
      console.log('catch error', error);
   }
}

const deleteApi = (url, paramsObj) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .delete(url, { params, headers })
            .then((response) => {
               console.log(response)
               observer.next(response)
               observer.complete()
            })
            .catch((error) => {
               console.log(error)
               observer.next(error)
               observer.complete()
            })
      })
   } catch (error) {
      console.log('catch error', error);
   }
}

export const API = {
   post,
   get,
   put,
   deleteApi
}