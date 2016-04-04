## Mantra演示程序

[Mantra](https://github.com/kadirahq/mantra)框架是斯里兰卡人[Arunoda](https://github.com/arunoda)提出的架构Meteor应用程序最佳实践规范.

相关中文文档可以参考[Mantra中文版](https://wmzhai.github.io/mantra-zh).

### 环境必备

* Term可翻墙
* Meteor 1.3+
* nodejs 5.9.0+
* npm 3.8.5+ (可以这样升级`npm install -g npm@3.8.5`)

### 下载运行

* Clone下载本代码
* 通过 `npm install` 安装依赖项(该步骤需翻墙)
* 运行`meteor`.
* 通过浏览器<http://localhost:3000>

### 运行测试

在这个程序里,客户端的每一部分都进行了完全的测试, 测试工具使用了Mocha, Chai and Sinon等工具.

运行如下指令以完成测试:

```
npm test
```

*关于测试的具体细节可以参考package.json文件*

### 运行Storybook

[React Storybook](https://github.com/kadirahq/react-storybook)是一个不需要运行主程序就可以独立开发和设计UI组件的工具, 相关介绍可阅读
[Introducing React Storybook](https://medium.com/@arunoda/ec27f28de1e2).

本项目已经写好相关内容,具体操作如下:

* `npm run storybook`
* 通过浏览器<http://localhost:9001>

*注意: React Storybook 需要 npm v3,如果npm install需要升级npm,清空node_modules以后重新安装*

