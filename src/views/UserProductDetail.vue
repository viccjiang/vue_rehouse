<template>
  <Loading :active="isLoading" loader="bars" color="#236F6B" />
  <div class="container mt-3 mt-md-5">
    <div class="row align-items-center">
      <div class="col-md-7">
        <!-- 圖片開始 -->
        <img
          class="rounded-2 w-100"
          :src="productImg"
          :alt="product.title"
          style="
            height: 400px;
            background-size: cover;
            background-position: center center;
            object-fit: cover;
          "
        />
        <div
          class="
            col-12
            mt-3
            d-flex
            align-items-center
            justify-content-between
            flex-nowrap
            py-1
          "
        >
          <div
            class="
              row
              flex-nowrap
              m-0
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <!-- <div class="col-2" :style="{ backgroundImage: `url(${product.imageUrl})`}"> -->
            <div class="col-2">
              <img
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center center;
                  object-fit: cover;
                "
                class="w-100 p-0 rounded"
                :src="product.imageUrl"
                alt="產品"
                @click="changeImg(product.imageUrl)"
              />
            </div>
            <div
              class="col-2"
              v-for="(img, key) in product.imagesUrl"
              :key="`圖_${key}`"
            >
              <img
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center center;
                  object-fit: cover;
                "
                class="w-100 p-0 rounded"
                :src="img"
                :alt="`圖_${key}`"
                @click="changeImg(img)"
              />
            </div>
          </div>
        </div>
        <!-- 圖片結束 -->
      </div>
      <!-- <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" style="
            height: 500px;
            background-position: center center;
            background-size: cover;
            object-fit:cover;
          " alt="..." />
            </div>
          </div>
        </div> -->
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3 fs-6">
            <li class="breadcrumb-item">
              <!-- <a class="text-muted" href="./index.html">Home</a> -->
              <router-link to="/" class="link-soft">回首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <!-- <a class="text-muted" href="./product.html">Product</a> -->
              <router-link to="/products" class="link-soft"
                >產品列表</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">產品細節</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mt-5 mb-0 text-muted text-start">
          <del>NT${{ $filters.currency(product.origin_price) }}</del>
        </p>
        <p class="h5 fw-bold text-start text-soft">
          NT${{ $filters.currency(product.price) }}
        </p>
        <div class="row align-items-center">
          <div>
            <div class="input-group mb-3">
              <!-- <input
                type="number"
                class="form-control"
                min="1"
                v-model.number="qty"
              /> -->
              <select id="" class="form-select" v-model.number="qty">
                <option
                  :value="num"
                  v-for="num in 20"
                  :key="`${num}${product.id}`"
                >
                  {{ num }}
                </option>
              </select>
              <button
                type="button"
                class="btn btn-soft border-0"
                @click="addCart(product)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <ul class="list-unstyled">
          <li>
            本商品為「訂製款」。付款後，從開始製作到寄出商品為 15
            個工作天。（不包含假日）
          </li>
        </ul>
        <hr />
        <ul class="list-unstyled text-danger">
          <li>此商品可領取折扣碼</li>
          <li>實際優惠折抵以購物車內的金額為準</li>
        </ul>
        <hr />
        <div
          class="text-secondary d-flex justify-content-end align-items-center"
        >
          <span class="me-3">分享</span>
          <a href="https://github.com/viccjiang/vue_rehouse" class="link-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-facebook me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a href="https://github.com/viccjiang/vue_rehouse" class="link-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-instagram me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </a>
          <a href="https://github.com/viccjiang/vue_rehouse" class="link-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- <swiper :slides-per-view="1" :space-between="50">
      <swiper-slide v-for="(item, key)  in product.imagesUrl" :key="item.id">
        <div
          style="
            height: 300px;
            background-position: center center;
            background-size: cover;
          "
          :style="{ backgroundImage: `url(${product.imagesUrl[key]})` }"
        ></div>
      </swiper-slide>
   </swiper> -->
  </div>
  <div class="container">
    <div class="row mt-5 mb-5">
      <!-- Nav tabs -->
      <div class="col">
        <ul
          class="nav nav-pills mb-3 border p-3 category-bar rounded"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link link-soft active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              產品細節
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link link-soft"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              規格說明
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link link-soft"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              運送方式
            </button>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <!-- 產品 -->
          <div
            class="tab-pane active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div
              class="
                row
                g-1
                row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4
                my-5
              "
            >
              <!-- <div class="col-md-4">
                <p>
                  {{ product.category }}
                </p>
              </div>
              <div class="col-md-3">
                <p class="text-muted">
                  {{ product.description }}
                </p>
              </div> -->
              <div
                class="col"
                v-for="(image, id) in product.imagesUrl"
                :key="id"
              >
                <div>
                  <img
                    style="
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                      object-fit: cover;
                    "
                    v-if="image"
                    :src="image"
                    :alt="product.title"
                    class="images img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- 規格 -->
          <div
            class="tab-pane"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading1">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse1"
                  aria-expanded="false"
                  aria-controls="flush-collapse1"
                >
                  分類
                </button>
              </h2>
              <div
                id="flush-collapse1"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-heading1"
              >
                <div class="accordion-body">{{ product.category }}</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading2">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse2"
                  aria-expanded="false"
                  aria-controls="flush-collapse2"
                >
                  產品說明
                </button>
              </h2>
              <div
                id="flush-collapse2"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-heading2"
              >
                <div class="accordion-body">
                  {{ product.description }}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading3">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse3"
                  aria-expanded="false"
                  aria-controls="flush-collapse3"
                >
                  規格說明
                </button>
              </h2>
              <div
                id="flush-collapse3"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-heading3"
              >
                <div class="accordion-body">{{ product.content }}</div>
              </div>
            </div>
          </div>
          <!-- 運送 -->
          <div
            class="tab-pane"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <div>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      運送方式
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                  >
                    <div class="accordion-body">
                      帳款確認後將儘快處理您的訂單。
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      配送方式
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingTwo"
                  >
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>宅配</li>
                        <li>
                          統一速達(黑貓宅急便)/順豐快遞，
                          出貨時間：週一～週五(不含週六日及國定例假日)
                        </li>
                        <li>超商取貨付款：7-11/全家</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      出貨時間
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingThree"
                  >
                    <div class="accordion-body">
                      出貨時間：週一～週五(不含週六日及國定例假日)
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading4">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse4"
                      aria-expanded="false"
                      aria-controls="flush-collapse4"
                    >
                      運費說明
                    </button>
                  </h2>
                  <div
                    id="flush-collapse4"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-heading4"
                  >
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>超商取貨付款：每筆訂單為新台幣 65元運費。</li>
                        <li>宅配到府：台灣本島每筆訂單為新台幣 80 元運費。</li>
                        <li>
                          為長期回饋會員，單筆商品訂購金額滿 1,000
                          元以上，享免運費優惠。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading5">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse5"
                      aria-expanded="false"
                      aria-controls="flush-collapse5"
                    >
                      其他事項
                    </button>
                  </h2>
                  <div
                    id="flush-collapse5"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-heading5"
                  >
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>到貨當日，請務必確認有人可以收貨。</li>
                        <li>
                          客人希望的配送時段都會備註在宅配單上，
                          可是會因為宅配站所每日配送的貨物多寡，以及送貨路線等因素，都會影響到配送到達的時間！
                        </li>
                        <li>配送範圍限台灣本島各縣市(不含郵政信箱)。</li>
                        <li>
                          如本店無法接受您的訂單，將於收到您的訂單後二個工作日內通知您。但法令另有規定者除外。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <p class="fs-3 fw-bold py-2 text-dark text-start border-bottom">
      你可能也會喜歡
    </p>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div v-for="item in randomProducts" :key="item" class="col">
        <div class="card h-100 rounded-0">
          <img
            style="
              height: 200px;
              background-size: cover;
              background-position: center;
              object-fit: cover;
            "
            :src="item.imageUrl"
            class="card-img-top border-0 rounded-0"
            alt="推薦"
          />
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ item.title }}</h5>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <a
              href=""
              class="btn btn-soft stretched-link d-flex flex-column text-center"
              @click.prevent="goProductPage(item.id)"
              >查看更多</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <ul>
      <li v-for="item in randomProducts" :key="item">
        {{ item.title }}
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
// import 'swiper/swiper.scss'; // core Swiper
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
      productImg: '',
      id: '',
      isLoading: false,
      randomProducts: [],
      qty: 1, // 畫面上的輸入欄位顯示的預設值
    };
  },
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
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
          this.productImg = this.product.imageUrl;
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
    goProductPage(id) {
      this.$router.push(`/product/${id}`);
      // this.getLookLike();
      this.isLoading = true;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          // this.isLoading = false;
          this.product = res.data.product; // 賦值
          this.randomProducts = []; // 轉到新頁面要先清空原本的
          this.productImg = this.product.imageUrl;
          this.isLoading = false;
          this.getLookLike();
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    getLookLike() {
      const { category } = this.product;
      const filterProducts = this.products.filter((item) => item.category === category); // 取得相同品項
      const maxSize = filterProducts.length < 4 ? filterProducts.length : 4;
      // 先新增一個類陣列，所以陣列的方法基本上不太能用
      const arrSet = new Set([]);
      getRandomInt();
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        // arrSet.size 不能寫死數字
        const num = getRandomInt(filterProducts.length); // 取得品項隨機數字
        arrSet.add(num);
      }
      arrSet.forEach((index) => {
        this.randomProducts.push(filterProducts[index]);
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
        .then(() => {
          this.isLoading = false;
          // this.$httpMessageState(res, '加入購物車');
          this.showAlert();
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
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        position: 'center',
        icon: 'success',
        title: '已加入購物車',
        showConfirmButton: false,
        timer: 2000,
        iconColor: '#236F6B',
      });
    },
    changeImg(img) {
      this.productImg = img;
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
