import { Metadata } from "next";
import { UserAuthForm } from "@/features/auth/components/sign-in-card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 items-center">
        <div className="hidden md:block">
          <Image
            src="/blood.png"
            alt="logo"
            width={1000}
            height={1200}
            className="  bg-red-400/10 h-[800px] object-cover rounded-2xl"
          />
        </div>
        <div className="">
          <UserAuthForm />
        </div>
      </div>
    </>
  );
}
