/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import { React } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack-deps';

interface Props {
  id: string;
  imagesStorageUrl: string;
}

const AlterModal: React.FC<Props> = (props: Props) => {
  //because React onClick is being a pain in the tuckus
  React.useEffect(() => {
    function hideModal() {
      const alertModal = document.getElementById(props.id)!;
      alertModal.classList.remove('qbc-alert-modal-shown');
      alertModal.classList.add('qbc-alert-modal-hidden');
    }

    document
      .getElementById('qbc-alert-modal-close')!
      .addEventListener('click', () => hideModal());
  }, [props.id]);

  return (
    <div>
      <div className="qbc-alert-modal-backdrop">
        <div className="qbc-alert-modal-wrapper">
          <div className="qbc-alert-modal-content">
            <div className="qbc-alert-modal-header">
              <div className="qbc-alert-modal-icon"></div>
              <div className="qbc-alert-modal-header-text"></div>
            </div>

            <div className="qbc-alert-modal-body"></div>

            <div className="qbc-alert-modal-footer">
              <button id="qbc-alert-modal-close" type="button">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterModal;
