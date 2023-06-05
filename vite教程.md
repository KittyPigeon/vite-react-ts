## vite 配置使用教程

- 智能引入
- 去掉 debbuer 和 console

```javascript
let config = {
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
};
```
