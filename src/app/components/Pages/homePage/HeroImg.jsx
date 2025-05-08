import Image from 'next/image'
import heroImg from '../../../assets/image/home/homeimg.png'

export default function HeroImg() {
    return (
        <div data-aos="zoom-out-up" className="text-white lg:h-[22rem] overflow-hidden border-b border-b-lime-400 ">
            <Image className=' w-10/12  mx-auto ' src={heroImg} alt='heroImg' />
        </div>
    )
}