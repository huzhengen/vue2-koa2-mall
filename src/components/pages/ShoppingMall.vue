<template>
  <div>
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="2">
          <img :src="locationIcon" class="location-icon" />
        </van-col>
        <van-col span="18">
          <!-- <input type="text" class="search-input" /> -->
          <van-search placeholder="请输入搜索关键词" class="search-input" />
        </van-col>
        <van-col span="4">
          <van-button type="default" size="small">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" />
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [],
      category: [],
      adBanner: {}
    };
  },
  created() {
    axios({
      url: "/api/data.json",
      method: "get"
    })
      .then(response => {
        console.log(response);
        console.log(response.data.data);
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture; //获得广告图片
          this.bannerPicArray = response.data.data.slides; //轮播图片
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.search-bar {
  background: yellow;
  padding: 0 0.5rem 0;
  height: 2rem;
}
.search-bar .van-col {
  height: 2rem;
  display: flex;
  align-items: center;
}
.search-input.van-search {
  padding: 0;
  width: 100%;
}
.location-icon {
  max-height: 1.3rem;
}
.swiper-area {
  width: 20rem;
  height: 9.1rem;
  clear: both;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.type-bar div img {
  width: 100%;
}
</style>