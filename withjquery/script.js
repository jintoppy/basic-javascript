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

var myInput = $('#search-input');
var containerEl = $('#container');

function renderList(list){
    containerEl.html('');
    var ulEl = $('<ul />');
    
    list.forEach(function(user){
        var liEl = $('<li />');
        liEl.text(user.name);
        ulEl.append(liEl);
    });
    
    containerEl.append(ulEl);
}

function keyupListener(e){
    console.log(this);
    var inputVal = $(e.target).val();
    var filteredUsers = users.filter(function(user){
        return inputVal && user.name.includes(inputVal);
    });
    renderList(filteredUsers);   
}

myInput.on('keyup', keyupListener);

document.querySelector('#another-input').addEventListener('keyup', function(e){
    console.log(this);
});

renderList(users);
