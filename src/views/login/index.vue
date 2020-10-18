<template>
    <div class="login">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
         
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                </Input>
            </FormItem>
            <br>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                </Input>
            </FormItem>
            <br>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleRegister">注册</Button>
            </FormItem>
        </Form>
        
    </div>

</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                formInline: {
                    user: '',
                    password: '',
                   
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能低于六位数', trigger: 'blur' }
                    ]
                }
            }
        },
        props:['username'],
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    //valid==true
                    if (valid) {
                        
                        this.$api.signApi.login(this.formInline.user,this.formInline.password).then(res=>{
                       
                          console.log(res)
                          if(res.data.success==true){
                          localStorage.setItem("token",res.data.data.token);
                               this.$router.push('/home')
                               
                          }else{
                            this.$Message.error('账号密码不正确');
                          }
                        })
                       
                       
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleRegister() {
                this.$router.push('/Register')
            }

        }


    };
</script>

<style scoped>
  .login {
        justify-content:center;
        align-items:center;
      
    }
</style>