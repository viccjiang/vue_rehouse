<template>
  <Loading :active="isLoading" loader="bars" color="#236F6B" />
  <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <img
      class="filters"
      style="
        height: 200px;
        background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2022vue3/1649504794919.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P7ZQzGOmIGRWYHTLMOccH8wOnkjWVkWo88ElP7olmyQ2THPdx0XefrZtZbkpMH%2B8c%2B7q61Lgp8YDRIQHmoRhdpIizdTXlLdk4Y2Lkr5QAfQViQHZQHQpQkocSSsO8q%2BZY5X5S6IF2xTid9kRtRmp7ZNR%2BeVRhEfbqTVhAlB%2FGwY8qU3tYwxotUoL9SF9hogTdgECCzrTtza7oonnnMjJ1yU0f5f8mvUWV4NjhVDRQLRy1Fii4HAV1b%2BHKQF29ZBVNgKb7NFg9%2FiUhxHBzKN1o4n3AntfL1mYvCnDMxC03rUZw3clcMxSwc8RHIKComeu2PBfpFCA%2BYljJpXtoiokxw%3D%3D);
        background-size: cover;
        background-position: center bottom;
        background-attachment: fixed;
      "
    />
    <div
      class="
        card-img-overlay
        d-flex
        flex-column
        justify-content-center
        align-item-center
      "
    >
      <h1 class="card-title text-center fw-bold">願望清單</h1>
    </div>
  </div>
  <div class="container mt-0 mt-md-10 mb-0 mb-md-10">
    <div
      class="
        g-4
        row row-cols-1 row-cols-md-2 row-cols-lg-3
        flex-column
        justify-content-center
        flex-md-row
      "
    >
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        v-if="favorites.length === 0"
      >
        <h3 class="text-center mb-2 pb-3">目前沒有收藏任何商品</h3>
        <RouterLink to="/products" class="btn btn-soft mb-5 mb-md-0">
          <i class="bi bi-bag"></i> 來去收藏喜歡的商品
        </RouterLink>
      </div>
      <template v-else>
        <div class="col" v-for="item in favorites" :key="item.id">
          <div class="card h-100 rounded-0 position-relative">
            <a
              href="#"
              @click.prevent="addMyFavorite(item)"
              :class="{ active: myFavorite.includes(item.id) }"
              class="link-secondary d-block rounded-0"
            >
              <i
                v-if="myFavorite.includes(item.id)"
                style="z-index: 1"
                class="
                  fs-4
                  bi-suit-heart-fill
                  position-absolute
                  top-0
                  end-0
                  me-2
                  mt-1
                  text-danger
                "
              ></i>
              <i
                v-else
                style="z-index: 1"
                class="
                  fs-4
                  bi bi-suit-heart
                  position-absolute
                  top-0
                  end-0
                  me-2
                  mt-1
                  text-white
                "
              ></i>
            </a>
            <a
              href="#"
              class="img-card rounded-0"
              @click.prevent="getProduct(item.id)"
            >
              <div
                class="card-imageUrl rounded-0"
                style="
                  height: 300px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </a>
            <div class="card-body">
              <p class="badge bg-soft text-center text-light">
                {{ item.category }}
              </p>
              <h5 class="card-title mb-3">{{ item.title }}</h5>
              <div
                class="
                  mb-3
                  d-flex
                  flex-column
                  justify-content-end
                  align-items-start
                "
              >
                <div class="h5 list-inline-item" v-if="!item.price">
                  {{ item.origin_price }} 元
                </div>
                <del
                  class="fs-7 list-inline-item text-secondary"
                  v-if="item.price"
                  >原價 NT$
                  {{ $filters.currency(item.origin_price) }} 元</del
                >
                <div class="fs-6 text-danger fw-bold" v-if="item.price">
                  NT$ {{ $filters.currency(item.price) }} 元
                </div>
              </div>
              <div class="d-grid d-md-flex justify-content-md-between">
                <button
                  class="btn btn-outline-secondary rounded-0 border w-100"
                  type="button"
                  @click="getProduct(item.id)"
                >
                  查看更多
                </button>
                <button
                  class="btn btn-soft text-light rounded-0 border-0 w-100"
                  type="button"
                  :disabled="this.status.loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  <div
                    v-if="this.status.loadingItem === item.id"
                    class="spinner-border text-light spinner-border-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <RecommendSwiper></RecommendSwiper>
</template>

<script>
import emitter from '@/methods/emitter';
import RecommendSwiper from '@/components/RecommendSwiper.vue';
import storageMethods from '../methods/storageMethods';

export default {
  data() {
    return {
      products: [], // getProducts
      product: {},
      pagination: {},
      status: {
        loadingItem: '', // 對應品項 id
      },
      categories: [], // 產品的分類項目
      selectCategory: '', // 選取分類項目按鈕後，selectCategory = item，用 computed 做切換
      myFavorite: storageMethods.get() || [], // 我的最愛，有品項的話就用 storageMethods.get() 取到內容，沒有的話就傳空陣列
      favorites: [],
    };
  },
  components: {
    RecommendSwiper,
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
          this.getFavorites();
        }
      });
    },
    getFavorites() {
      this.favorites = []; // 先給我的最愛空陣列
      const favoriteIdArr = JSON.parse(localStorage.getItem('hexFavorite')) || []; // 把 hexFavorite 欄位從 localStorage 取出時會是字串，所以要再用 JSON.parse 轉為物件
      // 加到 favorites 陣列裡
      for (let i = 0; i < this.products.length; i += 1) {
        for (let k = 0; k < favoriteIdArr.length; k += 1) {
          if (this.products[i].id === favoriteIdArr[k]) {
            this.favorites.push(this.products[i]);
          }
        }
      }
    },
    addMyFavorite(item) {
      // this.myFavorite.push(item.id);
      // this.myFavorite.includes(item.id) 原本是寫 item.id 存 id 就好，但後面要做其他事情可以先存整個物件
      if (this.myFavorite.includes(item.id)) {
        // 這裡意思是 如果我的最愛已經有這個品項，再按一次就代表取消
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        this.getFavorites();
        this.getProducts();
        // emitter.emit('update-favorite'); // 更新最愛數量
      } else {
        this.myFavorite.push(item.id); // 否則沒有此品項 就把品項加入
        // emitter.emit('update-favorite'); // 更新最愛數量
      }
      // storageMethods.save(this.myFavorite); // 儲存狀態
      // emitter.emit('update-favorite'); // 更新最愛數量
    },
    getCategories() {
      // Vue 3 雙向綁定 Proxy(new Proxy 物件)
      // new Set
      // 這裡 Set 的 categories 屬於類陣列
      const categories = new Set(); // 建在全新的空的物件上
      this.products.forEach((item) => {
        categories.add(item.category); // 把品項加入 categories
      });
      this.categories = [...categories]; // 這裡要轉成純陣列的形式存回去  所以這裡要轉為 Proxy 的 categories
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then(() => {
        this.status.loadingItem = '';
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
  },
  watch: {
    // 監聽特定值
    myFavorite: {
      // 深層監聽
      handler() {
        storageMethods.save(this.myFavorite); // 把資料儲存
        emitter.emit('update-favorite'); // 更新最愛數量
      },
      deep: true,
    },
  },
  computed: {
    // 產生新的資料集 (裡面的值產生變化之後，資料重新運算)
    filterProducts() {
      return this.products.filter((item) => item.category.match(this.selectCategory));
      // 如果選到的產品品項是一樣的就呈現
      // 監聽 this.products  this.selectCategory
      // 空字串，或任何符合結果都會是 “真值”
    },
  },
  created() {
    // 改為 mounted
    this.getProducts();
  },
};
</script>

<style lang="scss">
  .img-card {
    width: 100%;
    overflow: hidden;
  }
  .card-imageUrl {
    overflow: hidden;
  }
  .card-imageUrl:hover {
    transform: scale(1.2);
    transition: 0.5s;
    height: 300px;
  }
</style>
