import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement 
{
    carNames = ["Thar", "Scorpion", "Bolero", "XUV 500"];

    handleClick(){
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText);


        const allElem = this.template.querySelectorAll('.name');
        Array.from(allElem).forEach(item =>{
            item.setAttribute("title" , item.innerText);
            console.log(item.innerText);
        })

        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = "<p>Hey, I am child component</p>"
    }
}