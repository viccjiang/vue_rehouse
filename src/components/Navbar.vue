<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-soft">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">re.HOUSE</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/dashboard/products" class="nav-link"
            >產品</RouterLink
          >
          <RouterLink to="/dashboard/orders" class="nav-link"
            >訂單</RouterLink
          >
          <RouterLink to="/dashboard/coupons" class="nav-link"
            >優惠券</RouterLink
          >
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        position: 'center',
        icon: 'success',
        title: '您已登出',
        showConfirmButton: false,
        timer: 2000,
        iconColor: '#236F6B',
      });
    },
    logout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            this.$router.push('/login');
            this.showAlert();
          }
        })
        .catch((error) => {
          console.dir(error.response.data.message);
        });
    },
  },
};
</script>
