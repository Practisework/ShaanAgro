import Image from "next/image";
import Link from "next/link";
const Card = (props) => {
  return (
    <>
      <div class="p-1 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            class="lg:h-72 md:h-36 w-full object-cover object-center"
            src={props.ImageSrc}
            height={350}
            width={720}
            alt={props.title}
          />
          <div class="p-6">
            <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
              {props.title}
            </h1>
            <p class="leading-relaxed mb-3">{props.info}</p>
            <div class="flex items-center flex-wrap ">
              <Link
                href={`/products/${props.name}`}
                class="text-white bg-main py-3 px-6 rounded shadow-mainShadow cursor-pointer text-xl inline-flex items-center md:mb-2 lg:mb-0"
              >
                अधिक माहिती बघा →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
