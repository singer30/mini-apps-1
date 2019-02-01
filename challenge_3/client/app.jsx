
//import React from 'react';
// import ReactDom from 'react-dom';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    const nextPage = this.state.page + 1;
    this.setState({
      page: nextPage
    });
  }

  handleCheckOutClick() {
    this.changePage();
  }

  render() {
    const page = this.state.page;
    if (page === 0) {
      return (
        <button onClick={this.changePage} className="checkout">Check Out</button>
      );
    } else if (page === 1) {
      return (
        <Account changePage={this.changePage} />
      );
    } else if (page === 2) {
      return (
        <Address />
      );
    }
  }
}








class Account extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Enter Your Account Information</h1>
        <form method="POST" action="http://localhost:3000/">
          <div>
            <label htmlFor="name">Enter Your name </label>
            <input type="text" name="name" id="name"></input>
          </div>
          <div>
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" name="email" id="email"></input>
          </div>
          <div>
            <label htmlFor="password">Enter Your Password</label>
            <input type="password" name="password" id="password"></input>
          </div>
          <div>
            <input type="submit" value="next" onClick={this.props.changePage}></input>
          </div>
        </form>
      </div>
    );
  }
}


class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
    }
  }
  render() {
    const { address1, address2, city, state, zipcode } = this.state;
    console.log("this is the app rendering");
    return (
      <div>
        <h1>Enter Your Address</h1>
        <form>
          <div>
            <label htmlFor="address1">Address 1</label>
            <input type="text" name="address1" id="address1"></input>
          </div>
          <div>
            <label htmlFor="address2">Address 2</label>
            <input type="text" name="address2" id="address2"></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city"></input>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input type="text" name="state" id="state"></input>
          </div>
          <div>
            <label htmlFor="zipcode">ZIP</label>
            <input type="number" name="zipcode" id="zipcode"></input>
          </div>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

