import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Event = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-20 w-full">
        <div className=" flex flex-col p-5">
          <p className="text-xl font-bold text-[#F1692F] mb-4">Sự Kiện Của MIC</p>
          <span className="block w-40 h-1 bg-[#F1692F] mb-6"></span>
          <div className="space-y-4">
            <div className="bg-[#F1692F] w-[500px] h-[250px] flex justify-center items-center text-white rounded-md shadow-md">
              <p className="text-lg font-medium">img1</p>
            </div>
            <div className="bg-[#F1692F] w-[500px] h-[250px] flex justify-center items-center text-white rounded-md shadow-md">
              <p className="text-lg font-medium">img2</p>
            </div>
            <div className="bg-[#F1692F] w-[500px] h-[250px] flex justify-center items-center text-white rounded-md shadow-md">
              <p className="text-lg font-medium">img3</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center justify-center w-12 h-12  rounded-full mx-2">
              <SlArrowLeft className="text-black text-2xl" />
            </div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-[#F1692F] rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full mx-2"></div>

            <div className="flex items-center justify-center w-12 h-12 rounded-full mx-2">
              <SlArrowRight className="text-black text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
