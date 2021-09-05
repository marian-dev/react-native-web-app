import { apiRequest } from "../actions/api";
import { LOGIN } from "../actions/auth";
import { LIST } from "../actions/cars";

const SERVER_URL = 'http://laravel.test';

export const appMiddleware = () => next => action => {
  next(action);
  switch (action.type) {
    case LOGIN: {
      next(
        apiRequest({
          url: `${SERVER_URL}/api/login`,
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: action.payload
        })
      
      );
      break;
    }
    case LIST: {
      next(
        apiRequest({
          url: `${SERVER_URL}/api/cars`,
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ action.payload,
          }
        })
      );
      break;
    }
    default:
      break;
  }
};