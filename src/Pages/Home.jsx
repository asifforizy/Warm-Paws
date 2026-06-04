import React from "react";
import { useLoaderData } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Card from "../Components/Card";
import Tips from "../Components/Tips";
import VetsSection from "../Components/Vets";

const Home = () => {
    const services = useLoaderData();

    return (
        <div className="w-full overflow-x-hidden">

            <section className="px-4 sm:px-8 lg:px-20 xl:px-40 py-10 sm:py-16 lg:py-20">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div
                            className="hero min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-xl"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1517849845537-4d257902454a')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="hero-overlay bg-black/50 rounded-xl"></div>
                            <div className="hero-content text-center text-white px-4">
                                <div>
                                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                                        WarmPaws Winter Care
                                    </h1>
                                    <p className="py-2 sm:py-4 text-sm sm:text-base">
                                        Keep your furry friends warm, safe and healthy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            className="hero min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-xl"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="hero-overlay bg-black/50 rounded-xl"></div>
                            <div className="hero-content text-center text-white px-4">
                                <div>
                                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                                        Winter Services For Pets
                                    </h1>
                                    <p className="py-2 sm:py-4 text-sm sm:text-base">
                                        Professional care throughout the cold season.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="my-10 sm:my-16 lg:my-20 px-4 sm:px-8 lg:px-20 xl:px-40">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
                    Popular Winter Care Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services?.
                        sort((a, b) => b.rating - a.rating).
                        slice(0, 6).
                        map((service) => (
                            <Card key={service.id} service={service} />
                        ))}
                </div>
            </section>


            <Tips></Tips>
            <VetsSection></VetsSection>





        </div>
    );
};

export default Home;