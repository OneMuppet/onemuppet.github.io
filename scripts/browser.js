export const addDeviceClasses = () => {
  let classNames = [];
  if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('ios');
  if (navigator.userAgent.match(/android/i)) classNames.push('android');

  let html = document.getElementsByTagName('html')[0];

  if (classNames.length) classNames.push('on-device');
  if (html.classList) html.classList.add.apply(html.classList, classNames);
}