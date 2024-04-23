'use client'
import React, { useState } from 'react'

const Services = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleServices = () => {
        setIsOpen(!isOpen);
    };

    const closeServices = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full'>
            <div className="relative inline-block">
                <button className="hover:text-yellow-700" onClick={toggleServices}>Services</button>
                
                {isOpen && (
                    <div className="flex flex-col text-sm gap-2 pt-5 pl-3">
                        <a className="hover:text-yellow-700 bg-aya-yellow" onClick={closeServices} href="/store/product">1:1 Integration Coaching</a>
                        <a className="hover:text-yellow-700 bg-aya-yellow" onClick={closeServices} href="/store/product">Herbal Healing Consultant</a>
                        <a className="hover:text-yellow-700 bg-aya-yellow" onClick={closeServices} href="/store/product">Rosen Bodywork Session</a>
                        <a className="hover:text-yellow-700 bg-aya-yellow" onClick={closeServices} href="/store/product">Group Integration Session</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services;