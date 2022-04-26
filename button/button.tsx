
import React from 'react'
function Button(props: any) {

    return (
    <button id= {props.id} className={`rainbtn ` + props.className} onClick={()=>props.onClick}>{props.children}</button>
  )

}

export default Button;
