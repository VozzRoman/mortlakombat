import { FC } from "react";
import imageMenu from '../assets/image/pngegg.png';
import { Link } from 'react-scroll';
interface CharacterMenu {
	hideMenu: boolean;
	setHideMenu: (value: boolean) => void;
	
}

const CharacterMenu: FC <CharacterMenu> = ({hideMenu}) => {


	return (

		<ul className={`
		${hideMenu ? "visible" : "invisible"}
		${hideMenu ? "opacity-100" : "opacity-0"}
		${hideMenu ? "translate-x-[0]" : "translate-x-[-100%]"}
		 fixed w-screen max-w-[300px] transition:visible duration-500 ease-in-out 300ms top-1/2 transform -translate-y-1/2 left-[40px] pt-14 pb-14 pl-[65px] rounded-md text-white text-[20px] font-semibold z-[300]`}>
			<img className="absolute top-0 left-0 w-full h-full object-fill z-[-1] opacity-70" src={imageMenu} alt="menu" />
					<li className='menuLink'>
					<Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link>
			</li>
			<li className='menuLink'>
			<Link activeClass="active" to="predator" spy={true} smooth={true} duration={500}>Predator</Link>
			</li>
			<li className='menuLink'>
			<Link activeClass="active" to="scorpion" spy={true} smooth={true} duration={500}>Scorpion</Link>
			</li>
			<li className='menuLink'>
			<Link activeClass="active" to="subZero" spy={true} smooth={true} duration={500}>Sub Zero</Link>
			</li>
			<li className='menuLink'>
			<Link activeClass="active" to="smoke" spy={true} smooth={true} duration={500}>Smoke</Link>
			</li>
			<li className='menuLink'>
			<Link activeClass="active" to="noob" spy={true} smooth={true} duration={500}>Noob Saibot</Link>
			</li>
			<li className='menuLink'>
			<Link activeClass="active" to="sektor" spy={true} smooth={true} duration={500}>Sektor</Link>
			</li>
			
		</ul>
	
	);
};

export default CharacterMenu;