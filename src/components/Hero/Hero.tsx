import React from 'react';
import { HeroHeader } from './HeroHeader';
import { HeroImage } from './HeroImage';
import { HeroMission } from './HeroMission';

const Hero: React.FC = () => {
  return (
    <section className="text-center">
      <div className="bg-white w-full pb-52 max-md:max-w-full max-md:pb-[100px]">
        <div className="flex flex-col relative min-h-[819px] mb-[-42px] items-center pt-[52px] pb-[25px] px-20 max-md:max-w-full max-md:mb-2.5 max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3706c3c5cb18fa36a17251cf4caa2ff9ce4826ee?placeholderIfAbsent=true"
            alt="Background image"
            className="absolute h-full w-full object-cover inset-0"
          />
          <div className="relative flex w-[908px] max-w-full flex-col items-stretch">
            <HeroHeader 
              title="Discover the NCI Data Sharing Lifecycle"
              subtitle="NCI's Data Sharing Approach Starts and Ends with the Patient in Mind"
            />
            <HeroImage 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76a68309905b0d51fafcd097ff2380e4891dc2a8?placeholderIfAbsent=true"
              alt="NCI Data Sharing Lifecycle illustration"
            />
            <HeroMission 
              title="NCI Office of Data Sharing (ODS) Mission:"
              description={
                <>
                  To direct a comprehensive data sharing vision and strategy for
                  NCI which advocates for the proper{" "}
                  <span style={{ color: "rgba(255,0,0,1)" }}>
                    (something something)
                  </span>{" "}
                  broad and equitable data sharing and the needs of the cancer
                  research and patience communities.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;