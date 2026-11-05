import AboutStory from "./AboutStory";
import Experience from "./Experience";

function About() {
  return (
    <section id="about" className="bg-base-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
        </div>

        <AboutStory />
      </div>

      <Experience />
    </section>
  );
}

export default About;
