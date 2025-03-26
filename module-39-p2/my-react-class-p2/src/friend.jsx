export default function Friend({friend}){
    const {name,email}= friend;
    return(
        <div className="style">
            <h3>Name :{name} </h3>
            <p>Email : {email}</p>
        </div>
    )
}