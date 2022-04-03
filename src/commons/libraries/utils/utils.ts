export const DateToString = (dateTime: string) => {
  let dateString = ''
  const date = new Date(dateTime)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24))
  const diffHour = Math.floor(diff / (1000 * 60 * 60))
  const diffMin = Math.floor(diff / (1000 * 60))
  const diffSec = Math.floor(diff / 1000)

  if (diffSec < 60) dateString = `방금 전`
  else if (diffMin < 60) dateString = `${diffMin}분 전`
  else if (diffHour < 24) dateString = `${diffHour}시간 전`
  else if (diffDay < 8) dateString = `${diffDay}일 전`
  else dateString = dateTime.split('T')[0]

  return dateString
}

// 목차 뽑아내기
// #의 갯수에 따라 목차 깊이가 달라짐
//#까지 받아와서 목차 레벨에 맞춰 구분하기
export const getIndexFromMD = (mdString: string) => {
  const splitArr = mdString.split('\n')
  const indexArr = []
  let isSummary = false
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i].startsWith('```')) isSummary = !isSummary
    if (isSummary) continue
    if (splitArr[i].startsWith('#')) {
      if (splitArr[i].startsWith('####')) continue
      indexArr.push(splitArr[i])
    }
  }
  console.log(indexArr)
  return indexArr
}

export const getMyDateTime = (myDate) => {
  const aaa = new Date(myDate)
  const yyyy = aaa.getFullYear()
  const mm = aaa.getMonth() + 1
  const dd = aaa.getDate()
  const hh = aaa.getHours()
  const mns = aaa.getMinutes()

  return `${yyyy}. ${mm}. ${dd}. ${String(hh).padStart(2, '0')}:${String(
    mns
  ).padStart(2, '0')}`
}

export const getPrice = (price) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getMyDate2 = (myDate) => {
  const aaa = new Date(myDate)
  const yyyy = aaa.getFullYear()
  const mm = aaa.getMonth() + 1
  const dd = aaa.getDate()

  return `${yyyy}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`
}
