import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="mt-[78px] lg:mt-[51px]">
      {/*<div className="mt-6"><Link href="/">Bring back the Pictures</Link></div>*/}
      <iframe width="560" height="315" className="w-full h-[100vh] mt-12 rounded-md" src="https://www.youtube.com/embed/OIQQbx77z6k?si=HPHdrYfenqBS_FxZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}
