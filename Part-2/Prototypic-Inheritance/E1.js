function HTMLElement()
{
    this.click = function() {
        console.log('click');
    }
}

HTMLElement.prototype.focus= function() {

    console.log('focused');

}

function HTMLSelectElement(items=[])
{
    this.items=items;
    this.addItem= function(value)
    {
        return this.items.push(value);
    }

    this.removeItem= function(value)
    {
        this.items.splice(this.items[value],1);
        return this.items;
    }

    this.render=function()
    {
        return `
        <select>
        ${this.items.map(item=>
            `<option>${item}</option>`).join('')}
        </select>`
    }

}

HTMLSelectElement.prototype= Object.create(HTMLElement.prototype);
HTMLSelectElement.prototype.constructor=HTMLSelectElement;

const e = new HTMLElement();
console.log(e.focus());
console.log(e.click());

const s = new HTMLSelectElement();
s.addItem(4);
console.log(s);
s.removeItem(4);
console.log(s);

function HTMLImageElement(src)
{
    this.src=src;
    this.render=function()
    {
        return `<img src="${this.src}" />`;
    }
}

HTMLImageElement.prototype= Object.create(HTMLElement.prototype);
HTMLImageElement.prototype.constructor=HTMLSelectElement;

const elements = [
    new HTMLSelectElement([1,2,3,4]),
    new HTMLImageElement('http://')
];

for(let element of elements)
{
    console.log(element.render());
}