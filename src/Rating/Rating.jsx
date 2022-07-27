import star from "../icon-star.svg";
const Rating = () => {
  return (
    <div>
      <img src={star} alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div>
        <input type="radio" value="1" name="rating" /> 1
        <input type="radio" value="2" name="rating" /> 2
        <input type="radio" value="3" name="rating" /> 3
        <input type="radio" value="4" name="rating" /> 4
        <input type="radio" value="5" name="rating" /> 5
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Rating;
