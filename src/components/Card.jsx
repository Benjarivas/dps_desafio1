import React from "react";

const Card = (props) => {
  return (
    <>
        {props.details.map((value, index) => (
            <div className="card" key={index}>
                 <div className="card-image">
                    <img src={value.img}/>
                </div>
            <div>
                <p className="card-title">{value.title}</p>
                <p className="description">{value.description}</p>
                <p className="sector">{value.sector}</p>
            </div>
        </div>
    ))}
    
    </>
  );
};

export default Card;