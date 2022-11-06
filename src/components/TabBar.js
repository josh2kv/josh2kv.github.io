import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { device } from '../css/breakpoints';
import ProfileModal from './ProfileModal';
import { useScreenContext } from '../hooks/useScreenContext';

const TabBar = ({ tabs, selectedTab, handleClickTab }) => {
  const { isLargeView } = useScreenContext();

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (isLargeView === null) return;

  return (
    <Block>
      <ProfileModal showModal={showModal} handleCloseModal={handleCloseModal} />
      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`tab ${selectedTab === tab.id && 'active'}`}
            onClick={() => {
              handleClickTab(tab.id);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {!isLargeView && (
        <div className="profile-button" onClick={handleOpenModal}>
          <StaticImage
            className="profile-pic"
            layout="fullWidth"
            alt="profile picture for mobile"
            src="../assets/images/etc/my-profile.jpg"
            formats={['auto', 'webp']}
          />
        </div>
      )}
    </Block>
  );
};

const Block = styled.nav`
  height: 7rem;
  border-bottom: 1px solid ${themeGet('colors.borderSub')};
  padding: 1rem 2rem 1rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .tabs {
    display: flex;
    gap: 3rem;

    .tab {
      font-size: ${themeGet('fontSizes.s5')};
      font-weight: ${themeGet('fontWeights.light')};
      text-transform: uppercase;
      letter-spacing: ${themeGet('letterSpacings.wide')};
      padding: 0.2rem 0;
      position: relative;

      &.active {
        /* color: ${themeGet('colors.primary')}; */
        /* border-bottom: 3px solid ${themeGet('colors.primary')}; */

        &::before {
          width: 100%;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 3.4rem;
        left: 50%;
        width: 0;
        border-bottom: 3px solid ${themeGet('colors.primary')};
        transform: translateX(-50%);
        transition: width 0.2s ease-in-out;
      }

      &:hover {
        cursor: pointer;
        color: ${themeGet('colors.primary')};

        &::before {
          width: 100%;
        }
      }
    }
  }

  .profile-button {
    max-width: 3.2rem;
    width: 100%;
    height: auto;
    border-radius: 1.6rem;
    overflow: hidden;
    border: 1px solid #fff;
    margin-top: 1rem;
    box-shadow: ${themeGet('shadows.selected')};
    cursor: pointer;
  }

  ${device.large} {
    padding: 2rem 4rem;

    .tabs {
      gap: 5rem;
    }
  }
`;
export default TabBar;
