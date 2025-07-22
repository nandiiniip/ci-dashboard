import type { Build } from "../../pages/Overview/models/Build";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../types";

interface DataState {
  tempData: Build[];
  loading: boolean;
}

const initialState: DataState = {
  tempData: [],
  loading: false,
};

export default function dataReducer(
  state = initialState,
  action: { type: string; payload?: Build[] }
): DataState {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        tempData: payload ?? [],
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
