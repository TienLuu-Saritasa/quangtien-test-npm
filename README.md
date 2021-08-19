# How to use

```
npm i -S quangtien-test-npm
```

```javascript
const app = require('quangtien-test-npm');
app.start(process.env.PORT || 8000);
app.get('/', (req, res) => {
  return res.json("Hello")
})
```
