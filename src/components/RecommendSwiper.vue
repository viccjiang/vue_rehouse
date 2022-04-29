<template>
  <Loading :active="isLoading" />
  <div class="container mb-5">
    <h3 class="text-center">WE RECOMMEND</h3>
    <h4 class="text-center mb-5 border-bottom pb-3">推薦商品</h4>
    <swiper
      class="swiper-container"
      :loop="true"
      :autoplay="autoplay"
      :breakpoints="breakpoints"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="modules"
    >
      <swiper-slide
        class="card border-0"
        v-for="item in randomSelects"
        :key="item.id"
      >
        <div
          class="position-relative"
          style="
            height: 300px;
            background-position: center center;
            background-size: cover;
          "
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        >
          <div class="box bg-danger text-white position-absolute">
            <p class="m-0">推薦</p>
          </div>
        </div>
        <div class="card-body">
          <h5
            class="btn card-title stretched-link p-0"
            @click="goRecommendPage(item.id)"
          >
            {{ item.title }}
          </h5>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css';

import emitter from '../methods/emitter';

// 相同產品取得隨機數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  data() {
    return {
      product: {},
      products: [], // 取得所有產品資料 存起來
      id: '',
      isLoading: false,
      randomSelects: [],
      qty: 1, // 畫面上的輸入欄位顯示的預設值
      // swiper rwd
      breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      },
      autoplay: {
        disableOnInteraction: false, // 使用者操作swiper之後，是否禁止autoplay
        delay: 3000, // 自動切換的時間間隔（單位ms）
      },
      modules: [Autoplay, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProduct() {
      // $route 物件取值
      // $router 方法
      const { id } = this.$route.params; // 這裡要用解構 airbnb 規則
      this.isLoading = true;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product; // 賦值
          this.getProducts(); // 先取得單一產品資訊，再取得所有產品資訊
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.getLookLike();
      });
    },
    // 前往可能會喜歡頁面
    goRecommendPage(id) {
      this.$router.push(`/product/${id}`);
      // this.getLookLike();
      this.isLoading = true;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product; // 賦值
          this.randomProducts = []; // 轉到新頁面要先清空原本的
          this.getLookLike();
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    getLookLike() {
      const maxSize = this.products.length < 5 ? this.products.length : 5;
      // 先新增一個類陣列，所以陣列的方法基本上不太能用
      const arrSet = new Set([]); // arrSet.size 是類陣列長度
      getRandomInt();
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        // arrSet.size 不能寫死數字
        const num = getRandomInt(this.products.length); // 取得品項隨機數字
        arrSet.add(num);
      }
      arrSet.forEach((index) => {
        this.randomSelects.push(this.products[index]);
      });
    },
    addCart() {
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: this.qty,
      };
      this.isLoading = true;
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, '加入購物車');
          emitter.emit('update-cart'); // 更新購物車數量
        })
        .catch((error) => {
          this.isLoading = false;
          this.$httpMessageState(error.response, '加入購物車');
        });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    updateCartItem(item) {
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then(() => {
          this.getCart();
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProducts();
  },
};
</script>

<style lang='scss' >
  .box {
    font-size: 16px;
    width: 60px;
    height: auto;
    left: 0px;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }
  .swiper-container {
    --swiper-navigation-color: #fff;
    --swiper-navigation-size: 40px; /* 设置按钮大小 */
  }
  .swiper-img {
    filter: brightness(1);
    overflow: hidden;
  }
  .swiper-img:hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }
  .hover-view {
    filter: brightness(0.8);
    transition: 0.5s;
  }
  .hover-view:hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }
</style>
