import { use } from "react"

export default function Friends({friendPromis}){
    const Fiends = use(friendPromis)
    console.log(Fiends);
    return(
        <div>
        <h2>Friend : {Fiends.length} </h2>
        </div>
    )
}