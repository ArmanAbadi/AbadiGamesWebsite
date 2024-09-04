'use client'
import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

const GamePreview = (GamePreviewImageAndLinkProps: GamePreviewImageAndLinkProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl"><Link href={GamePreviewImageAndLinkProps.GameLink}>
    <figure>
    <img
    src={String(GamePreviewImageAndLinkProps.ImageLink)}
    alt="Shoes" />
    </figure>
    <div className="card-body">
    <h2 className="card-title"> {GamePreviewImageAndLinkProps.GameName} </h2 >
    <p>{GamePreviewImageAndLinkProps.GameDescription}</p>
    <div className="card-actions justify-end">
    </div>
    </div></Link>
    </div>
  )
}

interface GamePreviewImageAndLinkProps {
    ImageLink: string,
    GameLink: string,
    GameName: string,
    GameDescription: string
  }

export default GamePreview