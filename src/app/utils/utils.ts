export function accessibleRouteChangeHandler() {
  const mainContainer = document.getElementById('primary-app-container');
  if (mainContainer) {
    mainContainer.focus();
  }
}
