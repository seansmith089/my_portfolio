import "./navbar.css"
import { useEffect } from "react";

function NavScreenBlur({navBlur}) {

    useEffect(() => {
        if(navBlur){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    }, [navBlur]);


    return ( 
       <div className={navBlur ? "navBlur" : ""}></div>
     );
}

export default NavScreenBlur;