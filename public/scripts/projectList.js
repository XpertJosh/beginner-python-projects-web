const projectList = document.getElementById('projectsList');
const ul = document.createElement('ul')
projectList.appendChild(ul);
const projects = [
        {
            "pos": 0,
            "name": "Prologue",
            "path": "/projects/0"
        },
        {
            "pos": 1,
            "name": "Hello World",
            "path": "/projects/1"
        },
        {
            "pos": 2,
            "name": "Input Form",
            "path": "/projects/2"
        }
    ]
for (x of projects) {
    let li = document.createElement('li');
    ul.appendChild(li)

    let a = document.createElement('a');
    a.setAttribute('href', x.path);
    a.innerHTML = `${x.pos} - ${x.name}<BR>`;
    li.appendChild(a);
}