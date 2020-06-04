import React, { Component } from "react";
import "./Quest.css";

class QuestWrong extends Component {
  state = {
    quest: [],
  };

  render() {
    const quest = JSON.parse(localStorage.getItem("FalseQuest"));
    return (
      <section className="container">
        <div className="quest">
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
      </section>
    );
  }
}

export default QuestWrong;
