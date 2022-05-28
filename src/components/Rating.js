import React from "react";

class Rating extends React.Component {
  render() {
    return (
      <div>
        <form className="survey-rating-from">
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
        </form>
      </div>
    );
  }
}

export default Rating;
