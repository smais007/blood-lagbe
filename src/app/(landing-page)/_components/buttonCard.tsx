import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface ButtonCardProps {
    color: string;     
    label: string;     
    imageSrc: StaticImageData;  
    height: number;    
    width: number;     
}
export const ButtonCard:React.FC<ButtonCardProps> = ({ color, label, imageSrc, height, width }) => {
    return (
        <div className={`flex flex-col justify-center items-center text-center p-4  rounded-lg ${color} text-black hover:text-white font-semibold hover:bg-red-400/90 transition-colors`}>
            <Image className='' src={imageSrc} alt={label} width={width} height={height} />
            <h3 className="ml-2">{label}</h3>
        </div>
    );
};
