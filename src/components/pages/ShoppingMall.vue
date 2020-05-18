<template>
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
</template>

<script>
export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png")
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
</style>