import AppliedClassesUI from './AppliedClasses.presenter'
import {} from './AppliedClasses.queries'

export default function AppliedClasses() {
  // prettier-ignore
  const appliedClasses = [
    { image: '', category: 'typescript, javascript', title: '[7일 단기 특강] 쌩기초부터 시작하는 타입스크립트 단기 완성반', price: 150000, date: '2022.03.21'},
    { image: '', category: '카테고리', title: '클래스제목', price: 150000, date: '2022.03.21'},
    { image: '', category: '카테고리', title: '클래스제목', price: 150000, date: '2022.03.21'},
    { image: '', category: '카테고리', title: '클래스제목', price: 150000, date: '2022.03.21'},
    { image: '', category: '카테고리', title: '클래스제목', price: 150000, date: '2022.03.21'},
  ]

  return <AppliedClassesUI appliedClasses={appliedClasses} />
}
