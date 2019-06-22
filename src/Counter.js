import React, {Component} from 'react';
import { connect } from "react-redux";
import { increaseCounter } from './actions';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    return (
      <div onClick={() => this.props.increaseCounter()}>
        Counter: { this.props.counter.counter }
      </div>
    );
  }
}

Counter.propTypes = {};

const mapStateToProps = (state) => ({ counter: state.counter });

export default connect(mapStateToProps, { increaseCounter })(Counter);