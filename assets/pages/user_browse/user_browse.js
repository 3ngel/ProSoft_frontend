Vue.createApp({
    data() {
        const url = new URLSearchParams(window.location.search);
        const name = url.get('user')
        console.log(name)

        return {
            name,
        };
    },
    methods: {
        //Проверка, что пользователь авторизован
        async checkuser(){
            return},
    }
}
).mount('#user_browse'); //К какому блокуму применяется данный раздел