// <<<<<<< felix-blog-page-build
import { earth_moon } from "../../../../assets/images/resources-page";

const HeroSection = () => {
  return (
    <div className="bg-[#E5EFEC] py-9 px-6 border-[0.5px] border-solid border-[#00664E] rounded-2xl relative md:mb-32 mb-12">
      <div className="flex flex-col gap-2 md:w-2/5 w-full ">
        <h5 className="text-xl text-[#009975] font-normal">Resources</h5>

        <h3 className="md:text-3xl text-xl md:leading-[46px] leading-9 font-medium">
          Discover{" "}
          <span className="text-[#009975]">tech tools and resources</span> to
          boost your productivity
        </h3>
        <p className="md:mb-10 md:text-base text-sm font-normal">
          Master the art of tech with our expert guides, tutorials, and
          step-by-step instructions to help you develop proficiency and
          confidence in the world of technology.
        </p>
      </div>

      <img
        src={earth_moon}
        alt="earth & moon"
        className="absolute md:right-12 right-8 -top-16 md:-top-32 lg:-top-40 object-contain w-32 md:w-96 lg:w-fit md:z-10"
      />
    </div>
  );
};

export default HeroSection;
// =======
// import { earth_moon } from "../../../../assets/images/resources-page";

// const HeroSection = () => {
//   return (
//     <div className="bg-[#E5EFEC] py-9 px-6 border-[0.5px] border-solid border-[#00664E] rounded-2xl relative md:mb-32 mb-12">
//       <div className="flex flex-col gap-2 md:w-2/5 w-full ">
//         <h5 className="text-xl text-[#009975] font-normal">Resources</h5>

//         <h3 className="md:text-3xl text-xl md:leading-[46px] leading-9 font-medium">
//           Discover{" "}
//           <span className="text-[#009975]">tech tools and resources</span> to
//           boost your productivity
//         </h3>
//         <p className="md:mb-10 md:text-base text-sm font-normal">
//           Master the art of tech with our expert guides, tutorials, and
//           step-by-step instructions to help you develop proficiency and
//           confidence in the world of technology.
//         </p>
//       </div>

//       <img
//         src={earth_moon}
//         alt="earth & moon"
//         className="absolute md:right-12 right-8 -top-16 md:-top-12 lg:-top-16 object-cover w-32  md:w-[520px] md:h-[520px]  lg:w-[440px] lg:h-[440px] md:z-10"
//       />
//     </div>
//   );
// };

// export default HeroSection;
// >>>>>>> main
