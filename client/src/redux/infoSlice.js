import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sex: "",
  age: "",
  cp: "",
  trestbps: "",
  fbs: "",
  chol: "",
  restecg: "",
  thalach: "",
  exang: "",
  oldpeak: "",
  slope: "",
  thal: "",
  ca: "",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setSex(state, action) {
      state.sex = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setCp(state, action) {
      state.cp = action.payload;
    },
    setTrestbps(state, action) {
      state.trestbps = action.payload;
    },
    setFbs(state, action) {
      state.fbs = action.payload;
    },
    setChol(state, action) {
      state.chol = action.payload;
    },
    setRestecg(state, action) {
      state.restecg = action.payload;
    },
    setThalach(state, action) {
      state.thalach = action.payload;
    },
    setExang(state, action) {
      state.exang = action.payload;
    },
    setOldpeak(state, action) {
      state.oldpeak = action.payload;
    },
    setSlope(state, action) {
      state.slope = action.payload;
    },
    setThal(state, action) {
      state.thal = action.payload;
    },
    setCa(state, action) {
      state.ca = action.payload;
    },
  },
});

export const {
  setAge,
  setSex,
  setCp,
  setTrestbps,
  setFbs,
  setChol,
  setRestecg,
  setThalach,
  setExang,
  setOldpeak,
  setSlope,
  setThal,
  setCa,
} = infoSlice.actions;
export default infoSlice.reducer;
