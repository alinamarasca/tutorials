import {createUL, appendLiItems} from '../../components/list.js'


createUL((document.querySelector('body')), 'delegation-list');
appendLiItems ('delegation-list', ['terve', 'hola','hello']);