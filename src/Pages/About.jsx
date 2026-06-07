import React from 'react';

const About = () => {
    return (
        <div>
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
                                alt="Dog Walker"
                                className="w-[80%] rounded-3xl shadow-xl"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80"
                                alt="Dog Walking"
                                className="absolute bottom-[-40px] right-0 w-56 rounded-3xl border-8 border-base-100 shadow-xl"
                            />
                        </div>

                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                                About Us
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mt-3">
                                Trusted Pet Care Services For Your Beloved Companion
                            </h2>

                            <p className="py-6 text-base-content/70 leading-relaxed">
                                We are passionate animal lovers dedicated to providing safe,
                                reliable, and professional pet care services. Whether it's dog
                                walking, pet sitting, or daily companionship, our mission is to keep
                                your furry friends happy, healthy, and cared for while you're away.
                            </p>

                            <div className="grid grid-cols-2 gap-5 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="badge badge-primary badge-sm"></div>
                                    <span>Professional Team</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="badge badge-primary badge-sm"></div>
                                    <span>Trusted Service</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="badge badge-primary badge-sm"></div>
                                    <span>Online Booking</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="badge badge-primary badge-sm"></div>
                                    <span>24/7 Support</span>
                                </div>
                            </div>

                            <button className="btn btn-primary">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;