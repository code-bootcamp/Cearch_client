import { Dispatch, SetStateAction } from 'react'
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

export interface IFormValues {
  email?: string
  name?: string
  password?: string
  checkPassword?: string
}

export interface IJoinUIProps {
  // autoHyphen: string
  onClickCreateUser: (data: any) => Promise<void>
  register: UseFormRegister<IFormValues>
  handleSubmit: UseFormHandleSubmit<IFormValues>
  formState: FormState<IFormValues>
  setPhoneNumber: Dispatch<SetStateAction<string>>
  onclickSendPhoneNumber: () => Promise<void>
  setInputToken: Dispatch<SetStateAction<string>>
  isActive: boolean
}
