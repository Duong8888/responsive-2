var count = 0;
function hi(){
    if(count%2!=0){
        document.getElementById('menu-main').style.transform = 'translateY(-400px)'
        
    }else{
        document.getElementById('menu-main').style.zIndex = '11'
        document.getElementById('menu-main').style.transform = 'translateY(0px)'
    }
    count++;
}

// transform: translateY(100px);