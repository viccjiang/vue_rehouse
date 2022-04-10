<template>
  <FrontNavbar/>
  <ToastMessages/>
  <router-view/>
  <FrontFooter/>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import emitter from '../methods/emitter';
import ToastMessages from '../components/ToastMessages.vue';

export default {
  components: {
    FrontNavbar,
    ToastMessages,
    FrontFooter,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
