<template>
  <Loading :active="isLoading" loader="bars" color="#236F6B"/>
  <!-- 購物車進度 -->
  <div class="container mt-5 p-0">
    <h2 class="text-center mb-5 fw-bold">購物車</h2>
    <div class="check-step row g-0 align-items-center text-center">
      <div class="col">
        <span class="fs-7">1</span>
        <p class="m-3 text-soft">確認訂單</p>
        <div class="step-bar-none"></div>
      </div>
      <div class="col">
        <span class="fs-7">2</span>
        <p class="m-3 text-soft">建立訂單</p>
        <div v-if="!order.is_paid" class="step-bar"></div>
        <div v-else class="step-bar-none"></div>
      </div>
      <div class="col">
        <span class="fs-7">3</span>
        <p class="m-3 text-soft">完成訂單</p>
        <div v-if="!order.is_paid" class="step-bar-none"></div>
        <div v-else class="step-bar"></div>
      </div>
    </div>
  </div>
  <!-- 已付款，完成訂單 -->
  <div v-if="order.is_paid" class="container text-center mt-5 mb-5">
    <div class="card text-center">
      <div class="card-header bg-soft text-white">
        付款成功，感謝您的購買與支持
      </div>
      <div class="card-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-check-circle-fill text-soft mb-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          />
        </svg>
        <h5 class="fs-2 fw-bold card-title">感謝您的訂購</h5>
        <p class="card-text border-bottom pb-3">
          商品預計於七個工作天內寄送<br />（不含週休及國定例假日）<br />再請留意簡訊通知及配送人員的電話
        </p>
        <dl
          class="
            row
            d-flex
            justify-content-start
            align-items-start
            text-start
            px-0 px-md-10
            m-0
          "
        >
          <dt class="col-sm-3">購買日期</dt>
          <dd class="col-sm-9">{{ $filters.date(order.create_at) }}</dd>
          <dt class="col-sm-3">訂單編號</dt>
          <dd class="col-sm-9">
            <p class="m-0">{{ order.id }}</p>
          </dd>
          <dt class="col-sm-3">Email</dt>
          <dd class="col-sm-9">{{ order.user.email }}</dd>
          <dt class="col-sm-3">收件人姓名</dt>
          <dd class="col-sm-9">{{ order.user.name }}</dd>
          <dt class="col-sm-3">收件人電話</dt>
          <dd class="col-sm-9">{{ order.user.tel }}</dd>
          <dt class="col-sm-3">收件人地址</dt>
          <dd class="col-sm-9">{{ order.user.address }}</dd>
          <dt class="col-sm-3">購買項目</dt>
          <dd class="col-sm-9">
            <div v-for="item in order.products" :key="item.id">
              <span> {{ item.product.title }} </span>
              <span> {{ item.qty }}{{ item.product.unit }} </span>
              <span> NT$ {{ $filters.currency(item.final_total) }}</span>
            </div>
          </dd>
          <dt class="col-sm-3">總金額</dt>
          <dd class="col-sm-9">NT$ {{ $filters.currency(order.total) }}</dd>
          <dt class="col-sm-3">付款狀態</dt>
          <dd class="col-sm-9">
            <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
            <span v-else class="text-success">付款完成</span>
          </dd>
        </dl>
        <div class="d-flex align-items-end justify-content-between mt-5">
          <RouterLink class="btn btn-outline-soft" to="/">回首頁</RouterLink>
          <RouterLink class="btn btn-soft" to="/products"
            >繼續購物</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 未付款 -->
  <div v-else class="container text-center mt-5 mb-5">
    <div class="card text-center">
      <div class="card-header bg-soft text-white">
        已建立訂單：{{ order.id }}
      </div>
      <div class="card-body">
        <!-- <h5 class="card-title">購買日期 {{ $filters.date(order.create_at)}}</h5>
        <p class="card-text">感謝您的購買與支持</p> -->
        <dl
          class="
            row
            d-flex
            justify-content-start
            align-items-start
            text-start
            px-0 px-md-10
            m-0
          "
        >
          <dt class="col-sm-3">購買日期</dt>
          <dd class="col-sm-9">{{ $filters.date(order.create_at) }}</dd>
          <dt class="col-sm-3">訂單編號</dt>
          <dd class="col-sm-9">
            <p class="m-0">{{ order.id }}</p>
          </dd>
          <dt class="col-sm-3">Email</dt>
          <dd class="col-sm-9">{{ order.user.email }}</dd>
          <dt class="col-sm-3">收件人姓名</dt>
          <dd class="col-sm-9">{{ order.user.name }}</dd>
          <dt class="col-sm-3">收件人電話</dt>
          <dd class="col-sm-9">{{ order.user.tel }}</dd>
          <dt class="col-sm-3">收件人地址</dt>
          <dd class="col-sm-9">{{ order.user.address }}</dd>
          <dt class="col-sm-3">購買項目</dt>
          <dd class="col-sm-9">
            <div v-for="item in order.products" :key="item.id">
              <span> {{ item.product.title }} </span>
              <span> {{ item.qty }}{{ item.product.unit }} </span>
              <span> NT$ {{ $filters.currency(item.final_total) }}</span>
            </div>
          </dd>
          <dt class="col-sm-3">總金額</dt>
          <dd class="col-sm-9">NT$ {{ $filters.currency(order.total) }}</dd>
          <dt class="col-sm-3">付款狀態</dt>
          <dd class="col-sm-9">
            <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
            <span v-else class="text-success">付款完成</span>
          </dd>
        </dl>
        <div class="d-flex align-items-end justify-content-between mt-5">
          <RouterLink class="btn btn-outline-soft" to="/products"
            >繼續購物</RouterLink
          >
          <div v-if="order.is_paid === false">
            <button class="btn btn-soft" @click="payOrder">確認付款去</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false;
          this.cartData = res.data.data;
        });
    },
    getOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.order.is_paid = true;
          this.getOrder();
          this.getCarts();
          emitter.emit('update-cart'); // 更新購物車數量
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>

<style lang="scss">
  .check-step span {
    width: 20px;
    height: 20px;
    padding: 6px 10px;
    justify-content: center;
    background: #236f6b;
    color: #fff;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .step-bar {
    width: 100%;
    height: 5px;
    background: #236f6b;
  }
  .step-bar-none {
    width: 100%;
    height: 5px;
    background: rgba(35, 111, 107, 0.2);
  }
</style>
