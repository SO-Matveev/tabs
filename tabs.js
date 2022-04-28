function init() {

    const menu = document.getElementById("tabs");

    menu.onclick = function (event) {
        let btn = event.target.closest('button');
        console.log(btn);
        let selectTabcontent = document.getElementById(event.target.id + '-content');
        if (event.target.tagName != 'BUTTON') {
            return;
        }
        
        let btnAll = document.querySelectorAll('.tab-button');
        for (let i = 0; i < btnAll.length; i++) {
            btnAll[i].classList.remove ('active-button');
            console.log(menu.children[i]);
        }

        let cntAll = document.querySelectorAll('.tab-content');
        for( let i=0; i< cntAll.length; i++){
            cntAll[i].classList.remove('active-content');
        }

        btn.classList.add('active-button');
        selectTabcontent.classList.add('active-content');
    };
}
window.onload = init;