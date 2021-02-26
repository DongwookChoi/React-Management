const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '921211',
            'gender': '남자',
            'job': '교수'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '테드창',
            'birthday': '941211',
            'gender': '남자',
            'job': '사업가'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '최동욱',
            'birthday': '921211',
            'gender': '남자',
            'job': '부자'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));