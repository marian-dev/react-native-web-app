export const LIST = "LIST";

export const list = token => {
    return {
      type: LIST,
      payload: token
    };
  };