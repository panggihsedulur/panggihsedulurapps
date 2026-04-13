import React from "react";
import { Chau_Philomene_One } from "next/font/google";

import { ExpandableCardDemo } from "./client/ExpandableCardDemo";
const chauPhilomene = Chau_Philomene_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// --- MAIN COMPONENT ---
export default function Section1() {
  return (
    <div className="relative w-full overflow-hidden font-sans">
      {/* Background Image with Gradient Mask */}
      {/* <div
        className="absolute inset-0 z-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a72ca2f3-9dd1-4fe4-84ba-fe86468a5237_3840w.webp?w=800&q=80)] bg-cover bg-center opacity-40"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-20 md:pb-20 lg:px-8 min-h-">
        <h1
          className={`text-5xl mb-3 text-center min-h-24 ${chauPhilomene.className} text-gradient`}
        >
          <span className="font-edwardian text-8xl mr-2 ">U</span>
          km
          <span className="font-edwardian text-8xl mr-2">P</span>aguyuban
        </h1>
        <div className="flex flex-row gap-6 justify-center items-start flex-wrap mt-12">
          <ExpandableCardDemo
            title="Whispering Forest"
            src="/images/components/expandable-card/haunted-house.webp"
            description="A Yokai Tale"
          ></ExpandableCardDemo>
          <ExpandableCardDemo
            title="Whispering Forest"
            src="/images/components/expandable-card/haunted-house.webp"
            description="A Yokai Tale"
          ></ExpandableCardDemo>
          <ExpandableCardDemo
            title="Whispering Forest"
            src="/images/components/expandable-card/haunted-house.webp"
            description="A Yokai Tale"
          ></ExpandableCardDemo>{" "}
          <ExpandableCardDemo
            title="Whispering Forest"
            src="/images/components/expandable-card/haunted-house.webp"
            description="A Yokai Tale"
          ></ExpandableCardDemo>{" "}
          <ExpandableCardDemo
            title="Whispering Forest"
            src="/images/components/expandable-card/haunted-house.webp"
            description="A Yokai Tale"
          ></ExpandableCardDemo>
        </div>
      </div>
    </div>
  );
}
