import React from "react";
import '../Menu/menu.css';
import zaatar from "../../assets/zaatar.jpg";
import jebne from "../../assets/jebne.jpg";
import cocktail from "../../assets/cocktail.jpg";
import keshek from "../../assets/keshek.jpg";
import keshekcheese from "../../assets/keshekcheese.jpg";
import banadura from "../../assets/banadura.jpg";
import banaduracheese from "../../assets/banaduracheese.jpg";


function Pizza(){


return(
<>

<div id="بيتزا">

        <h5 className="title-cat">بيتزا</h5>

        <div className="cards-manakish">
            <div className="card">
                <div className="content">
                    <div className="name-price">
                        <p className="name">زعتر</p>
                    </div>

                    <table className="table">
                        <tr className="first-tr">
                            <td>عادي</td>
                            <td></td>
                            <td></td>
                            <td>مشروحة</td>
                        </tr>

                        <tr>
                            <td>40000</td>
                            <td></td>
                            <td></td>
                            <td>50000</td>
                        </tr>
                    </table>
                    <img src={zaatar} alt="zaatar" className="img" />


                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="name-price">
                        <p className="name">جبنة</p>

                    </div>
                    <table className="table">
                        <tr className="first-tr">
                            <td>عادي</td>
                            <td></td>
                            <td></td>
                            <td>مشروحة</td>
                        </tr>

                        <tr>
                            <td>95000</td>
                            <td></td>
                            <td></td>
                            <td>130000</td>
                        </tr>
                    </table>
                    <img src={jebne} alt="zaatar" className="img" />

                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="name-price">
                        <p className="name">كوكتيل</p>
                    </div>

                    <table className="table">
                        <tr className="first-tr">
                            <td>عادي</td>
                            <td></td>
                            <td></td>
                            <td>مشروحة</td>
                        </tr>

                        <tr>
                            <td>70000</td>
                            <td></td>
                            <td></td>
                            <td>100000</td>
                        </tr>
                    </table>
                    <img src={cocktail} alt="zaatar" className="img" />

                </div>
            </div>


            <div className="card">
                <div className="content">
                    <div className="name-price">
                        <p className="name">كشك</p>
                    </div>

                    <table className="table">
                        <tr className="first-tr">
                            <td>عادي</td>
                            <td></td>
                            <td></td>
                            <td>مشروحة</td>
                        </tr>

                        <tr>
                            <td>60000</td>
                            <td></td>
                            <td></td>
                            <td>100000</td>
                        </tr>
                    </table>
                    <img src={keshek} alt="keshek" className="img" />

                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="name-price">
                        <p className="name">كشك مع جبنة</p>
                    </div>

                    <table className="table">
                        <tr className="first-tr">
                            <td>عادي</td>
                            <td></td>
                            <td></td>
                            <td>مشروحة</td>
                        </tr>

                        <tr>
                            <td>85000</td>
                            <td></td>
                            <td></td>
                            <td>110000</td>
                        </tr>
                    </table>
                    <img src={keshekcheese} alt="keshekcheese" className="img" />

                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="name-price">
                        <p className="name"> بندورة وبصل</p>
                    </div>

                    <table className="table">
                        <tr className="first-tr">
                            <td>عادي</td>
                            <td></td>
                            <td></td>
                            <td>مشروحة</td>
                        </tr>

                        <tr>
                            <td>60000</td>
                            <td></td>
                            <td></td>
                            <td>90000</td>
                        </tr>
                    </table>
                    <img src={banadura} alt="banadura" className="img" />

                </div>

            </div>

            <div className="card">
                <div className="content">
                    <div className="name-price">
                        <p className="name"> بندورة وبصل مع جبنة </p>
                    </div>

                    <table className="table">
                        <tr className="first-tr">
                            <td>عادي</td>
                            <td></td>
                            <td></td>
                            <td>مشروحة</td>
                        </tr>

                        <tr>
                            <td>85000</td>
                            <td></td>
                            <td></td>
                            <td>110000</td>
                        </tr>
                    </table>
                    <img src={banaduracheese} alt="banaduracheese" className="img" />

                </div>
            </div>

        </div>
</div>
</>
);

}

export default Pizza;
