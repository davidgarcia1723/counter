
import React, { Component } from "react";
class Counter extends Component {
    // INTALIZATION
    constructor(props) {
        super(props)
        console.log("constructor", props)
    }

    // Mounting
    componentDidMount(){
        console.log("componenentDidMount fired")
    }

    // Updating
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState)
    }

    // Unmounting
    componentWillUnmount(){
        console.log("component will unmount")
    }

    // MOUNTING
    render() {
        return (
            <div className="counter">
                Counter value: {this.props.counter}
            </div>
        );
    }
}
export default Counter;