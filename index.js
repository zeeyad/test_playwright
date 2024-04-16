const EventSource = require('eventsource');

const eventSource = new EventSource('https://www.chess.com/service/presence/watch/users?ids=2dba766c-fb3e-11ea-b924-8577032ce688');
// const eventSource = new EventSource(url);

eventSource.onmessage = function(event) {
  console.log('Received event:', event.data);
};
