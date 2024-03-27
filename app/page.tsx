import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="">
        go to the dashboard protected route
        <Link href="/dashboard" className={buttonVariants()}>
          click me
        </Link>
      </div>
    </div>
  );
};

export default Home;
