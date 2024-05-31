import React, { useState } from "react";

const Contactform = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [prod, setProd] = useState("");
  let [addr, setAddr] = useState("");

  const Submitform = async (event) => {
    event.preventDefault();
    fetch(
      "{youtube}",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone_no: phone,
          Product: prod,
          Address: addr,
        }),
      }
    ).then(() => {
      window.alert("आम्ही तुम्हाला थोड्या वेळा नंतर कॉल करू");
    });
  };

  return (
    <>
      <h1 className="text-3xl text-black text-center">संपर्क साधा</h1>
      <section className="text-gray-600 body-font relative">
        <form action="">
          <div className="container px-5 py-10 mx-auto flex sm:bg-white sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 md:w-1/2 mt-24 h-96 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469.02291983830975!2d73.97167372163274!3d19.8744779807339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddbb3ed4ee3d55%3A0xe3d1b5b9fccd4259!2sSHAAN%20AGRO%20(SINNAR)!5e0!3m2!1sen!2sin!4v1716979971284!5m2!1sen!2sin"
              ></iframe>
              <div className="bg-white relative hidden md:flex lg:flex flex-wrap py-0 lg:py-6 md:py-6 rounded shadow-md">
                <div className="lg:w-1/2  px-6">
                  <h2 className="font-semibold text-gray-900 tracking-widest ">
                    पत्ता
                  </h2>
                  <p className="mt-1">
                    प्लॉट नंबर . डी. ८७माळेगाव MIDC, सिन्नर, जि नाशिक.
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className=" font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-main leading-relaxed">
                    shaanagro21@gmail.com{" "}
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+91 8484980030</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/3 bg-white flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  तुमचे नाव
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-main text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  फोन नंबर
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-main text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  ई-मेल आय.डी
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-main focus:ring-2 focus:ring- text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  तुमचा पत्ता
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setAddr(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-main focus:ring-2 focus:ring- text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  तुम्ही खरेदी करू इच्छित असलेल्या औजाराचे नाव
                </label>
                <input
                  type="text"
                  onChange={(e) => setProd(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-main focus:ring-2 focus:ring- text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                onClick={Submitform}
                className="text-white bg-main border-0 py-2 px-6 focus:outline-none rounded text-lg"
              >
                नोंदणी पूर्ण करा
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contactform;
