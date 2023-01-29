import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
`

export const GamingCard = styled.div``

export const GamingDetailContainer = styled.div``

export const GamingHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
  }
`

export const GamingHeadingCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
  }
`

export const GamingImageContainer = styled.div`
  background-color: #f9f9f9;
  margin-top: 60px;
`

export const GamingOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  background-color: #f9f9f9;
  justify-content: center;
`

export const GamingTitle = styled.p`
  font-size: 20px;
  font-weight: 500px;
  font-family: 'Roboto';
`
export const GamingView = styled.p`
  font-size: 14px;
  color: #7e858e;
`

export const GamingImage = styled.img`
  height: 350px;
  width: 250px;
  margin-right: 30px;
`

export const SideBarContainer = styled.div`
  color: red;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
