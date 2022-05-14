const root = document.getElementById('root');

let counters = [];

class Counter{
    constructor(id, value){
        this.id = id;
        this.counter = value;
    }
    increment(){
        this.counter++;
        render();
    }
    decrement(){
        this.counter--;
        render();
    }
}

function createCounter(value = 0) {
    let newCounter = new Counter(counters.length, value)
    counters.push(newCounter);
    render();
    return newCounter;
}

function onCounter(){
    const idElement = event.target.parentElement.id;
    if(event.target.innerText === '+'){
        counters[idElement].increment()
    }
    if(event.target.innerText === '-'){
        counters[idElement].decrement()
    }
}

function render(){
    root.innerHTML = '';
    counters.map((el, index) => {
        const counter = createElement('div', '',index);
        counter.className = 'counter';
        const buttonPlus = createElement('button', '+');
        const buttonMinus = createElement('button', '-');
        const counterBlock = createElement('div');
        const counterName = createElement('span', 'counter:');
        const count = createElement('span', el.counter);
        counterBlock.append(counterName, count)
        counter.append(buttonPlus)
        counter.append(buttonMinus)
        counter.append(counterBlock)
        counter.addEventListener('click', onCounter);
        root.append(counter)
    })
}

//Templates
function createElement(el, text = '', id){
    const item = document.createElement(el);
    item.innerText = text;
    item.id = id;
    return item;
}