import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
`

export const TrendingHeadCard = styled.div`
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

export const TrendingHeading = styled.h1`
  color: black;
  font-size: 30px;
`

export const TrendingDetailContainer = styled.div``

export const TrendingImageContainer = styled.li`
  display: flex;
  padding: 60px;
  background-color: #f9f9f9;
`

export const TrendingImageCard = styled.div``

export const TrendingImage = styled.img`
  height: 250px;
  width: 450px;
`

export const ImageDetails = styled.div`
  margin-left: 20px;
`

export const PublishedAt = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: #7e858e;
  font-family: 'Roboto';
`
export const TrendingViews = styled.p`
  font-size: 14px;
  color: #7e858e;
  font-family: 'Roboto';
`
export const TrendingCard = styled.div`
  display: flex;
`

export const TrendingPublished = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: #7e858e;
  font-family: 'Roboto';
`
export const SideBarContainer = styled.div`
  color: red;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
