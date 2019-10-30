function onReady() {
  let toDos = [];
  let toDoId = 1;
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = NEW_TODO_TEXT.value;


        toDos.push(title);
        console.log(toDos);

        // create a new li
        let newLi = document.createElement('li');

        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox
        checkbox.type = "checkbox";

        let deletBtn = document.createElement('button');
        deletBtn.textContent = "Delete";

        deletBtn.addEventListener('click', function(event){
          let buttonLiText = this.parentElement.childNodes[0].textContent;
          //console.log(event);
          //this.parentElement represents the button's <li>L parent
          TODO_LIST.removeChild(this.parentElement);

          toDos.forEach(function(currentToDo, index) {
            //console.log(currentToDo,index);
            //console.log(this);

            if(currentToDo === buttonLiText){
              // remove from array
              toDos.splice(index, 1);
            }
            console.log(toDos);
          });
        })

        // set the title
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(checkbox);

        newLi.appendChild(deletBtn);

        // attach the li to the ul
        TODO_LIST.appendChild(newLi);

        // empty the input
        NEW_TODO_TEXT.value = "";
      });
    };


window.onload = function() {
  onReady();
};
