import profileImage from "../../assets/profile_picture.jpeg";
import HeroCard from "./HeroCard";
function Hero() {
  return (
    <section className="hero min-h-[75vh] bg-base-200">
      <div className="hero-content mx-auto flex w-full max-w-6xl flex-col-reverse gap-30 px-6 py-16 lg:flex-row lg:gap-45">
        <HeroCard />
        <img
          alt="Nicolas Clocksin Portfolio Picture"
          src={profileImage}
          className="aspect-square w-64 rounded-full object-cover shadow-2xl ring-4 ring-primary/20 sm:w-80 lg:w-96"
        />
      </div>
    </section>
  );
}

export default Hero;
