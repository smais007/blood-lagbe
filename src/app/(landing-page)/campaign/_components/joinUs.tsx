import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const JoinUs = () => {
    return (
        <div>

            <div className="bg-red-500 text-white flex justify-between items-center p-16">
                {/* Text */}
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Let’s change the world, Join us now!
                </h2>

                {/* Button */}
                <Link href='/contact'>
                    <Button> Contact Us</Button>
                </Link>
            </div>

        </div>
    )
}


