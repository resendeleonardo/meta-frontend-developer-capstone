import React from "react";
import CallToAction from "./CallToAction";
import Card from "./Card";
import greeksalad from "../../assets/greek-salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemondessert from "../../assets/lemon-dessert.jpg";


const Specials = () => {
  return (
    <>
      <section>
        <div className="pt-16 pb-16 px-5 sm:px-20 xl:px-72 bg-white ">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-3xl text-black font-semibold">This weeks speacials!</h2>
            <CallToAction to="/" text="Online Menu" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <Card imageUrl={greeksalad} title="Greek salad" price="$12.99" 
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." 
            />
            <Card imageUrl={bruchetta} title="Bruchetta" price="$ 5.99" 
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." 
            />
            <Card imageUrl={lemondessert} title="Lemon Dessert" price="$ 5.00" 
              description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
