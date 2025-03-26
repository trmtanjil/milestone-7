 export default function Post({post}){
    const {title,userId,body}=post
    return(
        <div className="style">
            <h3>Titel :{title} </h3>
            <p>userId :{userId} </p>
            <p>Body : {body}</p>
        </div>
    )
 }