import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../types";
import type { Build } from "../../pages/Overview/models/Build";
import type { Dispatch } from "redux";

export const getData = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    const response = await fetch("http://localhost:3001/builds");
    const data: Build[] = await response.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.message });
    } else {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: "An unknown error occurred",
      });
    }
  }
};
