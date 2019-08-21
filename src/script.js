fadeOut = function(val) {
    var name = document.getElementsByClassName('name')[0].children[0],
        tel = document.getElementsByClassName('tel')[0].children[0];
    if(val == 'name'){
        name.classList.add('active');
    }else if(val == 'tel'){
        tel.classList.add('active');
    }else{
        name.classList.remove('active');
        tel.classList.remove('active');
    }
    document.activeElement.addEventListener('blur', (event) => {
        if(document.getElementById('name').value.length > 0){
            name.classList.add('active');
        }else if(document.getElementById('tel').value.length > 0){
            tel.classList.add('active');
        }else{
            name.classList.remove('active');
            tel.classList.remove('active');
        }
    });
};
openMenu = function(){
    var tableMenu = document.getElementsByClassName('table-menu')[0];

    tableMenu.className == 'table-menu' ? tableMenu.classList.add('open') : tableMenu.classList.remove('open');
};

