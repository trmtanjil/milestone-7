import { use } from "react";
import Friend from "./friend";
export default function Friends({friendPromis}){
    const Fiends = use(friendPromis)
   
    return(
        <div className="style">
        <h2>Friend : {Fiends.length} </h2>

        {
            Fiends.map(friend=><Friend friend={friend}></Friend>)
        }
        </div>
       
    )
}