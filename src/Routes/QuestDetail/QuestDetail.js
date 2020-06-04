import React, { Component } from "react";
import axios from "axios";
import "./QuestDetail.css";

class QuestDetail extends Component {
  state = {
    id: "",
    questDetail: [],
    right: [],
    wrong: [],
  };

  getQuestDetail = async () => {
    try {
      const id = this.props.match.params.id;
      const questDetail = await axios.get(`/api/questions/${id}`, {
        headers: { Auth: `JWT ${localStorage.getItem("jwt")}` },
      });
      this.setState({ questDetail: questDetail.data });
      this.setState({ id: id });
    } catch (e) {
      alert("데이터 조회에 실패했습니다.");
    }
  };

  handleSolve = (e, questDetail) => {
    var select = e.target.value;
    var answer = this.state.questDetail.answer;

    if (String(select) === String(answer)) {
      alert("정답");
      this.handleRightSave(questDetail);
      this.props.history.goBack();
    } else {
      alert("오답");
      this.handleWrongSave(questDetail);
      this.props.history.goBack();
    }
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(`api/questions/${id}`, {
        headers: { Auth: `JWT ${localStorage.getItem("jwt")}` },
      });
      this.props.history.goBack();
    } catch (err) {
      alert("실패");
    }
  };

  handleRightSave(questDetail) {
    let right = JSON.parse(localStorage.getItem("TrueQuest"));
    right = right.concat(questDetail);
    localStorage.setItem("TrueQuest", JSON.stringify(right));
  }

  handleWrongSave(questDetail) {
    let wrong = JSON.parse(localStorage.getItem("FalseQuest"));
    wrong = wrong.concat(questDetail);
    localStorage.setItem("FalseQuest", JSON.stringify(wrong));
  }

  componentDidMount() {
    this.getQuestDetail();
  }

  render() {
    const { questDetail, id } = this.state;

    return (
      <section className="container">
        <div className="quest">
          <tbody>
            <tr className="title">{questDetail.direction}</tr>
            <tr className="content">{questDetail.content}</tr>
            <tr className="choices">
              {questDetail.choices
                ? questDetail.choices.map((current, index) => {
                    return (
                      <td key={index}>
                        <input
                          type="radio"
                          key={index}
                          value={index}
                          name="choice"
                          onClick={(e) => this.handleSolve(e, questDetail)}
                        />
                        {current}
                      </td>
                    );
                  })
                : ""}
            </tr>
          </tbody>
          {localStorage.getItem("role") === "true" ? (
            <div>
              <a href={`http://localhost:3000/#/quest/edit/${id}`}>
                <button>수정</button>
              </a>
              <button onClick={() => this.handleDelete(id)}>삭제</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default QuestDetail;
