import Image from 'next/image'
import Link from 'next/link'

import GamePreview from './components/GamePreview';
import Navbar from './components/Navbar';

const SlugsImageLink = '/Slugs.png';
const SlugsGameLink = "https://armanabadi.github.io/Slugs/";
const SlugsGameTitle = "Slugs";
const SlugsGameDescription = "2D RPG with perlin noise map generation";

const PurpleColor = "217, 70, 239";

const VancouverImagePath = "spencer-watson-VLW2GjQHlgE-unsplash.jpg"


export default function Home() {
  return (
    <main>

<div className="navbar bg-base-100">
      <a className="btn btn-ghost font-bold text-2xl">AbadiGames</a>
      <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Contact me!</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-100 p-2 shadow">
    <li><a href = "mailto:armanabadi.aa@gmail.com?subject=Hi Arman, I'd like to hire you">armanabadi.aa@gmail.com</a></li>
    <li><a href = "https://www.linkedin.com/in/armanabadi/">https://www.linkedin.com/in/armanabadi/</a></li>
  </ul>
</div>
</div>

<div className="p-3 py-40 w-full bg-base-100">
      <div className="flex w-full justify-center text-2xl">
        <h1>  
          Hi, my name is Arman Abadi.
           <br></br> I'm a Fullstack Developer from Vancouver British Columbia.
        </h1>
      </div>
</div>



      <div className="py-10 card rounded-box grid place-items-center">

      <div>
      <GamePreview ImageLink={SlugsImageLink} GameLink={SlugsGameLink} GameName={SlugsGameTitle} GameDescription={SlugsGameDescription}></GamePreview>
      </div></div>

    </main>
  )
}

//<div className="flex w-full justify-center text-2xl"> Try my games! </div>
///style={{backgroundColor: "#d3e5fe"}}
