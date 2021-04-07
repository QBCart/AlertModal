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
import type { CSSProperties } from 'styled-components';

interface Props {
  imagesStorageUrl: string;
}

const AlertModal: FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const alert = useModalAlert();
  const removeAlert = useRemoveModalAlert();

  /*
   *  Animation must be set in useEffect to function properly.
   */
  useEffect(() => {
    if (alert) {
      const modal = ref.current!;
      modal.style.animationName = 'var(--alert-modal-show)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
    }
  }, [alert, ref]);

  /*
   *  Animation must be set when hiding modal to function properly.
   */
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

  const contentStyle: CSSProperties = {
    color: alert?.bodyTextColor || 'black',
    backgroundColor: alert?.bodyBackgroundColor || 'white'
  };

  const headerStyle: CSSProperties = {
    color: alert?.headerTextColor || 'lightgray',
    backgroundColor: alert?.headerBackgroundColor || 'darkslategray'
  };

  const iconStyle: CSSProperties = {
    marginTop: '-1px',
    color: alert?.iconColor || '#dc3545',
    fontSize: '32px'
  };

  return (
    <StyledAlertModalBackdrop ref={ref} onAnimationEnd={() => onAnimationEnd()}>
      <StyledAlertModalContent style={contentStyle}>
        <StyledAlertModalHeader style={headerStyle}>
          <StyledAlertModalIcon>
            {alert?.iconName ? (
              <span className="material-icons" style={iconStyle}>
                {alert.iconName}
              </span>
            ) : (
              <img
                src={`${props.imagesStorageUrl}images/favicon.ico`}
                alt="company logo"
                width="36"
              />
            )}
          </StyledAlertModalIcon>
          <StyledAlertModalHeaderText
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
