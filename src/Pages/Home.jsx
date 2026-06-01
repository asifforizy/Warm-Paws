import React from "react";
import { useLoaderData } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Card from "../Components/Card";

const Home = () => {
    const services = useLoaderData();

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
        <div>
            <section>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div
                            className="hero min-h-[500px]"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1517849845537-4d257902454a')",
                            }}
                        >
                            <div className="hero-overlay bg-black/50"></div>
                            <div className="hero-content text-center text-white">
                                <div>
                                    <h1 className="text-5xl font-bold">
                                        WarmPaws Winter Care
                                    </h1>
                                    <p className="py-4">
                                        Keep your furry friends warm, safe and healthy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            className="hero min-h-[500px]"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b')",
                            }}
                        >
                            <div className="hero-overlay bg-black/50"></div>
                            <div className="hero-content text-center text-white">
                                <div>
                                    <h1 className="text-5xl font-bold">
                                        Winter Services For Pets
                                    </h1>
                                    <p className="py-4">
                                        Professional care throughout the cold season.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="my-16 lg:px-40 px-5">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-10">
                        Popular Winter Care Services
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services?.map((service) => (
                            <Card key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>






        </div>
    );
};

export default Home;