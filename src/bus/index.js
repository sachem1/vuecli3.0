// 跨文件的两个组件之间的通信 创建一个空的Vue实例来作为交互的中介
import Vue from 'vue'
const Bus = new Vue()
export default Bus
