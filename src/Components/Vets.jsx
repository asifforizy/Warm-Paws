import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const VetsSection = () => {
    const vets = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialization: "Small Animal Specialist",
            image:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
        },
        {
            id: 2,
            name: "Dr. Michael Brown",
            specialization: "Pet Nutrition Expert",
            image:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
        },
        {
            id: 3,
            name: "Dr. Emily Davis",
            specialization: "Veterinary Surgeon",
            image:
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800",
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            specialization: "Winter Pet Care Specialist",
            image:
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800",
        },
    ];

    return (
        <section className="px-4 sm:px-8 lg:px-20 xl:px-40 py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Meet Our Expert Vets
            </h2>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="rounded-2xl"
            >
                {vets.map((vet) => (
                    <SwiperSlide key={vet.id}>
                        <div className="hero bg-base-200 rounded-2xl shadow-xl min-h-[500px]">
                            <div className="hero-content flex-col lg:flex-row gap-10">

                                <img
                                    src={vet.image}
                                    alt={vet.name}
                                    className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover h-[350px]"
                                />

                                <div className="text-center lg:text-left">
                                    <h1 className="text-3xl font-bold">
                                        {vet.name}
                                    </h1>

                                    <p className="py-4 text-lg text-gray-500">
                                        {vet.specialization}
                                    </p>

                                    
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default VetsSection;