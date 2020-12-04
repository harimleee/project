
//tab2
window.addEventListener('DOMContentLoaded',function(){
    var tab = document.querySelector('.tab2');
    var tabBtn = tab.querySelectorAll('.tab2 nav a');
    var tabCon = tab.querySelectorAll('main div > div');
    
    for(var i=0;i<tabBtn.length;i++){
        tabBtn[i].addEventListener('click',funTab);
    }
    
    var last = 0;
    function funTab(){
        event.preventDefault();
        var idx = this.dataset.num;
        
        tabBtn[last].classList.remove('active');
        tabCon[last].classList.remove('active');
        
        this.classList.add('active');
        tabCon[idx].classList.add('active'); 
        
        last = idx;
    }
    
});






    
    
