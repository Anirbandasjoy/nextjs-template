import { MarqueeDemo } from "@/components/review/Review";
import React from "react";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-xl font-medium capitalize">
        hello i am nextjs templete
      </h1>
      <MarqueeDemo />
    </div>
  );
};

export default Home;
