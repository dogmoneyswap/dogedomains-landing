import React from "react"
import styled from "@emotion/styled"
import logo from "../assets/logo-darkbg.png"

const LogoContainer = styled("div")`
  height: 48px;
  display: flex;

  img {
    display: block;
  }

  .ens-logo {
    width: 128px;
    margin-right: 10px;
  }
`

export default function Logo({ className }) {
  return (
    <LogoContainer className={className}>
      <img src={logo} alt="LNS Logo" className="ens-logo" />
    </LogoContainer>
  )
}
