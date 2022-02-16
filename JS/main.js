const body = document.querySelector('body'),
             sidebar = document.querySelector('.sidebar'),
             toggle = document.querySelector('.toggle'),
             modeSwitch = document.querySelector('.toggle-switch'),
             modeText = document.querySelector('.mode-text');

             toggle.addEventListener('click', () =>{
                 sidebar.classList.toggle('close');
             })

             modeSwitch.addEventListener('click', () =>{
                 body.classList.toggle('dark');

                 if(body.classList.contains('dark')){
                     modeText.innerText = 'Light mode'
                 }else{
                     modeText.innerText = 'Dark mode'
                 }
             });

            