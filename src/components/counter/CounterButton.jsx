import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class CounterButton extends Component{

    render () {
        return( 
        <div className="counter">
            <button className="incrementButton" onClick={ () => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button className="decrementButton" onClick={ () => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/* THIS IS COMMENT <span className="count">{this.state.counter}</span> 
            */}
        </div>
    )
    } 

    /* THIS BLOCK OF CODE was created but not needed as parent methods are being called at onClick
        increment = () => {
            this.props.incrementMethod(this.props.by)
        }

        decrement = () => {
            this.props.decrementMethod(this.props.by)
        }
    */
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton