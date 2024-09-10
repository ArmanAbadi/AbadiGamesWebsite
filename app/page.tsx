import Image from 'next/image'
import Link from 'next/link'

import GamePreview from './components/GamePreview';
import Navbar from './components/Navbar';
import DividerGray from './components/DividerGray';
import AbadiGamesLogo from './components/AbadiGamesLogo';

const SlugsImageLink = '/BattleBoii.png';
const SlugsGameLink = "https://armanabadi.github.io/BattleBoi/";

const PurpleColor = "217, 70, 239";

const VancouverImagePath = "spencer-watson-VLW2GjQHlgE-unsplash.jpg"

const LinkedInLogo = "LinkedInLogo.png"

export default function Home() {
  return (
  <div className="flex flex-col h-screen justify-between">

    <main className="flex flex-col h-screen justify-between">
<div className="navbar p-3 bg-base-100 font-thick">
  <Link href={""} className="px-2">AbadiGames</Link>
  <div className="flex flex-1 justify-end px-2"><a href="mailto:armanabadi.aa@gmail.com?Subject=AbadiGames Enquiry" target="_top" className="px-2">
  <div className = "px-4">Need a body? Hire Abadi! Contact me!
  </div>    
  </a>
  </div>
</div>

<div className="flex w-full justify-center">
  <div className="py-10 w-96 h-96">
<img
  className="mask mask-hexagon"
  src="ArmanFace.png" />
  </div>
</div>

<div className="p-3 py-32 w-full bg-base-100 font-extrabold">
      <div className="flex w-full justify-center">
        <h1 className="text-center">  
          {"Hi, I'm"}
          <span className="text-purple-700"> Arman Abadi</span>.
           <br></br> {"I'm a Fullstack Developer from Vancouver British Columbia."}
        </h1>
      </div>
</div>

<div className=" purpleGradient">

<h1 className="text-center py-10 font-extrabold text-white">  
          {"Projects in the works"}
        </h1>
<div className="grid place-items-center">

<div>
<GamePreview ImageLink={SlugsImageLink} GameLink={SlugsGameLink} GameName={"Battle Boi"} GameDescription={"Real time multiplayer 2D RPG with infinite perlin noise map generation"}></GamePreview>
</div></div></div>

<footer className="footer w-16 h-16 ">
<Link href={"https://www.linkedin.com/in/armanabadi/"}>
<img src={String(LinkedInLogo)}/>
</Link>
</footer>


    </main></div>
  )
}

// <div className="flex w-full justify-end text-2xl">Need a body? Hire Abadi!</div>
//<DividerGray></DividerGray>

/* <div className="p-3 py-32 w-full bg-base-100">
      <div className="flex w-full">
        <h1>  
          {"I've previously worked as a Software Engineer on the following projects:"}
           <br></br> 
           <br></br><Link href="https://www.gotconquest.com/" style={{color: "blue"}}>Game of thrones conquest.</Link>
           <br></br><Link href="https://battlerally.com/" style={{color: "blue"}}>Battle Rally.</Link>
        </h1>
      </div>
</div> */


{/* <div className='flex w-full justify-center'>
<img
  className="maskk"
  src="ArmanFace.png" />
</div>

<div className='flex w-32 justify-center'>
<svg width="868" height="988" viewBox="0 0 868 988" fill="black" xmlns="http://www.w3.org/2000/svg">
<path d="M414 5.547C426.376 -1.59831 441.624 -1.59831 454 5.547L847.013 232.453C859.389 239.598 867.013 252.803 867.013 267.094V720.906C867.013 735.197 859.389 748.402 847.013 755.547L454 982.453C441.624 989.598 426.376 989.598 414 982.453L20.9873 755.547C8.61125 748.402 0.987305 735.197 0.987305 720.906V267.094C0.987305 252.803 8.61126 239.598 20.9873 232.453L414 5.547Z" fill="black"/>
</svg>
</div> */}
