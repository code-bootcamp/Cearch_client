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
import { breakPoints } from '../../styles/media'

const ButtonReplyIcon = styled(ReplyIcon)`
  /* margin-right: 5px; */
  color: #ffa24b;
`
const ButtonEditIcon = styled(EditIcon)`
  /* margin-right: 5px; */
  color: #ffa24b;
`
const ButtonDeleteIcon = styled(DeleteIcon)`
  color: #ffa24b;
`

export default function ChakraModalForComment(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
      <Button onClick={onOpen} bg="white" padding="0px !important" width="5px">
        {props.name ? (
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
            {props.name ? '답글 등록' : props.isEdit ? '수정하기' : '삭제하기'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.name ? (
              '답글을 등록하시겠습니까?'
            ) : props.isEdit ? (
              <Textarea
                placeholder="수정할 내용을 입력하세요"
                onChange={props.onChangeEditComments}
              />
            ) : (
              '댓글을 삭제하시겠습니까?'
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              취소
            </Button>
            <Button
              id={props.id}
              variant="ghost"
              onClick={
                props.name
                  ? () => {
                      props.replyComment()
                      onClose()
                    }
                  : props.isEdit
                  ? props.updateComment
                  : props.deleteComment
              }
            >
              {props.name ? '등록하기' : props.isEdit ? '수정하기' : '삭제하기'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
