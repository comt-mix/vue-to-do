import Vue from "vue";
import App from "./App.vue";
import store from "./store/addTodo";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

/* import font awesome 컴포넌트 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add(faTrash, faPenToSquare, faPlus);

/* font awesome 컴포넌트를 전역으로 등록 */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
