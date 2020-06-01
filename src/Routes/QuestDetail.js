import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class QuestDetail extends Component {
  state = {
    questDetail: [],
  };

  getQuestDetail = async () => {
    try {
      const id = this.props.match.params.id;
      const questDetail = await axios.get(`/api/questions/${id}`, {
        headers: { Auth: `JWT ${localStorage.getItem("jwt")}` },
      });
      console.log(questDetail);
      console.log(questDetail.data);
      this.setState({ questDetail: questDetail.data });
    } catch (e) {
      alert("데이터 조회에 실패했습니다.");
      console.log(e);
    }
  };

  handleSolve = (e) => {
    console.log(e.target.value);
    console.log(this.state.questDetail);
    var select = e.target.value;
    var answer = this.state.questDetail.answer;
    console.log(select, answer);
    if (String(select) === String(answer)) {
      console.log("정답");
      alert("정답");
    } else {
      alert("오답");
    }
  };

  componentDidMount() {
    this.getQuestDetail();
  }

  render() {
    const questDetail = this.state.questDetail;
    return (
      <div>
        <h1>{questDetail.direction}</h1>
        <h1>{questDetail.content}</h1>
        <tbody>
          <tr>
            {questDetail.choices
              ? questDetail.choices.map((current, index) => {
                  return (
                    <td>
                      <input
                        type="radio"
                        key={index}
                        value={index}
                        onClick={this.handleSolve}
                      />
                      {current}
                    </td>
                  );
                })
              : ""}
          </tr>
        </tbody>
      </div>
    );
  }
}

export default QuestDetail;
