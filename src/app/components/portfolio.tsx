import React from "react";

const Portfolio = () => {
  return (
    <main className="p-6">
      <div className="container max-w-md md:max-w-3xl md:flex w-auto bg-white mx-auto h-auto my-5 rounded-xl drop-shadow-md tracking-wide">
        <div className="md:mx-0 md:w-1/3 h-auto md:border-r-2 p-4 md:pl-6 pt-10 rounded-t-xl md:rounded-l-xl md:rounded-tr-none bg-slate-800 text-white">
          <section>
            <div className="mx-auto w-44 h-44 bg-slate-100 rounded-full mb-7">
            </div>
          </section>
          <section className="mt-12">
            <h2 className="font-black text-xl mb-3 border-b-2">Contact</h2>
            <div className="pb-4">
              <h3 className="text-xs font-bold">Phone</h3>
              <p className="text-xs font-light">704-361-8461</p>
            </div>
            <div className="pb-4">
              <h3 className="text-xs font-bold">Email</h3>
              <p className="text-xs font-light">urvesh21@gmail.com</p>
            </div>
            <div className="pb-4">
              <h3 className="text-xs font-bold">Location</h3>
              <p className="text-xs font-light">Charlotte Area, NC</p>
            </div>
          </section>
          <section className="mt-2">
            <h2 className="font-black text-xl mb-3 border-b-2">Education</h2>
            <div className="pb-4">
              <p className="text-xs font-light">2015</p>
              <h3 className="text-xs font-bold">
                Post Graduate Certificate in Mobile Application Development
              </h3>
              <p className="text-xs font-light">Lambton College</p>
            </div>
            <div className="pb-4">
              <p className="text-xs font-light">2013</p>
              <h3 className="text-xs font-bold">
                Bachelors in information technology
              </h3>
              <p className="text-xs font-light">
                Charotar University of Science and Technology, India
              </p>
            </div>
          </section>
          <section className="mt-2">
            <h2 className="font-black text-xl mb-3 border-b-2">Expertise</h2>
            <p className="text-xs font-light">HTML, CSS, Javascript</p>
            <p className="text-xs font-light">Angular, React, Next.js</p>
            <p className="text-xs font-light">Node.js, Responsive design</p>
            <p className="text-xs font-light">
              Google Analytics, Java, MongoDB, AWS
            </p>
          </section>
        </div>
        <div className="md:w-3/4 h-auto p-4 text-gray-500 pt-10 tracking-wide">
          <section>
            <h1 className="text-5xl text-slate-800 tracking-wide">
              <span className="font-bold">Urvesh</span>{" "}
              <span className="font-light">Patel</span>
            </h1>
            <p className="tracking-wider text-lg mb-2">
              Staff Software Engineer
            </p>
            <p className="text-sm tracking-wide">
              Highly skilled senior software engineer with over 5+ years of
              progressive experience in the software industry, specializing in
              User Interface Design and Development. Proficient in
              conceptualizing, designing, and coding technical solutions, with a
              focus on MVC Frameworks, particularly Angular (versions 2 to 13),
              and extensive knowledge in HTML5, CSS3, JavaScript, jQuery,
              Node.js, React, Next.js, and Responsive Web Design.
            </p>
          </section>
          <section>
            <h2 className="text-2xl mt-4 mb-4 border-b border-gray-500">
              Experience
            </h2>

            <div className="mb-4">
              <h3 className="font-bold text-gray-500">
                October 2021 - Present
              </h3>
              <h5 className="text-gray-500">The Hartford Fire Insurance</h5>
              <h3 className="text-gray-500 font-bold mb-2">
                Staff Software Engineer
              </h3>
              <p className="text-sm text-gray-500">
                In this role, I spearheaded enhancements to the Risk Evaluation
                application, resulting in a 25% usability boost and streamlined
                underwriting processes. I provided technical guidance, fostering
                a collaborative development environment, and led architecture
                changes for improved code reusability and faster development.
                Collaborating with UX designers, I created reusable UI
                components that reduced development time. Through code reviews
                and cross-functional teamwork, I ensured high-quality, stable
                products. I also mentored junior developers and contributed to
                the advancement of inner source libraries, promoting innovation
                and knowledge sharing.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-500">
                June 2018 - October 2021
              </h3>
              <h5 className="text-gray-500">Duke Energy</h5>
              <h3 className="text-gray-500 font-bold mb-2">
                Senior IT Software Engineer
              </h3>
              <div className="text-sm text-gray-500">
                <p>
                  Responsible for creating critical customer as well as employee
                  facing applications featuring HTML, CSS, JavaScript,
                  TypeScript, Angular 5+, Google Maps APIs such as Geocoding,
                  Places and Search API. Worked closely with different
                  departments to create many critical frontend web applications.
                  Created many reusable components that can be used in different
                  applications. Used different angular UI component libraries
                  such as Angular Material and PrimeNG. Worked closely with UX
                  designers and followed the strict design guidelines to create
                  attractive, responsive and easy to use web applications.
                  Experience in working on different stages of the software
                  development process starting from design thinking to delivery
                  of working software. Worked with different teams in a
                  collaborative working environment. Mentored the junior
                  developers to follow best practices in software development.
                  Integrated Google Analytics in multiple projects. Experience
                  working in Agile/Scrum development process. Bi-Monthly
                  meetings with stockholders and customers to ask about feedback
                  and show how team implemented past feedback towards working
                  software. Hands-on experience working with Apigee Proxies and
                  Concourse Pipelines (CI - CD).
                </p>
                <p className="font-bold mb-1 mt-2">
                  Publically Available projects:
                </p>
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
          </section>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
