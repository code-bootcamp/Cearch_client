import { Theme, useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import MentorApplyModalUI from './ApplyMentorModal.presenter'
import { message, Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { SEND_MENTOR_FORM } from './ApplyMentorModal.queries'
import {
  IMutation,
  IMutationSendMentorFormArgs,
} from '../../../../commons/types/generated/types'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// prettier-ignore
const categories = [
  'HTML',  'CSS',  'JAVASCRIPT',  'REACT',  'TYPESCRIPT',  'PYTHON', 'C#', 'PHP', 'NODE.js', 'MYSQL', 'C', 'DOCKER', 'REACT-NATIVE', 'RUBY', 'MONGODB','VUE.js','GRAPHQL','RESTAPI','SERVICE','LIBRARY']

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const ITEM_HEIGHT = 56
const ITEM_PADDING_TOP = 0
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 1,
    },
  },
}

export default function MentorApplyModal(props) {
  const theme = useTheme()
  const [category, setCategory] = useState<string[]>([])
  const [department, setDepartment] = useState<string[]>([])
  const [timeRange, setTimeRange] = useState<string[]>([])

  const schema = yup.object().shape({
    companyName: yup.string().required('회사명은 필수입력입니다.'),
    departmentName: yup.string().required('부서명은 필수입력입니다.'),
    selfIntro: yup.string().required('자기소개는 필수입력입니다.'),
  })

  const [sendMentorForm] = useMutation<
    Pick<IMutation, 'sendMentorForm'>,
    IMutationSendMentorFormArgs
  >(SEND_MENTOR_FORM)

  const handleChangeDepartment = (
    event: SelectChangeEvent<typeof category>
  ) => {
    const {
      target: { value },
    } = event
    setDepartment(typeof value === 'string' ? value.split(',') : value)
  }

  const onChangeTimeRange = (time: any, timeRange: string[]) => {
    setTimeRange(timeRange)
  }

  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  const onClickSubmit = async (data) => {
    const { companyName, departmentName, selfIntro } = data

    try {
      const applyResult = await sendMentorForm({
        variables: {
          mentorForm: {
            companyName,
            department: departmentName,
            selfIntro,
            onlineTime: String(timeRange),
          },
          category: department,
        },
      })
      console.log('지원 성공: ', applyResult)
      Modal.success({
        content:
          '멘토 신청서가 성공적으로 접수되었습니다. 심사 기간은 1주일 이내로 소요됩니다.',
      })
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }

  //파일첨부

  const fileProps = {
    name: 'file',
    multiple: true,

    // onChange(info) {
    //   const { status } = info.file
    //   if (status !== 'uploading') {
    //     console.log(info.file, info.fileList)
    //   }
    //   if (status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully.`)
    //   } else if (status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`)
    //   }
    // },
    // onDrop(e) {
    //   console.log('Dropped files', e.dataTransfer.files)
    // },
  }

  return (
    <MentorApplyModalUI
      department={department}
      handleChangeDepartment={handleChangeDepartment}
      MenuProps={MenuProps}
      categories={categories}
      getStyles={getStyles}
      category={category}
      theme={theme}
      onChangeTimeRange={onChangeTimeRange}
      fileProps={fileProps}
      mentorApplyToggle={props.mentorApplyToggle}
      onClickSubmit={onClickSubmit}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
    />
  )
}
