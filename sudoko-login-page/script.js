function logIn(){
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let warningIdMsg = document.getElementById('wrongId');
    let warningPassMsg = document.getElementById('wrongPass')
    
    if(id != 'abcd'){
        warningIdMsg.innerText = 'wrong id'
        warningIdMsg.style.color = 'red'
    } 
    else{
        document.getElementById('wrongId').innerText = ''
    }
    if(password != '1234'){
         warningPassMsg.innerText = 'wrong password'
         warningPassMsg.style.color = 'red'
    }
    else{
        document.getElementById('wrongPass').innerText = ''
    }
    if(id == 'abcd' && password == '1234'){
        window.location.href = '../sudoko-board/index.html'
    }
}