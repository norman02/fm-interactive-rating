import star from "../icon-star.svg";
const Thanks = () => {
  return (
    <div>
      <div className="component-text">
        <img className="star" src={star} alt="" />
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>

    </div>
  );
};

export default Thanks;
