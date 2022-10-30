import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { AiOutlineCheck } from 'react-icons/ai';

const Details = ({ details }) => {
  return (
    <Block>
      {details.map(detail => (
        <div className="detail" key={detail.title}>
          <div className="detail__label">{detail.title}</div>
          <ul className="detail__content">
            {detail.content.map(el =>
              detail.hasIcon ? (
                <li className="list-with-icon">
                  <AiOutlineCheck className="icon" />
                  <span className="li">{el}</span>
                </li>
              ) : (
                <li key={el}>{el}</li>
              ),
            )}
          </ul>
        </div>
      ))}
    </Block>
  );
};

const Block = styled.div`
  margin-top: 3rem;

  .detail {
    display: flex;
    gap: 2rem;

    &:not(:last-of-type) {
      margin-bottom: 0.6rem;
    }

    &__label {
      max-width: 10rem;
      width: 100%;
      letter-spacing: ${themeGet('letterSpacings.wide')};
      font-weight: ${themeGet('fontWeights.bold')};
    }

    &__content {
      font-weight: ${themeGet('fontWeights.light')};

      display: flex;
      flex-direction: column;

      .list-with-icon {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        .icon {
          color: ${themeGet('colors.primary')};
        }
      }
    }
  }
`;

export default Details;
