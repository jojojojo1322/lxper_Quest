import React from "react";
import axios from "axios";

class QuestEdit extends React.Component {
  state = {
    questions: [],
  };

  handleChange = (e) => {
    console.log(e);
  };
  handleSubmit = (e) => {
    console.log(e);
  };

  getAuth = async () => {
    const quest = await axios.post(`/api/questions`, {
      headers: { Auth: `JWT ${localStorage.getItem("jwt")}` },
    });
    console.log(quest);
    this.setState({ questions: quest });
  };

  componentDidMount() {
    this.getAuth();
  }

  render() {
    const quest = this.state.questions;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>문제출제</h1>
        {/* <form
          placeholder="제목을 입력하십시오."
          name="nickName"
          onChange={this.handleChange}
          size="sm"
          type="text"
        /> */}
        <label>
          <input
            type="text"
            placeholder="제목"
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <input type="text" placeholder="내용" onChange={this.handleChange} />
        </label>
        <label>
          <input type="" />
        </label>

        {/* <form
          style={{
            marginTop: "20px",
          }}
          as="textarea"
          placeholder="내용을 입력해 주세요."
          name="content"
          rows="10"
          onChange={this.handleChange}
        /> */}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default QuestEdit;
