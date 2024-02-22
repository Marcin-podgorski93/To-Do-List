const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputBox.value));
        //or li.innerHTML = inputBox.value; "the same result"
        listContainer.appendChild(li);
        // add span to can close item
        
    }
    inputBox.value = "";
}


// Obsługa naciśnięcia klawisza Enter w polu tekstowym
inputBox.addEventListener('keydown', function(event) {
    // Sprawdź, czy naciśnięty klawisz to Enter (kod 13)
    if (event.key === "Enter") {
        addTask(); // Wywołaj funkcję addTask()
    }
});


// when I want use a function that looks like that :

// function handleEnterKeyPress(event) {
//     if (event.keyCode === 13) {
//         addTask();
//     }
// }

// // Obsługa naciśnięcia klawisza Enter w polu tekstowym
// inputBox.addEventListener('keypress', handleEnterKeyPress);
