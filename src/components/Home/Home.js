import React, { useState, createContext } from "react";
import Parent from "../Parent";
import "./../../custom.css";
import { useDispatch,useSelector } from "react-redux";
import CarForm from "./CarForm";
export const Details = createContext();
const Home = () => {
    const [selectedBrand,setBrand] = useState(0);
    const [selectedBrandName,setBrandName] = useState('');
    const [isVisible,setVisible] = useState(false); 

    const brands = useSelector(state => state.details.brands);
    
    const brandSelector = (id,brandname) => {
        setBrand(id);
        setBrandName(brandname);
        setVisible(true);
    }

    return(
        <>
            <Details.Provider value={{brand : selectedBrandName}}>
                <div className="container mt-5">
                    <div className="row">
                        {brands && brands.map((item) => {
                            const { id,brandname,img } = item;
                            return <div className={`col-md-2 brand_container ${selectedBrand === id ? 'selected' : ''}`} key={id}
                            onClick={() => brandSelector(id,brandname)}>
                                <img src={process.env.PUBLIC_URL + img} alt={ brandname } />
                                <p>{brandname}</p>
                            </div>
                        })}
                    </div>
                    <div className="row mt-5">
                        {isVisible && <CarForm key={selectedBrand} brandid={selectedBrand}/>}
                    </div>
                </div>
            </Details.Provider>
        </>
    )
}

export default Parent(Home)