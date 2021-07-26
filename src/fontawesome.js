import Vue from "vue"; 

import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 

import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"; 

library.add(
  faBars
); 
library.add(
  faGithub,
  faInstagram,
  faFacebook
); 

Vue.component("font-awesome-icon", FontAwesomeIcon);