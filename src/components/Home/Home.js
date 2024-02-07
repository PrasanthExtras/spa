import React, { useState } from "react";
import Parent from "../Parent";
import "./../../custom.css";
import { useDispatch,useSelector } from "react-redux";
import CarForm from "./CarForm";

const Home = () => {
    const [selectedBrand,setBrand] = useState(0);
    const [isVisible,setVisible] = useState(false); 

    const brands = useSelector(state => state.details.brands);
    
    const brandSelector = (id) => {
        setBrand(id);
        setVisible(true);
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    {brands && brands.map((item) => {
                        const { id,brandname,img } = item;
                        return <div className={`col-md-2 brand_container ${selectedBrand === id ? 'selected' : ''}`} key={id}
                        onClick={() => brandSelector(id)}>
                            <img src={process.env.PUBLIC_URL + img} alt={ brandname } />
                            <p>{brandname}</p>
                        </div>
                    })}
                </div>
                <div className="row mt-5">
                    {isVisible && <CarForm key={selectedBrand} brandid={selectedBrand}/>}
                </div>
            </div>
        </>
    )
}

export default Parent(Home)