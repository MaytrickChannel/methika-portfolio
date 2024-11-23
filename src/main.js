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


export function sendEmail() {
    const recipient = "maytrickchannel@gmail.com";
    const subject = document.getElementById('emailFormSubject').value;
    const body = document.getElementById('emailFormBody').value;

    console.log(recipient)
    console.log(subject)
    console.log(body)

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
document.sendEmail = sendEmail;