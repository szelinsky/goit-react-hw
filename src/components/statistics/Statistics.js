import React, { Component } from 'react';
import './Statistics.module.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0
};

let totalFeedback = 0;

class Statistics extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    //console.dir(event.target);

    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    // event.persist(); //Второй способ
    // this.setState((prevState)=>({[event.target.name]: prevState[event.target.name] + 1}));
	};
	
	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		totalFeedback = good + neutral + bad;
		return totalFeedback;
	}

	countPositiveFeedbackPercentage = () => {
		const { good } = this.state;
		return Math.round((good * 100) / totalFeedback);
	}

	


  render() {
    return (
      <>
        <h3>Please leave feedback</h3>
        <button type="button" name="good" onClick={this.handleChange}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleChange}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleChange}>
          Bad
        </button>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>
          Total: {this.countTotalFeedback()}
        </p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage() || 0}%</p>
      </>
    );
  }
}

export default Statistics;
