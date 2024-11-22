const Breadcrumb = () => {
  return (
    <div >
      <div className="mb-7">
        <nav className="flex items-center text-sm ">
          <a href="/" className="text-orange-600 hover:text-orange-700">Trang chủ</a>
          <span className="mx-2">{'>'}</span>
          <a href="/blog" className="text-orange-600 hover:text-orange-700">Chia sẻ kinh nghiệm</a>
          <span className="mx-2">{'>'}</span>
          <a href="/blog/article" className="text-orange-600 hover:text-orange-700">
            Bạn Nguyễn Quang Hưng - Học Data là 1 quá trình và mình đã vượt qua nó như thế nào
          </a>
        </nav>
      </div>
    </div>
  )
}
export default Breadcrumb