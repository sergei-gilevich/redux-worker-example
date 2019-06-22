import { INCREASE_COUNTER } from './actions';

const initialState = () => ({ counter: 1 });

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    case INCREASE_COUNTER: {
      return {...state, counter: state.counter + 1};
    }
    case 'ADD_1': {
      console.log(action);
      return { ...state }
    }
    default: return { ...state }
  }
};