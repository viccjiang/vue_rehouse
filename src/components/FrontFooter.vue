<template>
  <footer class="bg-dark py-2 py-md-3 text-light">
    <div class="container row g-0 mx-auto fs-6 ls-2 text-secondary text-center">
      <nav class="nav-item mb-4 d-none d-md-inline-block">
        <ul class="row justify-content-between list-unstyled m-0">
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink to="/" class="nav-link px-2 text-secondary">
              首頁
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/about"
              class="nav-link px-2 text-secondary"
            >
              關於我們
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/faq"
              class="nav-link px-2 text-secondary"
            >
              常見問答
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/products"
              class="nav-link px-2 text-secondary"
            >
              線上商城
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/cart"
              class="nav-link px-2 text-secondary"
            >
              購物車
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/contact"
              class="nav-link px-2 text-secondary"
            >
              聯絡我們
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="pt-3 pt-md-0">
        <RouterLink class="navbar-brand brandlogo link-light me-0" to="/"
          ><span class="brandlogos">re.</span>HOUSE
        </RouterLink>
      </div>
      <div class="mt-3">
        本網站僅供個人作品使用，不提供商業用途
        <span class="d-none d-md-inline-block"
          ><RouterLink class="p-0 nav-link link-secondary" to="/login"
            >｜登入後台</RouterLink
          >
        </span>
      </div>
      <div class="mt-3">© 2022 re.HOUSE COPYRIGHT</div>
      <ul class="d-flex justify-content-center list-unstyled mt-3 mb-0 h4">
        <li>
          <a href="https://github.com/viccjiang/vue_rehouse" class="text-white mx-3"><i class="bi bi-github"></i></a>
        </li>
        <li>
          <a href="https://github.com/viccjiang/vue_rehouse" class="text-white mx-3"
            ><i class="bi bi-instagram"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/viccjiang/vue_rehouse" class="text-white ms-3"
            ><i class="bi bi-messenger"></i
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400;0,600;0,700;1,500;1,600&display=swap");
  // logo
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
  // footer
  .navhover a {
    position: relative;
  }
  .navhover ::after {
    content: " ";
    position: absolute;
    right: 50%;
    left: 50%;
    bottom: -5px;
    border-bottom: 1px solid #fff;
    transition: 0.3s;
  }
  .navhover :hover::after {
    right: 0%;
    left: 0%;
  }
</style>
