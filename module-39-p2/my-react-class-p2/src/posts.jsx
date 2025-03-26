import { use } from "react"
import Post from "./post";
export default function Posts({postsPromis}){
const posts = use(postsPromis)
 
    return(
        <div className="style">
            <h2>All Posts Hear :{posts.length} </h2>
            {
                posts.map(post=><Post post={post} key={post.id}></Post>)
            }
        </div>
    )
}