import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Quest.css";

class Quest extends Component {
  state = {
    quest: [],
    number: 0,
  };

  //데이터 리스트 받아오기
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

  // 출제자가 바로 삭제할 수 있는 기능
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
    const { quest, number, load } = this.state;

    return (
      <section className="container">
        <div className="quest">
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th> </th>
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
                      {/* 출제자일시 화면에 버튼 띄우기 */}
                      {localStorage.getItem("role") === "true" ? (
                        <div>
                          <a
                            href={`http://localhost:3000/#/quest/edit/${quest.id}`}
                          >
                            <button className="button">수정</button>
                          </a>
                          <button
                            className="button"
                            onClick={() => this.handleDelete(quest.id)}
                          >
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

          {/* 출제자일시 화면에 버튼 띄우기 */}
          {localStorage.getItem("role") === "true" ? (
            <Link
              to={{
                pathname: `/quest/create/${number}`,
              }}
            >
              <button className="button bu">출제</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default Quest;
