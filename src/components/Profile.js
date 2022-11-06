import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { BsGeoAlt, BsBuilding } from 'react-icons/bs';
import {
  AiOutlineHome,
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import Download from './Download';
import { device } from '../css/breakpoints';
import SvgDotsSquare from '../assets/images/svg/dots-square.svg';
import { useScreenContext } from '../hooks/useScreenContext';

const contactInfo = {
  homepage: 'https://josh2kv.github.io',
  github: 'https://github.com/josh2kv',
  email: 'josh2kv@gmail.com',
  phone: '010-4450-2124',
};

const Profile = () => {
  const { isLargeView } = useScreenContext();
  const [contact, setContact] = useState('');

  return (
    <Block>
      <div className="avatar">
        <div className="photo-wrapper">
          <SvgDotsSquare className="dots-square left" />
          <SvgDotsSquare className="dots-square right" />
          <StaticImage
            className="photo"
            layout="fullWidth"
            alt="profile picture for desktop"
            src="../assets/images/etc/my-profile.jpg"
            formats={['auto', 'webp']}
          />
        </div>
        {/* <p className="comment">성장과 성과</p> */}
      </div>
      <div className="status">
        <div className="row">
          <BsGeoAlt />
          <span className="text">부산, 대한민국</span>
        </div>
        <div className="row">
          <BsBuilding />
          <span className="text">한국미래에너지</span>
        </div>
      </div>
      {isLargeView ? (
        <div className="contact">
          <div className="icon-group">
            <a
              href={contactInfo.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineHome
                onMouseEnter={() => {
                  setContact('homepage');
                }}
                onMouseLeave={() => {
                  setContact('');
                }}
                className="icon"
              />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                className="icon"
                onMouseEnter={() => {
                  setContact('github');
                }}
                onMouseLeave={() => {
                  setContact('');
                }}
              />
            </a>
            <AiOutlineMail
              className="icon"
              onMouseEnter={() => {
                setContact('email');
              }}
              onMouseLeave={() => {
                setContact('');
              }}
            />
            <AiOutlinePhone
              className="icon"
              onMouseEnter={() => {
                setContact('phone');
              }}
              onMouseLeave={() => {
                setContact('');
              }}
            />
          </div>
          <div className="details">{contactInfo[contact]}</div>
        </div>
      ) : (
        <div className="contact">
          <a
            href={contactInfo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="row"
          >
            <AiOutlineHome className="icon" />
            <div className="details">{contactInfo.homepage}</div>
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="row"
          >
            <AiFillGithub className="icon" />
            <div className="details">{contactInfo.github}</div>
          </a>
          <div href={contactInfo.email} className="row">
            <AiOutlineMail className="icon" />
            <div className="details">{contactInfo.email}</div>
          </div>
          <div href={contactInfo.phone} className="row">
            <AiOutlinePhone className="icon" />
            <div className="details">{contactInfo.phone}</div>
          </div>
        </div>
      )}
      {/* <Download /> */}
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  .avatar {
    margin-bottom: 8rem;

    .photo-wrapper {
      position: relative;
      width: 20rem;

      .photo {
        width: 100%;
        margin: auto;
      }

      .dots-square {
        position: absolute;
        width: 4.6rem;
        height: auto;

        &.left {
          top: -2rem;
          left: -2rem;
        }

        &.right {
          bottom: 20%;
          right: -2rem;
        }
      }

      &:before {
        content: '';
        position: absolute;
        left: 1rem;
        right: -1rem;
        top: 1rem;
        bottom: -1rem;
        border: 1px solid ${themeGet('colors.primary')};
        opacity: 0.5;
      }
    }

    .comment {
      margin-top: 0.7rem;
      text-align: center;
    }
  }

  .status {
    margin-bottom: 7rem;

    .row {
      display: flex;
      align-items: center;
      gap: 1.4rem;

      font-size: ${themeGet('fontSizes.s6')};

      &:not(:last-of-type) {
        margin-bottom: 0.4rem;
      }
    }
  }

  .contact {
    .row {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icon {
        font-size: ${themeGet('fontSizes.s7')};
      }

      .details {
        font-size: ${themeGet('fontSizes.s5')};
      }

      &:not(:last-of-type) {
        margin-bottom: 0.4rem;
      }
    }
  }

  ${device.large} {
    .avatar {
      margin-bottom: 8rem;

      .photo-wrapper {
        position: relative;
        width: 20rem;

        .photo {
          width: 100%;
          margin: auto;
        }

        .dots-square {
          position: absolute;
          width: 4.6rem;
          height: auto;

          &.left {
            top: -2rem;
            left: -2rem;
          }

          &.right {
            bottom: 20%;
            right: -2rem;
          }
        }

        &:before {
          content: '';
          position: absolute;
          left: 1rem;
          right: -1rem;
          top: 1rem;
          bottom: -1rem;
          border: 1px solid ${themeGet('colors.primary')};
          opacity: 0.5;
        }
      }

      .comment {
        margin-top: 0.7rem;
        text-align: center;
      }
    }

    .status {
      .row {
        gap: 2rem;
        font-size: ${themeGet('fontSizes.s5')};
      }
    }

    .contact {
      max-width: 28rem;
      width: 100%;
      height: 3rem;
      margin: 0 auto;
      margin-bottom: 4rem;

      .icon-group {
        display: flex;
        justify-content: center;
        gap: 2rem;

        font-size: ${themeGet('fontSizes.s7')};
        margin-bottom: 0.4rem;

        a {
          line-height: 0;
        }

        .icon:hover {
          cursor: pointer;
          color: ${themeGet('colors.primary')};
        }
      }

      .details {
        /* color: ${themeGet('colors.primary')}; */
        font-weight: ${themeGet('fontWeights.light')};
        font-size: ${themeGet('fontSizes.s3')};
        text-align: center;
      }
    }
  }
`;

export default Profile;
