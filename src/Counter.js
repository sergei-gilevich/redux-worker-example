import React, {Component} from 'react';
import { connect } from "react-redux";
import { increaseCounter, workerAction } from './actions';
import PropTypes from 'prop-types';
// import Worker from './new.worker.js';

class Counter extends Component {
  handleClick = () => {
    const myWorker = new Worker();
    myWorker.onmessage = function(e) {
      console.log('Message received from worker');
    };
    myWorker.postMessage('Hi');
  };

  render() {
    return (
      <div onClick={() => this.props.workerAction(100)}>
        Counter: { this.props.counter.counter }
      </div>
    );
  }
}

Counter.propTypes = {};

const mapStateToProps = (state) => ({ counter: state.counter });

export default connect(mapStateToProps, { increaseCounter, workerAction })(Counter);