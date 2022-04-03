import * as CH from './ClassWrite.styles'

export default function ClassWriteUI(props) {
  return (
    <CH.Wrapper>
      <div className="write">
        <div>
          <p>사전 질문 작성 및 신청</p>
          <p className="title">
            {props.ProductData?.fetchLectureProduct?.classTitle}
          </p>
        </div>
        <div>
          <p>
            이름 <span style={{ color: 'red' }}>*</span>
          </p>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            defaultValue={props.UserData?.fetchUser?.name}
            onChange={props.onChangeName}
            style={{ border: props.nameError }}
          />
        </div>
        <div>
          <p>
            휴대전화 번호 <span style={{ color: 'red' }}>*</span>
          </p>
          <input
            type="text"
            placeholder="전화번호를 입력해주세요"
            defaultValue={props.UserData?.fetchUser?.phoneNumber}
            onChange={props.onChangePhoneNumber}
            style={{ border: props.phoneNumberError }}
            maxLength={11}
          />
        </div>
        <div>
          <p>
            나이 <span style={{ color: 'red' }}>*</span>
          </p>
          <input
            type="number"
            placeholder="나이를 입력해주세요"
            onChange={props.onChangeAge}
            style={{ border: props.ageError }}
          />
        </div>
        <div>
          <p>
            직업 <span style={{ color: 'red' }}>*</span>
          </p>
          <select
            name="상태"
            onChange={props.onChangeJob}
            style={{ border: props.jobError }}
          >
            <option value="">직업을 선택해주세요</option>
            <option value={'STUDENT'}>학생</option>
            <option value={'EMPLOYEED'}>직장인</option>
            <option value={'JOBSEEKER'}>구직자</option>
            <option value={'OWNER_FREELANCER'}>자영업자</option>
            <option value={'YOUNGAPPLICANT'}>취업준비생</option>
            <option value={'SELF_EMPLOYEED'}>창업가/프리랜서</option>
            <option value={'ETC'}>기타</option>
          </select>
        </div>
        <div>
          <p>
            자기소개 <span style={{ color: 'red' }}>*</span>
          </p>
          <textarea
            placeholder="자기소개를 입력해주세요"
            onChange={props.onChangeSelfIntroduction}
            style={{ border: props.selfIntroductionError }}
          />
        </div>
        <div>
          <p>사전질문</p>
          <textarea
            placeholder="궁금한 점이 있을 경우 입력해주세요"
            onChange={props.onChangePreQuestion}
            style={{ border: props.preQuestionError }}
          />
        </div>
        <CH.ClassSubmit onClick={props.onClickSubmitRegister}>
          수강 신청
        </CH.ClassSubmit>
      </div>
    </CH.Wrapper>
  )
}
