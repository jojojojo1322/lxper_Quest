import React, { Component } from "react";
import axios from "axios";

class Quest extends Component {
  state = {
    quest: [],
  };

  getQuest = async () => {
    try {
      const quest = await axios.get(`/api/questions`);
      console.log(quest);
      this.setState({ quest: quest.data });
    } catch (e) {
      alert("데이터 조회에 실패했습니다.");
      console.log(e);
    }
  };

  componentDidMount() {
    this.getQuest();
  }

  render() {
    const quest = this.state.quest;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
            </tr>
          </thead>
          {quest.map((quest) => {
            return (
              <tbody key={quest.id}>
                <tr>
                  <td>{quest.number}</td>
                  <td>{quest.direction}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        {localStorage.getItem("role") === true ? (
          <button href="#/questedit">문제 출제</button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Quest;
