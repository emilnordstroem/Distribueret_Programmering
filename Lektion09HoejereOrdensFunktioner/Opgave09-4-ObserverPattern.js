
function observer () {
    console.log("I was notified")
}

// doesn't care about the type of object added and notified
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