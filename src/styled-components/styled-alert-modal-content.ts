/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const StyledAlertModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw - 20px);
  max-width: 500px;
  border: 2px solid black;
  border-radius: 4px;
  z-index: 1000;
`;

export default StyledAlertModalContent;
