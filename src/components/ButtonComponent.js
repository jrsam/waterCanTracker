
function ButtonIncrement(props) {
  
    return (
      <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      +1
      </button>
    )
 }
 function ButtonDecrement(props) {
   
   return (
     <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
     -1
     </button>
   )
 }
 
export {
    ButtonDecrement,
    ButtonIncrement
}