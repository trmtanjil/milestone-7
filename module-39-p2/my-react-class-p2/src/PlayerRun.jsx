import { useState } from "react"

export default function PlayerRun(){
    const [run, setrun]=useState(0)
    const [sixes, setsixes]= useState(0)
    const [four, setfour]= useState(0)
    const [oneball, setoneball]= useState(0)

    

    const addedrun0=()=>{
        const new0 = run+0;
        setrun(new0)

        const uponeball=oneball+1
        setoneball(uponeball)
    }
    const addedrun1=()=>{
        const new0 = run+1;
        setrun(new0)

        const uponeball=oneball+1
        setoneball(uponeball)
    }
    const addedrun4=()=>{
        const new0 = run+4;
        setrun(new0)
        const upfour =four+1;
        setfour(upfour)

        const uponeball=oneball+1
        setoneball(uponeball)
    }
    const addedrun6=()=>{
        const new0 = run+6;
        setrun(new0)
        const upsixes =sixes+1;
        setsixes(upsixes)

        const uponeball=oneball+1
        setoneball(uponeball)
    }


    return(
        <div className="style">
            <h2>Bangladesh player : runs</h2>
            {
                run>50 && <p>you Score : 50</p>
            }
            {
                oneball>6 && <p>one over </p> 
            }
            <p>total Ball {oneball}</p>
            <p>sixes : {sixes}</p>
            <p>four : {four}</p>
            <h3>Runs :{run}</h3>

            <button onClick={addedrun0}>run : 0</button>
            <button onClick={addedrun1}>run : 1</button>
            <button onClick={addedrun4}>run : 4</button>
            <button onClick={addedrun6}>run : 6</button>
        </div>
    )
}