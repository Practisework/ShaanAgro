import { animate, motion } from "framer-motion";
import Image from "next/image";
import GarudPoloRotaryTiller from "../public/images/GarudPoloRotaryTiller.jpeg";

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
            className="bg-main text-center py-3 px-4 text-lg my-10 mx-32 shadow-mainShadow text-white"
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
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {/* /////////////////////// da */}
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={GarudPoloRotaryTiller}
                  height={350}
                  width={720}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={GarudPoloRotaryTiller}
                  height={400}
                  width={720}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={GarudPoloRotaryTiller}
                  height={400}
                  width={720}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
