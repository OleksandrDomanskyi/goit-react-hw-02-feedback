import { Component } from "react";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

class App extends Component { 

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const sum = good + bad + neutral
    return sum;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = Math.round(
      (good * 100) / total);
    return percentage;
  };

  // onLeaveFeedback = (propertyName) => {
  //   this.setState(prevState => {
  //     return {
  //       [propertyName]: prevState[propertyName] +1
  //     }
  //   })
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    // const { onLeaveFeedback } = this;
  
    return (
    <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions />
        </Section>
        <Section title='Statistics'>
          {total > 0 && <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage ? positivePercentage : 0}
          />}
          {!total && <Notification message='There is no feedback' />}
        </Section>
    </div>
  );
  }
};

export default App;