<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <div class="col-md-6 bg-light">
        <div class="login d-flex align-items-center py-5 h-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <h3 class="display-5">請先登入</h3>
                <p class="text-secondary mb-4">請輸入後台管理帳號及密碼</p>
                <form
                  class="row justify-content-center"
                  @submit.prevent="signIn"
                >
                  <div >
                    <label for="inputEmail" class="sr-only"></label>
                    <input
                      v-model="user.username"
                      id="inputEmail"
                      type="email"
                      placeholder="請輸入您的帳號"
                      required
                      autofocus
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                  </div>
                  <div >
                    <label for="inputPassword" class="sr-only"></label>
                    <input
                      v-model="user.password"
                      id="inputPassword"
                      type="password"
                      placeholder="請輸入您的密碼"
                      required
                      autofocus
                      class="
                        form-control
                        rounded-pill
                        border-0
                        shadow-sm
                        px-4
                        text-primary
                      "
                    />
                  </div>
                  <div class="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      class="btn btn-soft btn-block mb-2 rounded-pill shadow-sm"
                    >
                      登入
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <router-link to="/" class="nav-link px-2 text-secondary text-center d-inline">
                返回首頁
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '您已登入',
        showConfirmButton: false,
        timer: 2000,
        iconColor: '#236F6B',
      });
    },
    signIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            const { token, expired } = response.data;
            document.cookie = `jiangsToken=${token};expires=${new Date(expired)};`;
            this.showAlert();
            this.$router.push('/dashboard/products');
          }
        })
        .catch((error) => {
          console.dir(error.response.data.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .bg-image {
    height: 100vh;
    background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2022vue3/1649505316342.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hchz%2B27UeQFAv7YuYmuv2Jqa%2FcpkxtGJCZwPb4c04l8lhAQSaTiOgClkH4iMwhdHQgho%2FcEuOs0Ihpr3HGyuyF2ja5aIWc%2BTAz57XAJub%2Fy7smDhSitvMe%2FBq2L%2Bsn49vbZ8Kqeyl3LI%2Fom0kiRVSG1eWii%2BBoepRmNI06CjgmW6%2FMjKug2OsuE8fpmfTmuMJ5ZVYxASkE6wRTa%2BlJiVh69aXwEsNaSTdfGOvZlKouQFURkbYU2jQGcerUKukPYYSZSGONVDacm8Fx%2FrxG3eGs1YFxBwVBPzNWD40Kbil%2F6wszoQD3PDRkPtBwnpM4erinZEkU5jrgJ3iQ9LyEldIQ%3D%3D");
    background-size: cover;
    background-position: center center;
  }
</style>
