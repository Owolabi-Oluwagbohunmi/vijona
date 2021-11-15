import bulletRed from "../public/assets/red-bullet.svg";
import Image from "next/image";

const Bullet = ({textVal}) => {
  return (
    <div className="flex my-5">
      <div className="mr-3">
        <Image src={bulletRed} />
      </div>
      <p className="w-10/12">{textVal}</p>
    </div>
  );
};

export default Bullet;
