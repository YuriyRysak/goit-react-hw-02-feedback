import React from "react";
import FeedbackOptions from "./FeedbackOptions";
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
        // total: this.props.initialTotal,
        // positive: this.props.initialPositive,

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
handleIncrement = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };


// handleIncrementGood = () => {
//     this.setState((prevState) => {
//      return {
//         good: prevState.good + 1, 
//      }               
//     });
    
//  };
       
    

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
            <FeedbackOptions options = {this.state} 
                onHandleIncrement = {this.handleIncrement}
            />
                {/* <Controls
                    onIncrementGood={this.handleIncrementGood}
                    onIncrementNeutral={this.handleIncrementNeutral}
                    onIncrementBad={this.handleIncrementBad }
                    
                /> */}
                              
              
                <div>
            
                <Section title="Statistics">
                {this.countTotalFeedback() !==0 ? (
                    <ValuesStat
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positive={this.countPositiveFeedbackPercentage()}
                    />
                ) : (<Notification message= 'There is no feedback!'>      
                </Notification>)}
                </Section>
               </div>
            </div>
        );
    }
}

export default Statistics;

