//Week 3
import {loadHeadFooter} from "../utils.mjs";
loadHeadFooter();
//

import Alert from './Alert.js';
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the alert system
  const alertSystem = new Alert();
  alertSystem.init();
  
});

