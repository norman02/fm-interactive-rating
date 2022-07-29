import star from "../icon-star.svg";
const Rating = () => {
  return (
    <div>
      <div className="component-text">
        <img className="star" src={star} alt="" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-component">
        <div className="rating">
          <button className="btn btn__rate">1</button>
          <button className="btn btn__rate">2</button>

          <button className="btn btn__rate">3</button>

          <button className="btn btn__rate">4</button>

          <button className="btn btn__rate">5</button>
        </div>
      </div>
      <button className="btn btn__submit">Submit</button>
    </div>
  );
};

export default Rating;
