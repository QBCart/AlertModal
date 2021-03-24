import {
  React,
  render
} from 'https://cdn.skypack.dev/@qbcart/eshop-skypack-deps';

interface Props {
  showAlertModal: (header: string, body: string, icon?: string) => void;
}

const DevButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      onClick={() =>
        props.showAlertModal(
          'Alert',
          '<span class="text-success">This is an Alert!</span>',
          '<span class="material-icons">error_outline</span>'
        )
      }
    >
      Show Alert Modal
    </button>
  );
};

const mountDevButton = (
  showAlertModal: (header: string, body: string, icon?: string) => void
) => {
  render(
    <DevButton showAlertModal={showAlertModal} />,
    document.getElementById('dev-button')
  );
};

export default mountDevButton;
