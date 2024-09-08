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

<div className="navbar p-3 bg-gray-100">
    <a className="btn btn-ghost font-bold text-2xl">AbadiGames</a>

    <div className=" flex flex-1 justify-end px-2">
    <a href="mailto:armanabadi.aa@gmail.com?Subject=AbadiGames Enquiry" target="_top">
    <button className="btn PulseColor w-32">Contact me!
    </button>
    </a>

    </div>
</div>


<div className="p-3 py-32 w-full bg-gray-100">
      <div className="flex w-full justify-center text-2xl">
        <h1 className="text-center">  
          {"Hi, my name is Arman Abadi."}
           <br></br> {"I'm a Fullstack Developer from Vancouver British Columbia."}
           <br></br> {"I have 7 years experience developing mobile and desktop applications with the Unity game engine."}
           <br></br> {"Check out my projects below and send me an email of what you think!"}
        </h1>
      </div>
</div>

<DividerGray></DividerGray>

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