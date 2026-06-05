import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ServiceDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();


    const singleDetails = data.find(service => service.serviceId == id);

    return (
        <div>
            return (
            <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
                <div className="card bg-base-100 shadow-xl p-6">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        {singleDetails?.serviceName}
                    </h1>

                    <img
                        src={singleDetails?.image}
                        alt={singleDetails?.serviceName}
                        className="w-full h-72 object-cover rounded-lg mb-6"
                    />
                </div>

                <div className="card bg-base-100 shadow-xl p-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Book Service
                    </h2>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            Swal.fire({
                                title: "Success!",
                                text: "Service booked successfully!",
                                icon: "success",
                                confirmButtonText: "OK"
                            });

                            e.target.reset();
                        }}
                        className="space-y-4"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required
                        />

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Book Now
                        </button>

                    </form>
                </div>

            </div>
            );
        </div>
    );
};

export default ServiceDetails;