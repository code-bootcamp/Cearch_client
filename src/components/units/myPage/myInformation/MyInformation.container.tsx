import MyInformationUI from './MyInformation.presenter'
import {} from './MyInformation.queries'
import { useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material/Select'

// prettier-ignore
const categories = [
  'Html','Css','JavaScript','React','TypeScript','Python','C#','Php','Node.js','MySQL','C','Docker','라이브러리',
]

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
      width: 524,
    },
  },
}

export default function MyInformation() {
  const theme = useTheme()
  const [isClicked, setIsClicked] = useState(false)
  const [category, setCategory] = useState<string[]>([])
  const [department, setDepartment] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    console.log(category)
  }

  const handleChangeDepartment = (
    event: SelectChangeEvent<typeof category>
  ) => {
    const {
      target: { value },
    } = event
    setDepartment(typeof value === 'string' ? value.split(',') : value)
  }

  const toggle = () => {
    setIsClicked((prev) => !prev)
  }

  return (
    <>
      <MyInformationUI
        category={category}
        department={department}
        handleChange={handleChange}
        handleChangeDepartment={handleChangeDepartment}
        MenuProps={MenuProps}
        categories={categories}
        getStyles={getStyles}
        theme={theme}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        toggle={toggle}
      />
    </>
  )
}
