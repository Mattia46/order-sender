import React, { Component } from 'react';

class Login extends Component {
    state = {
        user: '',
        tel: '',
    }

  handleChange = e => {
    const {
        name,
        value,
    } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
        user,
        tel,
    } = this.state;
    window.localStorage.setItem('user', user);
    window.localStorage.setItem('tel', tel);
  }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="login">
                    <input
                        className="input"
                        placeholder="Ditta..."
                        name="user"
                        value={this.state.user}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className="input"
                        placeholder="Telefono..."
                        value={this.state.tel}
                        name="tel"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="submit"
                        className="button"
                        value="confirm"
                    />
                </div>
            </form>
        );
    };
};

export default Login;
