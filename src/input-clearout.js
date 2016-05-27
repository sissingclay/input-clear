/**
 * Created by claysissing on 26/05/2016.
 */

var extendingPrototype = Object.create(HTMLElement.prototype);

extendingPrototype.createdCallback = function () {

    this.readAttributes();
    this.innerHTML = this.createContainer();

    if (this.relative) {
        this.parentNode.style.position = 'relative';
    }

    this.addEventListener('click', function (e) {

        e.preventDefault();

        if (this.input) {
            this.selectInput();
        }

        if (!this.input) {
            this.findInput();
        }
    });
}

extendingPrototype.readAttributes = function () {
    this.relative = JSON.parse(this.getAttribute('relative'));
    this.input = this.getAttribute('input');
    this.css = this.getAttribute('css');
    this.html = this.getAttribute('html');
}

extendingPrototype.selectInput = function () {

    var ele = this.parentNode.querySelector(this.input);

    if (ele) {
        ele.value = '';
    }

    if (!ele) {
        console.warn('input attribute needs to cssSelector within the parentNode');
    }
}

extendingPrototype.findInput = function () {

    var node = this.parentNode.firstChild;

    while (node && node !== this) {

        node = node.nextElementSibling || node.nextSibling;

        if (node.nodeName === 'INPUT') {
            node.value = '';
        }
    }
}

extendingPrototype.addCss = function () {
    console.log('this.css', this.css);
}

extendingPrototype.createContainer = function () {

    var html = '<span class="fa fa-times-circle-o"></span>';

    if (this.css) {
        html = '<span class="' + this.css + '"></span>';
    }

    if (this.html) {
        html = this.html;
    }

    return html
}

document.registerElement('cs-clearout', {
    prototype: extendingPrototype
});