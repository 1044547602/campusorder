import axios from '@/axios/http'
import qs from 'qs'
const signApi = {
    //查询id
    info(id){
      return axios.get('/user/info/',{id:id});
    },
    //登录
    login(username,password){
      const data={
        password,
        username
      }
      return axios.post('/user/login',qs.stringify(data)
      )
    },
    //注册
    register(email,password,userName,validation){
      const data={
        email:email,
        password:password,
        userName:userName,
        validation:validation
      }
      return axios.post('/user/register',qs.stringify(data))
    },
    //邮箱验证码
    getValidation(email,password,userName){
      const data={
        email:email,
        password:password,
        userName:userName
      }
      return axios.post('/user/getValidation',qs.stringify(data))
    }

  };
  
  export default signApi;