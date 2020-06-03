import React, { Component } from "react";

class QuestWrong extends Component {
  state = {
    quest: [],
  };

  render() {
    const quest = JSON.parse(localStorage.getItem("FalseQuest"));
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
                  <td>
                    <a
                      href={`http://localhost:3000/#/quest/detail/${quest.id}`}
                    >
                      {quest.number}
                    </a>
                  </td>
                  <td>{quest.direction}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default QuestWrong;
