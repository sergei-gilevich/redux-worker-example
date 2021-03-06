console.log('788979879879879879878');
self.onmessage = ({ data: action }) => { // eslint-disable-line
  console.log('ACTION');
  console.log(action);
  self.postMessage({ // eslint-disable-line
    type: action.type,
    // Notice that we remove the `meta.WebWorker` field from the payload.
    // Since the returned data will be dispatched as a new action and be passed through all the middlewares,
    // keeping the `meta.WebWorker` field may cause an infinite loop.
    payload: {
      num: action.payload.num + 1,
    },
  });
};