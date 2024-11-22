const Library = () => {
  return (
    <div className="flex justify-center mt-10 w-full h-full mb-10">
      <div className="text-center">
        <p className="text-xl font-bold text-[#F1692F] mb-4">Thư Viện Ảnh</p>
        <span className="block w-52 h-1 bg-[#F1692F] mx-auto mb-6"></span>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <p className="bg-[#F1692F] w-[837px] h-[300px] flex items-center justify-center text-white rounded-md shadow-md">
              Image 1
            </p>
            <p className="bg-[#D9D9D9] w-[439px] h-[300px] flex items-center justify-center text-black rounded-md shadow-md">
              Image 2
            </p>
          </div>
          <div className="flex space-x-4">
            <p className="bg-[#D9D9D9] w-[439px] h-[300px] flex items-center justify-center text-black rounded-md shadow-md">
              Image 3
            </p>
            <p className="bg-[#F1692F] w-[837px] h-[300px] flex items-center justify-center text-white rounded-md shadow-md">
              Image 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
