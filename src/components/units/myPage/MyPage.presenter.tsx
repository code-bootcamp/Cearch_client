import { IMyPageUIProps } from './MyPage.types'
import * as CH from './MyPage.styles'

export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <>
      <CH.HeadWrapper>
        <CH.HeadLeft>
          <CH.Avatar>
            <img src="/avatar.png" />
          </CH.Avatar>
          <CH.Name>홍길동⚙️</CH.Name>
        </CH.HeadLeft>
        <CH.HeadRight>
          <CH.HeadRightSection>
            <CH.HeadRightSectionLabel>
              관심 분야 / 직무
            </CH.HeadRightSectionLabel>
            <CH.HeadRightSectionContents1>
              데이터 / 데이터 분석
            </CH.HeadRightSectionContents1>
          </CH.HeadRightSection>
          <CH.HeadRightSection>
            <CH.HeadRightSectionLabel>나의 포인트 〉</CH.HeadRightSectionLabel>
            <CH.HeadRightSectionContents2>
              150,800원
            </CH.HeadRightSectionContents2>
          </CH.HeadRightSection>
          <CH.HeadRightSection>
            <CH.HeadRightSectionLabel>팔로워 수</CH.HeadRightSectionLabel>
            <CH.HeadRightSectionContents2>340명</CH.HeadRightSectionContents2>
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
        <CH.Contents>{props.menuArr[props.currentTab].content}</CH.Contents>
      </CH.BodyWrapper>
    </>
  )
}
