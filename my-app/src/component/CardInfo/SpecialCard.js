function SpecialsCard(props) {
  return (
    <article className="menu-card">
      <img className="menu-card-img" src={props.image} alt="Special Menu"></img>
      <section>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <button className="action-button">Order Now</button>
      </section>
    </article>
  );
}

export default SpecialsCard;
