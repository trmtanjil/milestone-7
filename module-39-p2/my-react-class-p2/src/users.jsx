import { use } from "react"

export default function Users({fechuser}){
     const users= use(fechuser)

    return(
        <div className={'style'}>
        <h3>users: {users.length}</h3>
        </div>
    )
}