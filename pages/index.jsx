import { animate, motion } from "framer-motion";
import Image from "next/image";
import GarudPoloRotaryTiller from "../public/images/GarudPoloRotaryTiller.jpeg";
import GarudPlusRotaryTiller from "../public/images/GarudPlusRotaryTiller.jpeg";
import GarudBalerPolo from "../public/images/GarudBalerPolo.jpeg";
import Contactform from "@/components/ContactForm";
import HeroImage from "../public/images/5.jpg";
import Card from "@/components/Card";
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
            className="bg-main text-center py-3 px-4 text-lg mt-10 mx-0 min-w-12 shadow-mainShadow text-white"
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
        <div class="container px-0 sm:px-8 py-8 mx-auto">
          <div class="flex flex-wrap m-4">
            <Card
              ImageSrc={GarudPlusRotaryTiller}
              title="Garud Plus Rotary Tiller"
              info="एक गियर-बॉक्स आहे ज्यामुळे ते संतुलित राहते आणि कंपन होत नाही.
              विशेष डिझाइन केलेले ब्लेडचा वापर केल्याने ट्रॅक्टरवरचा भार कमी
              होतो, डिझेलची बचत होते आणि टायर घसरत नाहीत."
              name="GarudPlusRotaryTiller"
            />
            <Card
              ImageSrc={GarudPlusRotaryTiller}
              title="Garud Plus Rotary Tiller"
              info="एक गियर-बॉक्स आहे ज्यामुळे ते संतुलित राहते आणि कंपन होत नाही.
              विशेष डिझाइन केलेले ब्लेडचा वापर केल्याने ट्रॅक्टरवरचा भार कमी
              होतो, डिझेलची बचत होते आणि टायर घसरत नाहीत."
              name="GarudPlusRotaryTiller"
            />
            <Card
              ImageSrc={GarudPlusRotaryTiller}
              title="Garud Plus Rotary Tiller"
              info="एक गियर-बॉक्स आहे ज्यामुळे ते संतुलित राहते आणि कंपन होत नाही.
              विशेष डिझाइन केलेले ब्लेडचा वापर केल्याने ट्रॅक्टरवरचा भार कमी
              होतो, डिझेलची बचत होते आणि टायर घसरत नाहीत."
              name="GarudPlusRotaryTiller"
            />
          </div>
        </div>
      </section>
      <Contactform />
    </>
  );
}
