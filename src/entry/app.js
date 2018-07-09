import App from '../views/app.vue'
import juiweex from 'jui-weex'

Vue.use(juiweex);

App.el = '#root'

new Vue(App)