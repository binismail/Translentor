const express = require('express')
const Pusher = require('pusher')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    const puhser = new Pusher({
        app_id : "1052208",
        key : "cde8f3b357ee1e82b96a",
        secret: "05ca0836f128112d50a8",
        cluster : "eu"
    })

    Pusher.subscribe('channel-name')
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/chat', (req, res) => {
  const { message } = req.body;

  const responses = {
    greetings: ["Hey, how's it going?", "What's your name?"],

    motivation: [
      'Do I lose when the police officer says papers and I say scissors?',
      'I have clean conscience. I haven’t used it once till now.',
      'Did you hear about the crook who stole a calendar? He got twelve months.',
    ],
  };

  const firstEntityValue = (entities, entity) => {
    const val =
      entities &&
      entities[entity] &&
      Array.isArray(entities[entity]) &&
      entities[entity].length > 0 &&
      entities[entity][0].value;

    if (!val) {
      return null;
    }

    return val;
  };

  const handleMessage = ({ entities }) => {
    const greetings = firstEntityValue(entities, 'greetings');
    const motivate = firstEntityValue(entities, 'getMotivation');

    if (greetings) {
      return pusher.trigger('bot', 'bot-response', {
        message:
          responses.greetings[
            Math.floor(Math.random() * responses.greetings.length)
          ],
      });
    }

    if (jokes) {
      return pusher.trigger('bot', 'bot-response', {
        message:
          responses.jokes[Math.floor(Math.random() * responses.jokes.length)],
      });
    }

    return pusher.trigger('bot', 'bot-response', {
      message: "I can tell help you out! Say 'motivate me'",
    });
  };

  client
    .message(message)
    .then(data => {
      handleMessage(data);
    })
    .catch(error => console.log(error));
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);


Pusher.trigger('my-channel', 'my-event', {'message' : 'hello am a new channel'})