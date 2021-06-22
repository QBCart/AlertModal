/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React from 'react';
import { render } from 'react-dom';

import AlertModal from './alert-modal/index.js';

const globalMountsContainer = document.getElementById(
  'qbc-eshop-global-mounts'
)!;
const mountingDiv = document.createElement('div');

mountingDiv!.style.zIndex = '2000';
mountingDiv.id = 'qbc-eshop-alert-modal';
globalMountsContainer.appendChild(mountingDiv);

render(
  <AlertModal
    imagesStorageUrl={
      document.getElementById('qbc-eshop-company-settings')!.dataset
        .imagesStorageUrl!
    }
  />,
  mountingDiv
);
