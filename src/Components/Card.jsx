import React from 'react';

const Card = ({ service }) => {
    return (
        <div>
            <div key={service.id} className="card bg-base-100 shadow-xl p-5">
                <figure>
                    <img
                        src={service.image}
                        alt={service.serviceName}
                        className="h-60 w-full object-cover"
                    />
                </figure>

                <div className="card-body">
                    <div><h2 className="card-title">
                        {service.serviceName}
                    </h2></div>

                    <div>
                        <p className="font-semibold text-lg text-primary">
                            Price: ${service.price}
                        </p>
                    </div>
                    <hr />

                    <div className="flex justify-between mt-3 ">
                        <h1>Rating: </h1>
                        <h1 className=" px-2 rounded">⭐ {service.rating}</h1>
                    </div>



                    <div className="card-actions ">
                        <button className="btn btn-primary w-full hover:bg-base-100 hover:text-primary border-primary mt-6">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;