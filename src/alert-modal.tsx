/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useEffect, useRef } from 'react';
import { useModalAlert, useRemoveModalAlert } from '@qbcart/eshop-alert-hooks';
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

const AlertModal: FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const alert = useModalAlert();
  const removeAlert = useRemoveModalAlert();

  // show alert modal
  useEffect(() => {
    if (alert) {
      const modal = ref.current!;
      modal.style.animationName = 'var(--alert-modal-show)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';

      const content = modal.querySelector<HTMLDivElement>(
        `#${props.id}-content`
      )!;
      content.style.backgroundColor = alert.bodyBackgroundColor || 'white';
      content.style.color = alert.bodyTextColor || 'black';

      const header = modal.querySelector<HTMLDivElement>(
        `#${props.id}-header`
      )!;
      header.style.backgroundColor =
        alert.headerBackgroundColor || 'darkslategray';

      const headerText = modal.querySelector<HTMLDivElement>(
        `#${props.id}-header-text`
      )!;
      headerText.style.color = alert.headerTextColor || 'lightgray';

      if (alert.iconName) {
        const icon = modal.querySelector<HTMLDivElement>(`#${props.id}-icon`)!;
        icon.innerHTML = `<span class="material-icons" style="margin-top: -1px; font-size: 32px; color: ${
          alert.iconColor || '#dc3545'
        }">${alert.iconName}</span>`;
      }
    }
  }, [alert, ref, props]);

  const hideModal = () => {
    const modal = ref.current!;
    modal.style.animationName = 'var(--alert-modal-hide)';
  };

  const onAnimationEnd = async (): Promise<void> => {
    const modal = ref.current!;
    modal.style.animationName = '';

    if (modal.classList.contains('qbc-alert-modal-visible')) {
      modal.classList.remove('qbc-alert-modal-visible');
      modal.style.display = 'none';
      if (alert) {
        removeAlert(alert.id!);
      }
    } else {
      modal.classList.add('qbc-alert-modal-visible');
    }
  };

  return (
    <StyledAlertModalBackdrop
      ref={ref}
      id={`${props.id}-backdrop`}
      onAnimationEnd={() => onAnimationEnd()}
    >
      <StyledAlertModalContent id={`${props.id}-content`}>
        <StyledAlertModalHeader id={`${props.id}-header`}>
          <StyledAlertModalIcon id={`${props.id}-icon`}>
            <img
              src={`${props.imagesStorageUrl}images/favicon.ico`}
              alt="company logo"
              width="36"
            />
          </StyledAlertModalIcon>
          <StyledAlertModalHeaderText
            id={`${props.id}-header-text`}
            dangerouslySetInnerHTML={{ __html: alert?.headerText ?? '' }}
          />
        </StyledAlertModalHeader>

        <StyledAlertModalBody
          dangerouslySetInnerHTML={{ __html: alert?.htmlBody ?? '' }}
        />

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

export default AlertModal;
