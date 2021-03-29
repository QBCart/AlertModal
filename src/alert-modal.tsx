/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useEffect } from 'react';
import StyledAlertModalBackdrop from './styled-components/styled-alert-modal-backdrop.js';
import StyledAlertModalContent from './styled-components/styled-alert-modal-content.js';
import StyledAlertModalHeader from './styled-components/styled-alert-modal-header.js';
import StyledAlertModalHeaderText from './styled-components/styled-alert-modal-header-text.js';
import StyledAlertModalIcon from './styled-components/styled-alert-modal-icon.js';
import StyledAlertModalBody from './styled-components/styled-alert-modal-body.js';
import StyledAlertModalFooter from './styled-components/styled-alert-modal-footer.js';

interface Props {
  id: string;
  imagesStorageUrl: string;
}

const AlterModal: FC<Props> = (props: Props) => {
  useEffect(() => {
    const alertModalBackdrop = document.getElementById(`${props.id}-backdrop`)!;
    alertModalBackdrop.addEventListener('animationend', () => {
      if (alertModalBackdrop.classList.contains('qbc-alert-modal-visible')) {
        alertModalBackdrop.classList.remove('qbc-alert-modal-visible');
        alertModalBackdrop.style.display = 'none';
      } else {
        alertModalBackdrop.classList.add('qbc-alert-modal-visible');
      }
    });
  }, [props.id]);

  function hideModal() {
    const alertModalBackdrop = document.getElementById(`${props.id}-backdrop`)!;
    alertModalBackdrop.style.animationName = 'var(--alert-modal-hide)';
  }

  return (
    <StyledAlertModalBackdrop id={`${props.id}-backdrop`}>
      <StyledAlertModalContent id={`${props.id}-content`}>
        <StyledAlertModalHeader id={`${props.id}-header`}>
          <StyledAlertModalIcon id={`${props.id}-icon`}>
            <img
              src={`${props.imagesStorageUrl}images/favicon.ico`}
              alt="company logo"
              height="36"
            />
          </StyledAlertModalIcon>
          <StyledAlertModalHeaderText id={`${props.id}-header-text`} />
        </StyledAlertModalHeader>

        <StyledAlertModalBody id={`${props.id}-body`} />

        <StyledAlertModalFooter>
          <button
            onClick={hideModal}
            className="btn btn-secondary"
            type="button"
          >
            OK
          </button>
        </StyledAlertModalFooter>
      </StyledAlertModalContent>
    </StyledAlertModalBackdrop>
  );
};

export default AlterModal;
