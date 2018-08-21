import { combineReducers } from "redux";
import WeatherReducer from "./Reducer_weather";

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: WeatherReducer
});

export default rootReducer;
