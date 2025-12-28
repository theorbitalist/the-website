import BlogContent from "./BlogContent";
import BlogHeader from "./BlogHeader";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#e7e7e7]">
        <BlogHeader/>
        <BlogContent/>
    </div>
  )
}
