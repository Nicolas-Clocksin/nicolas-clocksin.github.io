import { GraduationCap } from "lucide-react";
function AboutStory() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="card bg-base-200 shadow-lg">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>
            I'm a full-stack software developer with a bachelor's degree in
            Software Engineering from Arizona State University. I have a strong
            passion for building and developing applications. My professional
            experience includes web applications that support lunar imaging and
            scientific data, as well as creating tools that improve workflows. I
            enjoy working on both front-end and back-end development, and I have
            experience with a variety of programming languages and frameworks.
            I'm always eager to learn new technologies and improve my skills as
            a developer. What I enjoy most about software development is the
            ability to continously learn and tackle new challenges. I find it
            rewarding to see my work come to life and make a positive impact on
            users. I'm always exploring new technologies and looking for
            opportunities to expand my skills as a developer.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-6">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>
            <ul className="timeline">
              <li>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2013-2017</time>
                </div>
                <div className="timeline-middle">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <h3 className="font-bold">Sandra Day O'Connor</h3>
                  <p className="text-sm text-base-content/70">
                    High School Diploma, 2017
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2017-2020</time>
                </div>
                <div className="timeline-middle">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <h3 className="font-bold">Glendale Community College</h3>
                  <p className="text-sm text-base-content/70">
                    Associate of Science in Computer Science, 2020
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2020-2025</time>
                </div>
                <div className="timeline-middle">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <h3 className="font-bold">Arizona State University</h3>
                  <p className="text-sm text-base-content/70">
                    Bachelor of Science in Computer Science, 2025
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Skills</h2>
            <p>
              I have obtained several certifications in web development and
              programming, which have helped me stay current with the latest
              industry standards and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
