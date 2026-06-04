import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';

const Services = () => {
     const services = useLoaderData();
    return (
        <div>

            <section className="my-10 sm:my-16 lg:my-20 px-4 sm:px-8 lg:px-20 xl:px-40">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
                    Popular Winter Care Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services?.
                        map((service) => (
                            <Card key={service.id} service={service} />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Services;