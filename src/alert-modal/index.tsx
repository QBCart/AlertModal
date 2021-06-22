/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useEffect, useRef } from 'react';
import { useModalAlert, useRemoveModalAlert } from '@qbcart/eshop-alert-hooks';
import type { CSSProperties } from 'styled-components';

import AlertModalStyles from './styles/alert-modal-styles.js';
import AlertModalBackdropStyles from './styles/alert-modal-backdrop-styles.js';
import AlertModalWrapperStyles from './styles/alert-modal-wrapper-styles.js';
import AlertModalContentStyles from './styles/alert-modal-content-styles.js';
import AlertModalHeaderStyles from './styles/alert-modal-header-styles.js';
import AlertModalHeaderTextStyles from './styles/alert-modal-header-text-styles.js';
import AlertModalIconStyles from './styles/alert-modal-icon-styles.js';
import AlertModalBodyStyles from './styles/alert-modal-body-styles.js';
import AlertModalFooterStyles from './styles/alert-modal-footer-styles.js';

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
      modal.style.display = 'block';
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
    <AlertModalStyles ref={ref} onAnimationEnd={() => onAnimationEnd()}>
      <AlertModalWrapperStyles>
        <AlertModalContentStyles style={contentStyle}>
          <AlertModalHeaderStyles style={headerStyle}>
            <AlertModalIconStyles>
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
            </AlertModalIconStyles>
            <AlertModalHeaderTextStyles
              dangerouslySetInnerHTML={{ __html: alert?.headerText ?? '' }}
            />
          </AlertModalHeaderStyles>

          <AlertModalBodyStyles
            dangerouslySetInnerHTML={{ __html: alert?.htmlBody ?? '' }}
          />

          <AlertModalFooterStyles>
            <button
              onClick={hideModal}
              className="btn btn-secondary"
              type="button"
            >
              OK
            </button>
          </AlertModalFooterStyles>
        </AlertModalContentStyles>
      </AlertModalWrapperStyles>
      <AlertModalBackdropStyles />
    </AlertModalStyles>
  );
};

export default AlertModal;
