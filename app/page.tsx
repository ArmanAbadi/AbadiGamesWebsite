import Image from 'next/image'
import Link from 'next/link'

import GamePreview from './components/GamePreview';
import Navbar from './components/Navbar';

const SlugsImageLink = "/Slugs.png";
const SlugsGameLink = "https://armanabadi.github.io/Slugs/";
const SlugsGameTitle = "Slugs";
const SlugsGameDescription = "2D RPG with perlin noise map generation";


export default function Home() {
  return (
    <main>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost font-bold text-2xl">AbadiGames</a>
      </div>

      <div>
        <p>  Hi, I'm Arman Abadi, I'm a full stack developer based out of Vancouver BC Canada. </p>
        <p>  I have 7 years experience as a full stack developer.</p>
        <p>  My main focus has been in the games industry but I have completed projects in a variety of fields!</p>
      </div>

      <div className="flex w-full flex-col">
      <div className="divider"></div>
      <div className="card bg-base-300 rounded-box grid place-items-center">


      <div className = "flex justify-center">
      <GamePreview ImageLink={SlugsImageLink} GameLink={SlugsGameLink} GameName={SlugsGameTitle} GameDescription={SlugsGameDescription}></GamePreview>
      </div></div></div>
    </main>
  )
}
