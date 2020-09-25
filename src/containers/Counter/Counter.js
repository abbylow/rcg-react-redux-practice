import React, { Component } from 'react';
import { connect } from 'react-redux'; // a function that returns a HOC, the returned HOC provides the state from store

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => { return { counter: prevState.counter - value } })
    //             break;
    //     }
    // }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
                <hr />
                <button onClick={() => this.props.onSotreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult => (
                        <li onClick={() => this.props.onDeleteResult(storedResult.id)} key={storedResult.id}>{storedResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// get the state from redux store and pass to the component as props 
const mapStateToProps = state => {
    // return an object that the key is the prop name and value is the state from redux store
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (value) => dispatch(actionCreators.addition(value)),
        onSubtractCounter: (value) => dispatch(actionCreators.subtraction(value)),
        onSotreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (resultElId) => dispatch(actionCreators.deleteResult(resultElId)),
    };
};

// connect(mapStateToProps) => call connect function will return a HOC, then the HOC will wrap the component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);