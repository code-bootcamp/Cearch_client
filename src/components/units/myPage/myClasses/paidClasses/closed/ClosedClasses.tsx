import { useState } from 'react'
import * as CH from './ClosedClasses.styles'
import { Popover } from 'antd'
import 'antd/dist/antd.css'
import Modal from './ClosedClasses.modal'

export default function ClosedClasses(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onClickToggle = () => {
    setIsModalOpen((prev) => !prev)
  }
  const content = <Modal el={props.el} />

  return (
    <CH.ClassContents>
      <CH.ClassContentsLeft>
        <CH.ClassImage></CH.ClassImage>
        <CH.ClassContentsList>
          <CH.ClassContentsListTop>
            <CH.ClassCategory>
              {props.el.category.map((el, index) => (
                <span className="Categories" key={index}>
                  {el}
                </span>
              ))}
            </CH.ClassCategory>
            <CH.ClassTitle>{props.el.title}</CH.ClassTitle>
          </CH.ClassContentsListTop>
          <CH.ClassDate>{props.el.date}</CH.ClassDate>
        </CH.ClassContentsList>
      </CH.ClassContentsLeft>
      <Popover
        style={{ borderRadius: 30 }}
        content={content}
        placement="bottomRight"
        trigger="click"
      >
        <CH.ClassButton>후기쓰기</CH.ClassButton>
      </Popover>
      {/* <CH.ClassButton onClick={onClickToggle}>후기쓰기</CH.ClassButton> */}
    </CH.ClassContents>
  )
}
