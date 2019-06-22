export const INCREASE_COUNTER = 'INCREASE_COUNTER';

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const workerAction = (n) => ({
  type: 'WORKER_ACTION',
  meta: {
    WebWorker: true, // This line specifies that the worker should show up and do the job
  },
  payload: {
    num: n,
  },
});