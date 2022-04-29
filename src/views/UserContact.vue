<template>
  <section>
    <div class="card border-0 rounded-0 bg-dark text-white mb-5">
      <div
        class="filters"
        style="
          height: 200px;
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2022vue3/1648375826670.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Z8Sswky5%2B5Qs9zBOk353l6grws4lbOlVcclGQujb%2FluG%2FtdJ5cA03bSLskiSdsqQ9y4u9EzL%2FVzcf91ZsdrvCBzRP3Xtd6lQPRgkVuINBQh5%2BPhgtwAKIoMrZx46WcWsr8rmE7gScKmrnk5hGO8XwgJJyQXUHWrQv890wZje8wJkW%2BcrMkRkELlxnkvA1NYep0M0lPNGLjw9Nr%2B%2BaDLucpaaAR0wHg8FdtJaOesdeK%2F8et%2FIUWgkjNWNj2MQGX8u5Q0nh%2F2DvzIe7Evx0CR%2FedaCS%2BCNMPXgM5Y8ucCeMB110cYlO1eEkrl6MASJANN%2B3CVwiieirvmFPa4k3iVEUA%3D%3D);
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
          object-fit: cover;
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
        <h1 class="card-title text-center fw-bold">聯絡我們</h1>
      </div>
    </div>
    <div class="about container">
      <div class="contentText text-center my-5">
        <ul>
          <li
            class="
              fs-5
              fw-bold
              border-2 border-bottom border-dark
              d-inline-block
              mb-3
            "
          >
            服務電話
          </li>
          <li class="mb-3 text-soft">0800-123-456</li>
          <li
            class="
              fs-5
              fw-bold
              border-2 border-bottom border-dark
              d-inline-block
              mb-3
            "
          >
            服務信箱
          </li>
          <li class="mb-3 text-soft">service@rehouse.com</li>
          <li
            class="
              fs-5
              fw-bold
              border-2 border-bottom border-dark
              d-inline-block
              mb-3
            "
          >
            服務時間
          </li>
          <li class="mb-3 text-soft">週一~週五 08:00-19:00</li>
          <li class="mb-3 text-soft">週六~週日及國定例假日 09:00~18:00</li>
          <li
            class="
              fs-5
              fw-bold
              border-2 border-bottom border-dark
              d-inline-block
              mb-3
            "
          >
            常見問題
          </li>
          <li class="mb-5 text-soft">
            需要立即查詢，可以參考相關<router-link
              class="nav-link d-inline-block p-0"
              to="/faq"
              >常見問題</router-link
            >
          </li>
          <li class="fs-5 fw-bold">
            我們非常重視您的意見與問題，歡迎來電或來信詢問<br />我們將協助處理及回覆，祝你有個質感生活。
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
ul,
ol {
  list-style: none;
  padding: 0;
}
.filters {
  filter: brightness(0.8);
}
.bg-cover {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.darker {
  filter: brightness(0.8);
}
.reservation__item {
  min-height: 132px;
  filter: brightness(0.8);
}
.reservation__item:hover {
  min-height: 132px;
  filter: brightness(1);
}
</style>
