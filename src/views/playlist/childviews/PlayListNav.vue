<template>
  <div>
      <div class="cover">
        <img :src="data.coverImgUrl" alt="" class="cover-img-url">
      </div>

      <div class="detailed">
        <div class="title">
          <div class="label">歌单</div>
          <span class="play-name">{{ data.name }}</span>
        </div>
        <div class="avatar">
          <img :src="data.creator.avatarUrl" class="avatar-url">
          <span class="nickname">{{ data.creator.nickname }}</span>
          <span>{{ data.createTime | showDate }}创建</span>
        </div>

        <div class="btn">
          <div class="play-all">
            <img src="@/assets/img/play-al.png">
            <span>全部播放</span>
          </div>
          <div class="subscribe">
            <img src="@/assets/img/subscribe.png">
            <span>收藏({{ Count( data.subscribedCount) }})</span>
          </div>
          <div class="share-count">
            <img src="@/assets/img/share-count.png"> 
            <span>分享({{ Count( data.shareCount) }})</span>
          </div>
        </div>

        <div class="count">
          <p class="count-label">标签：
            <span v-for="item in data.tags">   {{ item }}</span>
          </p>

          <p>
            <span>歌曲：{{ Count(data.trackCount) }}</span>
            <span class="count-playCount">播放：{{ Count(data.playCount) }}</span>
          </p>
          <div class="count-introduction">
            <input type="checkbox" class="dianji">
            <p>简介：{{ data.description }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { formatDate } from "@/common/utils.js";

  export default {
    props:{
      data:{
        type:Object
      }
    },
    methods:{
      Count(playCount){
        if(playCount / 10000 < 1){
          return playCount
        }else{
          const wan = playCount /  10000  
          return Math.floor(wan)+ "万";
        }
      }
    },
    filters:{
      showDate(value){
        const date = new Date(value);
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
  }
</script>

<style scoped>
.cover{
  /* position: absolute;
  top: 20px;
  left: 20px; */
  width: 206px;
  height: 206px;

  float: left;
  display: inline;
  margin-right: 19px;
}
.cover-img-url{
  width: 206px;
  height: 206px;
  border-radius: 5px;
}
.detailed{
  font-size: 12px;
}

.title{
  display: flex;
  height: 30px;
  align-items: center;
}

.label{
  height: 21px;
  width: 36px;
  line-height: 21px;
  border: 1px solid #da4f49;
  border-radius: 2px;
  text-align: center;
  color: #da4f49;
  font-size: 12px;
}

.play-name{
  font-size: 21px;
  font-family: 黑体;
}

.avatar{
  margin-top: 11px;
  height: 25px;
}
.avatar span{
  line-height: 25px;
  vertical-align: top;
  margin-left: 8px;
}
.avatar .nickname{
  color: #5a7cab;
}
.avatar-url{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.avatar-url:hover{
  cursor:pointer;
}

.nickname:hover{
  cursor:pointer;
  color: #2757aa;
}

.btn {
  height: 32px;
  margin-top: 13px;
  font-size: 14px;
}

.btn div{
  float: left;
  height: 32px;
  border-radius: 32px;
  line-height: 32px;
  text-align: center;
  margin-right: 10px;
  padding: 0 14px 0 14px;
}
.btn span{
  line-height: 32px;
  vertical-align: top;
  margin-left: 5px;
}
.btn div img{
  margin-top: 8px;
}

.btn .play-all{
  background-color: #da4f49;
  color: #ffffff;
}
.btn .play-all:hover{
  background-color: #bd413a;
  cursor:pointer;
}

.share-count:hover{
  background-color: #f2f2f2;
  cursor:pointer;
}
.subscribe:hover{
  background-color: #f2f2f2;
  cursor:pointer;
}

.subscribe,.share-count{
  border: 1px solid #d9d9d9;
}

.count{
  margin-top: 30px;
}

.count p{
  margin-top: 14px;
}
.count-playCount{
  margin-left: 10px;
}

.count-introduction{
  white-space: pre-line;
  display: flex;
  position: relative;
}

.dianji{
  position: absolute;
  right: 20px;
}
.count-introduction p{
  height: 13px;
  width: 660px;
  overflow: hidden;
}

input:checked~p{
  height: 100%;
  overflow: visible;
}
</style>