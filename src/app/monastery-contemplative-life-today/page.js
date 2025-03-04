import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="mt-[78px] lg:mt-[51px]">
      {/*<div className="mt-6"><Link href="/">Bring back the Pictures</Link></div>*/}
      <iframe width="560" height="315" className="w-full h-[100vh]" src="https://www.youtube.com/embed/07Q9TtRka34?si=FDmVIMJPzLr5bghh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}