let screen = document.getElementById('screen');

function getButtonValue() {
    var element = event.target.innerHTML
    var insert = document.createElement("p");
    if (element == '='){
        insert.innerHTML = `${operationLogic()}`;
    }
    else if (element == 'C') {
        screen.textContent = '';
    }
    else {
        insert.innerHTML = `${element}`;
    }
    screen.appendChild(insert);
   };

function operationLogic() {
   let p = Array.from(screen.querySelectorAll('p'))
   .map(element => element.innerHTML.trim())
   .join('');
   let deleteScreen = screen.textContent = '';
    try {
        let result = math.evaluate(p);
        deleteScreen;
        return `${result}` }
    catch(error){
        deleteScreen;
        return 'Insert a valid mathematical expression'
    }
   }