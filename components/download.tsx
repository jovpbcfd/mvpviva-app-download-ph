"use client";

import { useState } from "react";
import Image from "next/image";
import AndroidDownload from "./android-download";
import Link from "next/link";

export default function Download() {
  const [selected, setSelected] = useState("android");
  return (
    <div className="text-white md:hidden">
      <div className="space-x-2 flex items-center justify-center flex-row mx-2">
        <button
          type="button"
          className={`${
            selected === "android"
              ? "active-btn text-black shadow-md"
              : "bg-[linear-gradient(135deg,#3e4b7c_0%,#283151_100%)]"
          } uppercase font-semibold rounded-md px-3 py-2 text-pretty text-wrap max-w-xs leading-5`}
          onClick={() => setSelected("android")}
        >
          android download
        </button>
        <button
          type="button"
          className={`${
            selected === "ios"
              ? "active-btn text-black shadow-md"
              : "bg-[linear-gradient(135deg,#3e4b7c_0%,#283151_100%)]"
          } uppercase font-semibold rounded-md px-3 py-2 text-pretty text-wrap max-w-xs leading-5`}
          onClick={() => setSelected("ios")}
        >
          mvpviva ios home screen
        </button>
      </div>
      <div>
        {selected === "android" && (
          <div className="pt-5 relative w-full h-auto">
            <AndroidDownload />
          </div>
        )}
        {selected === "ios" && (
          <div className="pt-5 relative w-full h-auto">
            {/* <Image
              src="/img/ios.webp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Steps for andriod"
            /> */}
            <div>
              <h2 className="text-[#ffeb9e] text-center text-xl  uppercase font-[900] py-2">
                mvpviva ios home screen
              </h2>
              <div className="px-4">
                <div className="mb-4">
                  <h3 className="pt-5 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">1</span>
                    <span className="text-md text-balance">
                      Launch the Safari app on your IOS Device and go to
                      <Link
                        href="https://jk6.co/CPE6s7"
                        className="block text-[#ffeb9e]"
                      >
                        https://jk6.co/CPE6s7
                      </Link>
                    </span>
                  </h3>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">2</span>
                    <span className="text-md">
                      Press the &quot;
                      <span className="font-semibold">SHARE</span>&quot; button.
                    </span>
                  </h3>
                  <div className="rounded-md">
                    <Image
                      src="/img/2_IOS.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Step 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">3</span>
                    <span className="text-md">
                      Select &quot;
                      <span className="font-semibold">Add to Home Screen</span>
                      &quot;.
                    </span>
                  </h3>
                  <div className="rounded-md">
                    <Image
                      src="/img/3_IOS.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Step 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">4</span>
                    <span className="text-md">
                      Press &quot;
                      <span className="font-semibold">Add</span>
                      &quot; button.
                    </span>
                  </h3>
                  <div className="rounded-md">
                    <Image
                      src="/img/4_IOS.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Step 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">5</span>
                    <span className="text-md">
                      Enjoy playing with MVPVIVA by simply clicking the app.
                    </span>
                  </h3>
                </div>
              </div>
              <div className="pb-10">
                <div className="mt-10 py-2 flex items-center justify-center border-y-1 border-gray-300/50">
                  <p>MVPVIVA @ 2025 | All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
