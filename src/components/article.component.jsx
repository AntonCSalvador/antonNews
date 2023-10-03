
function Card({title, desc, sameLine}){
    return(
        <div>
            <p>{title} + {sameLine}</p> 
            <p>{desc}</p> 
        </div>

    )
}

export default Card;