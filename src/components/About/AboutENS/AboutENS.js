import React from "react"
import styled from "@emotion/styled"
import { useTranslation, Trans } from "react-i18next"

import mq from "../../../mediaQuery"
import { importAll } from "../../../utils"
import { Anchor, AnchorContainer } from "../../Anchor"

const AboutENSContainer = styled("div")`
  background: white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.medium`
    padding-top: 80px;
  `};

  h3 {
    font-family: Overpass;
    font-weight: 200;
    font-size: 28px;
    color: #2b2b2b;
    text-align: center;
  }

  p.prelede {
    font-family: Karma;
    font-size: 24px;
    color: #2b2b2b;
    font-weight: 200;
    text-align: center;
    line-height: 1.3em;
    max-width: 850px;
    padding: 0 20px;

    ${mq.medium`
      font-size: 42px;
    `}
  }
`

const Support = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px 20px;
  padding: 0 20px;
  max-width: 830px;

  p {
    font-family: Overpass;
    font-weight: 200;
    font-size: 22px;
    color: #2b2b2b;
    line-height: 1.3em;

    ${mq.medium`
      height: 100px;
    `};
  }
`

const Logos = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 20px;

  flex-direction: column;
  align-items: flex-start;

  img {
    max-width: 100%;
    margin-bottom: 30px;
    justify-self: center;
    align-self: center;
  }
`

const List1 = styled("div")``

const List2 = styled("div")``
export default function AboutENS(props) {
  const { t } = useTranslation()
  return (
    <AboutENSContainer id="about-ens">
      <AnchorContainer href={"#about-ens"}>
        <h3>
          {t("about.aboutLNS.title")}
          <Anchor />
        </h3>
      </AnchorContainer>

      <p className="prelede">
        {t("about.aboutLNS.text")}
      </p>
    </AboutENSContainer>
  )
}
