import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AiOutlineLink } from 'react-icons/ai';
import theme from '../css/theme';

export const useMyProjects = () => {
  const {
    orion001,
    czi001,
    temps001,
    jung001,
    orion002,
    czi002,
    temps002,
    jung002,
    orion003,
    czi003,
    temps003,
    jung003,
    orion004,
    czi004,
    temps004,
    jung004,
  } = useStaticQuery(graphql`
    query {
      orion001: file(relativePath: { eq: "case_orion-001.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      orion002: file(relativePath: { eq: "case_orion-002.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      orion003: file(relativePath: { eq: "case_orion-003.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      orion004: file(relativePath: { eq: "case_orion-004.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      czi001: file(relativePath: { eq: "case_czi-001.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      czi002: file(relativePath: { eq: "case_czi-002.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      czi003: file(relativePath: { eq: "case_czi-003.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      czi004: file(relativePath: { eq: "case_czi-004.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      temps001: file(relativePath: { eq: "case_temps-001.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      temps002: file(relativePath: { eq: "case_temps-002.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      temps003: file(relativePath: { eq: "case_temps-003.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      temps004: file(relativePath: { eq: "case_temps-004.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      jung001: file(relativePath: { eq: "case_jung-001.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      jung002: file(relativePath: { eq: "case_jung-002.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      jung003: file(relativePath: { eq: "case_jung-003.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      jung004: file(relativePath: { eq: "case_jung-004.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  const projects = [
    {
      id: 'orion',
      thumbnail: orion001,
      mainTitle: '에너지관리시스템(오리온)',
      subTitle: '기획 / 디자인 / 프론트엔드',
      details: [
        {
          title: '프로젝트명',
          hasIcon: false,
          content: ['오리온 생산공장 에너지관리시스템(EMS)'],
        },
        {
          title: '주요기능',
          hasIcon: false,
          content: [
            '생산설비별 실시간 에너지 사용량 모니터링',
            '누적 에너지 사용량 및 사용요금 분석',
            '생산량 관리 및 원딘위비교',
          ],
        },
        {
          title: '작업기간',
          hasIcon: false,
          content: ['2022.09 ~ 현재 (2개월)'],
        },
        {
          title: '작업인원',
          hasIcon: false,
          content: ['2명(프론트엔드/백엔드)'],
        },
        {
          title: '업무범위',
          hasIcon: false,
          content: [
            <>
              <span className="text-underline">기획(100%)</span> /{' '}
              <span className="text-underline">디자인(100%)</span> /{' '}
              <span className="text-underline">프론트엔드(100%)</span>
            </>,
          ],
        },
        {
          title: '사용기술',
          hasIcon: false,
          content: [
            '프론트엔드: React, Redux Toolkit, Ant Design, styled-components, Echarts 등',
            '백엔드: PHP, MySQL, NGINX 등',
          ],
        },
        {
          title: '업무상세',
          hasIcon: true,
          content: [
            'React를 이용한 전체 CSR 도입으로 SPA 구현',
            'Redux toolkit를 이용한 상태관리',
            'Ant Design 도입으로 디자인 및 개발 기간 단축 및 품질 향상',
            'Chart Library를 이용한 데이터 시각화',
            'Figma를 이용한 전체 기획 및 디자인',
          ],
        },
      ],
      images: [orion001, orion002, orion003, orion004],
    },
    {
      id: 'czi',
      thumbnail: czi001,
      mainTitle: '기업 홈페이지(자사)',
      subTitle: '기획 / 디자인 / 프론트엔드 / 백엔드',
      details: [
        {
          title: '프로젝트명',
          hasIcon: false,
          content: ['CZ이노베이션 기업 홈페이지'],
        },
        {
          title: 'URL',
          hasIcon: false,
          content: [
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}
            >
              <span>https://www.czinnovation.com</span>
              <a
                href="https://www.czinnovation.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.colors.primary, lineHeight: 0 }}
              >
                <AiOutlineLink />
              </a>
            </div>,
          ],
        },
        {
          title: '작업기간',
          hasIcon: false,
          content: ['2022.07 ~ 현재 (4개월)'],
        },
        {
          title: '작업인원',
          hasIcon: false,
          content: ['2명(디자이너/프론트엔드)'],
        },
        {
          title: '업무범위',
          hasIcon: false,
          content: [
            <>
              기획(30%) / 디자인(20%) /{' '}
              <span className="text-underline">프론트엔드(100%)</span> /{' '}
              <span className="text-underline">백엔드(100%)</span>
            </>,
          ],
        },
        {
          title: '사용기술',
          hasIcon: false,
          content: [
            '프론트엔드: Gatsby, styled-components 등',
            '백엔드: Strapi, MySQL, NGINX',
          ],
        },
        {
          title: '업무상세',
          hasIcon: true,
          content: [
            'Gatsby를 이용한 빠른 정적 웹사이트 개발',
            'Strapi로 CMS를 도입하여 및 관리 편의성 증대',
            'NGINX로 reverse proxy 서버 구축 후 국내 VPS 및 AWS에 프로젝트 배포',
            '반응형 홈페이지',
            'Figma를 이용한 일부 기획 및 디자인',
          ],
        },
      ],
      images: [czi001, czi002, czi003, czi004],
    },
    {
      id: 'temps',
      thumbnail: temps001,
      mainTitle: '에너지관리시스템(자사)',
      subTitle: '기획 / 프론트엔드',
      details: [
        {
          title: '프로젝트명',
          hasIcon: false,
          content: [
            '자사 통합 에너지관리시스템 서비스(EMS) 주요 페이지 리뉴얼',
          ],
        },
        {
          title: '주요기능',
          hasIcon: false,
          content: [
            '실시간 최대수요전력 모니터링 및 자동/수동 설비제어',
            '설비별 실시간 전력 사용량 모니터링',
            '누적 전력 사용량 및 요금 분석',
          ],
        },
        {
          title: '작업기간',
          hasIcon: false,
          content: ['2021.05 ~ 현재 (1년 6개월)'],
        },
        {
          title: '작업인원',
          hasIcon: false,
          content: ['3명(디자이너/프론트엔드/백엔드)'],
        },
        {
          title: '업무범위',
          hasIcon: false,
          content: [
            <>
              <span className="text-underline">기획(100%)</span> /{' '}
              <span className="text-underline">프론트엔드(100%)</span>
            </>,
          ],
        },
        {
          title: '사용기술',
          hasIcon: false,
          content: [
            '프론트엔드: PHP, JavaScript, SCSS, amCharts 등',
            '백엔드: PHP, MySQL, NGINX 등',
          ],
        },
        {
          title: '업무상세',
          hasIcon: true,
          content: [
            '핵심 페이지 리뉴얼 프로젝트의 기획 및 프론트엔드 개발 및 유지보수',
            'Vanilla JavaScript로 일부 CSR',
            'Chart Library를 이용한 데이터 시각화',
            'SVG를 이용한 효과 애니메이션 구현',
            'PHP로 일부페이지 API 구현 및 SSR',
          ],
        },
      ],
      images: [temps001, temps002, temps003, temps004],
    },
    {
      id: 'jungs-food',
      thumbnail: jung001,
      mainTitle: '에너지관리시스템(정식품)',
      subTitle: '기획 / 프론트엔드',
      details: [
        {
          title: '프로젝트명',
          hasIcon: false,
          content: ['정식품 생산공장 에너지관리시스템(EMS)'],
        },
        {
          title: '주요기능',
          hasIcon: false,
          content: [
            '생산설비별 실시간 에너지 사용량 모니터링',
            '누적 에너지 사용량 및 사용요금 분석',
            '생산량 관리 및 원딘위비교',
          ],
        },
        {
          title: '작업기간',
          hasIcon: false,
          content: ['2021.10 ~ 2021.12 (3개월)'],
        },
        {
          title: '작업인원',
          hasIcon: false,
          content: ['3명(디자인/프론트엔드/백엔드)'],
        },
        {
          title: '업무범위',
          hasIcon: false,
          content: [
            <>
              기획(30%) /{' '}
              <span className="text-underline">프론트엔드(100%)</span>
            </>,
          ],
        },
        {
          title: '사용기술',
          hasIcon: false,
          content: [
            '프론트엔드: PHP, JavaScript, Gulp, SCSS, amCharts 등',
            '백엔드: PHP, MySQL, NGINX 등',
          ],
        },
        {
          title: '업무상세',
          hasIcon: true,
          content: [
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}
            >
              <span> Gulp를 이용한 프론트엔드 작업 자동화 환경 구축</span>
              <a
                href="https://github.com/josh2kv/gulp-with-php-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.colors.primary, lineHeight: 0 }}
              >
                <AiOutlineLink />
              </a>
            </div>,

            'Vanilla JavaScript로 일부 CSR',
            'Chart Library를 이용한 데이터 시각화',
            'SCSS 및 BEM방식 도입',
            'Git 및 Zeplin 협업체계 도입',
          ],
        },
      ],
      images: [jung001, jung002, jung003, jung004],
    },
  ];

  return projects;
};
