import React from "react";
import axios from "axios";

class QuestDetail extends React.Component {
  state = {
    questions: [],
  };

  getAuth = async () => {
    const quest = await axios.get(`/api/questions`);
    console.log(quest);
    this.setState({ questions: quest });
  };

  componentDidMount() {
    this.getAuth();
  }

  render() {
    const quest = this.state.questions;
    return <div></div>;
  }
}

export default QuestDetail;
