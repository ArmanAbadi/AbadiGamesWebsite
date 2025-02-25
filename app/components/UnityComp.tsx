'use client'
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


function UnityComp() {
    const { unityProvider } = useUnityContext({
      loaderUrl: "./BuildWebGL/Build/BuildWebGL.loader.js",
      dataUrl: "./BuildWebGL/Build/BuildWebGL.data",
      frameworkUrl: "./BuildWebGL/Build/BuildWebGL.js",
      codeUrl: "./BuildWebGL/Build/BuildWebGL.wasm",
    });
  
    return <Unity unityProvider={unityProvider} />;
  }