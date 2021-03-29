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
          'Alert!',
          '<span>This is an Alert!</span>',
          '#2d2d2d',
          'red',
          'blue',
          'lightgrey',
          'home',
          'white'
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
