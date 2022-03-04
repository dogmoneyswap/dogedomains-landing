import React from "react"
import styled from "@emotion/styled"
import "normalize.css"

import Layout from "../components/Layout"
import Navigation from "../components/Navigationv2"
import mq from "../mediaQuery"

import topography from "../assets/topography.svg"
import discord from "../assets/discord.svg"
import discuss from "../assets/discuss.svg"
import governance from "../assets/governance.svg"
import mirror from "../assets/mirror.svg"
import twitterGrey from "../assets/twitterGrey.svg"
import discordGrey from "../assets/discordGrey.svg"
import discussGrey from "../assets/discussGrey.svg"
import whiteENS from "../assets/negativeLNS.png"
import { useTranslation } from "react-i18next"

import "../css/global.css"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: calc(100% - 120px);
  font-family: JakartaSans;
`

const Content = styled("div")`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  align-self: center;
`

const ContentInner = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;

  ${mq.large`
    padding-top: calc(57% - 120px);
    height: initial;
    overflow-y: initial;
  `}
`

const ContentInnerInner = styled("div")`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 16px;
  max-width: 500px;
  margin: 0 auto;

  ${mq.large`
    grid-template-columns: minmax(0, 4fr) minmax(0, 3fr) minmax(0, 3fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 20px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    padding: 50px;
    max-width: initial;
    margin: initial;
  `}
`

const MainBox = styled("a")`
  background: linear-gradient(
    330.4deg,
    #44bcf0 4.54%,
    #7298f8 59.2%,
    #a099ff 148.85%
  );
  border-radius: 30px;
  position: relative;
  height: 300px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(101%);
  }

  ${mq.large`
    grid-row-start: 1;
    grid-row-end: 3;
    height: initial;
  `}
`

const MainBoxInner = styled("div")`
  background: url("${topography}");
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-size: cover;
`

const MainBoxBottomText = styled("div")`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: -0.5px;
  color: #ffffff;
`

const Box = styled("a")`
  background: ${p => p.backgroundColor};
  border: 1px solid ${p => p.borderColor};
  box-sizing: border-box;
  border-radius: 24px;
  height: 200px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(102%);
  }

  ${mq.large`
    height: initial;
  `}
`

const BoxContent = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 32px;

  ${mq.large`
    padding: 36px;
  `}

  :hover {
    cursor: pointer;
  }
`

const MainBoxContent = styled(BoxContent)`
  padding: 36px;
`

const BoxContentTop = styled("div")``

const BoxContentBottom = styled("div")``

const Footer = styled("div")`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 20px 0;

  & > a {
    margin-right: 10px;
  }
`

const standardBoxData = [
  {
    icon: discord,
    text: "discord",
    color: "#854BFF",
    backgroundColor: "#E1DAF7",
    borderColor: "#C0B2EA",
    link: "https://discord.gg/2Q52jB2Rzu",
  },
  {
    icon: governance,
    text: "governance",
    color: "#4D90F1",
    backgroundColor: "rgba(77, 144, 241, 0.1)",
    borderColor: "#B0D0FF",
    link: "https://docs.bch.domains/tokenomics/",
  },
]

const BottomText = styled("div")`
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 34px;

  letter-spacing: -0.01em;
  color: ${p => p.color};
`

const BoxIcon = styled("img")``

const StandardBox = ({
  color,
  backgroundColor,
  text,
  icon,
  borderColor,
  link,
}) => {
  const { t } = useTranslation()

  return (
    <Box {...{ backgroundColor, borderColor }} href={link} target={"_blank"}>
      <BoxContent>
        <BoxContentTop>
          <BoxIcon
            style={{ width: icon === governance ? "40px" : "initial" }}
            src={icon}
          />
        </BoxContentTop>
        <BoxContentBottom>
          <BottomText {...{ color }}>{t(`governance.${text}`)}</BottomText>
        </BoxContentBottom>
      </BoxContent>
    </Box>
  )
}

async function claimOnClick() {
  const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513' // TODO replace with CA
  const tokenSymbol = 'LNS'
  const tokenDecimals = 18
  const tokenImage = '' // TODO replace with token image

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export default function Token(props) {
  const { t } = useTranslation()

  return (
    <Layout {...props}>
      <Navigation />
      <Container>
        <Content>
          <ContentInner>
            <ContentInnerInner>
              <MainBox onClick={claimOnClick}>
                <MainBoxInner>
                  <MainBoxContent>
                    <BoxContentTop>
                      <BoxIcon src={whiteENS} />
                    </BoxContentTop>
                    <BoxContentBottom>
                      <MainBoxBottomText>
                        {t("governance.claim")}
                      </MainBoxBottomText>
                    </BoxContentBottom>
                  </MainBoxContent>
                </MainBoxInner>
              </MainBox>
              {standardBoxData.map(StandardBox)}
            </ContentInnerInner>
          </ContentInner>
        </Content>
        <Footer>
          <a href={"https://twitter.com/bchdomains"}>
            <img
              src={twitterGrey}
              width="34"
              css={{ marginTop: "2px" }}
              alt="Twitter"
            />
          </a>
          <a href={"https://discord.com/2Q52jB2Rzu"}>
            <img
              src={discordGrey}
              width="30"
              css={{ marginLeft: "4px" }}
              alt="Discord"
            />
          </a>
        </Footer>
      </Container>
    </Layout>
  )
}
