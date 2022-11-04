import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import Profile from './Profile';
import { useScreenContext } from '../hooks/useScreenContext';

const ProfileModal = ({ showModal, handleCloseModal }) => {
  const { isLargeView } = useScreenContext();

  const customStyle = {
    overlay: {
      position: 'fixed',
      inset: '0px',
      backgroundColor: 'rgba(0, 0, 0, 0.55)',
      zIndex: 99,
    },
    content: {},
  };

  return (
    <Block
      isOpen={showModal && !isLargeView}
      contentLabel="profile for mobile"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      closeTimeoutMS={300}
      style={customStyle}
      // className="modal-container"
      // overlayClassName="modal-overlay"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
    >
      <AiOutlineClose onClick={handleCloseModal} className="close-btn" />
      <Profile />
    </Block>
  );
};

const Block = styled(Modal)``;

const ModalStyle = styled.div`
  position: absolute;
  color: ${themeGet('colors.textInv')};
  background-color: ${themeGet('colors.palette.neutral2')};
  padding: 12rem 5rem;
  width: min-content;
  height: 100vh;
  right: 0;
  opacity: 1;
  transform: translateX(105%);
  transition: ${themeGet('transition.normal')};

  &.ReactModal__Content--after-open {
    transform: translateX(0%);
  }

  &.ReactModal__Content--before-close {
    transform: translateX(105%);
  }

  .ReactCollapse--collapse {
    transition: ${themeGet('transition.normal')};
  }

  .close-btn {
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 4rem;
    height: auto;
    cursor: pointer;
    color: ${themeGet('colors.palette.neutral6')};

    &:hover {
      color: ${themeGet('colors.palette.neutral7')};
    }
  }
`;

export default ProfileModal;
