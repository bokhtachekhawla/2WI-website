import Image from "next/image";
import Atom from "../../images/shapes/Atom.png";

const CounterAtom = ({time, timeleft, isHidden=false}) => {
  return (
    <div className={`${isHidden&& 'hidden md:flex'} relative -mt-12`}>
      <Image src={Atom} height={80} width={80} />
      <div className="absolute top-1/4 right-[32%]">
        <p className="font-semibold text-center text-xs lg:text-base">{timeleft}</p>
        <p className="text-center text-[8px] sm:text-sm">{time}</p>
      </div>
    </div>
  );
};

export default CounterAtom;
