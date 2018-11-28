import axios from 'axios'
import {Message} from 'ant-design-vue'

axios.interceptors.request.use(config => {
  return config
}, err => {
  Message.error({message: '请求超时!'})
  return Promise.resolve(err)
})

axios.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.status === 'error') {
    Message.error({message: data.data.msg})
    return
  }
  return data
}, err => {
  if (err.response.status === 504 || err.response.status === 404) {
    Message.error('服务器被吃了⊙﹏⊙∥')
  } else if (err.response.status === 403) {
    Message.error('权限不足,请联系管理员!')
  } else {
    Message.error('服务器内部错误!')
  }
  return Promise.resolve(err)
})

let base = ''

const postRequest = (url, params, boo) => {
  if (boo === undefined) {
    boo = true
  }
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    async: boo,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch(function (error) {
    if (error.response) {
      //请求已发出，但服务器使用状态代码进行响应
      //落在2xx的范围之外
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      //在设置触发错误的请求时发生了错误
      console.log('Error', error.message);
    }
    // console.log(error.config);
    localStorage.removeItem('ms_username');
    // Message.error('请求出错,请联系管理员!')
  })
}
const postRequest2 = (url, params, boo) => {
  if (boo === undefined) {
    boo = true
  }
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    dataType: "json",
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    async: boo,
    // transformRequest: [function (data) {
    //     let ret = ''
    //     for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    // }],
  });
};
const postRequest3 = (url, params, headers, boo) => {
  if (boo === undefined) {
    boo = true
  }
  let obj = {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
  headers = undefined ? obj : headers
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    async: boo,
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    },
  }).catch(function (error) {
    if (error.response) {
      //请求已发出，但服务器使用状态代码进行响应
      //落在2xx的范围之外
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      //在设置触发错误的请求时发生了错误
      console.log('Error', error.message);
    }
    console.log(error.config);
    localStorage.removeItem('ms_username');
    // Message.error( '请求出错,请联系管理员!')
  })
};


const uploadFileRequest = (url, params, boo) => {
  if (boo === undefined) {
    boo = true
  }
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    async: boo
  })
}

const putRequest = (url, params, boo) => {
  if (boo === undefined) {
    boo = true
  }
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    async: boo,
    // transformRequest: [function (data) {
    //     let ret = ''
    //     for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    // }],
  }).catch(function (error) {
    if (error.response) {
      //请求已发出，但服务器使用状态代码进行响应
      //落在2xx的范围之外
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      //在设置触发错误的请求时发生了错误
      console.log('Error', error.message);
    }
    console.log(error.config);
    localStorage.removeItem('ms_username');
    // Message.error('请求出错,请联系管理员!')
  })
};
const putRequest2 = (url, params, boo) => {
  if (boo === undefined) {
    boo = true
  }
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    async: boo
    // transformRequest: [function (data) {
    //     let ret = ''
    //     for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    // }],
  }).catch(function (error) {
    if (error.response) {
      //请求已发出，但服务器使用状态代码进行响应
      //落在2xx的范围之外
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      //在设置触发错误的请求时发生了错误
      console.log('Error', error.message);
    }
    console.log(error.config);
    localStorage.removeItem('ms_username');
    // Message.error('请求出错,请联系管理员!')
  })
};
const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  }).catch(function (error) {
    if (error.response) {
      //请求已发出，但服务器使用状态代码进行响应
      //落在2xx的范围之外
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      //在设置触发错误的请求时发生了错误
      console.log('Error', error.message);
    }
    console.log(error.config);
    localStorage.removeItem('ms_username');
    // Message.error('请求出错,请联系管理员!')
  })
};

const getRequest = (url, data, boo) => {
  if (boo === undefined) {
    boo = true
  }
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: data,
    async: boo
  }).catch(function (error) {
    if (error.response) {
      //请求已发出，但服务器使用状态代码进行响应
      //落在2xx的范围之外
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      //在设置触发错误的请求时发生了错误
      console.log('Error', error.message);
    }
    console.log(error.config);
    localStorage.removeItem('ms_username');
    // Message.error('请求出错,请联系管理员!')
  })
};

export default {
  postRequest, postRequest2, postRequest3, uploadFileRequest, putRequest, putRequest2, deleteRequest, getRequest
}
