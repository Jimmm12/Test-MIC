

const Searchblog = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <div className="w-full max-w-md bg-white">
        <div className="flex flex-col items-center">
          
          <input
            className="w-full h-[43px] pl-12 pr-4 border border-gray-300 rounded-3xl shadow-sm focus:shadow-lg focus:ring focus:ring-gray-300 focus:outline-none"
            type="text"
            placeholder="Tìm kiếm"
          />
        </div>
      </div>

      <div className="flex justify-between items-center space-x-4 text-center text-gray-700">
        <p className="text-sm text-[#F1692F] font-bold">
          Chia sẻ
          <br />
          kinh nghiệm
        </p>
        <div className="border-l border-[#F1692F] h-8"></div>
        <p className="text-sm text-[#F1692F] font-bold">
          Kiến thức
          <br />
          chuyên môn
        </p>
        <div className="border-l border-[#F1692F] h-8"></div>
        <p className="text-sm text-[#F1692F] font-bold">
          Kinh nghiệm
          <br />
          thực chiến
        </p>
        <div className="border-l border-[#F1692F] h-8"></div>
        <p className="text-sm text-[#F1692F] font-bold">
          MCI Careers
        </p>
        <div className="border-l border-[#F1692F] h-8"></div>
        <p className="text-sm text-[#F1692F] font-bold">
          Lịch
          <br />
          khai giảng
        </p>
      </div>
    </div>
  );
};

export default Searchblog;
