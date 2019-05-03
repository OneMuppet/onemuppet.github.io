import { } from '../components/tq-topbar.js';
import { } from '../components/tq-card.js';
import { } from '../components/tq-bottom-nav.js';
import { addDeviceClasses } from './browser.js';
import { registerServiceWorker } from './serviceWorkerHelper.js';

const init = async () => {
  addDeviceClasses();

  let sw = await registerServiceWorker();
  console.log(sw);
}

init();