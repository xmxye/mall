import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
    console.log(Vue)
    // 1. 创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    // 2. 根据组件构造器，new出来一个组件对象
    const toast = new toastConstructor()

    // 3. 将创建的组件对象 挂载到某一个元素上
    toast.$mount(document.createElement('div'))

    // 4. toast.$el 对应的就是div,将div加入到body中
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast

}
export default obj