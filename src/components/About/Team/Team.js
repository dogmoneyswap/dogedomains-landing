import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import mq from "../../../mediaQuery"

import mainnet_pat from "./photos/mainnet_pat.png"
import kasumi from "./photos/kasumi.png"
import { Anchor, AnchorContainer } from "../../Anchor"

const team = [
  {
    name: "mainnet-pat",
    title: "Lead Developer & Maintainer",
    img: mainnet_pat,
    link: "https://github.com/mainnet-pat",
  },
  {
    name: "Kasumi",
    title: "Solidity Developer",
    img: kasumi,
    link: "https://github.com/kasumi-1",
  },
]

const TeamContainer = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  h3 {
    font-family: Overpass;
    font-weight: 200;
    font-size: 28px;
    color: #2b2b2b;
    text-align: center;
  }

  ${mq.medium`
    padding-top: 80px;
  `};
`

const TeamMembers = styled("section")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TeamMemberContainer = styled("a")`
  width: calc(50% - 40px);
  margin: 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  text-decoration: none;

  ${mq.medium`
    width: calc(25% - 40px);
  `}

  .img-wrapper {
    width: 100%;
    margin-bottom: 0;
    position: relative;
    width: 170px;
    .hover {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 100%;
      transition: 0.2s;
      z-index: 1;
    }
    &:hover .hover {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 1;
    }
  }

  .photo {
    display: block;
    border-radius: 100%;
    width: 170px;
    height: 170px;
    position: relative;
    z-index: 2;
  }
  .hover {
    background-image: linear-gradient(44deg, #52e5ff 0%, #513eff 100%);
    height: 170px;
    width: 170px;
    border-radius: 50%;
    opacity: 0;
  }

  h4 {
    font-family: Karma;
    font-weight: 500;
    font-size: 24px;
    color: #5284ff;
    text-align: center;
    line-height: 32px;
    margin-bottom: 0;
  }

  p {
    margin: 0;
    font-family: Karma;
    font-size: 16px;
    color: #2b2b2b;
    text-align: center;
  }
`

function TeamMember({ member }) {
  return (
    <TeamMemberContainer href={member.link}>
      <div className="img-wrapper">
        <img src={member.img} className="photo" alt={member.name} />
        <div className="hover" />
      </div>
      <h4>{member.name}</h4>
      <p>{member.title}</p>
    </TeamMemberContainer>
  )
}

export default function Team(props) {
  const { t } = useTranslation()
  return (
    <TeamContainer id="about-team">
      <AnchorContainer href={"#about-team"}>
        <h3>
          {t("about.team.title")}
          <Anchor />
        </h3>
      </AnchorContainer>
      <TeamMembers>
        {team.map(member => (
          <TeamMember member={member} />
        ))}
      </TeamMembers>
    </TeamContainer>
  )
}
