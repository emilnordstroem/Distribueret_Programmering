
function observer () {
    console.log("I was notified")
}

function createSubject () {
    const observerArray = [];
    function registerObserver (observer) {
        observerArray.push(observer);
    }
    function notifyObservers () {
        observerArray.forEach(currentObserver => {
            currentObserver();
        })
    }

    return {
        registerObserver,
        notifyObservers
    }
}

const subject = createSubject();
subject.registerObserver(observer);
subject.notifyObservers();