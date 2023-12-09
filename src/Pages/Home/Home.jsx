import React from "react";
import '../Home/Home.css';
import { useNavigate} from "react-router-dom";

function Home(){

    const navigate = useNavigate();
    return(
        <div className="black">
            <div class="karish">
                <h5 className="title">كاريش</h5>
                <p>فرن ومعجنات</p>
            </div>

            <div className="open-menu">
                <button className="btn-open-menu" onClick={() => navigate(`/categories`)}>فتح القائمة</button>
            </div>
        </div>
    );
}

export default Home;
