export const data = {
  state: {
    error: false,
    forecast: {},
    point: "C",
    city: null,
    id: 0
  },
  reducers: {
    getData(state, payload) {
      return { ...state, forecast: payload };
    },
    getCity(state, payload) {
      return { ...state, city: payload };
    },
    changeId(state, payload) {
      return { ...state, id: payload };
    }
  },
  effects: dispatch => ({})
};
