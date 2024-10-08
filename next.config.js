/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
    return [
      {
        source: "/Games/BattleBoi/Build/webgl.framework.js.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
      {
        source: "/Games/BattleBoi/Build/webgl.data.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
      {
        source: "/Games/BattleBoi/Build/webgl.wasm.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
    ];
  },
  output: "standalone",}

module.exports = nextConfig
