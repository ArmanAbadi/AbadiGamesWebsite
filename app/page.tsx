'use client'
import Image from 'next/image'
import Link from 'next/link'

import GamePreview from './components/GamePreview';
import Navbar from './components/Navbar';
import DividerGray from './components/DividerGray';
import AbadiGamesLogo from './components/AbadiGamesLogo';
import Pond from './components/Pond';
import UnityComp from './components/UnityComp';
import { useEffect } from 'react';

const SlugsImageLink = '/BattleBoii.png';
const SlugsGameLink = "https://armanabadi.github.io/BattleBoi/";

const PurpleColor = "217, 70, 239";

const VancouverImagePath = "spencer-watson-VLW2GjQHlgE-unsplash.jpg"

const LinkedInLogo = "LinkedInLogo.png"

//Photo by <a href="https://unsplash.com/@adityachinchure?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aditya Chinchure</a> on <a href="https://unsplash.com/photos/cars-on-gray-concrete-road-during-daytime-ghbepAO7BCs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

export default function Home() {
  useEffect(()=>
    DisplayDivNone()
  );
  return (
  <div className="flex flex-col justify-between background-color-light">

    <main className="flex flex-col justify-between">
      <div className="navbar p-3 font-extraboldTop bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px] text-white">
        <Link href={""} className="px-2 teal-hover">AbadiGames</Link>
        <div className="flex flex-1 justify-end "><a href="mailto:armanabadi.aa@gmail.com?Subject=AbadiGames Enquiry">
        <div className='teal-hover'>
          Need a body? Hire Abadi! Contact me!
        </div>    
        </a>
        </div>
      </div>
      <div className='flex flex-col bg-fixed ... bg-[url("/City.jpg")] min-h-screen bg-cover bg-center bg-no-repeat pb-6 px-4' >



        <div className="container">
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
                            <path id="Path_611" data-name="Path 611" d="M1,38a12.225,12.225,0,0,1,2.558-3.025L41.351,13.462A21.12,21.12,0,0,1,46.733,12.4a14.319,14.319,0,0,1,4.81.765L89.2,34.814A7.333,7.333,0,0,1,92,37a7.273,7.273,0,0,1,1,3.4v45.3A6.741,6.741,0,0,1,92,89a12.9,12.9,0,0,1-3.015,2.945L50.42,110.628a8.953,8.953,0,0,1-3.688.786,13.383,13.383,0,0,1-4.153-.992L4.2,92.012A12.105,12.105,0,0,1,1,89a7.112,7.112,0,0,1-1-3.581V41.534A9.569,9.569,0,0,1,1,38Z" transform="translate(1.502 -10.892)" strokeLinecap="round" />
                        </g></g>
                    </svg>
                </div>
                <div className='divNone' id="divNone">
                <Pond></Pond>
        </div>

        <div className="w-full font-extraboldTop">
              <div className="flex w-full justify-center">
                <div className='card  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px] w-fit xl:m-12 p-2'>
                <h1 className="text-center text-white p-4 xl:m-4">
                  <span className="Orangey"> Arman Abadi</span>{" - Fullstack Developer"}
                  <br></br> Located in Vancouver British Columbia.  
                  <br></br> 7 Years experience building Android & iOS Applications
                  <br></br> Web developer: NextJS, NodeJS, Firebase, Stripe
                  <br></br> Contact me for your project!
                </h1>
                </div>
              </div>
        </div>
        <div className='mt-auto p-2 backdrop-blur-md text-white w-fit rounded-tr-4xl' ><a href="https://unsplash.com/@adityachinchure?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Photo by Aditya Chinchure on Unsplash</a></div>
      </div>


<div className="flex bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]" >
<div className="w-full font-extraboldTop">
  <div className='xl:flex justify-center'>
    <div className=''>
      <h1 className="text-center pt-10 font-extrabold text-white w-fit m-auto px-6 rounded-lg">  
        {"Independant Games"}
      </h1>
      <div className="flex flex-col xl:flex-row xl:carousel rounded-box justify-center p-8">
        <div className="xl:carousel-item xl:p-4  xl:m-0 mx-auto">
          <GamePreview ImageLink={SlugsImageLink} GameLink={SlugsGameLink} GameName={"Battle Boi"} GameDescription={"Real time multiplayer 2D RPG with infinite perlin noise map generation. Try it now!"}></GamePreview>
        </div>
      </div>
    </div>
    <div>
      <h1 className="text-center pt-10 font-extrabold text-white w-fit m-auto px-6 rounded-lg">  
        {"Professional Games"}
      </h1>
      <div className="flex flex-col xl:flex-row xl:carousel rounded-box justify-center p-8">
        <div className="xl:carousel-item p-4 xl:m-0 mx-auto">
          <GamePreview ImageLink={"GoTConquest.jpeg"} GameLink={"http://gameofthronesconquest.com/"} GameName={"Game Of Thrones Conquest"} GameDescription={"Based on the award-winning HBO series, Game of Thrones: Conquest™ is a free-to-play strategy game that puts players at the head of their own powerful House, with the ultimate goal of claiming the Iron Throne. Build your great house, raise your army, conquer iconic Seats of Power, and rule the Seven Kingdoms."}></GamePreview>
        </div>
        <div className="xl:carousel-item p-4 xl:m-0 mx-auto">
          <GamePreview ImageLink={"battlerally.jpg"} GameLink={"https://battlerally.com/"} GameName={"Battle Rally"} GameDescription={"Battle and race your way across the finish line with wacky run and gun action in Battle Rally! Use a crew of crazy racers to take on all challengers—all free-to-play on your mobile devices."}></GamePreview>
        </div>
      </div>
    </div>
  </div>


        <div className='text-center py-5'>
<h2 className="text-center font-extrabold text-white w-fit m-auto p-2">  
          {"Websites"}
        </h2>
        <a href="https://vibesexualwellness.com" className='block teal blue-hover w-fit m-auto p-2'>VibeSexualWellness</a>
        <a href="https://nayelle.com" className='block teal blue-hover w-fit m-auto p-2'>Nayelle</a>
        <a href="https://www.fticorp.ca/" className='block teal blue-hover w-fit m-auto p-2'>FTICorp</a>
        </div>

</div>
</div>

<footer className="footer justify-end p-4 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]">
<Link href={"https://www.linkedin.com/in/armanabadi/"}>
<img className = "w-24 h-24" src={String(LinkedInLogo)}/>
</Link>
</footer>
    </main></div>
  )
}

function DisplayDivNone() {
  var T = document.getElementById("divNone");
  if(T != null){
    T.style.display = "block";  // <-- Set it to block
  }
}