import axios from 'axios';
const instance = axios.create({
  timeout: 3000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

instance.interceptors.response.use(
  response => {
    // console.log(response)
    return response.data;
  },
  error => {
    console.log(`Request failed with error code '${error.code}', message '${error.message}'`)
    console.log(error.message);
    Promise.reject(error.response)
  },
);

export default instance;