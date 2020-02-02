import alert from '../../Notification';

export default function(showError, failedMessage, successTitle, successMessage) {
  if (showError) {
    alert('Error.', failedMessage, 4, 'error', 'topRight');
    return;
  }

  alert(successTitle, successMessage, 4, 'success', 'topRight');
}
