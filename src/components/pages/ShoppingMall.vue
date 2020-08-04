<template>
  <div>
    <div class="search-bar">
      <img :src="locationIcon" class="location-icon" />
      <van-search placeholder="请输入搜索关键词" class="search-input" />
      <van-button type="default" size="small">查找</van-button>
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
    <div class="banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOptions">
          <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import floorComponent from "../component/floorComponent";
import { toMoney } from "@/filter/moneyFilter.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
    floorComponent,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [],
      category: [],
      adBanner: {},
      recommendGoods: [],
      swiperOptions: {
        slidesPerView: 3,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
    };
  },
  created() {
    axios({
      url: "/api/data.json",
      method: "get",
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.data);
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture; //获得广告图片
          this.bannerPicArray = response.data.data.slides; //轮播图片
          this.recommendGoods = response.data.data.recommend; //推荐商品
          this.floorName = response.data.data.floorName;
          this.floor1 = response.data.data.floor1; //楼层1数据
          this.floor2 = response.data.data.floor2; //楼层2数据
          this.floor3 = response.data.data.floor3; //楼层3数据
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  background-color: yellow;
  padding: 0 0.3rem 0;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-input.van-search {
    padding: 0;
    width: 15rem;
  }
  .location-icon {
    max-height: 1.3rem;
  }
}
.swiper-area {
  width: 20rem;
  height: 9.1rem;
  clear: both;
  .van-swipe {
    height: 100%;
  }
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    padding: 0.3rem;
    font-size: 12px;
    text-align: center;
    img {
      width: 100%;
    }
  }
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: #e5017d;
  }
  .recommend-body {
    border-bottom: 1px solid #eee;
    .recommend-item {
      width: 99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>