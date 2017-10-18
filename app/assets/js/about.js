function showSection(id) {
    console.log(`I called this function from another function and the id is ${id}`);
    const divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].className.indexOf('section') === -1) continue;
        if (divs[i].getAttribute('id') != id) {
            divs[i].style.display = 'none';

        } else {
            divs[i].style.display = 'block';
        }
    }
}

function prepareInternalNav() {
    // check old browsers
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    // make sure the element is on the page
    if (!document.getElementById('internalNav')) return false;
    // grab the container of all the links
    const nav = document.getElementById('internalNav');
    // console.log(nav);
    // grab all the links
    const links = nav.getElementsByTagName('a');
    // console.log(links.length);
    // loop through the links
    for (let i = 0; i < links.length; i++) {
        // grab just the name
        const sectionId = links[i].getAttribute('href').split('#')[1];
        // console.log(sectionId);
        // check to see if the name exists
        if (!document.getElementById(sectionId)) continue;
        // hide all content
        document.getElementById(sectionId).style.display = 'none';
        // trick to keep 'this'
        links[i].destination = sectionId;
        // add clicks to all links and call another function and pass the name (id)
        links[i].onclick = function() {
            showSection(this.destination);
            return false;

        }
    }

}

addLoadEvent(prepareInternalNav);
