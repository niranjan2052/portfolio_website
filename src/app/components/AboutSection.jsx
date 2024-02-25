"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TAB_DATA } from "../constant/constant";


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="md:grid md:grid-cols-2 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Images/about-image.jpg"
          alt="about image"
          className=""
          width={500}
          height={500}
        />
        <div className="md:ml-5 flex flex-col h-full">
          <h2 className="mt-10 md:mt-0 text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a full stack MERN Developer with a passion of creating
            interactive and responsive web applications. I have experience
            working with JavaScript, HTML, CSS, React, Redux, Node.js, Express,
            SQL, MongoDB, and Git. I am a quick learner and I am always looking
            to expand my knowledge and skill set. I am excited to work with
            others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t)=>t.id===tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
