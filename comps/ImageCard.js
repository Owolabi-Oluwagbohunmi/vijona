import Image from 'next/image';
import Link from 'next/link';




const ImageCard = ({ImageUrl,heading,text, linkText}) => {
  return (
    <div className="relative text-white ">
    <Image src={ImageUrl} />
    <div className="absolute bottom-5 px-5 w-full">
      <h4 className="text-2xl font-semibold">{heading}</h4>
      <p className="text-base my-4">{text}</p>
      <Link href="/">
      <a className="lg:block text-center  py-3 px-5 text-white rounded bg-v-yellow my-4">
          {linkText}
        </a>
      
      </Link>
      
    </div>
  </div>
  )
}

export default ImageCard
