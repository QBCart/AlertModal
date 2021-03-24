/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import {
  React,
  render
} from 'https://cdn.skypack.dev/@qbcart/eshop-skypack-deps';
import AlertModal from './alert-modal';

const id = 'qbc-alert-modal';

const mountAlertModal = (): void => {
  const alertModal = document.getElementById(id);
  render(
    <AlertModal
      id={id}
      imagesStorageUrl={alertModal!.dataset.imagesStorageUrl!}
    />,
    alertModal
  );
};

/**
 * @param {string} header - Can be text or html string - changes the header text of the toast
 * @param {string} body - Can be text or html string - changes the body text of the toast
 * @param {string} icon - text - changes the default material.io icon on the modal header
 */
const showAlertModal = (header: string, body: string, icon?: string): void => {
  const toastMountDiv = document.getElementById(id)!;

  toastMountDiv.querySelector(
    '.qbc-alert-modal-header-text'
  )!.innerHTML = header;
  toastMountDiv.querySelector('.qbc-alert-modal-body')!.innerHTML = body;
  if (icon) {
    toastMountDiv.querySelector('.qbc-alert-modal-icon')!.innerHTML = icon;
  }

  toastMountDiv.classList.remove('qbc-alert-modal-hidden');
  toastMountDiv.classList.add('qbc-alert-modal-shown');
};

export { mountAlertModal as mountAlertModal, showAlertModal as showAlertModal };
