import Container from "@/components/container";
import Image from "next/image";
import cm4 from '../../../../../public/images/cm4.jpg'
import { Title } from "@/components/title";

export const AllCampaign = () => {

  return (
    <Container>
        <Title title="Popular Campaigns" headTitle="Donate Now"></Title>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 mx-auto">
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-80 transition transform hover:scale-105 hover:shadow-lg">
      {/* Date */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-center py-1 px-2 rounded-md z-10">
        <p className="text-sm font-bold">13</p>
        <p className="text-xs font-semibold">Feb</p>
      </div>

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={cm4}
          alt="Free Group Checking"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">Free Group Checking</h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.
          Lorem ipsum dolor sit.
        </p>
      </div>
    </div>
  
          
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-80 transition transform hover:scale-105 hover:shadow-lg">
      {/* Date */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-center py-1 px-2 rounded-md z-10">
        <p className="text-sm font-bold">13</p>
        <p className="text-xs font-semibold">Feb</p>
      </div>

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={cm4}
          alt="Free Group Checking"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">Free Group Checking</h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.
        </p>
      </div>
    </div>

      
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-80 transition transform hover:scale-105 hover:shadow-lg">
      {/* Date */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-center py-1 px-2 rounded-md z-10">
        <p className="text-sm font-bold">13</p>
        <p className="text-xs font-semibold">Feb</p>
      </div>

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={cm4}
          alt="Free Group Checking"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">Free Group Checking</h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.
        </p>
      </div>
    </div>
    </div>
    </Container>
  );
};
