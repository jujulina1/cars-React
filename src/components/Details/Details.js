import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import styles from '../Details/Details.module.css'
import { getCarById, deleteCar } from "../../services/CarService";
import { useAuthContext } from '../../contexts/AuthContext'
import Loader from "../Loader/Loader";

export default function Details() {

    const { carId } = useParams();
    const context = useAuthContext();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)

    const [car, setCar] = useState({});
    useEffect(() => {

        console.log('USE EFECT');
        getCarById(carId)
            .then(data => {
                console.log(data);
                setCar(data)
            })
        setLoader(false)
    }, [])

    const onDelete = async () => {
        console.log('ondeleet');
        alert('Are you sure to delete this item?');
        try {
            const response = await deleteCar(carId, context.accessToken);
            const data = await response.json();
            console.log(data);
            if (response.status !== 200) {

                throw new Error(data.message)
            }
            navigate(`/catalog`)
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }
    return (
        <>
            {loader ? <Loader /> :
                <section>
                    <div className={styles.listing}>
                        <h1 className={styles.heading}>Details</h1>
                        <div className={styles.details_info}>
                            <img src={car.image} />
                            <hr />
                            <ul className={styles.listing_props}>
                                <li><span>Brand:</span>{car.brand}</li>
                                <li><span>Model:</span>{car.model}</li>
                                <li><span>Year:</span>{car.year}</li>
                                <li><span>Price:</span>{car.price} $</li>

                            </ul>

                            <p className={styles.description_para}>{car.description}</p>

                            <div className={styles.listings_buttons} >
                                <Link to={`/edit/${carId}`} className={styles.button_list}>Edit</Link>
                                <Link to={`/delete/${carId}`} className={styles.button_list} onClick={onDelete}>Delete</Link>
                            </div>
                        </div>
                    </div>

                </section>
            }
        </>

    )
}