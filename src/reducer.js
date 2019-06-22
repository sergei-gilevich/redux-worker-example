import { INCREASE_COUNTER } from './actions';

const initialState = () => ({ counter: 1 });

export default function reducer(state = initialState(), action) {
  console.log(action);
  switch (action.type) {
    case INCREASE_COUNTER: {
      return {...state, counter: state.counter + 1};
    }
    case 'WORKER_ACTION': {
      console.log(action);
      return { ...state }
    }
    default: return { ...state }
  }
};