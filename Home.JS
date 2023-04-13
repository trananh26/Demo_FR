$(document).ready(function() { // bắt đầu vào trang thì làm gì đó
    alert("Load thành công danh sách người dùng");
    $.ajax({
        url:'http://localhost:3000/api/v1/account/user?page=1',
        type:'GET'
    })
    .then(data=>{
        console.log(data); 

        var dataUser = data.data
        $('#content').html('')
        for(let i=0; i< dataUser.length; i++){
            const element = dataUser[i];
    
            var item = $(`<h1>${element.username}:${element.password}</h1>`)
    
            $('#content').append(item)
        }
    
    })
    .catch(err=>{
        console.log(err);
    })
});


var crPage = 1

function loadPage(page){
    crPage = page
    $.ajax({
        url:'http://localhost:3000/api/v1/account/user?page=' + page,
        type:'GET'
    })
    .then(data=>{
        console.log(data); 

        var dataUser = data.data

        $('#content').html('')
        for(let i=0; i< dataUser.length; i++){
            const element = dataUser[i];
    
            var item = $(`<h1>${element.username}:${element.password}</h1>`)
    
            $('#content').append(item)
        }
    
    })
    .catch(err=>{
        console.log(err);
    })
}

function nextPage(){
    crPage++
    $.ajax({
        url:'http://localhost:3000/api/v1/account/user?page=' + crPage  ,
        type:'GET'
    })
    .then(data=>{
        console.log(data); 

        var dataUser = data.data
        $('#content').html('')
        for(let i=0; i< dataUser.length; i++){
            const element = dataUser[i];
    
            var item = $(`<h1>${element.username}:${element.password}</h1>`)
    
            $('#content').append(item)
        }
    
    })
    .catch(err=>{
        console.log(err);
    })
}

function previousPage(){
    crPage--
    $.ajax({
        url:'http://localhost:3000/api/v1/account/user?page=' + crPage ,
        type:'GET'
    })
    .then(data=>{
        console.log(data); 

        var dataUser = data.data
        $('#content').html('')
        for(let i=0; i< dataUser.length; i++){
            const element = dataUser[i];
    
            var item = $(`<h1>${element.username}:${element.password}</h1>`)
    
            $('#content').append(item)
        }
    
    })
    .catch(err=>{
        console.log(err);
    })
}

