document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const tabs = () => {
        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelector('.card-details__title');
        const cardImageItemElem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');
        const descriptionMemory = document.querySelector('.description__memory');

        // const hideAll = () => {
        //     for(let i = 0; i < cardDetailChangeElem.length; i++) {
        //         cardDetailChangeElem[i].classList.remove('active');
        //         cardDetailsTitleElem[i].classList.remove('active');
        //         cardImageElem[i].classList.remove('active');
        //     }
        // };

        // for(let i = 0; i < cardDetailChangeElem.length; i++) {

        //     cardDetailChangeElem[i].addEventListener('click', () => {
        //         hideAll();
        //         cardDetailChangeElem[i].classList.add('active');
        //         cardDetailsTitleElem[i].classList.add('active');
        //         cardImageElem[i].classList.add('active');
        //     });
        // }

        const data = [
            {
                name: 'Ремонт мобильных телефонов',
                img: 'img/12.png',
            },
            {
                name: 'Ремонт планшетов',
                img: 'img/1234.png',
            },
            {
                name: 'Ремонт ноутбуков',
                img: 'img/12345.png',
            },
        ];

        const deactive = () => {
            cardDetailChangeElems.forEach(btn => btn.classList.remove('active'))
        }

        cardDetailChangeElems.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if(!btn.classList.contains('active')) {
                    deactive();
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = data[i].name;
                    cardImageItemElem.src = data[i].img;
                    cardImageItemElem.alt = data[i].name;
                    cardDetailsPriceElem.textContent = data[i].price + 'грн.'
                    descriptionMemory.textContent = `Встроенная память (RAM) ${data[i].memoryRAM} ГБ`;
                }
            });
        })
    };

    const accordion = () => {
        const characteristicsTitle = document.querySelectorAll('.characteristics__title');
        const characteristicsDescription = document.querySelectorAll('.characteristics__description');
    
        characteristicsTitle.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                elem.classList.toggle('active');
                characteristicsDescription[i].classList.toggle('active'); 
            });
        }); 
    };

    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const modal = document.querySelector('.modal');
        const modalSubtitle = document.querySelector('.modal__subtitle');

        // if(!modalSubtitle.classList.contains('card-details__button_buy')){
        //     modalSubtitle.textContent = 'Оплата';
        // }

        cardDetailsButtonBuy.addEventListener('click', () => {
            modal.classList.add('open');
        });

        modal.addEventListener('click', () => {
            const target = event.target;
            if(target.classList.contains('modal__close') || target === modal) {
                modal.classList.remove('open');
            }
        });



        document.addEventListener('keydown', function(event) {
            if(event.key === "Escape"){
                modal.classList.remove('open');
            };
        });
    }

    const secondModal = () => {
        const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
        const secondModal = document.querySelector('.modal');
        const modalSecondSubtitle = document.querySelector('.modal__subtitle');

        
        // if(!modalSecondSubtitle.classList.contains('card-details__button_delivery')){
        //     modalSecondSubtitle.textContent = 'Доставка и оплата';
        // }


        cardDetailsButtonDelivery.addEventListener('click', () => {
            secondModal.classList.add('open');
        });

        secondModal.addEventListener('click', () => {
            const target = event.target;
            if(target.classList.contains('modal__close')) {
                modal.classList.remove('open');
            }
        });


//modal__subtitle-second
    }



    tabs();
    accordion();
    modal();
    secondModal();
});