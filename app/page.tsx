import Image from 'next/image'
import Link from 'next/link'

import GamePreview from './components/GamePreview';
import Navbar from './components/Navbar';
import DividerGray from './components/DividerGray';

const SlugsImageLink = '/BattleBoii.png';
const SlugsGameLink = "https://armanabadi.github.io/BattleBoi/";

const PurpleColor = "217, 70, 239";

const VancouverImagePath = "spencer-watson-VLW2GjQHlgE-unsplash.jpg"

const LinkedInLogo = "LinkedInLogo.png"

export default function Home() {
  return (
  <div className="flex flex-col h-screen justify-between">
    <main className="flex flex-col h-screen justify-between">

<div className="navbar p-3 bg-base-100">
  <Link href={""} className="px-2 font-bold text-2xl">AbadiGames</Link>
  <div className="flex flex-1 justify-end px-2"><a href="mailto:armanabadi.aa@gmail.com?Subject=AbadiGames Enquiry" target="_top" className="px-2">
  <div className = "px-4">Need a body? Hire Abadi! Contact me!
  </div>    
  </a>
  </div>
</div>

<div className="p-3 py-32 w-full bg-base-100">
      <div className="flex w-full justify-center">
        <h1 className="text-center">  
          {"Hi, my name is Arman Abadi."}
           <br></br> {"I'm a Fullstack Developer from Vancouver British Columbia."}
           <br></br>
           <br></br> {"Check out my projects below and send me an email of what you think!"}
        </h1>
      </div>
</div>

<div className=" purpleGradient py-10 grid place-items-center">

<div>
<GamePreview ImageLink={SlugsImageLink} GameLink={SlugsGameLink} GameName={"Battle Boi"} GameDescription={"Real time multiplayer 2D RPG with infinite perlin noise map generation"}></GamePreview>
</div></div>

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