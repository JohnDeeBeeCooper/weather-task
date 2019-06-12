export const data = {
  state: {
    error: false,
    forecast: {},
    loading: false
  },
  reducers: {
    getData(state, payload) {
      return { ...state, forecast: payload };
    }
  },
  effects: dispatch => ({})
};
