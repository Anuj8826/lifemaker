import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class SelfCheck extends Component {
state = {
   questions : [
    {question: 'How alive did you feel?', description: 'How much were you in the present ?'},
    {question: 'Did you treat your body as a temple?', description: 'How was your thought with others?'},
    {question: 'Did you enjoy your activities?', description: 'How was your thought with others?'},
    {question: 'How productive was your day?', description: 'How was your thought with others?'},
    {question: 'How open were you to the world?', description: 'How was your thought with others?'},
    {question: 'How much did you learn?', description: 'How was your thought with others?'},
    {question: 'How expanded was your identity?', description: 'How was your thought with others?'},
    {question: 'Were you responsible and caring?', description: 'How was your thought with others?'}
  ],
  index : 0
}

  handleClickNext = () => {
  let i = this.state.index < this.state.questions.length ? this.state.index += 1 : 0;
  if (i === this.state.questions.length) {
    i=0
  }
  this.setState({ index: i });
  };

  handleClickBefore = () => {
  let i = this.state.index > 0 ? this.state.index -= 1 : 0;
  this.setState({ index: i });
  };

  render() {
    return (
      <Card>
     <CardHeader
       title="Play the self check game."
       subtitle="A game for mind ..."
       actAsExpander={true}
      // showExpandableButton={true}
     />
     <CardTitle>
       {this.state.questions[this.state.index].question}
     </CardTitle>
     <CardText>
       {this.state.questions[this.state.index].description}
     </CardText>
     <CardActions>
       <FlatButton label="Previous Question" onClick={this.handleClickBefore} />
       <FlatButton label="Next Quesion" onClick={this.handleClickNext} />
     </CardActions>
   </Card>
    );
  }
}

export default SelfCheck;
