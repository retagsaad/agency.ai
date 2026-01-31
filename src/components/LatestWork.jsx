import React from "react";
import assets from "../assets/assets";

function LatestWork() {
  const workData = [
    {
      id: 1,
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      img: assets.work_mobile_app,
    },
    {
      id: 2,
      title: "Dashboard management",
      description: "We help you excute your plan and deliver results.",
      img: assets.work_dashboard_management,
    },
    {
      id: 3,
      title: "Fitness app promotion",
      description:
        "We help you create a markting strategy that drives results.",
      img: assets.work_fitness_app,
    },
  ];
  return (
    <div
      id="work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <div className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <h1 className="text-3xl sm:text-5xl font-medium">Our Latest Work</h1>
        <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map(({ id, title, description, img }) => (
          <div
            key={id}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={img} className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm opacity-60 w-5/6">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestWork;
