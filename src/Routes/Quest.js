import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Quest extends Component {
  state = {
    quest: [],
    number: 0,
  };

  getQuest = async () => {
    try {
      const quest = await axios.get(`/api/questions`, {
        headers: { Auth: `JWT ${localStorage.getItem("jwt")}` },
      });
      this.setState({ quest: quest.data, number: quest.data.length });
    } catch (e) {
      alert("데이터 조회에 실패했습니다.");
    }
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(`api/questions/${id}`, {
        headers: { Auth: `JWT ${localStorage.getItem("jwt")}` },
      });
      this.props.history.go();
    } catch (err) {
      alert("실패");
    }
  };

  componentDidMount() {
    this.getQuest();
  }

  render() {
    const { quest, number } = this.state;

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
                  <td>
                    {localStorage.getItem("role") === "true" ? (
                      <div>
                        <a
                          href={`http://localhost:3000/#/quest/edit/${quest.id}`}
                        >
                          <button>수정</button>
                        </a>
                        <button onClick={() => this.handleDelete(quest.id)}>
                          삭제
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        {localStorage.getItem("role") === "true" ? (
          <Link
            to={{
              pathname: `/quest/create/${number}`,
            }}
          >
            <button>문제 출제</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Quest;
