import Dishicon from "../../image/Dish icon.svg";

function TestimonialCard(props) {
  return (
    <article className="Testimonials-Card">
      <img src={Dishicon} alt="dish icon"></img>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default TestimonialCard;
