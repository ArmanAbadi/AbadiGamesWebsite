'use client'
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityComp() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "BuildWebGLBrotli/Build/BuildWebGLBrotli.loader.js",
    dataUrl: "BuildWebGLBrotli/Build/BuildWebGLBrotli.data.br",
    frameworkUrl: "BuildWebGLBrotli/Build/BuildWebGLBrotli.framework.js.br",
    codeUrl: "BuildWebGLBrotli/Build/BuildWebGLBrotli.wasm.br",
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