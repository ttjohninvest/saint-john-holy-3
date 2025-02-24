"use client";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      {/*<div className="mt-6"><Link href="/">Bring back the Pictures</Link></div>*/}
      <iframe
        className="w-full h-[100vh] rounded-md"
        src="https://cloisteredlife.com/directory/wahpeton"
        title="description"
      ></iframe>
    </div>
  );
}
