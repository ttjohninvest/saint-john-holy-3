import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="mt-[78px] lg:mt-[51px]">
      {/*<div className="mt-6"><Link href="/">Bring back the Pictures</Link></div>*/}
      <iframe
        width="560"
        height="315"
        className="w-full h-[100vh] rounded-md"
        src="https://www.youtube.com/embed/0QlhmGTSjFY?si=onn2V2bSDyq2DfT6"
        title="Singing of the Holy Rosary"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
