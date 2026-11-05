import profileImage from "../../assets/profile_picture.jpeg";
import HeroCard from "./HeroCard";
function Hero() {
  return (
    <section className="hero bg-base-200">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <HeroCard />
        <div className="flex justify-center lg:justify-end">
          <img
            alt="Nicolas Clocksin Portfolio Picture"
            src={profileImage}
            className="aspect-square w-64 rounded-full object-cover shadow-2xl ring-4 ring-primary/20 sm:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
