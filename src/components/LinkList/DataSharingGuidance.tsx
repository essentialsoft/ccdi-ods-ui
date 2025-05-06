
import React from "react";
import { GuidanceLink } from "./GuidanceLink";

export const DataSharingGuidance: React.FC = () => {
  const leftColumnLinks = [
    {
      text: "NIH Scientific Data Sharing Guidance",
      href: "#nih-guidance",
    },
    {
      text: "NCI Scientific Data Sharing Guidance",
      href: "#nci-guidance",
    },
    {
      text: "Cancer Moonshot (PADS) Guidance",
      href: "#cancer-moonshot",
    },
  ];

  const rightColumnLinks = [
    {
      text: "Data Sharing Basics",
      href: "#data-sharing-basics",
    },
    {
      text: "NCI Requirements for GDS Policy",
      href: "#nci-requirements",
    },
    {
      text: "Tips for Writing a DMS Plan",
      href: "#dms-plan-tips",
    },
  ];

  return (
    <section className="max-w-none flex flex-col items-start bg-white mx-auto px-[82px] py-[47px] max-md:max-w-[991px] max-md:p-[30px] max-sm:max-w-screen-sm max-sm:p-5">
      <h2 className="text-[32px] font-semibold text-[#7B3D7D] mb-[38px] max-md:text-[28px] max-sm:text-2xl">
        Data Sharing Guidance
      </h2>
      <div className="flex gap-[39px] max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col gap-5">
          {leftColumnLinks.map((link, index) => (
            <GuidanceLink key={index} text={link.text} href={link.href} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {rightColumnLinks.map((link, index) => (
            <GuidanceLink key={index} text={link.text} href={link.href} />
          ))}
        </div>
      </div>
      <div className="w-full h-px bg-[#D8D8D8] mt-[38px]" />
    </section>
  );
};
