import BlogContent from "./content/Blogcontent/BlogContent"
import BlogPost from "./content/Blogcontent/BlogPost"
import Searchblog from "./content/Blogcontent/Searchblog"

const Blogpage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 h-full" >
      <Searchblog />
      <div className="flex ">
        <BlogContent />
      </div>
      <BlogPost/>
    </div>
  )
}
export default Blogpage