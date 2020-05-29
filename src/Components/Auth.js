import React from "react";
import axios from "axios";

class Auth extends React.Component {
  state = {
    API_KEY: "4ca2e68f-427e-4c09-ad5a-904916159ac9",
    isLogin: false,
    JWT: "",
  };

  handleRole = () => {
    const role = window.confirm("선생님 이신가요?");
    if (role) {
      localStorage.setItem("role", true);
    } else {
      localStorage.setItem("role", false);
    }
    console.log(localStorage.getItem("role"));
  };

  postAuth = async () => {
    const isLogin = await axios.post(
      `/auth/${this.state.API_KEY}`,

      {
        withCredentials: true,
      }
    );
    console.log(isLogin);
    if (isLogin.data.success === true) {
      this.setState({ isLogin: true });
      this.handleRole();
    }
  };

  componentDidMount() {
    this.postAuth();
  }

  render() {
    const Login = this.state.isLogin;
    return (
      <div>
        {Login ? (
          <div>
            <h1>로그인 성공</h1>
          </div>
        ) : (
          <div>
            <h1>로그인 실패</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
