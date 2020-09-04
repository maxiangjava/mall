import axios from 'axios'


//设置默认全局基本地址
axios.defaults.baseURL = 'http://123.207.32.32:8000';
//设置默认全局超时时间，单位毫秒
axios.defaults.timeout = 5000;

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



//----------------------------------------------------------------------------------------------------------------
//可以创建多个axios实例
const axiosOne = axios.create({
    baseURL:'http://123.207.88.88:8000'
});
axiosOne({
    url:'/home/multidata',
    method:'get'
}).then(res => {
    console.log(res);
})
//----------------------------------------
const axiosTwo = axios.create({
    baseURL:'http://123.207.99.99:8000'
});
axiosTwo({
    url:'/home/multidata',
    method:'get'
}).then(res => {
    console.log(res);
})
//------------------------------------------------------------------------------------------------------------------

//普通get请求
axios({
  url:'/home/multidata',
  method:'get'
}).then(res => {
  console.log(res);
})

//带参数get请求
axios({
  url:'/home/data',
  params:{
    type:'pop',
    page:1
  },
  method:'get'
}).then(res => {
  console.log(res);
})

//处理并发请求，两个请求都成功执行then
axios.all([axios({
      url:'/home/multidata'
    }),axios({
      url:'/home/multidata'
    })
]).then(results =>{
  console.log(results[0]);      //使用数组得到结果1
  console.log(results[1]);      //使用数组得到结果2
})

axios.all([axios({
      url:'/home/multidata'
    }),axios({
      url:'/home/multidata'
    })
]).then(axios.spread((res1,res2) => {
  console.log(res1);      //使用axios.spread分割结果
  console.log(res2);      //使用axios.spread分割结果
}))