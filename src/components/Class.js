import React, {Component} from "react";



class Header extends Component {
  debugger
  constructor(props) {

    console.log("Constructor is called");
    super(props);
    this.state = {favoriteFood: "Rice"}
  }

  handleChange =()=> {
    console.log("Handle change")
    this.setState({favoriteFood: "Laddoo"});
  }

//  static getDerivedStateFromProps(props) {
//   console.log("GetDerivedStateFromProps")
//   return {favoriteFood: props.favoriteFood};
//  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Should component update")
  //   return nextState.favoriteFood !== this.state.favoriteFood;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.favoriteFood !== this.state.favoriteFood) {
      console.log(`Favorite food changed from ${prevState.favoriteFood} to  ${this.state.favoriteFood}`)
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did update is called");
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot);
  }

  // Depreciated
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("Component will update");
  // }
   componentDidMount() {
    console.log("Component did mount");

    setTimeout(()=> {
      this.setState({favoriteFood: "Pizza"})
    }, 2000)
  }
  render() {
    console.log("Render is called");
    return (

      <>
        <h1> Your favorite food is {this.state.favoriteFood}</h1>
        <button onClick={this.handleChange}>Change Food</button>
      
      </>
    )
  }
}





class Class extends Component {
  constructor(props) {
    super(props);
    this.state={count: 0, showChild: false}
    this.handleClick=this.handleClick.bind(this);
  }


  toggleChild = () => {
    this.setState(prevState => ({showChild: !prevState.showChild}))
  }

  handleClick() {
    this.setState(prevState=> ({count: prevState.count + 1}))
  }
  render() {
    return <>
      <h1>{this.props.welcome}</h1>
      <h2> count: {this.state.count}</h2>
      <button onClick={this.handleClick}>Increment</button>
      <Header favoriteFood="Pizza"/>
      <button onClick={this.toggleChild}>Show Child</button>
      {this.state.showChild && <Child/>}
    </>
  }
}


class Child extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log("Child Component unmounted")
  }

  render() {
    return <h1>Child component</h1>
  }
}

export default Class;