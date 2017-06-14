import { SET_PRODUCTS } from "./../actions/productsAction"

//const INITIAL_STATE = [{ error: '', message: '', content: '', authenticated: false }];

export default function (state = [], action = {}) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
  }

  return state;
}
