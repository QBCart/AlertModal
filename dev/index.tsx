import React, { FC } from 'react';
import { render } from 'react-dom';
import { showAlertModal } from 'alert-modal';

interface Props {
  showAlertModal: (
    headerText: string,
    bodyHTML: string,
    headerTextColor?: string,
    headerBackgroundColor?: string,
    bodyTextColor?: string,
    bodyBackgroundColor?: string,
    iconName?: string,
    iconColor?: string
  ) => void;
}

const DevButton: FC<Props> = (props: Props) => {
  return (
    <button
      onClick={() =>
        props.showAlertModal(
          'Invalid Input',
          '<h5>Quantity must be a positive whole number greater than zero</h5>'
        )
      }
    >
      Show Alert Modal
    </button>
  );
};

(function () {
  render(
    <DevButton showAlertModal={showAlertModal} />,
    document.getElementById('dev-button')
  );
})();
