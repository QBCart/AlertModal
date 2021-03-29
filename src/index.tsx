/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import React from 'react';
import { render } from 'react-dom';
import AlertModal from './alert-modal.js';

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
  const alertModalHeaderText = alertModalMountDiv.querySelector<HTMLElement>(
    `#${id}-header-text`
  )!;
  const alertModalBody = alertModalMountDiv.querySelector<HTMLElement>(
    `#${id}-body`
  )!;
  const alertModalIcon = alertModalMountDiv.querySelector<HTMLElement>(
    `#${id}-icon`
  )!;
  const alertModalBackdrop = alertModalMountDiv.querySelector<HTMLElement>(
    `#${id}-backdrop`
  )!;
  alertModalHeaderText.innerHTML = headerText;
  alertModalBody.innerHTML = bodyHTML;
  alertModalHeaderText.style.color = headerTextColor || 'lightgray';
  alertModalMountDiv.querySelector<HTMLElement>(
    `#${id}-header`
  )!.style.background = headerBackgroundColor || 'darkslategray';
  alertModalBody.style.color = bodyTextColor || 'black';

  alertModalMountDiv.querySelector<HTMLElement>(
    `#${id}-content`
  )!.style.background = bodyBackgroundColor || 'white';

  if (iconName) {
    alertModalIcon.innerHTML = `<span class="material-icons" style="margin-top: -1px; height: 30px; font-size: 32px;">${iconName}</span>`;
  }

  alertModalIcon.style.color = iconColor || '#dc3545';

  alertModalBackdrop.style.display = 'flex';
  alertModalBackdrop.style.animationName = 'var(--alert-modal-show)';
};

export { showAlertModal };
