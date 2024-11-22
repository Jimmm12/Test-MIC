const BlogPost = () => {
  return (
    <div className="flex justify-center w-full h-full mt-24 mb-20">
      <div className="text-center">
        <p className="text-xl font-bold text-[#F1692F] mb-4">
          Các bài đăng liên quan
        </p>
        <span className="block w-52 h-1 bg-[#F1692F] mx-auto "></span>

        <div className="flex space-x-8 mt-20">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#F1692F] w-[400px] h-[200px] border  flex justify-center items-center text-white text-lg font-medium shadow-md">
              Image 1
            </div>
            <div className="text-left max-w-[395px]">
              <p className="text-lg font-bold text-[#F1692F] mb-2">
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào
              </p>
              <p className="text-sm text-gray-600  text-justify leading-relaxed">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
              <div className="  mt-3 flex justify-end pr-2 text-[#F1692F] underline font-medium italic">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#F1692F] w-[400px] h-[200px] border flex justify-center items-center text-white text-lg font-medium shadow-md">
              Image 2
            </div>
            <div className="text-left max-w-[395px]">
              <p className="text-lg font-bold text-[#F1692F] mb-2">
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào
              </p>
              <p className="text-sm text-gray-600  text-justify leading-relaxed">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
              <div className=" mt-3 flex justify-end pr-2 text-[#F1692F] underline font-medium italic">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#F1692F]  w-[400px] h-[200px]  flex justify-center items-center text-white text-lg font-medium shadow-md">
              Image 3
            </div>
            <div className="text-left max-w-[395px] ">
              <p className="text-lg font-bold text-[#F1692F] mb-2">
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào
              </p>
              <p className="text-sm text-gray-600  text-justify leading-relaxed">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
              <div className=" mt-3 flex justify-end pr-2 text-[#F1692F] underline font-medium italic">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default BlogPost