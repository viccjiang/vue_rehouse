<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
      <router-link class="navbar-brand brandlogo" to="/"
        ><span class="brandlogos">re.</span>HOUSE
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="flex justify-content-end collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul
          class="
            navbar-nav
            d-flex
            align-items-center
            justify-content-center
            mb-2 mb-lg-0
          "
        >
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq">常見問題</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">聯絡我們</router-link>
          </li>
        </ul>
        <ul
          class="navbar-nav d-flex align-items-center flex-column flex-lg-row"
        >
          <li>
            <!-- favorite -->
            <router-link
              class="nav-link fs-5 position-relative text-secondary"
              to="/favorite"
            >
              <i class="bi bi-heart"></i>
              <div
                class="
                  badge
                  rounded-pill
                  bg-danger
                  text-light
                  position-absolute
                  top-0
                  start-50
                "
                style="font-size: 10px"
                v-if="favoriteNum != 0"
              >
                <!-- 購物車品項數量 (不重複) -->
                <!-- {{ cartData.carts.length }} -->
                <!-- 購物車品項數量總數 (重複) -->
                {{ favoriteNum }}
              </div>
            </router-link>
          </li>
          <li>
            <!-- <router-link class="nav-link fs-5 position-relative" to="/cart"> -->
            <a
              href="#"
              class="nav-link fs-5 position-relative"
              data-bs-scroll="true"
              @click.prevent="showOffcanvas"
            >
              <i class="bi bi-bag text-secondary"></i>
              <div
                class="
                  badge
                  rounded-pill
                  bg-danger
                  text-light
                  position-absolute
                  top-0
                  start-50
                "
                style="font-size: 10px"
                v-if="cartsLength != 0"
              >
                <!-- 購物車品項數量 (不重複) -->
                <!-- {{ cartData.carts.length }} -->
                <!-- 購物車品項數量總數 (重複) -->
                {{ cartsLength }}
              </div>
            </a>
            <!-- </router-link> -->
          </li>
          <li>
            <router-link
              class="nav-link fs-5 text-secondary"
              to="/dashboard/products"
            >
              <i class="bi bi-person-circle"></i
            ></router-link>
          </li>
        </ul>
      </div>
      <!-- <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-danger">{{ cartData.carts.length }}</span>
      </button> -->
    </div>
  </nav>
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    ref="offcanvas"
    style="overflow: auto"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="bg-soft offcanvas-header text-white">
      <h5 id="offcanvasRightLabel " class="text-center m-0">購物車</h5>
      <button
        type="button"
        class="btn-close btn-close-white text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div v-if="cartData.carts.length > 0">
      <div class="offcanvas-body d-flex flex-column justify-content-between">
        <div class="container">
          <div
            class="row border-bottom mb-3 d-flex"
            v-for="item in cartData.carts"
            :key="item.id"
          >
            <div class="d-flex">
              <!-- offcanvas 刪除單一品項 -->
              <div
                class="col-2 d-flex align-items-center justify-content-center"
              >
                <p
                  type=""
                  class="btn btn-sm text-secondary text-start m-0"
                  :disabled="loadingItem === item.id"
                  @click="removeCartItem(item.id)"
                >
                  <i class="bi bi-trash3"></i>
                </p>
              </div>
              <!-- 連到細節頁面 -->
              <a
                href="#"
                @click.prevent="getProduct(item.product_id)"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  link-soft
                "
              >
                <div
                  class="col-2 mb-2"
                  style="
                    height: 50px;
                    width: 50px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
                >
                  <!-- {{item.product.imageUrl}} -->
                </div>
                <div class="col fs-6 fw-bold">
                  <!-- <router-link :to="`/product/${item.product_id}`">GO</router-link> -->
                  <!-- <a href="#" @click.prevent="getProduct(item.product_id)">GO</a> -->
                  {{ item.product.title }}
                </div>
              </a>
            </div>
            <div class="border-top d-flex justify-content-center bg-light">
              <div class="col d-flex flex-column ms-auto">
                <div
                  class="
                    price
                    d-flex
                    justify-content-md-between
                    flex-column flex-nowrap flex-md-row
                  "
                >
                  <!-- 數量 -->
                  <div
                    class="
                      input-group
                      product-num-group
                      bg-light
                      mt-1
                      mb-4
                      my-md-0
                    "
                  >
                    <!-- 減 -->
                    <div class="">
                      <button
                        :disabled="item.qty <= 1 || loadingItem === item.id"
                        @click="updateCart(item, item.qty--)"
                        class="btn border-0 bg-light"
                        type="button"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                    </div>
                    <!-- 數量 -->
                    <input
                      type="text"
                      class="
                        form-control
                        border-0
                        text-center
                        my-auto
                        shadow-none
                        bg-light
                        border
                      "
                      aria-describedby="button-addon1"
                      v-model.lazy="item.qty"
                    />
                    <!-- 加 -->
                    <div class="">
                      <button
                        :disabled="loadingItem === item.id"
                        @click="updateCart(item, item.qty++)"
                        class="btn border-0"
                        type="button"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  col
                  d-flex
                  flex-column
                  ms-auto
                  text-end
                  fs-7
                  text-secondary
                  align-items-end
                  justify-content-center
                "
              >
                ${{ $filters.currency(item.final_total) }}
              </div>
            </div>
          </div>
        </div>
        <p class="text-center m-0 fs-6 text-danger mb-3">
          總計 $ {{ $filters.currency(cartData.final_total) }} 元
        </p>
        <router-link
          class="
            btn btn-soft
            text-center
            mt-auto
            nav-link
            text-white
            p-3
            d-grid
            rounded-0
          "
          to="/cart"
          @click="hideOffcanvas"
          >結帳去</router-link
        >
        <!-- {{ cartData.carts }} -->
      </div>
    </div>
    <div
      v-else
      class="
        offcanvas-body
        d-flex
        flex-column
        align-items-center
        justify-content-center
      "
    >
      <div
        class="
          text-center
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
      >
        <p class="m-0">你的購物車沒有商品</p>
        <div class="d-flex align-items-center justify-content-center">
          <router-link to="/"
            ><button type="button" class="btn btn-outline-secondary m-2">
              回首頁
            </button></router-link
          >
          <router-link to="/products"
            ><button type="button" class="btn btn-outline-secondary">
              購物去
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      products: [],
      product: {},
      loadingItem: '',
      cartData: {
        carts: [],
      },
      cartsLength: 0,
      favoriteNum: 0,
      offcanvas: {},
    };
  },
  // 監聽 $router (連到細節頁面)
  // 使用 vue中的$this.router.push()方法，如果只是傳入的參數不同，url地址會發生變化，但是頁面不會重新請求數據，需要刷新頁面才能加載新數據。
  // 解決辦法是 監聽 $router
  watch: {
    $route() {
      window.location.reload(); // 其中 this.$router.go(0) 为刷新页面 但是不支援 iOS 系統
    },
  },
  methods: {
    getProduct(id) {
      console.log(id);
      this.$router.push(`/product/${id}`);
    },
    updateCartNum() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        // 清單合併成一個加總數目的品項
        this.cartsLength = res.data.data.carts.length; // 購物車 icon 判斷
        // 清單未合併，icon上的總數是依照加總的總數
        // if (res.data.success) {
        //   let totalQty = 0;
        //   this.cartsLength = res.data.data.carts.forEach((item) => {
        //     // console.log(item);
        //     totalQty += item.qty;
        //   });
        //   this.cartsLength = totalQty;
        //   // console.log('購物車總數,', this.cartsLength);
        // } else {
        //   console.log('購物車資料異常');
        // }
      });
    },
    // 更新購物車
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.loadingItem = '';
        this.getCarts();
        this.isLoading = false;
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
    getCarts() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          // console.log('購物車:', res);
          this.cartData = res.data.data;
        });
    },
    // 刪除購物車品項
    removeCartItem(id) {
      this.loadingItem = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項');
        this.loadingItem = '';
        this.getCarts();
        this.isLoading = false;
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
    // 刪除全部購物車品項
    removeCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除全部購物車品項');
        this.getCarts();
        this.isLoading = false;
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
    // getCart() {
    //   this.$http
    //     .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
    //     .then((res) => {
    //       console.log('Navbar icon 目前購物車:', res);
    //       this.cartData = res.data.data;
    //     });
    // },
    updateFavoriteNum() {
      const arr = JSON.parse(localStorage.getItem('hexFavorite'));
      this.favoriteNum = arr ? arr.length : 0;
      // console.log('目前我的最愛數量:', this.favoriteNum);
    },
    showOffcanvas() {
      this.offcanvas.show();
    },
    hideOffcanvas() {
      this.offcanvas.hide();
    },
  },
  mounted() {
    // // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是hashchange事件
    // window.addEventListener('hashchange', () => {
    //   const currentPath = window.location.hash.slice(1);
    //   if (this.$route.path !== currentPath) {
    //     this.$router.push(currentPath);
    //   }
    // }, false);
    // const { id } = this.$route.params;
    // console.log(id);
    this.getCarts();
    this.updateCartNum();
    emitter.on('update-cart', () => {
      this.updateCartNum();
      this.getCarts();
    });
    this.updateFavoriteNum();
    emitter.on('update-favorite', () => {
      this.updateFavoriteNum();
    });
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400;0,600;0,700;1,500;1,600&display=swap');

.brandlogo {
  font-family: "Expletus Sans", cursive;
  font-weight: Bold;
  font-size: 42px;
}

.brandlogos {
  font-family: "Expletus Sans", cursive;
  font-weight: 400;
  font-size: 30px;
  font-style: italic;
}
a:link {
  text-decoration: none;
}
</style>
