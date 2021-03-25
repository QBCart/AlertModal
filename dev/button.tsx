import {
  React,
  render
} from 'https://cdn.skypack.dev/@qbcart/eshop-skypack-deps';

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

const DevButton: React.FC<Props> = (props: Props) => {
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

const mountDevButton = (
  showAlertModal: (
    headerText: string,
    bodyHTML: string,
    headerTextColor?: string,
    headerBackgroundColor?: string,
    bodyTextColor?: string,
    bodyBackgroundColor?: string,
    iconName?: string,
    iconColor?: string
  ) => void
): void => {
  render(
    <DevButton showAlertModal={showAlertModal} />,
    document.getElementById('dev-button')
  );
};

export default mountDevButton;
