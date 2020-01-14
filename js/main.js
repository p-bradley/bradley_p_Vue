import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {
    //instantate a
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                { name: "Joe", role: "Mama" },
                { name: "I am a,", role: "Gamer" },
            ]
        },

        methods: {
            logClicked() {
                console.log('Clicked on an element');
            }
        }
    }).$mount('#app');
})();