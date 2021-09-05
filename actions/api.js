export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_LOGIN_SUCCESS = "API_LOGIN_SUCCESS";
export const API_ERROR = "API_ERROR";
export const CANCEL_API_REQUEST = "CANCEL_API_REQUEST";

// action creators
export const apiRequest = ({ url, method, headers, data }) => {
  return {
    type: API_REQUEST,
    meta: { url, method, headers, data }
  };
};

export const cancelApiRequest = () => {
  return {
    type: CANCEL_API_REQUEST
  };
};

export const apiSuccess = ({ response }) => ({
  type: API_SUCCESS,
  payload: response
});

export const apiLoginSuccess = ({ response }) => ({
  type: API_LOGIN_SUCCESS,
  payload: response
});


export const apiError = ({ error }) => ({
  type: API_ERROR,
  payload: error
});