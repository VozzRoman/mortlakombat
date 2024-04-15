
import './App.css'
import Container from './components/Container'
import pictureOne from './assets/image/predator.jpg';
import pictureOneMore from './assets/image/predator2.webp';
import pictureTow from './assets/image/mk.jpg';
import pictureTowMore from './assets/image/Scorpionmk.jpeg';
import pictureThree from './assets/image/subZero.png';
import pictureTreeMore from './assets/image/subZero2.jpeg';
import pictureFore from './assets/image/smoke.png';
import pictureForeMore from './assets/image/smoke2.webp';
import videoFog from './assets/video/Smoke_transition_longclip_high_quality_4k.mp4';
import pictureFive from './assets/image/noobsaibot.jpeg';
import pictureFiveMore from './assets/image/noob.webp';
import pictureSix from './assets/image/sektor.webp';
import pictureSixMore from './assets/image/sektor2.jpeg';
import logoMK from './assets/image//Mortal-Kombat-logo.png';
import {useInView} from 'react-intersection-observer';
import videFire from './assets/video/Fireball_14___120fps___4k_res.mp4';
import videoSnow from './assets/video/ice_dust_in_deep_sea_floating_abstract_particle_background_with_bokeh.mp4';
import { useEffect, useState } from 'react';
import lightLogo from './assets/video/Smoke_12___35s___4k_res.mp4';
import CharacterMenu from './components/CharacterMenu';
import { IoSettingsOutline } from "react-icons/io5";
import {Slide, FullPage} from 'react-full-page';



function App() {

const [playVideo, setPlayVideo] = useState<boolean>(false);
const [hideMenu, setHideMenu] = useState<boolean>(false);





	const {ref: myPredator, inView: predatorIsVisible} = useInView({
		delay: 500,
		
	});
	const {ref: myPredatorText, inView: predatorTextIsVisible} = useInView({
		delay: 500,
		
	});
	const {ref: myScorion, inView: scorPionIsVisible} = useInView({
		delay: 500,
		
	});
	const {ref: myScorpionText, inView: scorpionTextIsVisible} = useInView({
		delay: 500,
		
	});
	//Subzero Smoke------------
	const {ref: mySubZero, inView: subZeroIsVisible} = useInView({
		delay: 500,
		
	});
	const {ref: mySubZeroText, inView: subZeroTextIsVisible} = useInView({
		delay: 500,
		
	});
	//Smoke
	const {ref: mySmoke, inView: smokeIsVisible} = useInView({
		delay: 500,
		
	});
	const {ref: mySmokeText, inView: smokeTextIsVisible} = useInView({
		delay: 500,
		
	});
	//Noob Saibot Sector------
	const {ref: mySaibot, inView: saibotIsVisible} = useInView({
		delay: 500,
		
	});
	const {ref: mySaibotText, inView: saibotTextIsVisible} = useInView({
		delay: 500,
		
	});
	//Sector-------
	const {ref: mySector, inView: sectorIsVisible} = useInView({
		delay: 500,
		
	});
	const {ref: mySectorText, inView: sectorTextIsVisible} = useInView({
		delay: 500,
		
	});


	const handleMenu = () => {
		setHideMenu(prev => !prev);
	}

	useEffect(() => {
		if(predatorIsVisible || subZeroIsVisible || saibotIsVisible || scorPionIsVisible || smokeIsVisible || sectorIsVisible){
			setPlayVideo(true);
		} else {
			setPlayVideo(false);
		}
	}, [predatorIsVisible, subZeroIsVisible, saibotIsVisible, scorPionIsVisible, smokeIsVisible, sectorIsVisible])


  return (
<>
{<div>

		<FullPage>
				<Slide>
		<section id='home' className='relative pt-[30px] pb-[10px] h-screen w-full'>
		<CharacterMenu setHideMenu={setHideMenu} hideMenu={hideMenu} />
			<Container>
				<div className='flex items-center justify-between mb-[10px]'>
					<div className='relative'>
							<IoSettingsOutline className='menuButton' onClick={handleMenu} color='#ff7535'  size={40}/>
					</div>
			<div>
			<h3 className='text-white'>Disigned by <span className='text-orange-500'>Vozniuk Roman</span></h3>
			</div>
				</div>
				<div className='w-full from-slate-500 h-[2px] mb-[140px] bg-gradient-to-l to-white-500'></div>
			<div className=''>

			<div className='w-full'>
			<div className='backGraundLogo'>
				<video preload='auto' className='absolute top-0 left-0 w-full h-full object-cover rounded-[198px]' src={lightLogo} autoPlay loop muted></video>
					<img src={logoMK} alt="mk" className='logo'/>
			</div>
			<div className=''>
				<h1 className='title'>Mortal Kombat</h1>
			</div>
			</div>
			</div>
			</Container>
		</section>
				</Slide>

				<Slide>
		<section id='predator' className='pt-[40px] h-screen relative'>
		{playVideo && <video preload='auto' className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' src={videoFog} autoPlay muted></video>}
			<Container>
			
      <ul className='flex p-5 mb-[100px] items-center bg-gradient-to-r rounded-l-[168px] from-slate-500 to-white-500'>
			<li ref={myPredator} className={`w-1/3 mr-5 overflow-hidden rounded-[50%]`}>
				<div className={`
				${predatorIsVisible ? 'scale-1' : 'scale-0'} 
				duration-1000 rounded-md relative h-[290px]`}>
					<img className='absolute top-0 left-0 w-full h-full object-fill rounded-[50%] border-2' src={pictureOne} alt="predator" />
				</div>
			</li>
			 <li className='w-full overflow-hidden'>
				<div>
					<h3 className={`text-orange-500
					${predatorTextIsVisible ? "opacity-100": 'opacity-0'}
					font-semibold text-3xl duration-1000 font-times-new-roman tracking-[2px]`}>The Predator</h3>
					<p ref={myPredatorText} className={`
						${predatorTextIsVisible ? "translate-x-0": 'translate-x-[100%]'}
						text-white duration-1000`}>
					The Predator is an extraterrestrial humanoid hunter known for its appearance in the science-fiction action horror film series of the same name. An honorable alien hunter, the Predator has been an icon in the science-fiction and action genres, helping launch its franchise as not only a cult-classic series, but one of the most recognizable series in cinema.
					</p>
				</div>
			</li>
		</ul>
		<ul className='flex p-5 flex-row-reverse items-center bg-gradient-to-l rounded-r-[168px] from-slate-500 to-white-500'>
		<li ref={myPredator} className='w-1/3 overflow-hidden rounded-[50%]'>
				<div className={`relative h-[290px] bg-black rounded-[50%]`}>
					<img className={`absolute 
					${ predatorIsVisible ? 'scale-1' : 'scale-0'}
					top-0 left-0 rounded-[50%] w-full h-full object-fill duration-1000 border-2`} src={pictureOneMore} alt="predator" />
				</div>
			</li>
			<li className='w-full overflow-hidden'>
				<div>
					<p ref={myPredatorText} className={`
						${predatorTextIsVisible ? "translate-x-0": 'translate-x-[-100%]'}
						text-white duration-1000`}>
					A predator is an organism that captures and eats another (the prey). This act is called predation. In general, predators share the following features: They are usually larger than their prey, or overwhelm their prey by attacking in large numbers like ants.
					</p>
				</div>
			</li>
		</ul>
		</Container>
		</section>
				</Slide>

				<Slide>
		<section id='scorpion' className='pt-[40px] h-screen relative'>
		{playVideo && <video preload='auto' className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' src={videFire} autoPlay muted></video>}
			<Container>
			
      <ul className='flex p-5 mb-[100px] items-center bg-gradient-to-r rounded-l-[168px] from-slate-500 to-white-500'>
			<li ref={myScorion} className='w-1/3 pr-5 overflow-hidden '>
				<div className={`
				${scorPionIsVisible ? 'scale-1' : 'scale-0'} 
				duration-1000 rounded-md relative h-[290px]`}>
					<img className='absolute top-0 left-0 rounded-[50%] w-full h-full object-fill border' src={pictureTowMore} alt="scorpion" />
				</div>
			</li>
			 <li className='w-full overflow-hidden'>
				<div>
				<h3 className={`text-orange-500
					${scorpionTextIsVisible ? "opacity-100": 'opacity-0'}
					font-semibold text-3xl duration-1000 font-times-new-roman tracking-[2px]`}>Scorpion</h3>
					<p ref={myScorpionText} className={`
						${scorpionTextIsVisible ? "translate-x-0": 'translate-x-[100%]'}
						text-white duration-1000`}>
					Scorpion’s first name, Hanzo, is a direct reference to Hattori Hanzo, one of the most famous samurai from the Sengoku / Edo period of Japan. Hanzo Hasashi (Scorpion) was indeed canonically from the same region of Japan as both Musashi and Hattori Hanzo. It’s a beautiful way to tribute the past, and to respect the inspiration behind the character.
					</p>
				</div>
			</li>
		</ul>
		<ul className='flex p-5 flex-row-reverse items-center bg-gradient-to-l rounded-r-[168px] from-slate-500 to-white-500'>
		<li ref={myScorion} className='w-1/3 overflow-hidden '>
				<div className={`relative h-[290px] bg-black rounded-[50%]`}>
					<img className={`absolute 
					${ scorPionIsVisible ? 'scale-1' : 'scale-0'}
					top-0 left-0 rounded-[50%] w-full h-full object-fill duration-1000  border`} src={pictureTow} alt="scorpion" />
				</div>
			</li>
			<li className='w-full overflow-hidden'>
				<div>

					<p ref={myScorpionText} className={`
						${scorpionTextIsVisible ? "translate-x-0": 'translate-x-[-100%]'}
						text-white duration-1000`}>
					Scorpion, and the other ninja fighters in Mortal Kombat, obviously have some eastern roots. Especially when compared to other fighters like Johnny Cage or Sonya Blade. Scorpion’s human name, from when he was alive, is (or was) Hanzo Hasashi. The small nod in the name is his family name; Hasashi, which could very well be a tribute to notorious Japanese swordsman from late 1500s, Miyamoto Musashi.
					</p>
				</div>
			</li>
		</ul>
		</Container>
		</section>
				</Slide>

				<Slide>
		<section id='subZero' className='pt-[40px] h-screen relative'>
		{playVideo && <video preload='auto' className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-10' src={videoSnow} autoPlay loop muted></video>}
			<Container>
			
      <ul className='flex p-5 mb-[100px] items-center bg-gradient-to-r rounded-l-[168px] from-slate-500 to-white-500'>
			<li ref={mySubZero} className='w-1/3 pr-5 overflow-hidden '>
				<div className={`
				${subZeroIsVisible ? 'scale-1' : 'scale-0'} 
				duration-1000 rounded-md relative h-[290px]`}>
					<img className='absolute top-0 left-0 rounded-[50%] w-full h-full object-fill border' src={pictureThree} alt="sub-zero" />
				</div>
			</li>
			 <li className='w-full overflow-hidden'>
				<div>
				<h3 className={`text-orange-500
					${subZeroTextIsVisible ? "opacity-100": 'opacity-0'}
					font-semibold text-3xl duration-1000 font-times-new-roman tracking-[2px]`}>Sub Zero</h3>
					<p ref={mySubZeroText} className={`
						${subZeroTextIsVisible ? "translate-x-0": 'translate-x-[100%]'}
						text-white duration-1000`}>
					Sub-Zero is counted among those ranks. As one of the original seven characters in the first game, Sub-Zero made a lasting impression that has stuck with fans for nearly twenty-five years. As brutal as he is complex, Sub-Zero is an iconic fighting game character and a beloved MK hero despite his dark beginnings.
					</p>
				</div>
			</li>
		</ul>
		<ul className='flex p-5 flex-row-reverse items-center bg-gradient-to-l rounded-r-[168px] from-slate-500 to-white-500'>
		<li ref={mySubZero} className='w-1/3 overflow-hidden '>
				<div className={`relative h-[290px] bg-black rounded-[50%]`}>
					<img className={`absolute 
					${ subZeroIsVisible ? 'scale-1' : 'scale-0'}
					top-0 left-0 rounded-[50%] w-full h-full object-fill duration-1000 border`} src={pictureTreeMore} alt="smoke" />
				</div>
			</li>
			<li className='w-full overflow-hidden'>
				<div>
					<p ref={mySubZeroText} className={`
						${subZeroTextIsVisible ? "translate-x-0": 'translate-x-[-100%]'}
						text-white duration-1000`}>
					The ice-wielding kombatant has been through the wringer over the years, mentally and physically, which begs the question: How is he still standing? Perhaps the reason the Lin Kuei assassin to go on fighting lies in the lesser-known details of his body that only the most hardcore MK fans know.
					</p>
				</div>
			</li>
		</ul>
		</Container>
		</section>
				</Slide>

				<Slide>
		<section id='smoke' className='pt-[40px] h-screen relative'>
		{playVideo && <video preload='auto' className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' src={videoFog} autoPlay muted></video>}
			<Container>
			
      <ul className='flex p-5 mb-[100px] items-center bg-gradient-to-r rounded-l-[168px] from-slate-500 to-white-500'>
			<li ref={mySmoke} className='w-1/3 pr-5 overflow-hidden '>
				<div className={`
				${ smokeIsVisible? 'scale-1' : 'scale-0'} 
				duration-1000 rounded-md relative h-[290px]`}>
					<img className='absolute top-0 left-0 rounded-[50%] w-full h-full object-fill border' src={pictureFore} alt="sub-zero" />
				</div>
			</li>
			 <li className='w-full overflow-hidden'>
				<div>
				<h3 className={`text-orange-500
					${smokeTextIsVisible ? "opacity-100": 'opacity-0'}
					font-semibold text-3xl duration-1000 font-times-new-roman tracking-[2px]`}>Smoke</h3>
					<p ref={mySmokeText} className={`
						${smokeTextIsVisible ? "translate-x-0": 'translate-x-[100%]'}
						text-white duration-1000`}>
					Smoke is a Lin Kuei assassin and one of the main protagonists of the Mortal Kombat franchise. A close friend of Kuai Liang, he is often forced into becoming an unwilling villain, such as being transformed into a cyborg in the original timeline, and a Revenant in the rebooted timeline. However at some point, he is able to return to his heroic true self.
					</p>
				</div>
			</li>
		</ul>
		<ul className='flex p-5 flex-row-reverse items-center bg-gradient-to-l rounded-r-[168px] from-slate-500 to-white-500'>
		<li ref={mySaibot} className='w-1/3 overflow-hidden '>
				<div className={`relative h-[290px] bg-black rounded-[50%]`}>
					<img className={`absolute 
					${ smokeIsVisible ? 'scale-1' : 'scale-0'}
					top-0 left-0 rounded-[50%] w-full h-full object-fill duration-1000 border`} src={pictureForeMore} alt="smoke" />
				</div>
			</li>
			<li className='w-full overflow-hidden'>
				<div>
					<p ref={mySmokeText} className={`
						${smokeTextIsVisible ? "translate-x-0": 'translate-x-[-100%]'}
						text-white duration-1000`}>
					He is voiced by the late Ken Lally in Mortal Kombat (2011), Andrew Bowden as his more villainous self in Mortal Kombat X, Matthew Mercer in Mortal Kombat Legends: Battle of the Realms, and Yuri Lowenthal in Mortal Kombat 1.
					</p>
				</div>
			</li>
		</ul>
		</Container>
		</section>
				</Slide>

				<Slide>
		<section id='noob' className='pt-[40px] h-screen relative'>
		{playVideo && <video preload='auto'  className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' src={videoFog} autoPlay muted></video>}
			<Container>
			
      <ul className='flex p-5 mb-[100px] items-center bg-gradient-to-r rounded-l-[168px] from-slate-500 to-white-500'>
			<li ref={mySaibot} className='w-1/3 pr-5 overflow-hidden '>
				<div className={`
				${ saibotIsVisible ? 'scale-1' : 'scale-0'} 
				duration-1000 rounded-md relative h-[290px]`}>
					<img className='absolute top-0 left-0 rounded-[50%] w-full h-full object-fill border' src={pictureFive} alt="smoke" />
				</div>
			</li>
			 <li className='w-full overflow-hidden'>
				<div>
				<h3 className={`text-orange-500
					${saibotTextIsVisible ? "opacity-100": 'opacity-0'}
					font-semibold text-3xl duration-1000 font-times-new-roman tracking-[2px]`}>Noob Saibot</h3>
					<p ref={mySaibotText} className={`
						${ saibotTextIsVisible? "translate-x-0": 'translate-x-[100%]'}
						text-white duration-1000`}>
					Tobias would go on to create a backstory for Noob Saibot for Mortal Kombat Trilogy, the console and PC-exclusive update for MK3 released in 1996. Noob was described as a member of the Brotherhood of Shadow and a servant of the sorcerer Quan Chi. Later, the developers would expand Noob’s origin story further, revealing that he was actually the original Sub-Zero from Mortal Kombat and was succeeded by his younger brother as the ice ninja in subsequent games. 
					</p>
				</div>
			</li>
		</ul>
		<ul className='flex p-5 flex-row-reverse items-center bg-gradient-to-l rounded-r-[168px] from-slate-500 to-white-500'>
		<li ref={mySaibot} className='w-1/3 overflow-hidden '>
				<div className={`relative h-[290px] bg-black rounded-[50%]`}>
					<img className={`absolute 
					${ saibotTextIsVisible ? 'scale-1' : 'scale-0'}
					top-0 left-0 rounded-[50%] w-full h-full object-fill duration-1000 border`} src={pictureFiveMore} alt="smoke" />
				</div>
			</li>
			<li className='w-full overflow-hidden'>
				<div>
					<p ref={mySaibotText} className={`
						${saibotTextIsVisible ? "translate-x-0": 'translate-x-[-100%]'}
						text-white duration-1000`}>
					Noob Saibot was later given a new canonical name, Bi-Han. That’s the Sub-Zero we see played by Joe Taslim in the new Mortal Kombat movie, which opens the door for Noob Saibot to potentially appear in future films. (Noob also briefly appeared in the 1997 movie Mortal Kombat: Annihilation, a movie many Mortal Kombat fans might prefer to forget.
					</p>
				</div>
			</li>
		</ul>
		</Container>
		</section>
			</Slide>

				<Slide>
		<section id='sektor' className='pt-[40px] h-screen relative'>
		{playVideo && <video preload='auto'  className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' src={videoFog} autoPlay muted></video>}
			<Container>
			
      <ul className='flex p-5 mb-[100px] items-center bg-gradient-to-r rounded-l-[168px] from-slate-500 to-white-500'>
			<li ref={mySector} className='w-1/3 pr-5 overflow-hidden '>
				<div className={`
				${ sectorIsVisible ? 'scale-1' : 'scale-0'} 
				duration-1000 rounded-md relative h-[290px]`}>
					<img className='absolute top-0 left-0 rounded-[50%] w-full h-full object-fill border-2' src={pictureSix} alt="smoke" />
				</div>
			</li>
			 <li className='w-full overflow-hidden'>
				<div>
				<h3 className={`text-orange-500 
					${sectorTextIsVisible ? "opacity-100": 'opacity-0'}
					font-semibold text-3xl duration-1000 font-times-new-roman tracking-[2px]`}>Sektor</h3>
					<p ref={mySectorText} className={`
						${ sectorTextIsVisible? "translate-x-0": 'translate-x-[100%]'}
						text-white duration-1000`}>
					Sektor is a red cyborg from the Mortal Kombat franchise. Sektor was the son to the Grandmaster of the Lin-Kuei. When the Lin-Kuei clan decided to automate their warriors, one of their fiercest ninjas was the first to volunteer for the procedure. Sektor was given the assignment of killing Sub-Zero, a rogue of Lin-Kuei, though he was unsuccessful in both the third and fourth Mortal Kombat tournaments. After battling the forces of Outworld so many times, Sektor's programming became irreversibly corrupted and he became convinced that the leader of his clan was weak and had to be overthrown. 
					</p>
				</div>
			</li>
		</ul>
		<ul className='flex p-5 flex-row-reverse items-center bg-gradient-to-l rounded-r-[168px] from-slate-500 to-white-500'>
			<img src="" alt="" />
		<li ref={mySector} className='w-1/3 overflow-hidden '>
				<div className={`relative h-[290px] bg-black rounded-[50%]`}>
					<img className={`absolute 
					${ sectorIsVisible ? 'scale-1' : 'scale-0'}
					top-0 left-0 rounded-[50%] w-full h-full object-fill duration-1000 border-2`} src={pictureSixMore} alt="smoke" />
				</div>
			</li>
			<li className='w-full overflow-hidden'>
				<div>
					<p ref={mySectorText} className={`
						${sectorTextIsVisible ? "translate-x-0": 'translate-x-[-100%]'}
						text-white duration-1000`}>
				Sektor was the Grandmaster's son and in killing him wanted to take over as the Lin-Kuei leader, but was prevented from taking control of the clan by the timely intervention of Sub-Zero, who defeated the cyborg and claimed leadership of his clan. Sektor survived, however, and fled to Japan, forming the Tekunin, a clan consisting entirely of cyborgs.
					</p>
				</div>
			</li>
		</ul>
		</Container>
		</section>
				</Slide>
		</FullPage>
</div>}

</>
   
  )
}

export default App
