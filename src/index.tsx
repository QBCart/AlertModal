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

const mountingDiv = document.getElementById('qbc-alert-modal');
mountingDiv!.style.zIndex = '2000';

render(
  <AlertModal
    imagesStorageUrl={
      document.getElementById('qbc-images')!.dataset.imagesStorageUrl!
    }
  />,
  mountingDiv
);
