import React from "react";
import axios from "axios";

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

  handlecheck = async (e) => {
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
    axios
      .post(
        `/api/questions`,
        {
          number: parseInt(this.state.number),
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
      <form onSubmit={this.handleSubmit}>
        <h1>문제출제</h1>
        <label>
          <input
            type="text"
            placeholder="제목"
            name="direction"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="내용"
            name="content"
            onChange={this.handleChange}
            required
          />
        </label>
        <form>
          <div>
            {this.state.choices.map((choice, index) => {
              return (
                <div key={index} id={index}>
                  <input
                    type="radio"
                    onClick={this.handlecheck}
                    name="answer"
                  />
                  <input
                    type="text"
                    placeholder="선택지"
                    onChange={(e) => this.handleChangeChoices(e, index)}
                    value={choice}
                  />
                  <button onClick={() => this.handleDeleteRow(index)}>
                    제거
                  </button>
                </div>
              );
            })}
            <button onClick={(e) => this.handleAddRow(e)}>추가하기</button>
          </div>
        </form>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default QuestCreate;
