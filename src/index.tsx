/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import React from 'react';
import { render } from 'react-dom';
import AlertModal from './alert-modal';

const id = 'qbc-alert-modal';

(function () {
  const alertModal = document.getElementById(id);
  render(
    <AlertModal
      id={id}
      imagesStorageUrl={alertModal!.dataset.imagesStorageUrl!}
    />,
    alertModal
  );
})();

/**
 * @param {string} headerText - the text displayed in the header of the modal
 * @param {string} bodyHTML - the content displayed in the body of the modal (can be text or html string)
 * @param {string} headerTextColor (optional) - a valid css color to override the default header text color
 * @param {string} headerBackgroundColor (optional) - a valid css color to override the default header background color
 * @param {string} bodyTextColor (optional) - a valid css color to override the default body text color
 * @param {string} bodyBackgroundColor (optional) - a valid css color to override the default body background color
 * @param {string} iconName (optional) - the name of a material icon to override the default company logo
 * @param {string} iconColor (optional) - a valid css color to override the default material icon color
 */
const showAlertModal = (
  headerText: string,
  bodyHTML: string,
  headerTextColor?: string,
  headerBackgroundColor?: string,
  bodyTextColor?: string,
  bodyBackgroundColor?: string,
  iconName?: string,
  iconColor?: string
): void => {
  const alertModalMountDiv = document.getElementById(id)!;

  alertModalMountDiv.querySelector(
    '.qbc-alert-modal-header-text'
  )!.innerHTML = headerText;
  alertModalMountDiv.querySelector(
    '.qbc-alert-modal-body'
  )!.innerHTML = bodyHTML;

  if (headerTextColor) {
    alertModalMountDiv.querySelector<HTMLElement>(
      '.qbc-alert-modal-header-text'
    )!.style.color = headerTextColor;
  }

  if (headerBackgroundColor) {
    alertModalMountDiv.querySelector<HTMLElement>(
      '.qbc-alert-modal-header'
    )!.style.background = headerBackgroundColor;
  }

  if (bodyTextColor) {
    alertModalMountDiv.querySelector<HTMLElement>(
      '.qbc-alert-modal-body'
    )!.style.color = bodyTextColor;
  }

  if (bodyBackgroundColor) {
    alertModalMountDiv.querySelector<HTMLElement>(
      '.qbc-alert-modal-content'
    )!.style.background = bodyBackgroundColor;
  }

  if (iconName) {
    alertModalMountDiv.querySelector(
      '.qbc-alert-modal-icon'
    )!.innerHTML = `<span class="material-icons">${iconName}</span>`;
  }

  if (iconColor) {
    alertModalMountDiv.querySelector<HTMLElement>(
      '.qbc-alert-modal-header'
    )!.style.color = iconColor;
  }

  alertModalMountDiv.classList.remove('qbc-alert-modal-none');
  alertModalMountDiv.classList.remove('qbc-alert-modal-hidden');
  alertModalMountDiv.classList.add('qbc-alert-modal-shown');
};

export { showAlertModal };
