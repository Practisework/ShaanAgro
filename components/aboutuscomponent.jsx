import Image from "next/image";
const AboutUsComponent = (props) => {
  return (
    <>
      {props.imgPos === true ? (
        <>
          <div class="container mx-auto flex p-5 md:flex-row flex-col-reverse items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p class="mb-8 text-justify leading-relaxed text-2xl text-black">
                {props.content}
              </p>
            </div>
            <div class="lg:max-w-lg mb-8 lg:w-full  md:w-1/2 w-full">
              <Image
                class="object-cover object-center rounded"
                alt="hero"
                height={600}
                width={720}
                src={props.imgSrc}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="container mx-auto flex p-5 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
              <Image
                class="object-cover object-center rounded"
                alt="hero"
                height={600}
                width={720}
                src={props.imgSrc}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p class=" mb-8 leading-relaxed lg-w-1/2 text-justify  text-2xl text-black">
                {props.content}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutUsComponent;
