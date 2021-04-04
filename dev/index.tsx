import { useAddModalAlert } from '@qbcart/eshop-alert-hooks';
import React, { FC } from 'react';
import { render } from 'react-dom';
import 'alert-modal';

const DevButton: FC = () => {
  const addAlert = useAddModalAlert();
  return (
    <button
      onClick={() =>
        addAlert({
          headerText: 'Invalid Input',
          headerTextColor: 'red',
          headerBackgroundColor: 'yellow',
          htmlBody:
            '<h6>Quantity must be a positive whole number greater than zero!</h6>',
          bodyTextColor: 'green',
          bodyBackgroundColor: 'skyblue',
          iconName: 'home',
          iconColor: 'pink'
        })
      }
    >
      Show Alert Modal
    </button>
  );
};

(function () {
  render(<DevButton />, document.getElementById('dev-button'));
})();
