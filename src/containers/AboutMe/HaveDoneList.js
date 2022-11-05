import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck, AiOutlineLink } from 'react-icons/ai';
import theme from '../../css/theme';
import { aboutMe } from '../../data';
import themeGet from '@styled-system/theme-get';

const HaveDoneList = () => {
  return (
    <Block>
      <div className="done-title">회사 프로젝트에서 해본 일</div>
      <ul>
        {aboutMe.haveDoneList.map(el => (
          <li key={el.detail}>
            <AiOutlineCheck className="icon-checked" />
            <span className="detail">{el.detail}</span>
            {el.link ? (
              <a
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.colors.primary, lineHeight: 0 }}
              >
                <AiOutlineLink />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Block>
  );
};

const Block = styled.div`
  .done-title {
    font-size: ${themeGet('fontSizes.s6')};
    margin-bottom: 0.6rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    .detail {
      font-weight: ${themeGet('fontWeights.extraLight')};
    }
    .icon-checked {
      color: ${themeGet('colors.primary')};
    }

    .keyword {
      /* border: 1px solid ${themeGet('colors.primary')}; */
      background-image: linear-gradient(155deg, #fbbf24, #f59e0b);
      color: ${themeGet('colors.primary')};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-radius: 2px;
      /* padding: 0 4px; */
      font-weight: ${themeGet('fontWeights.bold')};
    }
  }
`;
export default HaveDoneList;
