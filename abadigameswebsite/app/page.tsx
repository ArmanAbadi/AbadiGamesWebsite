import Image from 'next/image'
import Link from 'next/link'

import GamePreview from './components/GamePreview';

const SlugsImageLink = '/Slugs.png';
const SlugsGameLink = "https://armanabadi.github.io/Slugs/";
const SlugsGameTitle = "Slugs";
const SlugsGameDescription = "2D RPG with perlin noise map generation";


export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <GamePreview ImageLink={SlugsImageLink} GameLink={SlugsGameLink} GameName={SlugsGameTitle} GameDescription={SlugsGameDescription}></GamePreview>
    </main>
  )
}
