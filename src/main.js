import Vue from "vue";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";

//使用组件库
Vue.use(ElementUI);

import permission from "./permission.js"

Vue.config.productionTip = process.env.NODE_ENV ==="production";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
