import React from 'react'

function Cards(props) {
  return (
    <div class="row">
      {
        props.data.map((row)=>{
          return(
            <div class="col-2" style={{margin:"2%"}}>
            <div class="card" style={{height:"70%",width: "10rem"}}>
             <img src={row.img} class="card-img-top" alt="..."/>
             <div class="card-body">
                <p class="card-text">{row.name}</p>
             
                <p class="card-text">{row.desc}</p>
                <p class="card-text">{row.price}</p>
                <button class="btn btn-primary"onClick={()=>props.handleCartData(row)}>Add to Cart</button>
             </div>
             </div>
           </div>
           

          )
        })
      }
      
    </div>
  )
}

export default Cards