import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import favicon from "../assets/favicon.png"
import twitter from "../assets/twitter.png"

function getTitle(pathname) {
  switch (pathname) {
    case "/token":
      return "Token"
    case "/about":
      return "About ĐNS"
    default:
      return "Đoge Name Service"
  }
}

export default function Layout({ children, data, location }) {
  return (
    <>
      <Helmet
        meta={[
          {
            name: "description",
            content:
              "Your web3 username, a name for all your cryptocurrency addresses, and decentralised websites.",
          },
          {
            name: "keywords",
            content:
              "ĐNS, DOGE, ENS, DogeChain, Doge Name Service, .doge domains, blockchain domains, ENS on DogeChain",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:title",
            content: "Đoge Name Service",
          },
          {
            property: "og:image",
            content: `https://dogedomains.wf${twitter}`,
          },
        ]}
        title={getTitle(location.pathname)}
        link={[
          { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` },
        ]}
        script={[
          { src: "https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js" },
        ]}
      />
      <Global
        styles={css`
          html, body, #___gatsby, #gatsby-focus-wrapper {
            height: ${location?.pathname === '/token' ? '100%' : 'initial'};
          }
          body {
            font-family: Overpass;
          }
        `}
      />
      {children}
    </>
  )
}
