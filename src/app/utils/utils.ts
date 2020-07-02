export const accessibleRouteChangeHandler = (): number => 
  window.setTimeout(() => {
    const mainContainer: HTMLElement | null = document.getElementById('primary-app-container');
    if (mainContainer) {
      mainContainer.focus();
    }
  }, 50);