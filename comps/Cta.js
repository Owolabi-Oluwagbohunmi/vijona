import Image from "next/image";
import Link from "next/link";




const Cta = ({ImageUrl, heading, text, href, buttonText}) => {
  return (
    <section className="relative x-10">
        <Image src={ImageUrl} alt={Image} layout="responsive" objectFit="contain"  />
        <div className="absolute top-0 left-0 flex px-4 py-3 w-full xl:w-full mx-auto justify-between  items-center sm:p-10   xl:p-20 ">
          <div className="sm:w-3/4 text-white">
            <h4 className="sm:text-2xl xl:text-cta w-11/12 sm:w-10/12 text-bold">
             {heading}
            </h4>
            <p className="text-sm xl:text-base my-3 w-10/12 xl:w-7/12">
              {text}
            </p>
          </div>

          <Link href={href} className="w-1/4">
            <a className="lg:block text-center py-2 px-2 sm:py-3 sm:px-5 text-white rounded bg-v-yellow my-4">
              {buttonText}
            </a>
          </Link>
        </div>
      </section>
  )
}

export default Cta
