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
      <div className="rating-component">
        <ul className="rating">
          <li>
            <input type="radio" value="1" name="rating" />{" "}
            <label htmlFor="1" className="input-value">
              1
            </label>
          </li>
          <li>
            <input type="radio" value="2" name="rating" />{" "}
            <label htmlFor="2" className="input-value">
              2
            </label>
          </li>
          <li>
            <input type="radio" value="3" name="rating" />{" "}
            <label htmlFor="3" className="input-value">
              3
            </label>
          </li>
          <li>
            <input type="radio" value="4" name="rating" />{" "}
            <label htmlFor="4" className="input-value">
              4
            </label>
          </li>
          <li>
            <input type="radio" value="5" name="rating" />{" "}
            <label htmlFor="5" className="input-value">
              5
            </label>
          </li>
        </ul>
      </div>
      <button className="btn">Submit</button>
      
    </div>
  );
};

export default Rating;
