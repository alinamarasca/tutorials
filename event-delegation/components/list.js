export const createUl = (parentElement, listId) => {
    const ul = document.createElement('ul');
    ul.setAttribute('id', listId);
    return ul;
    }
    
export const appendLiItems = (listId, liItems = []) => {
    const ul = document.getElementById(listId);
    for (let string of liItems) {
    const li = document.createElement('li');
    li.textContent = string;
    ul.appendChild(li);
    }
       return ul;
        
    }
