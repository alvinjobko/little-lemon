import SpecialCard from "./CardInfo/SpecialCard";
import GreekSalad from "../image/greek salad.jpg";
import Bruschetta from "../image/bruchetta.svg";
import LemonDessert from "../image/lemon dessert.jpg";
import TestimonialCard from "./CardInfo/TestimonialCard";
function Main() {
  return (
    <section className="padding-top">
      <article className="main-article">
        <h1>This weeks specials</h1>
        <button className="action-button">Online Menu</button>
      </article>
      <section className="SpecialCard-grid">
        <SpecialCard
          image={GreekSalad}
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          image={Bruschetta}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <SpecialCard
          image={LemonDessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
        />
      </section>

      <section className="padding-top">
        <article>
          <h1 className="main-article center">Testimonials</h1>
          <section className="Testimonials-grid">
            <TestimonialCard
              name="Micheal Caldwell"
              description="This is the best Mediterranean food that I've ever had!"
            />
            <TestimonialCard
              name="Alan Chen"
              description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."
            />
            <TestimonialCard
              name="Casey Lau"
              description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."
            />
            <TestimonialCard
              name="John Rosenblum"
              description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."
            />
            <TestimonialCard
              name="Jim Reynor"
              description="The food here really refreshed me after a late night shift
                at the local supply depot."
            />
            <TestimonialCard
              name="Brian Dean"
              description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."
            />
            <TestimonialCard
              name="Tyler Tohmine"
              description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."
            />
            <TestimonialCard
              name="Jack Hu"
              description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"
            />
          </section>
        </article>
      </section>
    </section>
  );
}
export default Main;
