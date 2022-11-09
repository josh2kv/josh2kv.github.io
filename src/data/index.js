import React from 'react';

export const aboutMe = {
  title: '2년차 주니어 프론트엔드 개발자',
  intro: (
    <>
      전기전자공학을 전공했지만 작년부터 개발자로 새롭게 커리어를 시작했습니다.{' '}
      <br />
      뒤늦게 시작한 만큼 밀도 높은 성장에 목마르고 완성도 높은 결과물을 만드는데
      욕심이 많습니다.
    </>
  ),
  personalInfo: [
    { label: '이름', detail: '조성호' },
    { label: '생년월일', detail: '1985년 1월 25일' },
    { label: '거주지', detail: '부산시 사하구' },
    { label: '전화번호', detail: '010-4450-2124' },
    { label: '이메일', detail: 'josh2kv@gmail.com' },
  ],
  haveDoneList: [
    {
      detail: (
        <>
          <span className="keyword">React</span>,{' '}
          <span className="keyword">Redux</span> Toolkit을 이용한 SPA 구현
        </>
      ),
      link: null,
    },
    {
      detail: (
        <>
          JAM stack(<span className="keyword">Gatsby</span>/Strapi/NGINX)으로
          정적웹사이트 제작 및 배포
        </>
      ),
      link: 'https://www.czinnovation.com',
    },
    {
      detail: (
        <>
          <span className="keyword">Vanilla JS</span>로 Client Side Rendering
        </>
      ),
      link: null,
    },
    {
      detail: (
        <>
          <span className="keyword">Gulp</span>를 이용한 프론트엔드 작업 자동화
          환경 구축
        </>
      ),
      link: 'https://github.com/josh2kv/gulp-with-php-boilerplate',
    },
    {
      detail: (
        <>
          <span className="keyword">Chart</span> Library를 활용한 데이터 시각화
        </>
      ),
      link: null,
    },
    {
      detail: (
        <>
          <span className="keyword">CSS</span> 기술 적용(SCSS/CSS-in-JS/CSS
          Frameworks)
        </>
      ),
      link: null,
    },
    {
      detail: (
        <>
          <span className="keyword">반응형</span> 홈페이지 구현
        </>
      ),
      link: null,
    },
    {
      detail: (
        <>
          <span className="keyword">SVG</span>를 이용한 애니메이션 효과 구현
        </>
      ),
      link: null,
    },
    {
      detail: (
        <>
          <span className="keyword">Figma</span>를 활용한 프로젝트 기획 및
          디자인
        </>
      ),
      link: null,
    },
  ],
  workExperience: [
    {
      subTitle: {
        main: '한국미래에너지',
        sub: '(2021.05 ~ 현재 / 1년 6개월)',
      },
      title: '프론트엔드 개발자',
      details: [
        '자사 및 외주 프로젝트의 프론트엔드 개발 전담, 기획 및 디자인 관여',
      ],
    },
  ],
  education: [
    {
      subTitle: {
        main: '고려대학교(안암)',
        sub: '(2018.02)',
      },
      title: '전기전자공학 학사',
      details: ['학점 3.4/4.5, 졸업논문: 사물인터넷(IoT)'],
    },
  ],
  etc: ['TOEIC 905/990', '전기기사', '사무자동화산업기사', '컴퓨터활용능력2급'],
};
