import { Component } from 'react';

import styles from './feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  onLeaveFeedback(option) {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage('good');
    return (
      <div className={styles.feedback}>
        <div className={styles.block}>
          <h2 className={styles.title}>Please leave feedback</h2>
          <button
            onClick={() => this.onLeaveFeedback('good')}
            className={styles.button}
          >
            Good
          </button>
          <button
            onClick={() => this.onLeaveFeedback('neutral')}
            className={styles.button}
          >
            Neutral
          </button>
          <button
            onClick={() => this.onLeaveFeedback('bad')}
            className={styles.button}
          >
            Bad
          </button>
        </div>
        <div className={styles.block}>
          <h2 className={styles.title}>Statistics</h2>
          <p className={styles.text}>Good:{good}</p>
          <p className={styles.text}>Neutral:{neutral}</p>
          <p className={styles.text}>Bad:{bad}</p>
          <div>
            <p className={styles.text}>Total:{total}</p>
            <p className={styles.text}>Positive feedback:{positiveFeedback}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
