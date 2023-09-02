let string = "";

let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if(e.target.innerHTML == '=') {
            try {
                string = eval(string);
            }
            catch(err) {
                string = 'Syntax Error'
            }
            console.log(string);
            document.querySelector('input').value = string;
            string = "";
        }
        else if(e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DE') {
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    });
});