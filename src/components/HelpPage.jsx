import React from "react";
import assets from "../assets/assets";

function HelpPage() {
  const services = [
    {
      id: 1,
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      id: 2,
      title: "Content marketing",
      description: "We help you excute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      id: 3,
      title: "Content writing",
      description:
        "We help you create a markting strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      id: 4,
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with you audiance.",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <h1 className="text-3xl sm:text-5xl font-medium">How can we help?</h1>
      <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
        From stategy to execution, we craft digital solutions that move your
        business forward.
      </p>
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
                <img
                  src={icon}
                  className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
