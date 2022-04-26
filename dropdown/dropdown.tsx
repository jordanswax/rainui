import React, { useEffect, useRef, useState } from 'react'
import {BiDownArrow} from 'react-icons/bi';  
import './dropdown.css';

function Dropdown(props:any) {
    const [active,setActive] = useState(false);
    
    

    
useEffect(() => {
    console.log(active);
},[active]);
    return (
        
        
        <div className="rain-dropdown" >
         
          <button className={`rainbtn-dropdown ` + (active ? 'dropdown-isOpen': '') +' '+ props.className} onClick={()=>setActive(!active)}>{props.name}<BiDownArrow id="dropdown-arrow"/></button>
            { active ?
            <div className={'dropdown-menu'} onClick={()=> {
                setTimeout(()=>
            setActive(!active) ,200);}}>
                {props.children}
            </div>
            : null
            }
        </div>
    );
    
}

export {Dropdown};

interface DropDownItemProps {
    name: any,
    onClick: any,
    className: string,

}




function DropdownItem(props:DropDownItemProps){
    
    
    return (
        <button className={"dropdown-menu-item "+' '+props.className} onClick={props.onClick}>{props.name}</button>

    );
}

export {DropdownItem};


