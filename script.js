const input = document.getElementById('create');
const inptSumb = document.getElementById('submit');
const btn = document.querySelector('.clear');
const ul = document.querySelector('.taskList ul');


const removeTask = (e) => {
    let tar = e.target.parentNode;
    tar.remove()
}

const addTask = (e) => {
    e.preventDefault()
    if (input.value) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = input.value + "<img class='remove' src='icons/remove.png'>";
        input.value = '';
    }

    document.querySelectorAll('img.remove').forEach(item => {
        item.addEventListener('click', removeTask)
    })

    document.querySelectorAll('li').forEach(it => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            it.remove()
        })

    })

}


inptSumb.addEventListener('click', addTask)