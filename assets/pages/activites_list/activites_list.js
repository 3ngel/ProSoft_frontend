// import { useRoute, useRouter } from 'vue-router';
// const router = useRouter()
const logins = {login:'user', password:'1'}
Vue.createApp({
    data() {
        return {
            items: [],
            currentSort:'name',
            currentSortDir:'asc',
            folder: 'Проект разработан группой РИЗ-330916у'
        };
    },
    created(){
        console.log(document.cookie)
        this.items = [{ name: 'GHG', status:'Используется', date_create:'2025-01-02', owner:'Я', inventory_number:'1', type_object:'Монитор', serial_number:'11'},
                { name: 'Sdfdy', status:'Ремонт', date_create:'2025-01-01', owner:'Моя сестра', inventory_number:'2', type_object:'Процессор', serial_number:'22'},
                { name: 'Sodf', status:'Списан', date_create:'2025-03-01', owner:'Ты', inventory_number:'3', type_object:'ОС', serial_number:'33'},
                { name: 'Sdf', status:'В резерве отдела', date_create:'2025-01-03', owner:'кто-то', inventory_number:'4', type_object:'Блок питания', serial_number:'44'},
                { name: 'Sdfy', status:'На складе', date_create:'2025-04-01', owner:'другой', inventory_number:'5', type_object:'Материнская плата', serial_number:'55'},]
    },
    methods: {
        sort(s){
            if(s === this.currentSort) {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                }
            this.currentSort = s;
        },
        viewActive(name){
            console.log("Просмотр актива "+ name)
            apiUrl=config.env.apiUrl
        },
        viewUser(name){
            console.log("Просмотр пользователя "+ name)
            window.location = "../user_browse/user_browse.html?user="+name
        },
        exit(){
            window.location = "../../index.html"
        },
        to_users(){
            // window.location = "../user_browse/user_browse.html"
        },
        
    },
    computed:{
        sorted() {
            return this.items.sort((a,b) => {
                let modifier = 1;
                if(this.currentSortDir === 'desc') modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            });
            }
        }
}
).mount('#user_browse'); //К какому блокуму применяется данный раздел
