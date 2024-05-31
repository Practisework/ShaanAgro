import { animate, motion } from "framer-motion";
import Image from "next/image";
import ploughImg from "../public/images/plough.jpeg";
import cultivatorImg from "../public/images/cultivator.png";
import trolleyImg from "../public/images/trolley.jpeg";
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
                    src={cultivatorImg}
                    height={600 / 2}
                    width={720 / 2}
                  />
                </div>
                <div class="w-3/6 ">
                  <Image
                    class="object-cover lg:h-72 md:h-36 w-full border-gray-500  border-2 rounded-xl shadow-mainShadow object-center"
                    alt="hero"
                    src={ploughImg}
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
              ImageSrc={cultivatorImg}
              title="कल्टीवेटर"
              info="शानच्या कल्टीवेटरसह मातीच्या कठीण परिस्थितीवर मात करा. आमच्या मशीनमध्ये सहज प्रवेशासाठी एक अतिशय मजबूत फ्रेम, सहज ऑपरेशनसाठी हायड्रॉलिक प्रणाली आणि सानुकूलित कामाच्या खोलीसाठी हायड्रॉलिकली ॲडजस्टेबल ड्रॉबार आहे. मजबूत उलाढालीची धुरा दीर्घकाळ टिकणारी कामगिरी सुनिश्चित करते, ज्यामुळे हा शेतकरी कोणत्याही क्षेत्रासाठी एक विश्वासार्ह भागीदार बनतो.
"
              name="cutlivator"
            />
            <Card
              ImageSrc={trolleyImg}
              title="ट्रॉली"
              info="टिकाऊपणा लक्षात घेऊन तयार केलेली ही ट्रॉली मजबूत बिल्ड गुणवत्तेचा अभिमान बाळगते. बेस शीट 6 मिमीच्या वजनाच्या सामग्रीपासून तयार केली जाते, हे सुनिश्चित करते की ते सर्वात जास्त मागणी असलेले भार देखील हाताळू शकते. मजबूत आर्क वेल्डिंग अतिरिक्त ताकद आणि दीर्घायुष्यासाठी फ्रेम मजबूत करते. त्याची लवचिकता आणखी वाढवण्यासाठी, ट्रॉलीला उच्च-गुणवत्तेच्या पेंट्सने लेपित केले जाते जे चिपिंग आणि गंजला प्रतिकार करतात. उत्कृष्ट स्थिरता आणि चालनासाठी, यात विस्तृत टायर्स आहेत जे विविध भूभागांवर अपवादात्मक पकड प्रदान करतात. पॅकेज पूर्ण करणे हे एक हेवी-ड्यूटी एक्सल आहे, जे कार्यक्षमतेशी तडजोड न करता महत्त्वपूर्ण वजनाचे समर्थन करण्यास सक्षम आहे."
              name="trolley"
            />
            <Card
              ImageSrc={ploughImg}
              title="पल्टी नांगर"
              info="अत्यंत आव्हानात्मक भूभागावरही विजय मिळवण्यासाठी तयार करण्यात आलेल्या या पल्टी नांगरात एक अति-मजबूत फ्रेम आहे जी कठीण मातीची परिस्थिती सहजतेने हाताळते. एकात्मिक हायड्रॉलिक सिस्टीम सहज नियंत्रणास अनुमती देते, ज्यामुळे माशीवर नांगरणी खोलीत समायोजन करणे शक्य होते. इष्टतम अंमलबजावणी संलग्नक आणि ट्रॅक्टर अनुकूलतेसाठी, नाविन्यपूर्ण टर्नओव्हर एक्सल वापरून ड्रॉबारची उंची सहजपणे वाढवता किंवा कमी केली जाऊ शकते. हा बहुमुखी नांगर कोणत्याही शेतासाठी कार्यक्षम आणि जुळवून घेण्याजोगा कार्य सुनिश्चित करतो."
              name="plough"
            />
          </div>
        </div>
      </section>
      <Contactform />
    </>
  );
}
