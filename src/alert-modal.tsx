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
  React.useEffect(() => {
    const alertModal = document.getElementById(props.id)!;
    alertModal.addEventListener('animationend', () => {
      if (alertModal.classList.contains('qbc-alert-modal-hide')) {
        alertModal.classList.remove('qbc-alert-modal-hide');
        alertModal.classList.add('qbc-alert-modal-hidden');
      }
    });
  }, [props.id]);

  function hideModal() {
    const alertModal = document.getElementById(props.id)!;
    alertModal.classList.remove('qbc-alert-modal-shown');
    alertModal.classList.add('qbc-alert-modal-hide');
  }

  return (
    <div>
      <div className="qbc-alert-modal-backdrop">
        <div className="qbc-alert-modal-content">
          <div className="qbc-alert-modal-header">
            <div className="qbc-alert-modal-icon">
              <img
                src={`${props.imagesStorageUrl}images/favicon.ico`}
                alt="company logo"
              />
            </div>
            <div className="qbc-alert-modal-header-text"></div>
          </div>

          <div className="qbc-alert-modal-body"></div>

          <div className="qbc-alert-modal-footer">
            <button
              onClick={hideModal}
              className="btn btn-secondary"
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterModal;
