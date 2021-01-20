(()=>{

    let modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    let symfony=document.querySelector('#symfony');
  
    symfony.addEventListener('click',e=>{
        modal.style.display='block';
        
    });

    span.addEventListener('click',e=>modal.style.display='none')
    window.onclick=e=>((e.target==modal)?modal.style.display='none':null);    
})();


