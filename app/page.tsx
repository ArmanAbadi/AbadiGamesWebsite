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
      <a className="btn glass" href="mailto:arman_abadi@hotmail.com?subject=Hi Arman, I'd like to hire you">Contact me!</a>
</div>


<div className="p-3 py-40 w-full bg-base-100">
      <div className="flex w-full justify-center text-2xl">
        <h1>  
          Hi, my name is Arman.
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

///style={{backgroundColor: "#d3e5fe"}}
