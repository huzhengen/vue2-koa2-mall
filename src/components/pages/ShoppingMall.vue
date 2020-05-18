<template>
  <div class="search-bar">
    <van-row gutter="5">
      <van-col span="2">
        <img :src="locationIcon" class="location-icon" />
      </van-col>
      <van-col span="19">
        <input type="text" class="search-input" />
      </van-col>
      <van-col span="3">
        <van-button type="default" size="mini">查找</van-button>
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
.search-input {
  width: 100%;
  height: 1rem;
  font-size: 0.8rem;
  border: none;
  color: #000;
}
.location-icon {
  max-height: 1.4rem;
}
</style>