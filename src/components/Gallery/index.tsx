import React from "react";
import UpdateCard from "./UpdateCard";

const Gallery: React.FC = () => {
  return (
    <section className="flex flex-col items-stretch" aria-labelledby="latest-updates-heading">
      <h2 
        id="latest-updates-heading"
        className="text-[rgba(52,93,133,1)] text-[32px] font-semibold leading-none ml-2.5"
      >
        Latest Updates
      </h2>
      <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[68%] max-md:w-full max-md:ml-0">
            <div className="w-full max-md:max-w-full max-md:mt-8">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.25)] border flex grow items-center gap-2.5 w-full p-2.5 rounded-[0px_28px_0px_28px] border-[rgba(222,234,237,1)] border-solid max-md:mt-3">
                    <div className="self-stretch min-w-60 w-[367px] my-auto">
                      <UpdateCard
                        image="https://cdn.builder.io/api/v1/image/assets/4ccc52d59fb54340b43b3652db0442b6/97f3bfc9e7e32638ff8308a056dc146908e32afd?placeholderIfAbsent=true"
                        title="New Release from CCDC
Lorem Ipsum Dolor Sit Amet Con"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor adipisicing elit, sed do eiusmod tempor incididunt ut labore et do. "
                        readMoreColor="[rgba(118,231,221,1)]"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <UpdateCard
                    image="https://cdn.builder.io/api/v1/image/assets/4ccc52d59fb54340b43b3652db0442b6/0e6b7611b279292b20a0bf158fe0a84a25da039d?placeholderIfAbsent=true"
                    title="CCDC is on the News!"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor adipisicing elit, sed do eiusmod tempor incididunt ut labore et do. "
                    readMoreColor="[rgba(175,241,255,1)]"
                    className="self-stretch w-full my-auto max-md:mt-[22px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(50,48,50,1)] self-stretch w-full my-auto pb-[15px] rounded-[0px_20px_0px_20px] max-md:mt-10">
              <div className="flex flex-col relative z-10 aspect-[1.18] w-full items-stretch justify-center py-px">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4ccc52d59fb54340b43b3652db0442b6/83c3cc07822c243f55f0401627aefc0a97567dec?placeholderIfAbsent=true"
                  alt="Learn more about Lorem Ipsum"
                  className="absolute h-full w-full object-cover inset-0"
                />
                <div className="relative bg-[rgba(217,217,217,1)] flex shrink-0 h-[310px] rounded-[0px_0px_0px_20px]" />
              </div>
              <div className="flex flex-col items-stretch text-lg text-white leading-7 mt-[11px] px-6 max-md:pl-5">
                <div className="font-bold leading-5">
                  Learn more about Lorem Ipsum Dolor Sit Amet Con
                </div>
                <div className="font-normal mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et do.{" "}
                </div>
                <div className="text-[rgba(175,241,255,1)] text-sm font-medium text-right uppercase underline z-10 mr-5 -mt-7 max-md:mr-2.5">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;