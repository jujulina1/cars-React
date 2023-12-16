import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllCars } from "../../services/CarService";
import CarListing from "./CarListing/CarListing";
import Loader from "../Loader/Loader";


export default function Catalog() {

    const [toggle, setToggle] = useState(false);
    const [cars, setCars] = useState([]);
    const [countCars, setCountCars] = useState(true);
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        getAllCars()
            .then(data => {
                setCars(data);
                if (data.length > 0) {
                    setCountCars(true)
                } else {
                    setCountCars(false)
                }
                setLoader(false)
            });


    }, [])


    const onClick = () => { toggle ? setToggle(false) : setToggle(true) };


    return (
        <>
            {loader ? <Loader /> :
                <section>
                    <div className="section layout_padding padding_top_0">

                        <div className="container">

                            <div className="row">

                                <div className="col-lg-8">
                                    <div className="full text_align_right r-img">
                                        <img className="img-responsive" src="images/about_us_2.png" alt="Car Picture" />
                                    </div>
                                </div>

                                <div className="col-lg-4 margin_top_30">
                                    <div className="full margin_top_30">
                                        <h3 className="main_heading _left_side margin_top_30">Our Cars</h3>
                                        <p className="large">We analyzed four vehicle categories with a focus on affordability and value. To select the best-value finalists in each category, we used a methodology that accounts for pricing and available features.</p>
                                    </div>
                                    <div className="full button_section margin_top_30">

                                        <Link onClick={onClick}>{toggle ? `Hide Catalog` : `Show Catalog`}</Link>

                                    </div>
                                </div>

                            </div>

                        </div>

                        {toggle && <CarListing cars={cars} countCars={countCars} />}

                    </div>
                </section>
            }
        </>

    )
}