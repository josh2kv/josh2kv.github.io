import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import Modal from 'react-modal';
import Profile from './Profile';

const ProfileModal = ({ showModal, handleCloseModal, isLargeView }) => {
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
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
    >
      <Profile />
    </Block>
  );
};

const Block = styled(Modal)`
  /* position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;

  .modal-container {
    background-color: #fff;

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
  } */
`;

const ModalStyle = styled.div`
  position: absolute;
  color: ${themeGet('colors.textInv')};
  background-color: ${themeGet('colors.palette.neutral2')};
  padding: 12rem 0;
  width: 75%;
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
`;

const OverlayStyle = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 99;
`;

export default ProfileModal;
