import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-2 my-4 rounded-xl  h-full border border-white/20 shadow-sm bg-white/60 backdrop-blur-xl">
      <nav className="flex items-center justify-center gap-4 h-16 text-xl ">
        <Link
          href={"/Home"}
          className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
        >
          خانه
        </Link>
        <Link
          href={"/Home"}
          className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
        >
          محصولات
        </Link>
        <Link
          href={"/Home"}
          className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
        >
          درباره ما
        </Link>
        <Link
          href={"/Home"}
          className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
        >
          تماس با ما
        </Link>
      </nav>
    </header>
  );
}
