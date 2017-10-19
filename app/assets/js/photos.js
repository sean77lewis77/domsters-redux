function showPic(whichPic) {
    let titleText;
    console.log('hey I was called from another function and this is what the function passed ' + whichPic);
    if (!document.getElementById('placeholder')) return true;
    const source = whichPic.getAttribute('href');
    const placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    if (!document.getElementById('description')) return false;
    if (whichPic.getAttribute('title')) {
        titleText = whichPic.getAttribute('title');
    } else {
        titleText = '';
    }
    const description = document.getElementById('description');
    if (description.firstChild.nodeType === 3) {
        description.firstChild.nodeValue = titleText;
    }

    return false;

}

function preparePlaceholder() {
    // check old browsers
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    // does imageGallery exist
    if (!document.getElementById('imageGallery')) return false;
    // create an image tag
    const placeholder = document.createElement('img');
    // <img />
    // set the image attributes
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', '/assets/img/placeholder.gif');
    placeholder.setAttribute('alt', 'my image gallery');
    // <img id="placeholder" src="/assets/img/placeholder" alt="my image gallery" />
    // console.log(placeholder);
    // create a p tag
    const description = document.createElement('p');
    // set the id attribute of the p tag
    description.setAttribute('id', 'description');
    // create a text node
    const descriptionText = document.createTextNode('Choose an image');
    // put text inside p tag
    // <p>Choose an image</p>
    description.appendChild(descriptionText);
    const imgPlaceholder = document.getElementById('placeholderContainer');
    imgPlaceholder.appendChild(placeholder);
    imgPlaceholder.appendChild(description);
}

function prepareGallery() {
    // check older browsers
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    // does the page have an id of imageGallery
    if (!document.getElementById("imageGallery")) return false;
    const gallery = document.getElementById("imageGallery");
    const links = gallery.getElementsByTagName("a");
    // console.log(links);
    // console.log(links.length);
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}


addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
