import React from 'react';

export const aboutMe = {
  title: '2년차 주니어 프론트엔드 개발자',
  intro: (
    <>
      전기전자공학을 전공했지만 여러 방황 끝에 제작년부터 개발자가 되고자 공부를
      시작했습니다. <br />
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
    { detail: 'React, Redux Toolkit을 이용한 SPA 구현', link: null },
    {
      detail: 'JAM stack(Gatsby/Strapi/NGINX)으로 정적웹사이트 제작 및 배포',
      link: 'https://www.czinnovation.com',
    },
    { detail: 'Vanilla JS로 Client Side Rendering', link: null },
    {
      detail: 'Gulp를 이용한 프론트엔드 작업 자동화 환경 구축',
      link: 'https://github.com/josh2kv/gulp-with-php-boilerplate',
    },
    { detail: 'Chart Library를 활용한 데이터 시각화', link: null },
    { detail: 'CSS 기술 적용(SCSS/CSS-in-JS/CSS Frameworks)', link: null },
    { detail: '반응형 홈페이지 구현', link: null },
    { detail: 'SVG를 이용한 애니메이션 효과 구현', link: null },
    { detail: 'Figma를 활용한 프로젝트 기획 및 디자인', link: null },
  ],
};
