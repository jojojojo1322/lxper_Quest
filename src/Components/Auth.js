import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Auth extends React.Component {
  state = {
    API_KEY: "4ca2e68f-427e-4c09-ad5a-904916159ac9",
    isLogin: false,
    JWT: "",
  };

  // 로그인시 출제자인지 아닌지를 구별 한 뒤 역할 부여
  // 출제자 학생 상관 없이 정답/오답 로컬저장소에 빈배열 삽입
  handleRole = () => {
    const role = window.confirm("출제자 이신가요?");
    if (role) {
      localStorage.setItem("role", true);
    } else {
      localStorage.setItem("role", false);
    }
    localStorage.setItem("TrueQuest", JSON.stringify([]));
    localStorage.setItem("FalseQuest", JSON.stringify([]));
  };

  // 인증되면 로컬저장소에 jwt 삽입
  postAuth = async () => {
    const isLogin = await axios.post(
      `/auth/${this.state.API_KEY}`,

      {
        withCredentials: true,
      }
    );
    if (isLogin.statusText === "OK") {
      this.setState({ isLogin: true });
      localStorage.setItem("jwt", isLogin.data.jwt);
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
          <Redirect to="/quest" />
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
