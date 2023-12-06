import React from "react";
import '../Menu/menu.css';
import background from '../../assets/slider.jpg'
import Navbar from "../Navbar/navbar";
import Manakish from "../Manakish/Manakish";
import Pizza from "../Pizza/Pizza";
import Muaajanet from "../Muaajanet/Muaajanet";




function Menu(){


return(
<>
    <div className="">
        <img src={background} alt="background img" className="image-back"></img>
    </div>

    <div>
        <Navbar />
    </div>

    <div dir="rtl" className="manakish">
        <Manakish />
        <Pizza/>
        <Muaajanet/>

    </div>

</>
);

}

export default Menu;
