import foodImage from "../image/restauranfood.jpg";

function Main() {
  return (
    <header className="intro-background">
      <article className="article-grid">
        <section className="section-info">
          <h1 className="h1-header">Little Lemon</h1>
          <h2 className="h2-header">Chicago</h2>
          <p className="p-header">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <br></br>
          <button className="action-button" to="/reservations">
            Reserve a table
          </button>
        </section>
        <section className="section-img">
          <img src={foodImage} alt="Little Lemon restaurant cuisine"></img>
        </section>
      </article>
    </header>
  );
}
export default Main;
