import Vue from 'vue'
import App from "@/App.vue";
import apolloProvider from "@/plugins/Apollo";
import router from "@/router";

const app = new Vue({
    router,
    el: '#app',
    apolloProvider,
    render: h => h(App)
});
