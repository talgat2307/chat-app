const router = require('express').Router();
const fs = require('fs');
const db = './db.json';
const { nanoid } = require('nanoid');

let data = JSON.parse(fs.readFileSync(db));

router.get('/', (req, res) => {
  const messages = data.slice(Math.max(data.length - 30, 0));
  const sorted = messages.reverse();
  if (req.query.datetime) {
    const queryMessage = messages.find(
      message => message.datetime === req.query.datetime);
    const date = new Date(req.query.datetime);
    if (isNaN(date.getDate())) res.sendStatus(404);
    res.send(queryMessage);
  }
  res.send(sorted);
});

router.post('/', (req, res) => {
  let obj = req.body;
  if (obj.author && obj.message !== '') {
    obj.datetime = (new Date).toISOString();
    obj.id = nanoid();
    data.push(obj);
    fs.writeFileSync(db, JSON.stringify(data));
    res.send(data);
  } else {
    obj = {
      'error': 'Author and message must be present in the request',
    };
    res.send(obj);
  }
});

module.exports = router;
