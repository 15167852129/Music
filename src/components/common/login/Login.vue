<template>
  <div class="login"  >
    <div @click="loginclick">
      <img  v-if="loginimg === null" src="@/assets/img/avatar.png" class="loginimg">
      <img  v-else="loginimg" :src="loginimg" alt="" class="loginimg">
      <span>{{ loginname }}<div class="d3"></div></span>
    </div>
      

    <transition>
      <div class="login-video" v-if="loginvideo">
        <img src="@/assets/img/cha.png" alt="" class="quit" @click="loginquit">

        <h2>扫码登录</h2>

        <div class="logincode">
          <div class="tutorial">
            <img src="@/assets/img/login.png" class="loginImg" alt="">
          </div>

          <div class="code">
            <div>
              <div class="loginqrimg" v-if="qrimg===null"></div>
              <img :src="qrimg" alt="" class="loginqrimg" v-else="qrimg">
            </div>
            
            <span style="color:#666666;">使用 <span style="color:#3371bc; margin-left: 0;">网易云音乐APP</span> </span>
            <span style="color:#666666;" >扫码登录</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
 
</template>

<script>
  import { getloginKey, getloginCreate, getloginCheck, getloginstatus } from '@/network/login'
  export default {
    data(){
      return{
        loginvideo:false,
        unikey:"",
        qrimg:null,
        logonstatus:false,
        loginid:null,
        loginname:"未登录",
        loginimg:null,
        timer:null
      }
    },
    created(){
      if(sessionStorage.getItem('cookie')){
        this.loginid = sessionStorage.getItem('userId');
        this.loginname = sessionStorage.getItem('nickname');
        this.loginimg = sessionStorage.getItem('avatarUrl');
      }
    },
    methods:{
      loginclick(){
        this.loginvideo = true

        getloginKey().then(res =>{
          this.unikey = res.data.unikey
          if(this.unikey === res.data.unikey){
            //获取二维码
            this.getloginCreate(this.unikey);
          }
        })
        
      },
      loginquit(){
        this.loginvideo = false
        clearInterval(this.timer)
      },
      getloginCreate(key){
        getloginCreate(key).then(res =>{
          //获得二维码
          this.qrimg = res.data.qrimg;
          this.logonstatus =true
          //获取二维码的状态
          this.getloginCheck(key);
                    
        })
      },
      getloginCheck(key){
        if(this.logonstatus){
          this.timer = setInterval(() =>{      
            getloginCheck(key).then(res =>{
                console.log(res.code);
                  if(res.code === 802){
                    console.log(res.message);
                  }else if(res.code === 803){
                    console.log(res);
                    clearInterval(this.timer)
                    sessionStorage.setItem('cookie', res.cookie);
                    this.getloginstatus()
                  }else if(res.code === 800){
                    console.log(res.code);
                  }
              })
          },2000)
        }
      },
      getloginstatus(){
        getloginstatus(sessionStorage.getItem('cookie')).then(res =>{
          sessionStorage.setItem('userId', res.data.profile.userId);
          sessionStorage.setItem('nickname', res.data.profile.nickname);
          sessionStorage.setItem('avatarUrl', res.data.profile.avatarUrl);
          this.$router.go(0);     
        })
      }
    }
  }
</script>

<style scoped>
.login .loginimg{
  height: 29px;
  width: 29px;
  background-color: #fff;
  border-radius: 50%;
  vertical-align: middle;
    
}

.login span{
  margin-left: 5px;
  font-size: 11px;
  color: #f8dcdb;
  vertical-align: middle;
}

.login span:hover{
  color: #fff;
}

.d3{
  margin-left: 5px;
  display: inline-block;
  vertical-align: middle;
  width: 0; 
  height: 0;
  border-width: 5px;
  border-style: solid;
  border-color:#f8dcdb transparent transparent  transparent;
}

.d3:hover{
  border-color:#fff transparent transparent  transparent;
}

.login-video{
  position: absolute;
  right: 50vh;
  top: 20vh;
  padding: 10px;
  /* line-height:530px; */

  width: 350px;
  height: 530px;
  background-color: #fff;
  z-index: 99;
  box-shadow:black 0px 0px 10px;
}

.login-video .quit{
  float: right;
}

.login-video h2{
  margin-top: 100px;
  text-align: center;
}

.logincode{
  position: absolute;
  left: 35px;
  top: 193px;

  width: 280px;
  height: 187px;
}


.tutorial{
  display: inline-block;
  width: 133px;
  height: 187px;
  margin-right: 24px;
}

.code{
  display: inline-block;
  width: 123px;
  height: 187px;
  transform: translateY(-5%);
  text-align: center;
}

.loginImg{
  width: 133px;
  margin-right: 23px;
}

.loginqrimg{
  height: 123px;
  width: 123px;
}
</style>