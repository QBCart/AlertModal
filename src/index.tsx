/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React from 'react';
import { render } from 'react-dom';
import AlertModal from './alert-modal.js';

(function () {
  const id = 'qbc-alert-modal';
  const alertModal = document.getElementById(id);
  render(
    <AlertModal
      id={id}
      imagesStorageUrl={
        document.getElementById('qbc-images')!.dataset.imagesStorageUrl!
      }
    />,
    alertModal
  );
})();
