export interface IMyPageUIProps {
  menuArr: any
  currentTab: number
  selectMenuHandler: (index: number) => void
  isModalOpen: boolean
  onClickModal: () => void
  userInfoData: any
}
