import React from 'react';
import star from '../images/star.svg'
import Rating from './Rating';
import Submit from './Submit';

class Survey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        starSrc: star,
      }
    }
    render() {
        return (
          <div>
            <img className='star' src={this.state.starSrc} alt=''/>
            <h1 className='survey-heading'>How did we do?</h1>
            <p className='survey-main-paragraph'>
              Please let us know how we did with your support request. All feedback
              is appreciated to help us improve our offering!
            </p>
            <Rating />
            <Submit />
          </div>
        );
      }
}

export default Survey;