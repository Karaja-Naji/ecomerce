import { SET_CATEGOURIES, ADD_CAREGORY } from "./../actions/categouriesAction"

//const INITIAL_STATE = [{ error: '', message: '', content: '', authenticated: false }];

export default function (state = [], action = {}) {
  switch (action.type) {
  	case ADD_CAREGORY:
  		return [...state, action.category]
    case SET_CATEGOURIES:
      return action.categouries;
  }

  return state;
}
