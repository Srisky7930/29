import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
  width: 18vw;
`

export const LinkCard = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`

export const Home = styled.p`
  margin-left: 10px;
`

export const SideBarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95vh;
  padding-left: 20px;
`

export const SocialContainer = styled.div``

export const SocialHeading = styled.h1`
  color: #313131;
  font-family: 'Roboto';
`

export const SocialLogoCard = styled.div``

export const ParaText = styled.p`
  width: 200px;
  color: #424242;
`
