import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBbZ9_rBN9XeRE6w1bjxQN07DptWovYvA0",
    libraries: "places"
  }
});
