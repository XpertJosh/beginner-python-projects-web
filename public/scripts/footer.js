let footer = document.getElementById('footerBar');
footer.classList.add('footer', 'row');

let footerList = document.createElement('ul');
footer.appendChild(footerList);

let fields = [
    { content: "Link to site's GitHub repository's Readme", isLink: true, href: "https://github.com/XpertJosh/beginner-python-projects-web#readme"},
    { content: "Link to report an issue or create a suggestion", isLink: true, href: "https://github.com/XpertJosh/beginner-python-projects-web/issues"},
    { content: "Site hosted using Heroku.", isLink: false, href: ""}
];

for (let i = 0; i < fields.length; i++) {
    let li = document.createElement('li');
    footerList.appendChild(li);
    
    if (fields[i].isLink) {
        let link = document.createElement('a');
        link.innerHTML = fields[i].content;
        link.setAttribute('href', fields[i].href);
        li.appendChild(link);
    } else {
        let text = document.createElement('p');
        text.innerHTML = fields[i].content;
        li.appendChild(text);
    };
};