import { useState } from "react";
import MyQAsUI from "./MyQAs.presenter";
import {} from "./MyQAs.queries"; 

export default function MyQAs(){
  
  const [currentTab, setCurrentTab] = useState(0)
  
    // const menuArr = [
    //   { name: 'ALL', content: <AppliedClasses /> },
    //   { name: '질문', content: <PaidClasses /> },
    //   { name: '답변', content: <CreatedClasses /> },
    // ]
  
    const selectMenuHandler = (index: number) => {
      setCurrentTab(index)
    }
    

  return(
    <MyQAsUI/>
  )
}

