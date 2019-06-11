import { init } from "@rematch/core";
import reducer from "./store/reducers/";

const store = init({
  reducer
});
export default store;
