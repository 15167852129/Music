<template>
  <div class="nav-bar">
    <div class="logo">
        <img src="@/assets/img/music.png" alt="">
        <span class="title">网易云音乐</span>
    </div>

    <div class="nav">
        <!-- <img class="back-left" src="@/assets/img/箭头_列表向左.png"> -->
        <img class="back-left" src="@/assets/img/back-left.png" @click="backCilck">

        <img class="go-right" src="@/assets/img/go-right.png"  @click="backCilck1">

        <div class="search">
            <el-input class="el-input" placeholder="搜一搜"
            @focus="hotsearchfocus"
            @blur="hotsearchblur"/>
            <span></span>
        </div>
        <!-- 搜索 -->
        <transition>
            <div class="hotsearch" v-show="hotsearch">
                <span class="title">热搜榜</span>
                <div v-for="(item, index) in hotsearchArr">
                    <li>
                        <div class="index" v-if="index < 3" style="color: #ec4141;">{{ index + 1 }}</div>
                        <div class="index" v-else="index > 3">{{ index + 1 }}</div>
                        <div class="hot" >
                            <div v-if="index < 3" 
                                class="searchWord" 
                                style="font-weight:bold;">
                                {{ item.searchWord }}
                                <span>{{ item.score }}</span>
                                <img :src="item.iconUrl" alt="">
                            </div>
                            <div v-else="index > 3" 
                                class="searchWord">
                                {{ item.searchWord }}
                                <span>{{ item.score }}</span>
                                <img :src="item.iconUrl" alt="">
                            </div>
                            <div class="content">{{ item.content }}</div>
                        </div>
                    </li>
                </div>
            </div>
        </transition>
    </div>
    
  </div>
</template>

<script>
import { getHotsearch } from '@/network/navbar'
    export default {
        data(){
            return{
                hotsearch: false,
                hotsearchArr:[]
            }
        },
        created(){
           this.getHotsearch()
        },
        methods:{
            backCilck(){
                this.$router.go(-1);
                this.$store.commit('cleansong')
            },
            backCilck1(){
                this.$router.go(1);
            },
            hotsearchfocus(){
                this.hotsearch = true
            },
            hotsearchblur(){
                this.hotsearch = false
            },
            getHotsearch(){
                getHotsearch().then(res =>{
                    this.hotsearchArr=res.data
                })
            }
        }
    }
</script>

<style scoped>
.nav-bar{
    height: 60px;
    background-color: #e33e3e;
    position: relative;
}
.logo{
    float: left;
    height: 60px;
    width: 180px;
    cursor: pointer;
    line-height: 60px;
}

.logo img{
    position: relative;
    left: 20px;
    top: 5px;
    height: 24px;
    width: 24px;
}
.logo .title{
    position: relative;
    left: 25px;

    font-family: 微软雅黑;
    font-size: 18px;
    color: #fff;
}
.nav{
    float: left;
    margin-left: 40px;
    display: flex;
    align-items: center;

    height: 60px;
}

.nav .back-left{
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
}

.nav .go-right{
    margin-left: 10px;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
}

.search{
    position: relative;
    float: left;
    margin-left: 10px;
}
.el-input>>>.el-input__inner{
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    border: 0;
    height: 28px;
    width: 155px;
    padding-left: 30px;
}

.el-input>>>.el-input__inner::placeholder{
    font-family: 微软雅黑;
    font-size: 11px;
    color: #fff;
}
.search span {
    position: absolute;
    left: 8px;
    top: 6px;

    display: inline-block;
    width: 16px;
	height: 16px;
    background-image: url(../../../assets/img/search.png);
    background-position: 1px 0px;
}

.v-enter-active {
    animation: move 1s;
}

.v-leave-active {
    animation: move 0.1s reverse;
}

.hotsearch{
    position: absolute;
    left: 210px;
    top: 63px;
    width: 355px;
    height: 820px;
    background-color: #fff;
    box-shadow: rgb(0,0,0,.2) 0px 0px 6px;
    border-radius: 10px;
    z-index: 20;

    overflow-y:scroll;
}

.hotsearch .title {
    font-family: 黑体;
    font-size: 15px;
    display: inline-block;
    height: 48px;
    padding: 10px 10px;
}

.hotsearch li{
    list-style:none;
    display: flex;
    height: 55px;
    align-items: center;
    font-size: 14px;

    font-family: 黑体;
}

.hotsearch li:hover{
    background-color: #f2f2f2;
}
.hotsearch .index{
    height: 55px;
    width: 55px;
    line-height: 55px;
    text-align: center;
}
.hotsearch .hot .searchWord{
    color: #333333;
}
.hotsearch .hot .searchWord span{
    font-size: 5px;
    color: #cccccc;
    margin-left: 3px;
    
}
.hotsearch .hot .searchWord img{
    height: 14px;
    margin-left: 5px;
    
}
.content{
    width: 300px;
    font-size: 9px;
    color: #999999;
}
</style>