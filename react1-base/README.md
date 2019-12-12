# 第一阶段项目

**整个项目都在一个组件里面，没有分开的功能因此我们，具有增加记录和删除记录的功能**
* 增加功能
使用setState操作数组增加，注意是操作完数组再放入进去
* 删除
通过index删除，注意不要在this.handledelete(),这样会自动执行
* 修改
使用e.target.value，注意这个是个同步操作，也就是在setState(()=>{return {value:e.target.value}})获取不到，要在外面去获取
* 展示
将list通过map遍历出来就行


