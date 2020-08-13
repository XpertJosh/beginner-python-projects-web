let headerBar = document.getElementById('headerBar');
headerBar.classList.add('header', 'row')

let headerList = document.createElement('ul');
headerBar.appendChild(headerList);

let refs = [
    {ref: "/", name: 'Home'},
    {ref: "/projects", name: 'Projects'},
    {ref: "/resources", name: 'Resources'},
    {ref: "/tips", name: 'Tips'}
];

for (let i = 0; i < refs.length; i++) {
    let li = document.createElement('li');
    headerList.appendChild(li);
    li.classList.add('col-s-6', 'col-3');

    let link = document.createElement('a');
    link.setAttribute('href', refs[i].ref);
    link.innerHTML = refs[i].name;
    li.appendChild(link);
}