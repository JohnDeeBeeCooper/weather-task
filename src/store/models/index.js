export const data = {
  state: {
    error: false,
    forecast: {},
  },
  reducers: {
    getData(state, payload) {
      return { ...state, forecast: payload };
    }
  },
  effects: dispatch => ({})
};
