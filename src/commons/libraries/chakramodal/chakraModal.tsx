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

export default function ChakraModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onClickDone = () => {
    if (props.data && props.isEdit) {
      props.onClickMoveToUpdate()
      return
    }
    if (props.data) {
      props.deleteBoard()
      return
    }
    if (!props.data && props.isEdit) {
      props.onClickMoveToUpdate()
      return
    }

    if (!props.data && !props.isEdit) props.deleteBoardNonMember()
  }

  return (
    <ChakraProvider>
      <Button onClick={onOpen}>{props.isEdit ? '수정하기' : '삭제하기'}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.isEdit ? '수정하기' : '삭제하기'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.data ? (
              props.isEdit ? (
                '게시글을 수정하시겠습니까?'
              ) : (
                '게시글을 삭제하시겠습니까?'
              )
            ) : (
              <Input
                type="password"
                placeholder="게시글 비밀번호를 입력하세요."
                onChange={props.setPassword}
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              취소
            </Button>
            <Button variant="ghost" onClick={onClickDone}>
              {props.isEdit ? '수정하기' : '삭제하기'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
