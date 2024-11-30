let fuhadShiblu_input = document.querySelector('.fuhadShiblu_input')
let fuhadShiblu_button = document.querySelector('.fuhadShiblu_button')

let fuhadShiblu_showHide = true

fuhadShiblu_button.addEventListener('click' , ()=>{
     if(fuhadShiblu_input.value == ''){
          alert(`Password can't be blank`)
     }else{
          if (fuhadShiblu_showHide) {
               fuhadShiblu_input.type = 'text';
               fuhadShiblu_button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
           } else {
               fuhadShiblu_input.type = 'password';
               fuhadShiblu_button.innerHTML = '<i class="fa-solid fa-eye"></i>';
           }
           fuhadShiblu_showHide = !fuhadShiblu_showHide;
     }
})