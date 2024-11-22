
const Search = () => {
  return (
    <div className="space-y-6">
      <div className=" w-full">
        <input
          className="w-full h-[43px] pl-12 border border-gray-300 rounded-3xl shadow-sm focus:shadow-lg focus:ring focus:ring-gray-300 focus:outline-none px-4"
          type="text"
          placeholder="Tìm kiếm"
        />
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
          MCI
          <br />
          Careers
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

export default Search;
