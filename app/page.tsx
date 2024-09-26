'use client'
import Image from 'next/image'
import Link from 'next/link'

import GamePreview from './components/GamePreview';
import Navbar from './components/Navbar';
import DividerGray from './components/DividerGray';
import AbadiGamesLogo from './components/AbadiGamesLogo';
import Pond from './components/Pond';

const SlugsImageLink = '/BattleBoii.png';
const SlugsGameLink = "https://armanabadi.github.io/BattleBoi/";

const PurpleColor = "217, 70, 239";

const VancouverImagePath = "spencer-watson-VLW2GjQHlgE-unsplash.jpg"

const LinkedInLogo = "LinkedInLogo.png"

export default function Home() {
  return (
  <div className="flex flex-col h-screen justify-between">

    <main className="flex flex-col h-screen justify-between">
<div className="navbar p-3 font-extraboldTop">
  <Link href={""} className="px-2">AbadiGames</Link>
  <div className="flex flex-1 justify-end"><a href="mailto:armanabadi.aa@gmail.com?Subject=AbadiGames Enquiry">
  <div>Need a body? Hire Abadi! Contact me!
  </div>    
  </a>
  </div>
</div>

<div className="container" onClick={() => DisplayDivNone()}>
            <svg viewBox="-10 0 120 120"><g className='hoverTarget'>
                <defs>
                    <mask id="mask">
                        <path id="Path_611" data-name="Path 611" d="M1,38a12.225,12.225,0,0,1,2.558-3.025L41.351,13.462A21.12,21.12,0,0,1,46.733,12.4a14.319,14.319,0,0,1,4.81.765L89.2,34.814A7.333,7.333,0,0,1,92,37a7.273,7.273,0,0,1,1,3.4v45.3A6.741,6.741,0,0,1,92,89a12.9,12.9,0,0,1-3.015,2.945L50.42,110.628a8.953,8.953,0,0,1-3.688.786,13.383,13.383,0,0,1-4.153-.992L4.2,92.012A12.105,12.105,0,0,1,1,89a7.112,7.112,0,0,1-1-3.581V41.534A9.569,9.569,0,0,1,1,38Z" transform="translate(1.502 -10.892)" fill="#FFFFFF"/>
                    </mask>
                </defs>
                <image mask="url(#mask)"
                    href="ArmanFace.png" x="-3" y="2" width="100" height="100" >
                </image>
                <g className="frame-border" fill="none" >
                    <path id="Path_611" data-name="Path 611" d="M1,38a12.225,12.225,0,0,1,2.558-3.025L41.351,13.462A21.12,21.12,0,0,1,46.733,12.4a14.319,14.319,0,0,1,4.81.765L89.2,34.814A7.333,7.333,0,0,1,92,37a7.273,7.273,0,0,1,1,3.4v45.3A6.741,6.741,0,0,1,92,89a12.9,12.9,0,0,1-3.015,2.945L50.42,110.628a8.953,8.953,0,0,1-3.688.786,13.383,13.383,0,0,1-4.153-.992L4.2,92.012A12.105,12.105,0,0,1,1,89a7.112,7.112,0,0,1-1-3.581V41.534A9.569,9.569,0,0,1,1,38Z" transform="translate(1.502 -10.892)" stroke-linecap="round" />
                </g></g>
            </svg>
        </div>
        
        <div className='divNone' id="divNone">
<Pond></Pond>
</div>

<div className="p-3 py-32 w-full font-extraboldTop">
      <div className="flex w-full justify-center">
        <h1 className="text-center">  
          {"Hi, I'm"}
          <span className="Orangey"> Arman Abadi</span>.
           <br></br> {"I'm a Fullstack Developer from Vancouver British Columbia."}
        </h1>
      </div>
</div>

<div className=" purpleGradient">

<h1 className="text-center py-10 font-extrabold">  
          {"Projects in the works"}
        </h1>
        
<div className="grid place-items-center">

<div>
<GamePreview ImageLink={SlugsImageLink} GameLink={SlugsGameLink} GameName={"Battle Boi"} GameDescription={"Real time multiplayer 2D RPG with infinite perlin noise map generation"}></GamePreview>
</div></div></div>


<footer className="footer darkColor">
<Link href={"https://www.linkedin.com/in/armanabadi/"}>
<img className = "w-16 h-16" src={String(LinkedInLogo)}/>
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

{/* <div className="flex w-full justify-center">
  <div className="py-10 w-96 h-96">
<img
  className="mask mask-hexagon2"
  src="ArmanFace.png" />
  </div>
</div> */}

function DisplayDivNone() {
  var T = document.getElementById("divNone");
  if(T != null){
    T.style.display = "block";  // <-- Set it to block
  }
}