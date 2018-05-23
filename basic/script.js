var users = [
    {
        name: 'Rajnikanth',
        age: 30
    },
    {
        name: 'Ajith',
        age: 31
    },
    {
        name: 'Vijay',
        age: 28
    },
    {
        name: 'Surya',
        age: 31
    }
];

var myInput = document.querySelector('#search-input');
var containerEl = document.querySelector('#container');

function renderList(list){
    containerEl.innerHTML = '';
    var ulEl = document.createElement('ul');
    
    list.forEach(function(user){
        var liEl = document.createElement('li');
        liEl.textContent = user.name;
        ulEl.appendChild(liEl);
    });
    
    containerEl.appendChild(ulEl);
}

function filterUser(user){
    return inputVal && user.name.includes(inputVal);
}

function keyupListener(e){
    var inputVal = e.target.value;
    var filteredUsers = users.filter(filterUser);
    renderList(filteredUsers);
    
}

myInput.addEventListener('keyup', keyupListener);

renderList(users);
