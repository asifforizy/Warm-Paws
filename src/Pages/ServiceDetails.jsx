import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();


    const singleDetails = data.find( service => service.serviceId == id);

    return (
        <div>
            {
                singleDetails && (
                    <h1>
                        {singleDetails.serviceName}
                    </h1>
                )
            }
        </div>
    );
};

export default ServiceDetails;