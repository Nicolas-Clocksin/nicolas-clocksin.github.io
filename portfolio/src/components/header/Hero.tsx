import profileImage from "../../assets/profile_picture.jpeg";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <img
          alt="Nicolas Clocksin Portfolio Picture"
          src={profileImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Nicolas Clocksin</h1>
          <p className="py-6">
            I am a full-stack web developer with a passion for creating
            innovative and user-friendly applications. I have experience in
            JavaScript, TypeScript, React, Node.js, Express, MongoDB, SQL, HTML,
            and CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
