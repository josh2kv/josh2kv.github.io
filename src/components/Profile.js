import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { BsGeoAlt, BsBuilding } from 'react-icons/bs';

import {
  AiOutlineHome,
  AiFillHome,
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import Download from './Download';
import { device } from '../css/breakpoints';

const contactInfo = {
  homepage: 'https://myportfoliomain48907.gatsbyjs.io',
  github: 'https://github.com/josh2kv',
  email: 'josh2kv@gmail.com',
  phone: '010-4450-2124',
};

const Profile = () => {
  const [contact, setContact] = useState('');

  return (
    <Block>
      <div className="avatar">
        <div className="photo-wrapper">
          <StaticImage
            className="photo"
            layout="fullWidth"
            alt="profile picture for desktop"
            src="../assets/images/etc/my-profile(portfolio).jpg"
            formats={['auto', 'webp']}
          />
        </div>
        <p className="comment">늦깍이 개발자</p>
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
      <div className="contact">
        <div className="icon-group">
          <a
            href={contactInfo.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillHome
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

      &:before {
        content: '';
        position: absolute;
        left: -3rem;
        right: -3rem;
        top: -1.5rem;
        bottom: -4rem;
        border: 1px solid ${themeGet('colors.borderSub')};
      }

      &:after {
        content: '';
        position: absolute;
        left: -1.5rem;
        right: -1.5rem;
        top: -3rem;
        bottom: -5.5rem;
        border: 1px solid ${themeGet('colors.borderSub')};
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
      gap: 1rem;

      font-size: ${themeGet('fontSizes.s5')};

      &:not(:last-of-type) {
        margin-bottom: 0.4rem;
      }
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

  ${device.large} {
  }
`;

export default Profile;
