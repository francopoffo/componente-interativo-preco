# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Use the slider and toggle to see prices for different page view numbers

### Links

- Solution URL: (https://github.com/francopoffo/componente-interativo-preco)
- Live Site URL: (https://leafy-custard-de2253.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned


```html
<div class="componente__valores">
    <span class="componente__valores-pagina"><span id="views">100K </span>VISUALIZAÇÕES DE PÁGINA</span>
    <span><span class="componente__valores-preco"><span>R$ </span><span id="preco">16.00</span></span><span class="componente__valores-mes" id="duracao">/mês</span></span>
</div>
<input type="range" id="slider" min="1" max="5" value="3" step="1" class="componente__slider">
```
```css
.componente__slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 35px;
    height: 35px;
    background-image: url('../img/icon-slider.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 50%;
    background-color:hsl(174, 86%, 45%);
    cursor: pointer;
}

.componente__plano-checkbox-switch {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
    top: 2px;
    left: 3px;
    transition: all 0.5s;
}
.componente__plano-checkbox input:checked + .componente__plano-checkbox-switch {
    transform: translateX(18px);
}
```
```js
switcher.onclick = function(){

    if(checkbox.checked == true){

        let intPreco = parseInt(preco.textContent);
        preco.textContent = `${(intPreco * 0.75) * 12}`;

        duracao.textContent = `/ano`;
    }
    else{
        atualizaPreco();
        duracao.textContent = `/mês`;
    }
}
```

### Continued development

My goal now is to continue to develop my skills in this three languages, with the main focus being JavaScript.

### Useful resources

- [Types of mobile events for JS](https://developer.mozilla.org/pt-BR/docs/Web/API/Touch_events) - This helped me for getting to know mobile events.


## Author

- Website - [Franco Poffo](https://www.linkedin.com/in/franco-poffo/)
- Frontend Mentor - [@francopoffo](https://www.frontendmentor.io/profile/francopoffo)


