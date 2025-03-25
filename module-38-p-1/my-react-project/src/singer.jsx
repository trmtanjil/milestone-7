import './app.css'
export default function Singer({singer}){
   console.log(singer);
   return (
    <div  className='singer'>
                <h3>singer info bd :{singer.name} </h3>
                <h4>singer age bd : {singer.age}</h4>
    </div>
    )
}