import star from "../icon-star.svg";
const Rating = () => {
  return (
    <div>
      <div className="component-text">
        <img src={star} alt="" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div>
        <input type="radio" value="1" name="rating" />{" "}
        <span className="input">1</span>
        <input type="radio" value="2" name="rating" />{" "}
        <span className="input">2</span>
        <input type="radio" value="3" name="rating" />{" "}
        <span className="input">3</span>
        <input type="radio" value="4" name="rating" />{" "}
        <span className="input">4</span>
        <input type="radio" value="5" name="rating" />{" "}
        <span className="input">5</span>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Rating;
