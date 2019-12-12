# 第三阶段项目（react+antd+纯redux）
* 注意this.handDelete箭头函数指向和立即执行的问题
* antd按需加载的使用
* redux的更新流程
1. 通过redux库中的createStore放入记事本的初始数据，导出Store.
2. 查询：使用导入的store进行获取初始数据
3. 增加，删除，更新使用action作为传话（type,value）,通过dispatch传话给Store，通过记事本处理action。
4. 处理后的store还没有自动更新，使用监听substribe监听，有变动后重新获取函数