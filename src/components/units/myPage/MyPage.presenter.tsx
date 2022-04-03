import { IMyPageUIProps } from './MyPage.types'
import * as CH from './MyPage.styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import MyInformation from './myInformation/MyInformation.container'
import { ChakraProvider } from '@chakra-ui/react'

export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <CH.Wrapper>
      <CH.HeadWrapper>
        <CH.HeadLeft onClick={() => props.selectMenuHandler(4)}>
          {/* <CH.HeadLeft onClick={props.onClickModal}> */}
          <CH.Avatar>
            <img width={134} src="/avatar.png" />
          </CH.Avatar>
          <CH.NameAndSetting>
            <CH.Name>{props.userInfoData?.fetchUser.name}</CH.Name>
            <img src="/images/setting.png" />
            {/* <img onClick={props.onClickModal} src="/images/setting.png" /> */}
          </CH.NameAndSetting>
        </CH.HeadLeft>
        {/* {props.isModalOpen && <MyInformation />} */}
        <CH.HeadRight>
          <CH.HeadRightSection>
            <CH.HeadRightSectionLabel>
              {props.userInfoData?.fetchUser.role === 'MENTEE'
                ? '관심분야'
                : '관심분야/직무'}
            </CH.HeadRightSectionLabel>
            <CH.HeadRightSectionContents1>
              {props.userInfoData?.fetchUser.role === 'MENTEE' ? (
                <div>
                  {props.userInterest[0] === undefined || null ? (
                    '관심분야를 설정해주세요'
                  ) : (
                    <div>
                      {props.userInterest[0]} {props.userInterest[1]}
                    </div>
                  )}
                </div>
              ) : (
                '관심분야/직무'
              )}
            </CH.HeadRightSectionContents1>
          </CH.HeadRightSection>
          <CH.HeadRightSection onClick={() => props.selectMenuHandler(3)}>
            <CH.HeadRightSectionLabel>나의 포인트 〉</CH.HeadRightSectionLabel>
            <CH.HeadRightSectionContents2>
              {props.userInfoData?.fetchUser.point} 원
            </CH.HeadRightSectionContents2>
          </CH.HeadRightSection>
          <CH.HeadRightSection>
            {props.userInfoData?.fetchUser.role === 'MENTEE' ? (
              ''
            ) : (
              <>
                <CH.HeadRightSectionLabel>팔로워 수</CH.HeadRightSectionLabel>
                <CH.HeadRightSectionContents2>
                  {props.userInfoData?.fetchUser.following} 명
                </CH.HeadRightSectionContents2>
              </>
            )}
          </CH.HeadRightSection>
        </CH.HeadRight>
      </CH.HeadWrapper>
      <CH.BodyWrapper>
        <CH.TabMenu>
          {props.menuArr.map((el: any, index: number) => {
            return (
              <CH.Menu
                key={index}
                className={props.currentTab === index ? 'focused' : 'submenu'}
                onClick={() => props.selectMenuHandler(index)}
              >
                {el.name}
              </CH.Menu>
            )
          })}
        </CH.TabMenu>
        <CH.MobileTab>
          <Swiper style={{ width: '100%' }} slidesPerView={2.5}>
            {props.menuArr.map((el: any, index: number) => (
              <SwiperSlide key={index}>
                <CH.Menu
                  className={props.currentTab === index ? 'focused' : 'submenu'}
                  onClick={() => props.selectMenuHandler(index)}
                >
                  {el.name}
                </CH.Menu>
              </SwiperSlide>
            ))}
          </Swiper>
        </CH.MobileTab>

        <CH.Contents>{props.menuArr[props.currentTab].content}</CH.Contents>
      </CH.BodyWrapper>
    </CH.Wrapper>
  )
}
