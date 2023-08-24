import React from "react";

const Experience = () => {
  return (
    <>
      <div className="mb-4">
        <h3 className="font-bold">October 2021 - Present</h3>
        <h5 className="text-slate-500">The Hartford Fire Insurance</h5>
        <h3 className="font-bold mb-2">Staff Software Engineer</h3>
        <p className="text-sm">
          In this role, I spearheaded enhancements to the Risk Evaluation
          application, resulting in a 25% usability boost and streamlined
          underwriting processes. I provided technical guidance, fostering a
          collaborative development environment, and led architecture changes
          for improved code reusability and faster development. Collaborating
          with UX designers, I created reusable UI components that reduced
          development time. Through code reviews and cross-functional teamwork,
          I ensured high-quality, stable products. I also mentored junior
          developers and contributed to the advancement of inner source
          libraries, promoting innovation and knowledge sharing.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">June 2018 - October 2021</h3>
        <h5 className="text-slate-500">Duke Energy</h5>
        <h3 className="font-bold mb-2">Senior IT Software Engineer</h3>
        <div className="text-sm">
          <p>
            Responsible for creating critical customer as well as employee
            facing applications featuring HTML, CSS, JavaScript, TypeScript,
            Angular 5+, Google Maps APIs such as Geocoding, Places and Search
            API. Worked closely with different departments to create many
            critical frontend web applications. Created many reusable components
            that can be used in different applications. Used different angular
            UI component libraries such as Angular Material and PrimeNG. Worked
            closely with UX designers and followed the strict design guidelines
            to create attractive, responsive and easy to use web applications.
            Experience in working on different stages of the software
            development process starting from design thinking to delivery of
            working software. Worked with different teams in a collaborative
            working environment. Mentored the junior developers to follow best
            practices in software development. Integrated Google Analytics in
            multiple projects. Experience working in Agile/Scrum development
            process. Bi-Monthly meetings with stockholders and customers to ask
            about feedback and show how team implemented past feedback towards
            working software. Hands-on experience working with Apigee Proxies
            and Concourse Pipelines (CI - CD).
          </p>
          <p className="font-bold mb-1 mt-2">Publically Available projects:</p>
          <ul className="font-bold text-xs ">
            <li>
              <p>
                Duke Energy Outage Maps -{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://outagemaps.duke-energy.com"
                  target="_blank"
                >
                  https://outagemaps.duke-energy.com
                </a>
              </p>
            </li>
            <li>
              <p>
                Web Outage Reporting -{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://outagereport.duke-energy.com"
                  target="_blank"
                >
                  https://outagereport.duke-energy.com
                </a>
              </p>
            </li>
            <li>
              <p>
                Street And Area Light Repair -{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://salor-web.duke-energy.app"
                  target="_blank"
                >
                  https://salor-web.duke-energy.app
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
