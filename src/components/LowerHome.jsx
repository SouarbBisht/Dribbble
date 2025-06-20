  import React from "react";
  import Tags from "./Tags";
  import { Search } from "lucide-react"; 

  function LowerHome() {
    const title = [
      "landing page",
      "e-commerce",
      "mobile app",
      "logo design",
      "dashboard",
      "icons",
    ];

    const description = [
      "Animation",
      "Illustration",
      "Branding",
      "Mobile",
      "Print",
      "Product Design",
      "Typography",
      "Web design",
    ];

    return (
      <div className="flex items-center lg:gap-4 justify-center flex-col gap-8">
        <div className="">
          <h1 className=" mt-12  text-[24px] lg:text-[60px] lg:font-[700] lg:w-[638px] text-center font-Montserrat">
            Discover the world’s top designers
          </h1>
        </div>
        <div>
          <p className="lg:w-[500px] w-[300px] text-center">
            Explore work from the most talented and accomplished designers ready
            to take on your next project
          </p>
        </div>
        <div className="top-[370px]">
          <div className="relative w-[314px] lg:w-[714px]">
  <input
    className="w-full h-[60px] lg:h-[64px] bg-[#ECECEC] rounded-[100px] pl-5 pr-14" // pr-14 gives space for icon
    type="text"
    placeholder="What are you looking for? "
  />
  <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
</div>
        </div>
        <div className="flex lg:gap-2 lg:flex-row flex-wrap gap-2 justify-center items-center">
          <p>Trending Searches</p> 

          {title.map((e) => (
            <Tags heading={e} />
          ))}
        </div>
        <div className="flex justify-center flex-wrap items-center gap-4 mt-16">
          <div className="">
            <p>following</p>
          </div>
          <div>
            <Tags heading={"discover"} />
          </div>
          
            {description.map((e) => (
              <p className=" m-1">{e}</p>
            ))}
          
        </div>
      </div>
    );
  }

  export default LowerHome;
