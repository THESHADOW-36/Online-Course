import { Observable } from 'rxjs';
import axios from 'axios';

const post = (url, paramsObj, header) => {
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .post(url, params, { header })
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

const get = (url, paramsObj, header) => {
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .get(url, { params, header })
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

const put = (url, paramsObj, header) => {
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .put(url, params, { header })
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

const deleteApi = (url, paramsObj, header) => {
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj }
         axios
            .delete(url, { params, header })
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

const API = {
   post,
   get,
   put,
   deleteApi
}