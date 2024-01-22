document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // let's select through the attribute
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const showsSection = document.querySelector('.shows');
    const imageTextSection = document.querySelector('.image-text-section');
    
    const heightOfElementHero = heroSection.clientHeight; // let's get the height of element hero with property 'clientHeight'
    const heightOfElementShows = showsSection.clientHeight;
    const heightOfElementImageText = imageTextSection.clientHeight;

    window.addEventListener('scroll', function() { // this function always will be called when change the scroll of window
        const currentPosition = window.scrollY; // let's get position of scroll in window
        console.log(currentPosition)

        if (currentPosition > heightOfElementHero - 200) {
            hiddenElementsOfHeader();
            showSectionShows();
        } else {
            showElementsOfHeader();
        }

        if (currentPosition > (heightOfElementShows + (heightOfElementHero - 300))) {
            showSectionImageText()
        }

        if (currentPosition > (heightOfElementShows + heightOfElementImageText + (heightOfElementHero - 300))) {
            showSectionAvailableDevices()
        }
    });
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const abaATarget = button.target.dataset.tabButton; // other form for get data is with property 'getAttribute'
            const aba = document.querySelector(`[data-tab-id=${abaATarget}]`);
            
            hiddenAllAbas();
            aba.classList.add('shows__list--is-active');
            
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        });
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
});

function hiddenElementsOfHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function showElementsOfHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

function showSectionShows() {
    const shows = document.querySelector('.shows');
    shows.classList.remove('shows--is-hidden');
}

function showSectionImageText() {
    const sectionImageText = document.querySelector('.image-text-section');
    sectionImageText.classList.remove('image-text-section--is-hidden');
}

function showSectionAvailableDevices() {
    const sectionAvailableDevices = document.querySelector('.available-devices');
    sectionAvailableDevices.classList.remove('available-devices--is-hidden');
}

function openOrCloseAnswer(event) { // this event is send implicitly in before function
    const classThatLetsUse = 'faq__questions__item--is-open';
    const fatherElement = event.target.parentNode;
    fatherElement.classList.toggle(classThatLetsUse);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hiddenAllAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}