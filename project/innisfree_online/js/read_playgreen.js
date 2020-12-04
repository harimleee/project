$(function(){
    var header = document.querySelector('.visual');

  
        var tab = $('.visual .center');
        var tabBtn = $('.visual .center .v_btn a');
        var tabCon = $('.v_btn_t div');

       
      tabBtn.on('click', funTab);
        
        var last = 0;
        function funTab() {
            event.preventDefault();
            var idx = this.dataset.num;

            tabBtn[last].classList.remove('active');
            tabCon[last].classList.remove('active');


            this.classList.add('active');
            tabCon[idx].classList.add('active');

            last = idx;
        }
})