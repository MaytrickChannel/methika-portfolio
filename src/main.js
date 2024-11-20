import './index.css'
import 'flowbite'

// This is the main JavaScript file for the project.
import { Collapse } from 'flowbite';
const collapse = new Collapse(document.getElementById('navbar-sticky'));
function closeNavbar() {
    collapse.collapse()
}function expandNavbar() {
    collapse.expand()
}
document.closeNavbar = closeNavbar;
document.expandNavbar = expandNavbar;
