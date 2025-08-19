import Image from "next/image";
import Link from "next/link";
import Download from "@/components/download";

export default function Home() {
  return (
    <div>
      {/* mobile */}
      <div className="py-4 md:hidden">
        <h1 className="text-white uppercase font-[900] text-xl text-center">
          Download the mvpviva app onto your phone today
        </h1>
        <p className="mt-2 text-[#ffeb9e] text-md italic text-center font-bold uppercase">
          Download now and enjoy
        </p>
      </div>
      {/* web */}
      <div className="hidden my-10 md:block">
        <h1 className="text-white uppercase font-[900] text-[38px]/10 text-center">
          আমাদের MVPVIVA মোবাইল অ্যাপ আজই ডাউনলোড করুন
        </h1>
        <p className="mt-2 text-3xl text-[#ffeb9e] text-md italic text-center font-bold uppercase">
          MVPVIVA এর সাথে রোমাঞ্চ উপভোগ করুন!
        </p>
      </div>
      <Download />
      <div className="hidden max-w-[1230px] mx-auto mt-10 md:px-5 md:block">
        <div className="flex items-center justify-center gap-10">
          <div className="">
            <Image
              src="/img/MVPVIVA _JOIN.png"
              width={300}
              height={300}
              alt="Join now"
              className=""
            />
          </div>
          <div className="w-[50%] text-white text-center">
            <p className="font-bold text-[26px] text-pretty mb-5">
              লক্ষ লক্ষ খেলোয়াড়ের সাথে যোগ দিন এবং অসংখ্য গেমস উপভোগ করুন যা
              আপনার হাতের নাগালেই!
            </p>
            <p className="font-bold text-[26px] text-pretty">
              প্রতিদিন আকর্ষণীয় পুরষ্কার! মজা করে খেলুন এবং জিতুন।
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-[#ffeb9e] text-center uppercase text-[36px]/10 font-[900] text-pretty">
            এখনই MVPVIVA মোবাইল অ্যাপ ডাউনলোড করুন এবং খেলা শুরু করুন!
          </h2>
          <div className="flex items-center justify-center mt-15 gap-10">
            <div className="flex flex-col items-center">
              <Image
                src="/img/QR_Android.png"
                width={300}
                height={300}
                alt="QR Android"
                className="mb-5"
              />
              <Link href="https://www.googggle-ph.com/2721742772/2721742772_home.html?rb=XRH4d6iP&tplhx=1">
                <Image
                  src="/img/Android_download_button_bang.png"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/QR_IOS.png"
                width={300}
                height={300}
                alt="QR Android"
                className="mb-5"
              />
              <Link href="https://mvpviva.live/JZ2KH">
                <Image
                  src="/img/IOS_home_screen_button_bang.png"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center pb-10">
          <Image
            src="/img/websitelower_BANG.png"
            width={0}
            height={0}
            alt="Step 3"
            sizes="100vw"
            style={{ width: "85%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
