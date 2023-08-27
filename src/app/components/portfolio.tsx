import React from "react";
import Image from "next/image";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";
import Expertise from "./Expertise";
import Introduction from "./Introduction";
import profileImg from "../../../public/images/1620434351716.jpeg";

const Portfolio = () => {
  return (
    <main className="p-6">
      <div className="container max-w-md md:max-w-3xl md:flex w-auto bg-white mx-auto h-auto my-5 rounded-xl drop-shadow-md tracking-wide">
        <div className="md:mx-0 md:w-1/3 h-auto md:border-r-2 p-4 md:pl-6 pt-10 rounded-t-xl md:rounded-l-xl md:rounded-tr-none bg-slate-800 text-white">
          <section>
            <Image
              className="mx-auto w-44 h-44 bg-slate-100 rounded-full mb-7"
              src={profileImg}
              height={144}
              width={144}
              alt="Urvesh Patel"
            />
          </section>
          <section className="mt-12">
            <Contact />
          </section>
          <section className="mt-2">
            <Education />
          </section>
          <section className="mt-2">
            <Expertise />
          </section>
        </div>
        <div className="md:w-3/4 h-auto p-4 text-slate-600 pt-10 tracking-wide">
          <section>
            <Introduction />
          </section>
          <section>
            <h2 className="text-2xl mt-4 mb-4 border-b text-slate-700 border-slate-500">
              Experience
            </h2>
            <Experience />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
