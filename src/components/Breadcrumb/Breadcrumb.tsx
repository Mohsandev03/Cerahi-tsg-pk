import React from 'react';
import Link from 'next/link';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Pros {
    heading: string;
    subHeading: string;
    backgroundImage: string; // New prop for the background image URL
}

const Breadcrumb: React.FC<Pros> = ({ heading, subHeading, backgroundImage }) => {
    return (
        <div
            className="breadcrumb-block style-shared"
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="breadcrumb-main overflow-hidden">
                <div className="container lg:pt-[135px] pt-24 pb-10 relative">
                    <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
                        <div className="text-content">
                            <div className="heading1 text-center">{heading}</div>
                            <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                                <Link href="/">Homepage</Link>
                                <Icon.CaretRight size={14} className="text-secondary2" />
                                <div className="text-orange-200 capitalize">{subHeading}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
