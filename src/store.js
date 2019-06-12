import { init } from "@rematch/core";
import * as models from "./store/models";

const store = init({
  models
});
export default store;
