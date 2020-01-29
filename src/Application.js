import React, { Component } from "react";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  //   UNSAFE_componentWillMoun(props, state) {

  //   }

  //   componentDidMount(props, state) {
  //     console.log("Mounted with", props, state);
  //   }

  //   componentWillReceiveProps(props) {

  //   }

  //   componentWillUpdate(props, state) {
  //     if (this.props.name !== props.name ){
  //         // do somthing
  //     }

  //   }

  //   componentDidUpdate(props,state){

  //   }

  handelClick = () => {
    this.setState({ count: this.state.count + 1 });
    //   console.log('Clicked')
  };

  componentDidUpdate(props, state) {
     if (this)
    // console.log("Updated from", state, "to", this.state)
  }


  render() {
    // let name = "Nick ";
    let { count } = this.state;

    return (
      <div>
        {/* <h1> Hello, {name} </h1> */}
        <h1> You Clicked the {count} button </h1>
        <span>
          <button onClick={e => this.handelClick()}> Click Me </button>
        </span>
      </div>
    );
  }
}

export default Application;
