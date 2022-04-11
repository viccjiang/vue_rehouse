<template>
  <Loading :active="isLoading" loader="bars" color="#236F6B"></Loading>
  <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <div
      class="filters"
      style="
        height: 200px;
        background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2022vue3/1649505629963.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iMovXhthEqJHw8as4m15lUYfgKoD94dcYfYD%2FV0L9c0c1uPxSTt0FXk0khsjkchc20uRkDt6zRjuKemZDbcLr8BfAVa357iohNEmWLw6h5nyRtEzoQmpJ1SczedGDWAUyo%2Brk25XaHULKbl3r3IMI1%2FIZzUNbEfIxQPxanNn5FpdqUZ7QUITpED5%2FgP8d7Jslp%2BxXhOi1DP6mPD4bAgLDMFC%2FZovSbuZE8LJUItZxRUO8c4fGa8lX78ujRA%2BqadZ5zkQlIZgSC6Ohk4u%2FRtgShj8gd69Kh2mv22BB25eLXwT1BYz65VHw92z5K7pLsqCClFKT5UnkGX%2F9uB9AjXS1w%3D%3D);
        background-size: cover;
        background-position: center bottom;
        background-attachment: fixed;
      "
    />
      <div class="card-img-overlay d-flex flex-column justify-content-center align-item-center">
        <h1 class="card-title text-center fw-bold">常見問題</h1>
      </div>
  </div>
  <div class="container mt-0 mt-md-3">
    <div class="row flex-column flex-md-row ">
      <!-- 分類欄 -->
      <div class="subNav sticky-top col-12 mt-4 flex-column flex-md-row border-0">
        <div class="list-group rounded-0 list-group-horizontal ">
           <a
            href="#"
            class="list-group-item list-group-item-action rounded-0"
            @click.prevent="selectCategory = ''; this.$route.params.selectCategory = ''"
            ><i class="bi bi-arrow-right-circle"></i> 全部商品</a
          >
          <a
            href="#"
            v-for="item in categories"
            :key="item"
            class="list-group-item list-group-item-action rounded-0"
            @click.prevent="selectCategory = item"
            ><i class="bi bi-arrow-right-circle"></i>{{ item }}</a
          >
        </div>
      </div>
      <!-- 產品列 -->
      <div class="col-12">
        <div class="row mt-4">
          <div class="col mb-4">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div class="col" v-for="item in filterProducts" :key="item.id">
                <div class="card h-100 rounded-0 position-relative">
                  <a
                    href="#"
                    @click.prevent="addMyFavorite(item)"
                    :class="{ active: myFavorite.includes(item.id) }"
                    class="
                    link-secondary
                    d-block
                    rounded-0
                    "
                  >
                    <i v-if="myFavorite.includes(item.id)" class="fs-4 bi-suit-heart-fill position-absolute top-0 end-0 me-2 mt-1 text-danger"></i>
                    <i v-else class="fs-4 bi bi-suit-heart position-absolute top-0 end-0 me-2 mt-1 text-white "></i>
                  </a>
                  <a
                    href="#"
                    class="rounded-0 "
                    @click.prevent="getProduct(item.id)"
                  >
                    <div
                      style="
                        height: 300px;
                        background-size: cover;
                        background-position: center;
                      "
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    ></div>
                  </a>
                  <div class="card-body ">
                    <div class="d-flex mb-4">
                      <p class="badge bg-soft text-center text-light">{{
                      item.category
                    }}</p>
                    <h5 class="card-title mb-3">{{ item.title }}</h5>
                    <!-- <h6 class="h6 text-secondary">
                      {{ item.description }}
                    </h6> -->
                    </div>
                    <div class="mb-3 d-flex flex-column justify-content-end align-items-start">
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
                      <button class="btn btn-outline-secondary rounded-0 border w-100" type="button"
                        @click="getProduct(item.id)">查看更多</button>
                      <button class="btn btn-soft text-light rounded-0 border-0 w-100" type="button"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)"><div
                          v-if="this.status.loadingItem === item.id"
                          class="spinner-border text-light spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        加到購物車</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 分頁 -->
          <Pagination class="d-flex justify-content-center justify-content-md-end"
            :pages="pagination"
            @emit-pages="getProducts"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import Pagination from '../components/Pagination.vue';
// 我的最愛使用 LocalStorage 來存取
// 因為LocalStorage不能存物件，所以要先轉型為字串
const storageMethods = {
  // 存檔
  save(favorite) {
    // 丟進來的東西先做轉型 JSON.stringify
    const favoriteString = JSON.stringify(favorite);
    // hexFavorite 再做寫入，也就是把東西存進去
    localStorage.setItem('hexFavorite', favoriteString);
  },
  // 取出
  get() {
    // 把 hexFavorite 欄位從 localStorage 取出時會是字串，所以要再用 JSON.parse 轉為物件
    return JSON.parse(localStorage.getItem('hexFavorite'));
  },
};
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
    };
  },
  components: {
    Pagination,
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    addMyFavorite(item) {
      // console.log('addMyFavorite');
      // this.myFavorite.push(item.id);
      // this.myFavorite.includes(item.id) 原本是寫 item.id 存 id 就好，但後面要做其他事情可以先存整個物件
      if (this.myFavorite.includes(item.id)) { // 這裡意思是 如果我的最愛已經有這個品項，再按一次就代表取消
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        // emitter.emit('update-favorite'); // 更新最愛數量
      } else {
        this.myFavorite.push(item.id); // 否則沒有此品項 就把品項加入
        this.favShowAlert();
        // emitter.emit('update-favorite'); // 更新最愛數量
      }
      console.log('myFavorite 我的最愛數量', this.myFavorite.length);
      // storageMethods.save(this.myFavorite); // 儲存狀態
      // emitter.emit('update-favorite'); // 更新最愛數量
    },
    // getProducts(page = 1) {
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
    //   this.isLoading = true;
    //   this.$http.get(url).then((response) => {
    //     console.log('取得 response：', response);
    //     this.products = response.data.products;
    //     this.isLoading = false;
    //     if (response.data.success) {
    //       console.log('取得所有產品：', response.data);
    //       this.products = response.data.products;
    //       this.pagination = response.data.pagination;
    //       this.getCategories();
    //     }
    //   });
    // },
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url)
        .then((response) => {
          if (!response.data.success) {
            this.isLoading = false;
            return;
          }
          this.products = response.data.products;
          console.log('取得全部', this.products);
          this.getCategories();
          console.log('取得分類', this.selectCategory);
          const { selectCategory } = this.$route.params;
          if (selectCategory) {
            this.selectCategory = selectCategory;
          }
          if (this.selectCategory !== '') {
            this.pagination = {};
          } else {
            this.setPagination(page);
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.$httpMessageState(error, '連線錯誤');
          this.isLoading = false;
        });
    },
    setPagination(page = 1) {
      const perPage = 12;
      this.pagination = {
        total_pages: Math.ceil(this.products.length / perPage),
        current_page: page,
        has_pre: page !== 1,
        has_next: false,
        category: null,
      };
      if (this.pagination.current_page >= this.pagination.total_pages) {
        this.pagination.current_page = this.pagination.total_pages;
        this.pagination.has_next = false;
      } else {
        this.pagination.has_next = true;
      }
      const minPage = (this.pagination.current_page * perPage) - perPage;
      const maxPage = (this.pagination.current_page * perPage);
      this.products = this.products.slice(minPage, maxPage);
    },
    getCategories() {
      // Vue 3 雙向綁定 Proxy(new Proxy 物件)
      // new Set
      const categories = new Set(); // 建在全新的空的物件上
      this.products.forEach((item) => {
        categories.add(item.category);// 把品項加入 categories
      });
      console.log('取得所有分類 Set：', categories); // 這裡是 Set 屬於類陣列
      this.categories = [...categories]; // 這裡要轉成純陣列的形式存回去  所以這裡要轉為 Proxy
      console.log('取得所有分類 Proxy：', this.categories);
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
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = '';
        this.showAlert();
        console.log(res);
        emitter.emit('update-cart'); // 更新購物車數量
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
    favShowAlert() {
      // Use sweetalert2
      this.$swal.fire({
        position: 'center',
        icon: 'success',
        title: '已加入收藏',
        showConfirmButton: false,
        timer: 2000,
        iconColor: '#236F6B',
      });
    },
  },
  watch: { // 監聽特定值
    myFavorite: {
      // 深層監聽
      handler() {
        storageMethods.save(this.myFavorite); // 把資料儲存
        emitter.emit('update-favorite'); // 更新最愛數量
      },
      deep: true,
    },
    selectCategory(newValue, preValue) {
      if (newValue === '' || preValue === '') {
        this.getProducts();
      }
    },
  },
  computed: { // 產生新的資料集 (裡面的值產生變化之後，資料重新運算)
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
  .subNav {
  z-index: 1000;
  position: sticky;
  top: 89px;
  flex-wrap: wrap;
  justify-content: space-around;
  }
</style>
