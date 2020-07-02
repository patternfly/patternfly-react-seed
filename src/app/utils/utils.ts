// export function accessibleRouteChangeHandler2() {
//   return window.setTimeout(() => {
//     const mainContainer = document.getElementById('primary-app-container');
//     if (mainContainer) {
//       mainContainer.focus();
//     }
//   }, 50);
// }

export const accessibleRouteChangeHandler = (): number => 
  window.setTimeout(() => {
    const mainContainer: HTMLElement | null = document.getElementById('primary-app-container');
    if (mainContainer) {
      mainContainer.focus();
    }
  }, 50);