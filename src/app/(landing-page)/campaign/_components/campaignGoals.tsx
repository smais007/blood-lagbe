import Container from '@/components/container'
import { Title } from '@/components/title'
import Image from 'next/image'
import React from 'react'
import cm4 from '../../../../../public/images/deafult.png'
import triange from '../../../../../public/images/triangle.png'

export const CampaignGoals = () => {
    return (
        <div className=" px-4 md:px-8 lg:px-16">
            <Container>
                <Title
                    title='Campaign Goals'
                    headTitle='The purpose of our campaign is to raise awareness in the community and encourage everyone to come together.'
                />
                <div className='py-16'>
                    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image Section */}
                        <div className="md:w-1/2 p-6 bg-gradient-to-br from-red-500 to-red-600 flex justify-center items-center relative">
                            <div className="absolute inset-0 opacity-20">
                                <Image
                                    src={cm4} // Make sure to add the correct path
                                    alt="Campaign Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Triangle Image with Clip Path */}
                            <div className="relative z-10 w-72 h-72 clip-triangle overflow-hidden">
                                <Image
                                    src={triange}
                                    alt="Blood Donation"
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Empowering Together</h3>
                            <p className="italic text-gray-600 mb-4">
                                "Together we are strong. Your participation will help us reach our goals."
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Join us in our mission to create a positive impact in our community. Your involvement, whether through volunteering, donations, or spreading awareness, is crucial for us to succeed. Together, we can achieve greatness and bring about meaningful change.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>


        </div>
    )
}
