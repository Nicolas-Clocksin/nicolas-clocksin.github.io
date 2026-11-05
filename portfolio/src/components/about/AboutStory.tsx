import { Computer, GraduationCap } from "lucide-react";
import Skills from "../shared/Skills";

const education = [
  {
    years: "2013–2017",
    school: "Sandra Day O'Connor High School",
    degree: "High School Diploma, 2017",
  },
  {
    years: "2017–2020",
    school: "Glendale Community College",
    degree: "Associate of Science in Computer Science, 2020",
  },
  {
    years: "2020–2025",
    school: "Arizona State University",
    degree: "Bachelor of Science in Computer Science, 2025",
  },
];

function AboutStory() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
      {/* About Me */}
      <div className="card rounded-2xl border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body p-6 sm:p-8">
          <h3 className="card-title text-xl">My Story</h3>

          <div className="mt-4 space-y-5 text-base leading-7 text-base-content/75">
            <p>
              I'm a full-stack software developer with a bachelor's degree from
              Arizona State University. I have a strong passion for building and
              developing applications.
            </p>

            <p>
              My professional experience includes web applications that support
              lunar imaging and scientific data, as well as creating tools that
              improve workflows. I enjoy working on both frontend and backend
              development.
            </p>

            <p>
              What I enjoy most about software development is the opportunity to
              continuously learn, tackle new challenges, and see my work make a
              positive impact on users.
            </p>
          </div>
        </div>
      </div>

      {/* Education and Skills */}
      <div className="flex flex-col gap-6">
        {/* Education */}
        <div className="card rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-6 sm:p-8">
            <h3 className="card-title gap-3 text-xl">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            <ul className="mt-6 ml-1 border-l-2 border-primary/30 pl-7">
              {education.map((item) => (
                <li key={item.school} className="relative pb-7 last:pb-0">
                  <time className="text-xs font-semibold text-primary">
                    {item.years}
                  </time>

                  <h4 className="mt-1 font-semibold">{item.school}</h4>

                  <p className="mt-1 text-sm text-base-content/65">
                    {item.degree}
                  </p>
                  <span className="absolute -left-[35px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-base-100" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="card rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-6 sm:p-8">
            <h3 className="card-title text-xl">
              <Computer />
              Skills
            </h3>

            <div className="mt-4">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
