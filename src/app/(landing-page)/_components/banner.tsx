import Container from "@/components/container"
import Image from "next/image"
import { ButtonCard } from "./buttonCard"
import heartIcon from '../../../../public/images/heart.png'
import bagIcon from '../../../../public/images/heart.png'
import one from '../../../../public/images/3.png'
import on from '../../../../public/images/1.png'
import two from '../../../../public/images/6.png'
import three from '../../../../public/images/7.png'
import four from '../../../../public/images/11.png'
import banner from '../../../../public/images/banner2.png'

export const Banner = () => {
    return (
        <>
            <Container>
                <div className="flex flex-col items-center bg-white px-10 h-screen">
                    {/* Logo and Title */}
                    <div className="flex flex-col items-center lg:flex-col">
                        <div className="flex items-center mb-2 gap-1 flex-wrap justify-center lg:justify-start">
                            {/* Heart and Bag Icons */}
                            <Image
                                src={heartIcon}
                                alt="Heart Icon"
                                width={150}
                                height={200}
                                className="w-24 h-auto md:w-32 lg:w-36 flex-shrink-0"
                            />

                            <div className="flex items-center relative">
                                <h1 className="text-4xl md:text-6xl font-bold text-[#be1d2f]">BLOOD</h1>
                                <Image src={on} alt="Bag Icon" width={50} height={50} />
                                <h1 className="text-4xl md:text-6xl font-bold text-[#be1d2f]">BANK</h1>
                            </div>
                            <Image
                                className="ml-0 mt-10 lg:ml-12 w-60 h-auto lg:w-80"
                                src={banner}
                                alt="Banner Icon"
                                width={350}
                                height={400}
                            />
                        </div>
                        <h1 className="absolute pt-32 lg:pt-44 md:pt-48 pr-0 lg:pr-[240px] text-2xl md:text-4xl font-bold uppercase text-center lg:text-left">
                            Management System
                        </h1>
                    </div>


                    {/* Slogan */}
                    <p className="mt-4 text-xl lg:text-2xl font-extrabold text-black text-center">
                        GIVE BLOOD, GIVE PLASMA, SHARE LIFE, SHARE OFTEN
                    </p>

                    {/* Buttons */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 w-full max-w-5xl">
                        <ButtonCard imageSrc={one} color="bg-red-400/40" label="BLOOD AVAILABILITY SEARCH" width={50} height={50} />
                        <ButtonCard imageSrc={two} color="bg-red-400/40" label="BLOOD TYPES AND DETAILS" width={50} height={50} />
                        <ButtonCard imageSrc={three} color="bg-red-400/40" label="SEARCH FOR BLOOD DONOR" width={50} height={50} />
                        <ButtonCard imageSrc={four} color="bg-red-400/40" label="REGISTER AS A VOLUNTEER" width={50} height={50} />
                    </div>
                </div>
            </Container>
        </>
    )
}

