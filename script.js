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
        let span =document.createElement("span");
        span.appendChild(document.createTextNode("\u00d7"));
        //or span.innerHTML = "\u00d7"; the same result 
        li.appendChild(span);
        //listener click on element li
        // li.addEventListener('click', function() {
        //     li.classList.toggle('checked');
        // });
        // Obsługa kliknięcia na span
        // span.addEventListener('click',function () {
        //     listContainer.removeChild(li);
        // });
    }
    inputBox.value = "";
    saveData();
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

// Obsługa kliknięcia na element li
listContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData(); // Zapisz listę zadań w pamięci lokalnej po kliknięciu na element li
    }
});

// Obsługa kliknięcia na span
listContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.parentNode.remove();
        saveData(); // Zapisz listę zadań w pamięci lokalnej po kliknięciu na span
    }
});

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();