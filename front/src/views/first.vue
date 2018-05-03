<template>
  <section>
    <el-carousel :interval="2000" type="card" height="300px">
      <el-carousel-item v-for="(item, index) in value" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="10" class="row_list">
      <el-col :span="8">
        <ordertype id="bin0_data" type="areatype"></ordertype>
      </el-col>
       <el-col :span="8">
        <ordertype id="bin1_data" type="ordertype"></ordertype>
      </el-col>
      <el-col :span="8">
        <ordertype id="bin2_data" type="onetype"></ordertype>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import ordertype from "@/components/orderType.vue";
export default {
  components: {
    ordertype
  },
  data() {
    return {
      value: [
        {
          img: "../../static/image/1.jpeg"
        },
        {
          img: "../../static/image/2.png"
        },
        {
          img: "../../static/image/3.jpg"
        },
        {
          img: "../../static/image/4.jpg"
        },
        {
          img: "../../static/image/5.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.el-carousel {
  margin-top: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>