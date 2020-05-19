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
          <img v-lazy="banner.imageUrl" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [
        {
          imageUrl:
            "https://gw.alicdn.com/imgextra/i2/134/O1CN01QaamV51CrPfrtnutB_!!134-0-lubanu.jpg"
        },
        {
          imageUrl:
            "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"
        },
        {
          imageUrl:
            "https://img.alicdn.com/imgextra/i3/190/O1CN01DnjRIs1DH3qvnfHGg_!!190-0-luban.jpg"
        }
      ]
    };
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
  clear: both;
}
</style>