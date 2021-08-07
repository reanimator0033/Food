function timer() {

    // Timer
    const deadLine = '2021-05-16';

    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60 ) % 24)),
            minuts = Math.floor((t / 1000 / 60 ) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minuts': minuts,
            'seconds':seconds
        };
    }

    function getZerro(num)  {
        if (num >= 0 && num <9) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minuts = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZerro(t.days);
            hours.innerHTML = getZerro(t.hours);
            minuts.innerHTML = getZerro(t.minuts);
            seconds.innerHTML = getZerro(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    
    }
    setClock('.timer', deadLine);

}

export default timer;