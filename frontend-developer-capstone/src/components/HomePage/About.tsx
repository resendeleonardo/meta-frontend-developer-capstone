import restaurantfood from "../../assets/restauranfood.jpg";
import chef from "../../assets/restaurant-chef-B.jpg";

const About = () => {
  return (
    <>
        <div className="bg-white h-3/4 py-16 px-5 sm:px-20 2xl:px-72">
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="text-black text-3xl">Little Lemon</h2>
                    <h3 className="text-black text-xl">Chicago</h3>
                    <p className="text-black mt-8 w-3/4">
                        We are a family owned Mediterranean restaurant, 
                        focused on traditional recipes served with a modern twist.
                    </p>
                </div>
                <div className="flex items-center justify-end lg:justify-start">
                    <div className="lg:relative mt-10 sm:mt-0 lg:mt-24">
                        <div style={{ backgroundImage: `url(${restaurantfood})`}} className="lg:aboslute h-40 w-40 sm:h-80 sm:w-72 bg-cover rounded-lg"></div>
                        <div style={{ backgroundImage: `url(${chef})`}} className="lg:absolute h-80 w-72 top-[-100px] left-[180px] bg-cover rounded-lg hidden lg:block"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;
