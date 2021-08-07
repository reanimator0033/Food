function calc() {

//Calc

const result = document.querySelector('.calculating__result span');
var sex = 'female',
     weight, height, age, 
    coef = 1.375;

    function calcTotal() {
        if (!sex || !weight || !height || !age || !coef) {
            result.textContent = '____';
            return;
        };
        
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * coef);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * coef);
        }
    };
    calcTotal();

    function getStaticInformation(parentSelector, activeClass) {
        const element = document.querySelectorAll(`${parentSelector} div`);
        element.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-coef')) {
                    coef = +e.target.getAttribute('data-coef');
                } else {
                    sex = e.target.getAttribute('id');
                }

                element.forEach(elem  =>{
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });            
    };
    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            switch(input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break; 
                case 'age':
                    age = +input.value;
                    break;  
            }
            calcTotal();
        });
        
    }

     getDynamicInformation('#height');
     getDynamicInformation('#weight');
     getDynamicInformation('#age');

}

export default calc;