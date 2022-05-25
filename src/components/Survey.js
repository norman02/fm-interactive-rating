import React from 'react';

class Survey extends React.Component {
    render() {
        return (
          <div>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All feedback
              is appreciated to help us improve our offering!
            </p>
            <form>
              <input type="radio" id="1" name="rating" value="1"></input>
              <label for="1">1</label>
              <input type="radio" id="2" name="rating" value="2"></input>
              <label for="1">2</label>
              <input type="radio" id="3" name="rating" value="3"></input>
              <label for="1">3</label>
              <input type="radio" id="4" name="rating" value="4"></input>
              <label for="1">4</label>
              <input type="radio" id="5" name="rating" value="5"></input>
              <label for="1">5</label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      }
}

export default Survey;