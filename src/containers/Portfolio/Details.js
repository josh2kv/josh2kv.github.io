import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { AiOutlineCheck } from 'react-icons/ai';
import SvgGallery from '../../assets/images/svg/icon_gallery.svg';
import { device } from '../../css/breakpoints';

const Details = ({ details, handleClickGallery }) => {
  return (
    <Block>
      <SvgGallery className="icon-gallery" onClick={handleClickGallery} />
      {details.map(detail => (
        <div className="detail" key={detail.title}>
          <div className="detail__label">{detail.title}</div>
          <ul className="detail__content">
            {detail.content.map(el =>
              detail.hasIcon ? (
                <li className="list-with-icon" key={el}>
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
  margin-top: 1.6rem;
  position: relative;

  .icon-gallery {
    display: none;
  }

  .detail {
    display: flex;
    gap: 1rem;

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
      font-weight: ${themeGet('fontWeights.extraLight')};

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

  ${device.medium} {
    /* margin-top: 3rem; */

    .detail {
      gap: 2rem;
    }

    .icon-gallery {
      position: absolute;
      right: 3rem;
      width: 3rem;
      height: 3rem;
      color: ${themeGet('colors.primary')};
      cursor: pointer;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;

export default Details;
