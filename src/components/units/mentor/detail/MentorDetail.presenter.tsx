import * as CH from './MentorDetail.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import Rating from '@mui/material/Rating'
import { v4 as uuidv4 } from 'uuid'
import classList from './classList.json'

import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
  marginTop: '20px',
  borderRadius: '20px',
  boxShadow: '0px 0px 10px 2px rgb(225, 225, 225)',
  width: '100%',
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  padding: '10px 20px',
}))

export default function MentorDetailUI() {
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }
  return (
    <CH.Wrapper>
      <CH.MentorCard>
        <div>
          <div>
            <p>부서명</p>
            <p>회사명</p>
          </div>
          <div>
            <p>팔로워수</p>
            <p>1202 명</p>
          </div>
        </div>
        <div className="mentorImg">
          <div>
            <div>
              <img src="/images/profile.png" />
            </div>
            <div className="follow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mentorProfile">
          <p>업무파트</p>
          <div>
            <p>◯◯◯ 멘토</p>
            <div className="online"></div>
          </div>
          <p>remark</p>
        </div>
        <div className="mentorTime">
          <p>온라인 시간대</p>
          <p>20:00 ~ 22:00</p>
        </div>
        <div className="DMButton">
          <button>질문하기</button>
        </div>
      </CH.MentorCard>
      <CH.MentorContent>
        <CH.ContentsText>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Laudantium eius corporis, harum
            exercitationem veniam debitis? Quidem possimus voluptatum inventore
            veritatis, deleniti facere commodi quasi vero alias obcaecati, sed
            repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Laudantium eius corporis, harum
            exercitationem veniam debitis? Quidem possimus voluptatum inventore
            veritatis, deleniti facere commodi quasi vero alias obcaecati, sed
            repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Laudantium eius corporis, harum
            exercitationem veniam debitis? Quidem possimus voluptatum inventore
            veritatis, deleniti facere commodi quasi vero alias obcaecati, sed
            repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Laudantium eius corporis, harum
            exercitationem veniam debitis? Quidem possimus voluptatum inventore
            veritatis, deleniti facere commodi quasi vero alias obcaecati, sed
            repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Laudantium eius corporis, harum
            exercitationem veniam debitis? Quidem possimus voluptatum inventore
            veritatis, deleniti facere commodi quasi vero alias obcaecati, sed
            repudiandae ea? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eius corporis, harum exercitationem veniam debitis? Quidem possimus
            voluptatum inventore veritatis, deleniti facere commodi quasi vero
            alias obcaecati, sed repudiandae ea?
          </div>
        </CH.ContentsText>

        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>수강가능 클래스 목록</Typography>
          </AccordionSummary>
          <MuiAccordionDetails>
            <CH.ClassList>
              {classList
                .map((el) => (
                  <div key={uuidv4()}>
                    <CH.ClassImg>
                      <img src="/images/mentor.jpeg" />
                      <p>{el.name}</p>
                      <p>{el.company}</p>
                    </CH.ClassImg>
                    <CH.ClassInfo>
                      <CH.InfoTop>
                        <div>
                          <StarRoundedIcon />{' '}
                          <span>
                            {el.ratingAverage} ({el.peopleNum})
                          </span>
                        </div>
                        <div>{el.classState}</div>
                      </CH.InfoTop>
                      <CH.InfoBottom>
                        <div className="classCategory">
                          <span>{el.category}</span>
                        </div>
                        <div className="classTitle">{el.title}</div>
                        <div className="classDate">{el.createdAt}</div>
                      </CH.InfoBottom>
                    </CH.ClassInfo>
                  </div>
                ))
                .filter((el, index) => {
                  if (index < 3) return el
                })}
            </CH.ClassList>
          </MuiAccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>멘토 이전 클래스</Typography>
          </AccordionSummary>
          <MuiAccordionDetails>
            <CH.ClassList>
              {classList
                .map((el) => (
                  <div key={uuidv4()}>
                    <CH.ClassImg>
                      <img src="/images/mentor.jpeg" />
                      <p>{el.name}</p>
                      <p>{el.company}</p>
                    </CH.ClassImg>
                    <CH.ClassInfo>
                      <CH.InfoTop>
                        <div>
                          <StarRoundedIcon />{' '}
                          <span>
                            {el.ratingAverage} ({el.peopleNum})
                          </span>
                        </div>
                        <div>{el.classState}</div>
                      </CH.InfoTop>
                      <CH.InfoBottom>
                        <div className="classCategory">
                          <span>{el.category}</span>
                        </div>
                        <div className="classTitle">{el.title}</div>
                        <div className="classDate">{el.createdAt}</div>
                      </CH.InfoBottom>
                    </CH.ClassInfo>
                  </div>
                ))
                .filter((el, index) => {
                  if (index < 3) return el
                })}
            </CH.ClassList>
          </MuiAccordionDetails>
        </Accordion>
      </CH.MentorContent>
    </CH.Wrapper>
  )
}
