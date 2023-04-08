
export const queue = document.getElementsByClassName ('queue');

export const queueObject = {

    listenerBlock () {

        for (let i = 0; i < queue.length; i += 1) {
            queue[i].style.display = 'block';
        };

    },

    listenerNone () {

        for (let i = 0; i < queue.length; i += 1) {
            queue[i].style.display = 'none';
        };

    }

};