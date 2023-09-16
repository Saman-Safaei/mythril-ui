import { createApp } from "vue";
import App from "./App.vue";

import { MythrilPlugin } from "@mythril-ui/vue";

createApp(App).use(MythrilPlugin, {

}).mount("#app");
