import React from 'react'
// import { useStateValue } from "./StateProvider"
import "./Services.css"

function Services(props) {
    // const [{basket}, dispatch] = useStateValue();
    // const addToLine = () => {
    //     dispatch({
    //         type:"addToLine",
    //         item:{
    //             id:props.id,
    //             title:props.title,
    //             image:props.image,
    //             price:props.price,
    //             description:props.desc,
    //         },
    //     });
    // };
    return (
        <div className="services">
            <div className="service_info">
                <h3 className="service__s7">{props.title}</h3>
                <p className="label">{props.label}</p>
                <p className="service_price">
                <span>{props.price}</span>
                </p>
            </div>

            <img src="896790.png" alt="" />
            <button>More</button>

        </div>
    )
}

export default Services
