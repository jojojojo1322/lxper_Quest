import React from "react";
import axios from "axios";
import "./QuestCreate.css";

class QuestCreate extends React.Component {
  state = {
    number: this.props.match.params.number,
    direction: "",
    content: "",
    choices: [],
    answer: 0,
  };

  handleAddRow = (e) => {
    e.preventDefault();
    this.setState({ choices: [...this.state.choices, ""] });
  };

  handleDeleteRow = (index) => {
    this.state.choices.splice(index, 1);

    this.setState({ choices: this.state.choices });
  };

  handleAnswer = async (e) => {
    const checked = e.target.parentNode.id;
    await this.setState({ answer: checked });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeChoices(e, index) {
    this.state.choices[index] = e.target.value;

    this.setState({ choices: this.state.choices });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let number = parseInt(this.state.number) + 1;

    axios
      .post(
        `/api/questions`,
        {
          number: number,
          direction: this.state.direction,
          content: this.state.content,
          choices: this.state.choices,
          answer: parseInt(this.state.answer),
        },
        {
          headers: { Auth: `JWT ${localStorage.getItem("jwt")}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/quest");
        }
      })
      .catch((err) => {
        alert("다시 입력해주세요.");
      });
  };

  render() {
    return (
      <section className="container">
        <div className="quest">
          <form onSubmit={this.handleSubmit}>
            <h1>출제</h1>
            <div class="col-25">
              <label for="title">제목</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                placeholder="제목"
                name="direction"
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="col-25">
              <label for="content">내용</label>
            </div>
            <div class="col-75">
              <textarea
                classNmae="content"
                placeholder="내용"
                name="content"
                onChange={this.handleChange}
                required
              />
            </div>
            <form>
              <div class="col-25">선택지</div>
              <div>
                {this.state.choices.map((choice, index) => {
                  return (
                    <div key={index} id={index} class="col-75">
                      <input
                        type="radio"
                        onClick={this.handleAnswer}
                        name="answer"
                      />
                      <input
                        type="text"
                        placeholder="선택지"
                        onChange={(e) => this.handleChangeChoices(e, index)}
                        value={choice}
                      />
                      <button
                        className="delete_button"
                        onClick={() => this.handleDeleteRow(index)}
                      >
                        제거
                      </button>
                    </div>
                  );
                })}
                <button
                  className="choice_button"
                  onClick={(e) => this.handleAddRow(e)}
                >
                  선택지
                </button>
              </div>
            </form>
            <div class="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default QuestCreate;
