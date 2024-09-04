'use client'
import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

const GamePreview = (GamePreviewImageAndLinkProps: GamePreviewImageAndLinkProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
    <img
    src={String(GamePreviewImageAndLinkProps.ImageLink)}
    alt="Shoes" />
    </figure>
    <div className="card-body">
    <h2 className="card-title"> {GamePreviewImageAndLinkProps.GameName} </h2 >
    <p><Link href={GamePreviewImageAndLinkProps.GameLink}>{GamePreviewImageAndLinkProps.GameDescription}</Link></p>
    <div className="card-actions justify-end">
    </div>
    </div>
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