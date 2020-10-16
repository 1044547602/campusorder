<template>
     <div class="register">
       <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem >
                <Input type="text" v-model="formInline.email" placeholder="email">
                <Icon type="ios-mail-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
             <FormItem >
                <Input type="text" v-model="formInline.validation" placeholder="validation">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
                <button @click="handleRegister">获取验证码</button>
            </FormItem>
             </br>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
            <FormItem>
                <Button type="primary">注册</Button>
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
                    email:'',
                    validation:''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能低于六位数', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    //valid==true
                    if (valid) {
                        this.$api.signApi.register(this.formInline.email,this.formInline.password,this.formInline.user,this.formInline.validation).then(res=>{
                            if(res.data.success=true){
                                 this.$Message.success('Success!');
                                 this.$router.push('/login')
                            }else{
                                this.$Message.error('Fail!');
                            }
                        })
                       
                       
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },

            handleRegister() {
                this.$api.signApi.getValidation(this.formInline.email,this.formInline.password,this.formInline.user).then(res=>{
                    if(res.data.success=true){
                        console.log(res)
                        this.$Message.success('验证码获取正确')
                    }else{
                        this.$Message.error('验证码获取失败');
                    }

                    
                })
            }

        }


    
};
</script>

<style lang="less" scoped>

</style>
