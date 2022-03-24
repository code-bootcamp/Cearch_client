import { useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material/Select'
import ClassCreateUI from './ClassCreate.presenter'

// import 'react-quill/dist/quill.snow.css'
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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

export default function ClassCreate() {
  const [dateTime, setDateTime] = useState(new Date())

  const theme = useTheme()
  const [category, setCategory] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    console.log(category)
  }

  return (
    <ClassCreateUI
      category={category}
      handleChange={handleChange}
      MenuProps={MenuProps}
      categories={categories}
      getStyles={getStyles}
      dateTime={dateTime}
      setDateTime={setDateTime}
      theme={theme}
    />
  )
}
