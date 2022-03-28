import CreatedClassesUI from './CreatedClasses.presenter'
import {} from './CreatedClasses.queries'

export default function CreatedClasses() {
  // prettier-ignore
  const createdClasses = [
    {
      title: '클래스 제목1', date: '2022.03.22.', limited: 30, now: 10,
      user: [
        {
          name: '홍길동', state: '대학 재학 중', age: 24, route:'블로그', introduce: '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
        {
          name: '홍길동', state: '대학 재학 중', age: 24, route:'블로그', introduce:  '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
        {
          name: '홍길동', state: '대학 재학 중', age: 24, route:'블로그', introduce:  '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만 인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
       
      ],
    },
    { title: '클래스 제목2', date: '2022.01.14.', limited: 20, now: 10,
      user: [
        { 
          name: '김콩쥐', state: '대학 재학 중', age: 24, route: '지인 소개',
          introduce: '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        
          question:
            '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        },
        { 
          name: '김콩쥐', state: '대학 재학 중', age: 24, route: '지인 소개',
          introduce: '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        
          question:
            '하나둘씩 잠이 드나요 우리만 빼고 이 도시는 내일도 오늘처럼 are you alone? 우린 매일 연락해야 해 이 밤은 점점 더 우리에게 차갑고 주눅들게 하는데 어떻게든 우린 서로 안아줘야 해 조금 더 귀찮게 굴어도 돼 가깝게 볼 순 없어도 are you still alone?',
        },
        { 
          name: '김콩쥐', state: '대학 재학 중', age: 24, route: '지인 소개',
          introduce: '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        
          question:
            '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        },
        { 
          name: '김콩쥐', state: '대학 재학 중', age: 24, route: '지인 소개',
          introduce: '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        
          question:
            '하나둘씩 잠이 드나요 우리만 빼고 이 도시는 내일도 오늘처럼 are you alone? 우린 매일 연락해야 해 이 밤은 점점 더 우리에게 차갑고 주눅들게 하는데 어떻게든 우린 서로 안아줘야 해 조금 더 귀찮게 굴어도 돼 가깝게 볼 순 없어도 are you still alone?',
        },
        { 
          name: '김콩쥐', state: '대학 재학 중', age: 24, route: '지인 소개',
          introduce: '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        
          question:
            '아침을 기다리는 게 차라리 나을걸요. 이 곳의 밤은 유난히 느리게 흘러가요. 새벽은 깊어질 수록 더 반짝여 그대 두 눈 꼭 감고 기다리지 말고 나랑 놀아요 딱히 재밌을 건 없지만 are you alone? 우린 지금 연락해야 해',
        },
        
      ],
    },
    {
      title: '클래스 제목3', date: '2022.03.22.', limited: 10, now: 10,
      user: [
        {
          name: '김팥쥐', state: '대학 졸업', age: 24, route: '인터넷 검색',
          introduce:
            '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
        ,
          question:
            '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
        },
        {
          name: '김팥쥐', state: '대학 졸업', age: 24, route: '인터넷 검색',
          introduce:
          '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
      ,
          question:
            '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
        },
        {
          name: '김팥쥐', state: '대학 졸업', age: 24, route: '인터넷 검색',
          introduce:
          '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
      ,
          question:
            '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
        },
        {
          name: '김팥쥐', state: '대학 졸업', age: 24, route: '인터넷 검색',
          introduce:
          '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
      ,
          question:
            '잊지 마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 you are my celebrity 지쳐버린 표정 마치 전원을 꺼놓은 듯이 심장소린 too quiet 네가 가진 반짝거림 상상력 identity까지 모조리 diet'
        },
      ],
    },
    {
      title: '클래스 제목4',
      date: '2022.03.22.',
      limited: 30,
      now: 10,
      user: [
        {
          name: '홍길동',
          state: '대학 재학 중',
          age: 24,
          route: '지인 소개',
          introduce:
          '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
    
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
        {
          name: '홍길동',
          state: '대학 재학 중',
          age: 24,
          route: '지인 소개',
          introduce:
          '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
        {
          name: '홍길동',
          state: '대학 재학 중',
          age: 24,
          route: '지인 소개',
          introduce:
          '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
        {
          name: '홍길동',
          state: '대학 재학 중',
          age: 24,
          route: '지인 소개',
          introduce:
          '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
        {
          name: '홍길동',
          state: '대학 재학 중',
          age: 24,
          route: '지인 소개',
          introduce:
          '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
          question:
            '인생은 나를 놀래키려 하지만 인생은 나를 휘두르려하지만 jump scare 따위엔 안 당하지 난! 인생은 나를 깜빡 속게 하지만 내 간을 엿 바꿔 먹으려 하지만 별 것 아니라고 나를 타이르지만 네가 지나가고 나면 남아 껍질만',
        },
      ],
    },
  ]

  return <CreatedClassesUI createdClasses={createdClasses} />
}
