import { } from '../components/tq-topbar.js';
import { } from '../components/tq-card.js';
import { } from '../components/tq-section.js';
import { } from '../components/tq-section-list.js';
import { addDeviceClasses } from './browser.js';
import { registerServiceWorker } from './serviceWorkerHelper.js';

const init = async () => {
  addDeviceClasses();

  let sw = await registerServiceWorker();
  console.log(sw);
}

init();