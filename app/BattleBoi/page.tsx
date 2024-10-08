'use client'
import React from 'react'
import {useEffect} from 'react'

export default function Home(){


    useEffect(() => {
        const script = document.createElement("script")
        script.src = "Games/BattleBoi/Build/webgl.loader.js"
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script)
        }
    },[])

    return(
        <div>
            <iframe 
            src = "Games/BattleBoi/index.html" 
            width = "100%" 
            height = "100%" 
            style={{border:"none", position:"absolute", top:0, left: 0, right: 0, bottom: 0}}
            allowFullScreen
            >

            </iframe>
        </div>
    );
}