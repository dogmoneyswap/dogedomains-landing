import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { H2 as H2Default } from "./Typography"

import mq from "../mediaQuery"
import mailingList from "../assets/mailingList.svg"
import documentation from "../assets/documentation.svg"
import community from "../assets/community.svg"
import forum from "../assets/forum.svg"
import { Anchor, AnchorContainer } from "./Anchor"

const links = [
  {
    name: "community",
    img: community,
    text: "Join our Discord community",
    cta: "Join Discord",
    link: "https://discord.gg/SMRdBNkeaa",
  },
  {
    name: "documentation",
    img: documentation,
    text: "Read our documentation",
    cta: "Read Docs",
    link: "https://docs.bch.domains/",
  },
]

const Container = styled("div")`
  background: linear-gradient(90deg, #313131 0%, #05153a 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 125px 20px;
`

const H2 = styled(H2Default)`
  color: white;
  margin-bottom: 100px;
`

const Links = styled("div")`
  max-width: 860px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px 50px;
  ${mq.medium`
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  `}
`

const LinkItem = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px 20px;
  grid-template-areas:
    "img"
    "title"
    "link";

  ${mq.medium`
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto 100px;
    grid-template-areas:
    "img title"
    ". link";
  `};

  img {
    grid-area: img;
    justify-self: start;
    ${mq.medium`
      justify-self: end;
    `};
  }
  h3 {
    font-size: 34px;
    font-family: Karma;
    font-weight: 300;
    color: white;
    grid-area: title;
    margin: 0;

    ${mq.medium`
      font-size: 44px;
    `};
  }
  a {
    grid-area: link;
  }
`

const ExternalLink = styled("a")`
  color: #52e5ff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`

export default function GetInvolved(props) {
  const { t } = useTranslation()
  return (
    <Container id="get-involved">
      <AnchorContainer href={"#get-involved"}>
        <H2>
          {t("home.getInvolved.title")}
          <Anchor />
        </H2>
      </AnchorContainer>
      <Links>
        {links.map(l => (
          <LinkItem key={l.name}>
            <img src={l.img} alt={t(l.name)} />
            <h3>{t(`home.getInvolved.${l.name}.title`)}</h3>
            <ExternalLink href={l.link}>
              {t(`home.getInvolved.${l.name}.cta`)}
            </ExternalLink>
          </LinkItem>
        ))}
      </Links>
    </Container>
  )
}
