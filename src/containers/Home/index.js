import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';
import { MdFormatQuote } from 'react-icons/md';
import SvgCodeCube from '../../assets/images/svg/code-cube.svg';
import { device } from '../../css/breakpoints';

const Home = () => {
  return (
    <Block>
      <SvgCodeCube className="code-cube" />
      <div className="heading">
        <h1>안녕하세요.</h1>
        <h1>
          <span className="accent">성장</span>과{' '}
          <span className="accent">성과</span>에 집중하는 개발자
        </h1>
        <h1>
          <span className="accent">조성호</span>입니다.
        </h1>
      </div>
      <div className="sub-headings-wrapper">
        <div className="sub-heading">
          <h2>
            <MdFormatQuote className="quote-start md-none" />
            스스로 학습하고 성장할 수 있는 능력이 있습니다.
            <MdFormatQuote className="quote-end md-none" />
          </h2>
          <p>
            비전공자이지만 줄곧 책과 온라인 강의로 웹개발을 독학했습니다.{' '}
            <br className="md-hide" />
            현재 회사에서도 문제해결에 필요한 모든 것들을 스스로 학습하고
            성취해왔습니다. <br className="md-hide" />
            또한 늦게 시작했기 때문에 앞으로의 성장에 더 절실합니다. 자기개발에
            대부분의 시간을 쏟고 있습니다.
          </p>
        </div>
        <div className="sub-heading">
          <h2>
            <MdFormatQuote className="quote-start md-none" /> 완성도 높은
            결과물을 위해 자기주도적으로 일합니다.
            <MdFormatQuote className="quote-end md-none" />
          </h2>
          <p>
            누가 시키지 않아도 더 나은 프로젝트를 위해 필요한 것들을 스스로
            제안하고 학습합니다. <br className="md-hide" />
            이러한 모습을 인정받아 현재 회사에서 프론트엔드쪽을 개발과 그에
            필요한 모든 결정을 일임받았습니다. <br className="md-hide" />
            이는 팀 내 긍정적인 효과와 성과로 이어져 그 해 연봉협상에서 기존
            연봉대비 25%이상 인상받았습니다.
          </p>
        </div>
      </div>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: relative;
  width: 100%;
  height: 100%;
  padding-right: 3rem;

  .md-hide {
    display: none;
  }

  .code-cube {
    display: none;
    position: absolute;
    right: -6rem;
    top: -6rem;
  }

  .accent {
    font-weight: ${themeGet('fontWeights.bold')};
    background-image: ${themeGet('colors.textAccent')};
    color: ${themeGet('colors.primary')};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .heading {
    h1 {
      font-size: ${themeGet('fontSizes.s8')};
      font-weight: ${themeGet('fontWeights.extraLight')};
      text-shadow: 1px 1px 2px rgb(0 0 0 / 10%);
    }
  }

  .sub-headings-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .sub-heading {
      h2 {
        font-size: ${themeGet('fontSizes.s6')};
        margin-bottom: 0.4rem;
        /* font-weight: ${themeGet('fontWeights.light')}; */
      }

      p {
        font-weight: ${themeGet('fontWeights.extraLight')};
        color: ${themeGet('colors.textSub')};
      }
    }
  }

  ${device.medium} {
    padding: 2rem;

    .md-hide {
      display: block;
    }

    .code-cube {
      display: inline;
      width: 54rem;
      height: 55rem;
    }

    .heading {
      h1 {
        font-size: ${themeGet('fontSizes.s11')};
      }
    }

    .sub-heading {
      h2 {
        /* font-weight: ${themeGet('fontWeights.light')}; */
        position: relative;
        display: inline-block;

        .quote-start {
          width: 2.4rem;
          height: auto;
          position: absolute;
          left: -1.6rem;
          top: -0.6rem;
          color: rgba(255, 255, 255, 0.2);
          transform: rotate(180deg);
        }
        .quote-end {
          width: 2.4rem;
          height: auto;
          position: absolute;
          right: -1.6rem;
          top: -0.6rem;
          color: rgba(255, 255, 255, 0.2);
        }
      }

      p {
        font-weight: ${themeGet('fontWeights.extraLight')};
        color: ${themeGet('colors.textSub')};
      }
    }
  }
`;
export default Home;
