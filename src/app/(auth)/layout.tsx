"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Container className="pt-4">
        <nav className="flex items-center justify-between pb-10">
          <h1 className="text-2xl font-bold">Bloodify</h1>

          <Button
            asChild
            variant={"link"}
            size={"lg"}
            className="text-base font-semibold"
          >
            <Link href="/">Register</Link>
          </Button>
        </nav>
        <div>{children}</div>
      </Container>
    </div>
  );
};

export default AuthLayout;
