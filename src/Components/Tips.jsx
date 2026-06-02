import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Tips = () => {
    const tips = [
        {
            title: "Keep Pets Warm",
            description: "Provide cozy bedding and warm clothing during winter.",

        },
        {
            title: "Stay Hydrated",
            description: "Pets need plenty of water even in cold weather.",

        },
        {
            title: "Limit Outdoor Time",
            description: "Avoid exposing pets to extreme cold for long periods.",

        },
        {
            title: "Healthy Diet",
            description: "Nutritious meals help maintain body temperature.",

        },
    ];

    return (
        <section className="px-4 sm:px-8 lg:px-20 xl:px-40 py-10 sm:py-16 lg:py-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">
                Winter Care Tips for Pets
            </h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {tips.map((tip, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero min-h-[350px] rounded-xl bg-base-200">
                            <div className="hero-content text-center px-4">
                                <div className="max-w-2xl">
                                    <h3 className="text-3xl md:text-5xl font-bold">
                                        {tip.title}
                                    </h3>

                                    <p className="mt-4 text-lg md:text-xl">
                                        {tip.description}
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

export default Tips;