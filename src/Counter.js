import React, {Component} from 'react';
import { connect } from "react-redux";
import { increaseCounter, workerAction } from './actions';
import PropTypes from 'prop-types';

class Counter extends Component {
  handleClick = () => {
    const myWorker = new Worker('./newWorker.js', { type: 'module' });
    myWorker.onmessage = function(e) {
      console.log('Message received from worker');
    };
    myWorker.postMessage('Hi');
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        Counter: { this.props.counter.counter }
      </div>
    );
  }
}

Counter.propTypes = {};

const mapStateToProps = (state) => ({ counter: state.counter });

export default connect(mapStateToProps, { increaseCounter, workerAction })(Counter);