class Task {
    static createElement(value) {
        const ul = document.querySelector('ul')
        const li = document.createElement('li');
        li.innerHTML = value + "<img class='remove' src='icons/remove.png'>";
        ul.appendChild(li);
        document.querySelectorAll('img.remove').forEach(item => {
            item.addEventListener('click', ui.removeTask)
        })
        ui.index++

    }

}
class UI {
    constructor() {
        this.input = document.getElementById('create');
        this.inputSubmit = document.getElementById('submit');
        this.ul = document.querySelector('.taskList ul');
        this.li = document.querySelector('ul li');
        this.btn = document.querySelector('.clear');
        this.index = 0;
        this.tasks = JSON.parse(localStorage.getItem("task")) || [];
        this.index++
    }

    removeTask = (e) => {
        let tar = e.target.parentNode;
        this.tasks.forEach((it, index) => {
            if (tar.textContent == it) {
                this.tasks.splice(index, 1)
            }

            localStorage.setItem("task", JSON.stringify(this.tasks));
        })

        tar.remove();

    }

    addTask(value) {
        this.index++
        ui.tasks.push(value);
        localStorage.setItem("task", JSON.stringify(ui.tasks));
        return value
    }

}
const ui = new UI;
ui.tasks.forEach(Task.createElement);

function eventListeners() {

    ui.inputSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const newTask = ui.addTask(ui.input.value);
        Task.createElement(newTask);
        ui.input.value = '';
    })
    ui.btn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = document.getElementById('create');
        document.querySelectorAll('li').forEach(it => {
            it.remove();
            localStorage.clear()
            input.value = '';

        })
    })

}

document.addEventListener('DOMContentLoaded', eventListeners)


// const input = document.getElementById('create');
// const inptSumb = document.getElementById('submit');
// const btn = document.querySelector('.clear');
// const ul = document.querySelector('.taskList ul');


// const removeTask = (e) => {
//     let tar = e.target.parentNode;  
//     tar.remove()
// }

// const addTask = (e) => {
//     e.preventDefault()
//     if (input.value) {
//         const li = document.createElement('li');
//         ul.appendChild(li);
//         li.innerHTML = input.value + "<img class='remove' src='icons/remove.png'>";
//         input.value = '';
//     }

//     document.querySelectorAll('img.remove').forEach(item => {
//         item.addEventListener('click', removeTask)
//     })

//     document.querySelectorAll('li').forEach(it => {
//         btn.addEventListener('click', (e) => {
//             e.preventDefault()
//             it.remove()
//         })

//     })

// }


// inptSumb.addEventListener('click', addTask)