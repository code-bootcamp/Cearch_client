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
  Textarea,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ReplyIcon from '@mui/icons-material/Reply'

const ButtonReplyIcon = styled(ReplyIcon)`
  margin-right: 5px;
  color: #ffa24b;
`
const ButtonEditIcon = styled(EditIcon)`
  margin-right: 5px;
  color: #ffa24b;
`
const ButtonDeleteIcon = styled(DeleteIcon)`
  color: #ffa24b;
`

export default function ChakraModalForComment(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
      <Button onClick={onOpen} bg="white">
        {props.id ? (
          <ButtonReplyIcon />
        ) : props.isEdit ? (
          <ButtonEditIcon />
        ) : (
          <ButtonDeleteIcon />
        )}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {props.id ? '댓글 등록' : props.isEdit ? '수정하기' : '삭제하기'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.id ? (
              '댓글을 등록하시겠습니까?'
            ) : props.isEdit ? (
              <Textarea placeholder="수정할 내용을 입력하세요" height="auto" />
            ) : (
              '댓글을 삭제하시겠습니까?'
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              취소
            </Button>
            <Button
              variant="ghost"
              onClick={
                props.id
                  ? () => {
                      props.editComment()
                      onClose()
                    }
                  : props.isEdit
                  ? props.updateComment
                  : props.deleteComment
              }
            >
              {props.id ? '등록하기' : props.isEdit ? '수정하기' : '삭제하기'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
