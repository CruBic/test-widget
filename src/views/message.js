import html from './message.html';
import './message.css';

const elements = [];
let body;

export function show(options) {
    // convert plain HTML string into DOM elements
    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    temporary.getElementsByClassName('js-widget-title')[0].textContent = options.title;
    temporary.getElementsByClassName('js-widget-offer')[0].textContent = options.specialOffer;
    temporary.getElementsByClassName('js-widget-ps')[0].textContent = options.postScriptum;

    // append elements to body
    body = document.getElementsByTagName('body')[0];
    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        body.appendChild(temporary.children[0]);
    }
}
