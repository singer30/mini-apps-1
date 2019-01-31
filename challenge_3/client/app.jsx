
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
        <button onClick={this.handleCheckOutClick} className="checkout">Check Out</button>
      );
    } else if (page === 1) {
      return (
        <Account />
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
            <label for="name">Enter Your name </label>
            <input type="text" name="name" id="name"></input>
          </div>
          <div>
            <label for="email">Enter Your Email</label>
            <input type="email" name="email" id="email"></input>
          </div>
          <div>
            <label for="password">Enter Your Password</label>
            <input type="password" name="password" id="password"></input>
          </div>
          <div>
            <input type="submit" value="next"></input>
          </div>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

