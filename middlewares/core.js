import axios from "axios";
import { API_REQUEST, apiError, apiSuccess} from "../actions/api";
import { setLoader } from "../actions/ui";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    dispatch(setLoader(true));
    const { url, method, headers, data } = action.meta;
      fetch(url, {
        method,
        headers,
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((data) => dispatch(apiSuccess({ response: data })))
      .catch((error) => console.error(error))
      .finally(() => setLoader(false));
  }
};