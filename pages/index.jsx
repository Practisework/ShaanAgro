import { animate, motion } from "framer-motion";
import Image from "next/image";
import GarudPoloRotaryTiller from "../public/images/GarudPoloRotaryTiller.jpeg";
import GarudPlusRotaryTiller from "../public/images/GarudPlusRotaryTiller.jpeg";
import GarudBalerPolo from "../public/images/GarudBalerPolo.jpeg";
import Contactform from "@/components/ContactForm";
import HeroImage from "../public/images/5.jpg";
const animationVariants = {
  animate: {
    y: [0, 30, 0], // Fade in, fade out, fade in (loop)
    opacity: [1, 1, 0],
    transition: { duration: 2, ease: "easeInOut" }, // Customize duration and easing
  },
};

export default function Home() {
  return (
    <>
      {/* desktop view //////////// */}
      <section class="text-black hidden md:flex lg:flex sm:hidden">
        <div class="container mx-auto py-10  flex px-5 md:flex-row flex-col items-center">
          <div class="lg:w-1/2 md:w-1/2 mr-32 bg-gray-300 rounded-lg overflow-hidden  flex items-end justify-start relative">
            <Image
              class="object-cover object-center rounded"
              alt="hero"
              src={HeroImage}
              height={10000}
              width={1000}
            />
          </div>
          <div class="lg:flex-grow md:w-2/3 flex flex-col text-center">
            <h1 class="text-center text-8xl mb-4 font-medium text-gray-900">
              शान ॲग्रो
            </h1>
            <p class="mb-8 leading-relaxed text-4xl">
              समजूतदार शेतकऱ्याची पहिली आवड
            </p>
            <div className="flex justify-center">
              <div className="flex justify-around w-full lg:flex md:hidden ">
                <div class=" w-3/6 ">
                  <Image
                    class="object-cover lg:h-72 md:h-36 w-full border-gray-500  border-2 rounded-xl shadow-mainShadow object-center"
                    alt="hero"
                    src={GarudBalerPolo}
                    height={600 / 2}
                    width={720 / 2}
                  />
                </div>
                <div class="w-3/6 ">
                  <Image
                    class="object-cover lg:h-72 md:h-36 w-full border-gray-500  border-2 rounded-xl shadow-mainShadow object-center"
                    alt="hero"
                    src={GarudPlusRotaryTiller}
                    height={600 / 2}
                    width={720 / 2}
                  />
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center items-center">
              <button className="bg-main text-center py-3 px-4 text-lg mt-10 w-52 shadow-mainShadow text-white">
                अधिक औजारे बघा
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* mobile view //////////// */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="my-10 lg:hidden md:hidden"
      >
        <h1 className="text-center text-6xl">शान ॲग्रो</h1>
        <h2 className="text-center text-4xl">समजूतदार शेतकऱ्याची पहिली आवड </h2>
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-main text-center py-3 px-4 text-lg mt-10 mx-32 shadow-mainShadow text-white"
          >
            अधिक औजारे बघा
          </motion.button>
        </div>
        <div className="flex justify-center">
          <motion.div
            variants={animationVariants}
            loop={Infinity} // Set loop to Infinity for continuous animation
            animate="animate"
            className="bg-white border-8 flex justify-center rounded-3xl w-8 h-16 cursor-pointer border-black"
          >
            <motion.div
              variants={animationVariants}
              loop={Infinity} // Set loop to Infinity for continuous animation
              animate="animate"
              className="rounded-3xl bg-black h-3 my-1 w-3"
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
      <section class="text-gray-600 body-font">
        <h1 className="text-3xl text-black text-center">शेतीचे औजारे</h1>
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap m-4">
            {/* /////////////////////// da */}
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-72 md:h-36 w-full object-cover object-center"
                  src={GarudPoloRotaryTiller}
                  height={350}
                  width={720}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    गरुड पोलो रोटरी टील्लर
                  </h1>
                  <p class="leading-relaxed mb-3">
                    "एक गियर-बॉक्स आहे ज्यामुळे ते संतुलित राहते आणि कंपन होत
                    नाही. विशेष डिझाइन केलेले ब्लेडचा वापर केल्याने ट्रॅक्टरवरचा
                    भार कमी होतो, डिझेलची बचत होते आणि टायर घसरत नाहीत."
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-main cursor-pointer text-xl inline-flex items-center md:mb-2 lg:mb-0">
                      अधिक माहिती बघा
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-72 md:h-36 w-full object-cover object-center"
                  src={GarudPlusRotaryTiller}
                  height={400}
                  width={720}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    गरुड प्लस रोटरी टील्लर
                  </h1>
                  "रोटाव्हेटर हे उच्च कार्यक्षमतेवर, डिझाइनवर आणि कार्यक्षमतेवर
                  भर देणारे यंत्र आहे. जलद आणि स्वस्त मशागतीसाठी हे उत्तम पर्याय
                  आहे. हेलिकल आकाराच्या फळ्या ट्रॅक्टरवर कमी भार टाकतात,
                  त्यामुळे ते वापरण्यास अधिक स्वस्त आहे.
                  <p class="leading-relaxed mb-3"></p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-main cursor-pointer text-xl inline-flex items-center md:mb-2 lg:mb-0">
                      अधिक माहिती बघा
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-72 md:h-36 w-full object-cover object-center"
                  src={GarudBalerPolo}
                  height={400}
                  width={720}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    गरुड बेलर पोलो
                  </h1>
                  <p class="leading-relaxed mb-3">
                    "दर हंगामात मोठ्या प्रमाणात सिलेज, हय आणि स्ट्रॉ बेल्स तयार
                    करण्यासाठी यंत्राच्या तज्ञानाने केलेल्या अभियांत्रिकीची
                    आवश्यकता असते. पिकांना नुकसान न करता, त्यांचे समान आकार आणि
                    घनतेमध्ये दाबण्यासाठी बेलिंग प्रक्रिया शक्य तितक्या प्रभावी
                    असणे आवश्यक आहे.",
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-main text-xl cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                      अधिक माहिती बघा
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactform />
    </>
  );
}
