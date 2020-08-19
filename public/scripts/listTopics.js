const topicsList = document.getElementById('topicsList');
let ul = document.createElement('ul');
topicsList.appendChild(ul);
let topics = [
    {
        name: 'IDE',
        path: '/resources/topics/ide'
    },
    {
        name: 'PATH',
        path: '/resources/topics/path'
    }
]

for (x of topics) {
    let li = document.createElement('li');
    ul.appendChild(li);

    let topic = document.createElement('a');
    topic.setAttribute('href', x.path);
    topic.innerHTML = `${x.name}`
    li.appendChild(topic)
}