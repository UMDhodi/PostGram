import PostForm from "@/components/forms/PostForms"
import Loader from "@/components/shared/Loader";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom"

const EditPost = () => {
  const { id } = useParams();
  console.log("ID:", id); // Add this line for debugging

  const { data: post, isPending } = useGetPostById(id || '');

  if (isPending) return <Loader />;


  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img 
            src="/assets/icons/edit.svg" 
            alt="edit"
            height={36}
            width={36}
            className="invert-white"
          />

          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>

        <PostForm action="Update" post={post}  />

      </div>
    </div>
  )
}

export default EditPost;