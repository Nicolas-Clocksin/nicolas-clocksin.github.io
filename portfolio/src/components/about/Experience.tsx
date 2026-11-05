function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Professional Experience</h2>

        <div className="space-y-4">
          <details className="collapse collapse-arrow border border-base-300 bg-base-100">
            <summary className="collapse-title">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:pr-8">
                <div>
                  <h3 className="font-semibold">
                    Full Stack Software Developer
                  </h3>
                  <p className="text-sm text-base-content/60">
                    Intuitive Machines
                  </p>
                </div>

                <span className="text-sm text-base-content/60">
                  2026 – Present
                </span>
              </div>
            </summary>

            <div className="collapse-content"></div>
          </details>
        </div>
        <div className="space-y-4">
          <details className="collapse collapse-arrow border border-base-300 bg-base-100">
            <summary className="collapse-title">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:pr-8">
                <div>
                  <h3 className="font-semibold">
                    Full Stack Software Developer Internship
                  </h3>
                  <p className="text-sm text-base-content/60">Fabric Health</p>
                </div>

                <span className="text-sm text-base-content/60">2025</span>
              </div>
            </summary>

            <div className="collapse-content"></div>
          </details>
        </div>
        <div className="space-y-4">
          <details className="collapse collapse-arrow border border-base-300 bg-base-100">
            <summary className="collapse-title">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:pr-8">
                <div>
                  <h3 className="font-semibold">Care Coordinator</h3>
                  <p className="text-sm text-base-content/60">Fabric Health</p>
                </div>

                <span className="text-sm text-base-content/60">
                  2020 – 2025
                </span>
              </div>
            </summary>

            <div className="collapse-content"></div>
          </details>
        </div>
        <div className="space-y-4">
          <details className="collapse collapse-arrow border border-base-300 bg-base-100">
            <summary className="collapse-title">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:pr-8">
                <div>
                  <h3 className="font-semibold">Assistant Manager</h3>
                  <p className="text-sm text-base-content/60">
                    Harkins Theatres
                  </p>
                </div>

                <span className="text-sm text-base-content/60">
                  2017 – 2020
                </span>
              </div>
            </summary>

            <div className="collapse-content"></div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Experience;
