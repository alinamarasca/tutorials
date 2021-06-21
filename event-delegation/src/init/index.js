import '../listeners/listeners.js'
import {createUL, appendLiItems } from '../../components/list.js'

createUL((document.querySelector('body')), 'delegation-list');
appendLiItems ('delegation-list', ['terve', 'hola','hello', 'shalom']);

// createUL((document.querySelector('header')), 'n-list');
// appendLiItems('n-list', ['1', '2'])
console.log(document);



const bgrChange = (e) => {
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor ='red';
    }

}

document.getElementById('delegation-list').addEventListener('click', bgrChange);