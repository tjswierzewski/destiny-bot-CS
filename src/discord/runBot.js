import WebSocket from 'ws';

const CSId = '831880241310990357';
let sequenceNumber = null;
let alive = false;
let sessionId = null;
const resume = JSON.stringify({
  op: 6,
  d: {
    token: process.env.BOT_TOKEN,
    session_id: sessionId,
    seq: sequenceNumber,
  },
});
const identify = JSON.stringify({
  op: 2,
  d: {
    token: process.env.BOT_TOKEN,
    intents: 513,
    properties: {
      $os: 'OSX',
      $browser: 'Ishtar',
      $device: 'Ghost',
    },
    presence: {
      activities: [
        {
          name: 'Reading the Lore',
          type: 0,
        },
      ],
      status: 'online',
      since: 91879201,
      afk: false,
    },
  },
});

const restartBot = (client) => {
  client.terminate();
  runBot();
};

const printOutgoing = (message) => {
  console.log('\x1b[33m%s\x1b[0m', message);
};

const printIncoming = (message) => {
  console.log('\x1b[35m%s\x1b[0m', message);
};

const sendHeartbeat = (client, status) => {
  if (!status) {
    client.terminate();
  }
  const heartbeat = JSON.stringify({ op: 1, d: sequenceNumber });
  client.send(heartbeat);
  printOutgoing(heartbeat);
  alive = false;
};

const runBot = () => {
  const discord = new WebSocket('wss://gateway.discord.gg');

  discord.on('open', () => {
    printOutgoing('connection');
  });

  discord.on('message', (message) => {
    const data = JSON.parse(message);
    printIncoming(data);
    sequenceNumber = data.s;
    switch (data.op) {
      case 1:
        sendHeartbeat(discord);
        break;
      case 10:
        alive = true;
        sessionId = data.d.session_id;
        setInterval(sendHeartbeat, data.d.heartbeat_interval, discord, alive);
        if (sessionId) {
          discord.send(resume);
        }
        discord.send(identify);
        break;
      case 11:
        alive = true;
        break;
      case 9:
        if (!data.d) {
          sessionId = null;
        }
        restartBot();
        break;

      default:
        switch (data.t) {
          case 'READY':
            sessionId = data.session_id;
            break;

          default:
            break;
        }
        break;
    }
  });

  discord.on('close', (message) => {
    printIncoming(message);
    restartBot(discord);
  });
};

export default runBot;
