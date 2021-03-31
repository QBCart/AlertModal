import { useAddAlert } from '@qbcart/eshop-local-db';
import React, { FC } from 'react';
import { render } from 'react-dom';
import 'alert-modal';

const DevButton: FC = () => {
  const addAlert = useAddAlert(false);
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
