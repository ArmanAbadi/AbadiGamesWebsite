'use client'
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityComp() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "BuildWebGL/Build/BuildWebGL.loader.js",
    dataUrl: "BuildWebGL/Build/BuildWebGL.data",
    frameworkUrl: "BuildWebGL/Build/BuildWebGL.framework.js",
    codeUrl: "BuildWebGL/Build/BuildWebGL.wasm",
  });


  return (
    <div>
      <p>Game</p>
      <Unity
        unityProvider={unityProvider}
        style={{ width: 800, height: 600, border: 'solid black 1px' }}
      />
    </div>
  );
}