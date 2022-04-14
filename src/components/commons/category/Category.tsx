import * as CH from './Category.styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Html from './Html'
import Css from './Css'
import Javascript from './Javascript'
import React from './React'
import Typescript from './Typescript'
import Python from './Python'
import Php from './Php'
import NodeJs from './NodeJs'
import MySql from './MySql'
import C from './C'
import Docker from './Docker'
import Library from './Library'
import ReactNative from './ReactNative'
import Ruby from './Ruby'
import MongoDB from './MongoDB'
import VueJs from './VueJs'
import GraphQL from './GraphQL'
import RestAPI from './RestAPI'
import Service from './Service'
import { useContext, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GlobalContext } from '../../../../pages/_app'
import { useRouter } from 'next/router'

export default function SwiperCategory() {
  const router = useRouter()

  const { setCheckedCategory } = useContext(GlobalContext)

  const onClickCategory = (e) => {
    setCheckedCategory(e.currentTarget.id)
    // console.log('sdfsadfsa')

    if (router.asPath !== '/class') {
      router.push('/class')
    }
  }

  return (
    <CH.Wrapper>
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 8,
            spaceBetween: 15,
          },
          750: {
            slidesPerView: 6,
          },
          600: {
            slidesPerView: 5,
          },
          0: {
            slidesPerView: 4,
          },
        }}
        navigation
        modules={[Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ textAlign: 'center' }}
        id="mainCategory"
      >
        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="HTML"
        >
          <Html />
          <span>HTML</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="CSS"
        >
          <Css />
          <span>CSS</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="JAVASCRIPT"
        >
          <Javascript />
          <span>JAVASCRIPT</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="REACT"
        >
          <React />
          <span>REACT</span>
        </SwiperSlide>
        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="TYPESCRIPT"
        >
          <Typescript />
          <span>TYPESCRIPT</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="PYTHON"
        >
          <Python />
          <span>PYTHON</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="C#"
        >
          <svg
            width="45"
            height="52"
            viewBox="0 0 45 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 13.9822L22.636 2L43.4939 13.9822V37.7247L22.636 49.9288L2 37.7247V13.9822Z"
              stroke="black"
              strokeWidth="2.21892"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.1683 33.6101C29.6514 34.1788 29.5859 35.0395 28.9626 35.4499C27.5864 36.3564 26.0204 36.9481 24.3767 37.1749C22.2851 37.4636 20.1547 37.1494 18.2355 36.2693C16.3163 35.3893 14.688 33.9798 13.542 32.2066C12.396 30.4333 11.7797 28.3698 11.7656 26.2585C11.7515 24.1472 12.3402 22.0757 13.4624 20.2873C14.5847 18.4989 16.194 17.0679 18.1013 16.1622C20.0085 15.2566 22.1346 14.914 24.2298 15.1747C25.8764 15.3796 27.4502 15.9504 28.8384 16.8384C29.4671 17.2405 29.5441 18.1002 29.0686 18.6753C28.5931 19.2504 27.7455 19.3201 27.1016 18.943C26.122 18.3692 25.032 17.9977 23.8962 17.8564C22.3113 17.6592 20.7031 17.9184 19.2604 18.6034C17.8177 19.2884 16.6004 20.3709 15.7515 21.7237C14.9025 23.0765 14.4573 24.6434 14.4679 26.2405C14.4786 27.8375 14.9447 29.3984 15.8116 30.7397C16.6785 32.0811 17.9102 33.1472 19.3619 33.8129C20.8136 34.4786 22.4252 34.7163 24.0073 34.4979C25.1411 34.3415 26.2261 33.9555 27.1979 33.3687C27.8367 32.983 28.6851 33.0414 29.1683 33.6101Z"
              fill="black"
              className="pathFill"
            />
            <path
              d="M25.5159 24.1924H31.9508"
              stroke="black"
              strokeWidth="2.21892"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30.6189 22.8594L30.6189 29.2943"
              stroke="black"
              strokeWidth="2.21892"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.5159 27.9619H31.9508"
              stroke="black"
              strokeWidth="2.21892"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.8491 22.8594L26.8491 29.2943"
              stroke="black"
              strokeWidth="2.21892"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>C#</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="PHP"
        >
          <Php />
          <span>PHP</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="NODE.js"
        >
          <NodeJs />
          <span>NODE.js</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="MYSQL"
        >
          <MySql />
          <span>MYSQL</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="C"
        >
          <C />
          <span>C</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="DOCKER"
        >
          <Docker />
          <span>DOCKER</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="REACT-NATIVE"
        >
          <ReactNative />
          <span>REACT-NATIVE</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="RUBY"
        >
          <Ruby />
          <span>RUBY</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="MONGODB"
        >
          <MongoDB />
          <span>MONGODB</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="VUE.js"
        >
          <VueJs />
          <span>VUE.js</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="GRAPHQL"
        >
          <GraphQL />
          <span>GRAPHQL</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="RESTAPI"
        >
          <RestAPI />
          <span>RESTAPI</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="SERVICE"
        >
          <Service />
          <span>SERVICE</span>
        </SwiperSlide>

        <SwiperSlide
          className="categoryColumn"
          onClick={onClickCategory}
          id="LIBRARY"
        >
          <Library />
          <span>LIBRARY</span>
        </SwiperSlide>
      </Swiper>
    </CH.Wrapper>
  )
}
