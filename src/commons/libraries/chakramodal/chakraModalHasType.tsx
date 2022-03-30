import styled from '@emotion/styled'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ChakraProvider,
  Input,
} from '@chakra-ui/react'

const BoardDetailButton = styled(Button)`
  display: flex;
  margin: 0 5px;
  border: 1px solid #ffa24b;
  background-color: white;
  :hover {
    color: white;
    font-weight: 500;
    border: none;
    background-color: #ffa24b;
  }
`

export default function ChakraModalHasType(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
      <BoardDetailButton
        onClick={onOpen}
      >{`${props.title}하기`}</BoardDetailButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${props.title}하기`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.type === 'button'
              ? `취소 하시겠습니까? `
              : `게시글을 ${props.title} 하시겠습니까?`}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              돌아가기
            </Button>
            <Button
              variant="ghost"
              type={props.type}
              onClick={() => {
                props.onClick()
                onClose()
              }}
            >
              {props.type === 'button'
                ? `게시글 취소`
                : `게시글 ${props.title}`}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
