import React from "react";
import Controls from "./Controls.js";
import ValuesStat from "./ValuesStat.js";
import './Statistics.css';
import Section  from "./Section.jsx";
import  Notification  from './Notification';


class Statistics extends React.Component {

    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        initialTotal: 0,
        initialPositive: null
    };

    // static propTypes = {

    // }

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialNeutral,
        total: this.props.initialTotal,
        positive: this.props.initialPositive,

        // visible: false
    };
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   show = () => {
//     this.setState({visible: true});
//   };

//   hide = () => {
//     this.setState({visible: false});
//   };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };



// ============================================================
// handleIncrement = state => {
//     this.setState(prevState => ({ [state]: prevState[state] + 1 }));
//   };
handleIncrementGood = () => {
    this.setState((prevState) => {
     return {
        good: prevState.good + 1, 
     }               
    });
    
 };
       
    

    handleIncrementNeutral = () => {
        this.setState((prevState) => {
         return {
            neutral: prevState.neutral + 1, 
         }               
        });
        
     };

     handleIncrementBad = () => {
        this.setState((prevState) => {
         return {
            bad: prevState.bad + 1, 
         }               
        });
        
     };
 

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <Controls
                    onIncrementGood={this.handleIncrementGood}
                    onIncrementNeutral={this.handleIncrementNeutral}
                    onIncrementBad={this.handleIncrementBad }
                    // onShowState={this.show}
                />
                              
              
                <div>
                {/* {this.state.visible && (
                <ValuesStat
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback}
                    positive={this.countPositiveFeedbackPercentage}
                />
                )} */}

                {/* <Section title="Statistics">
          {this.totalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section> */}
                <Section title="Statistics">
                {this.countTotalFeedback() !==0 ? (
                    <ValuesStat
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positive={this.countPositiveFeedbackPercentage()}
                    />
                ) : (<Notification message= 'oops!'>      
                </Notification>)}
                </Section>
               </div>
            </div>
        );
    }
}

export default Statistics;

