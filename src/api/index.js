import axios from 'axios'

const HOST = '/api'
const fetch = (type,url,data) => {
	url = HOST + url;
	return new Promise((resolve, reject)=> {
	    axios({
	    	method: type,
	    	url: url,
	    	data: data,
	    	headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
      		}
	    }).then(response => {
          resolve(response.data);
        }).catch(error => {
        	reject(error);
        })
	})
};

export const proList = (params) => {
	return fetch('post','/proList', params);
}