import React from "react";
import '../Menu/menu.css';
import background from '../../assets/slider.jpg'
import Navbar from "../Navbar/navbar";
import Manakish from "../Manakish/Manakish";
import Pizza from "../Pizza/Pizza";
import Muaajanet from "../Muaajanet/Muaajanet";
import Drinks from "../Drinks/Drinks";
import Footer from "../Footer/Footer";




function Menu(){


return(
<>
<div className="black-background">
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
        <Drinks/>
        <Footer/>

    </div>
    </div>
</>
);

}

export default Menu;
