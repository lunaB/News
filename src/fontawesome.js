import Vue from "vue"; 

import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 

import { faBars, faEllipsisH } from "@fortawesome/free-solid-svg-icons"; 
library.add(
  faBars, faEllipsisH
); 

Vue.component("font-awesome-icon", FontAwesomeIcon);