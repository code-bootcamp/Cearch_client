import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react'

function ToastStatusSuccess() {
  const toast = useToast()

  return (
    <Wrap>
      {/* {statuses.map((status, i) => (
        <WrapItem key={i}> */}
      <Button
        onClick={() =>
          toast({
            // title: `success toast`,
            status: 'success',
            isClosable: true,
          })
        }
      >
        회원가입
      </Button>
      {/* </WrapItem>
      ))} */}
    </Wrap>
  )
}
