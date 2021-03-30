/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled, { keyframes } from 'styled-components';

const AlertModalShow = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const AlertModalHide = keyframes`
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
`;

const StyledAlertModalBackdrop = styled.div`
  position: fixed;
  display: none;
  top: 0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  animation-name: '';
  animation-duration: 0.5s;
  --alert-modal-show: ${AlertModalShow};
  --alert-modal-hide: ${AlertModalHide};
`;

export default StyledAlertModalBackdrop;
