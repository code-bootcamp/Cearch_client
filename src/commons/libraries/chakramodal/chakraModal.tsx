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
              '게시글을 삭제하시겠습니까?'
            ) : (
              <Input
                placeholder="게시글 비밀번호를 입력하세요."
                onChange={props.setPassword}
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              취소
            </Button>
            <Button
              variant="ghost"
              onClick={
                props.data
                  ? props.isEdit
                    ? props.onClickMoveToUpdate
                    : props.deleteBoard
                  : props.isEdit
                  ? props.onClickMoveToUpdate
                  : props.deleteBoardNonMember
              }
            >
              {props.isEdit ? '수정하기' : '삭제하기'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
