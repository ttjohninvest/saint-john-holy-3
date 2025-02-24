import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      {/*<div className="mt-6"><Link href="/">Bring back the Pictures</Link></div>*/}
      <iframe
        width="560"
        height="315"
        className="w-full h-[100vh] mt-12"
        src="https://www.youtube.com/embed/gqu7mtz1ctQ?si=K8poOfCv0bimEMWz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
