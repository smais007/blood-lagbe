"use client";

import { Button } from "@/components/ui/button";
import { HeartCrack } from "lucide-react";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center flex-col justify-center">
      <HeartCrack className="w-20 h-20 text-red-500" />
      <h1 className="text-xl text-muted-foreground font-medium">
        Something went wrong!
      </h1>
      <Button variant="outline" asChild className="mt-4">
        <a href="/">Go Home</a>
      </Button>
    </div>
  );
};

export default ErrorPage;
