// const fs = require('fs');
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();

//   // Enable request interception

//   const urls = ["https://www.chess.com/member/ImNotAiden0912","https://www.chess.com/member/Rurep26","https://www.chess.com/member/SandglassN","https://www.chess.com/member/MagnusCarlsen","https://www.chess.com/member/Hikaru","https://www.chess.com/member/BLITZMASTER","https://www.chess.com/member/DanielNaroditsky","https://www.chess.com/member/Grischuk","https://www.chess.com/member/AuroraNight95","https://www.chess.com/member/Sina_Movahed","https://www.chess.com/member/FormerProdigy","https://www.chess.com/member/tjychess","https://www.chess.com/member/GothamChess","https://www.chess.com/member/ChessBrah","https://www.chess.com/member/GMKrikor","https://www.chess.com/member/deepfear","https://www.chess.com/member/KnightDuta","https://www.chess.com/member/Adaro","https://www.chess.com/member/Xyvora","https://www.chess.com/member/AlexandraBotez","https://www.chess.com/member/CaptainCheckmate23","https://www.chess.com/member/KnightLifters","https://www.chess.com/member/0gZPanda","https://www.chess.com/member/VladimirKramnik","https://www.chess.com/member/lachesisQ","https://www.chess.com/member/ChessWarrior7197","https://www.chess.com/member/Chefshouse","https://www.chess.com/member/GMWSO","https://www.chess.com/member/GHANDEEVAM2003","https://www.chess.com/member/LOVEVAE","https://www.chess.com/member/Firouzja2003","https://www.chess.com/member/TheVish","https://www.chess.com/member/GukeshDommaraju","https://www.chess.com/member/Sebastian","https://www.chess.com/member/rpragchess","https://www.chess.com/member/AnishGiri","https://www.chess.com/member/Azerichess","https://www.chess.com/member/Parhamov","https://www.chess.com/member/LyonBeast","https://www.chess.com/member/LiemLe","https://www.chess.com/member/nihalsarin","https://www.chess.com/member/Polish_fighter3000","https://www.chess.com/member/Jospem","https://www.chess.com/member/Mckenzie","https://www.chess.com/member/ChessSharkz","https://www.chess.com/member/ChessMagician64","https://www.chess.com/member/FabianoCaruana","https://www.chess.com/member/Blackmind96","https://www.chess.com/member/ProphetReborn","https://www.chess.com/member/Cryptochess","https://www.chess.com/member/GMCanty","https://www.chess.com/member/PSvidler","https://www.chess.com/member/Bigfish1995","https://www.chess.com/member/spicycaterpillar","https://www.chess.com/member/BogdanDeac","https://www.chess.com/member/Sanan_Sjugirov"];

//   const ids = [];

//   for (const url of urls) {
//     const page = await browser.newPage();
//     await page.setRequestInterception(true);
//     // Create a promise that resolves when an intercepted request occurs
//     const interceptedRequestPromise = new Promise(resolve => {
//       page.on('request', interceptedRequest => {
//         // Check if the intercepted request matches the URL you're interested in
//         if (interceptedRequest.url().includes('/service/presence/watch/users')) {
//           // Parse the URL to extract the id parameter
//           const urlParams = new URL(interceptedRequest.url()).searchParams;
//           const id = urlParams.get('ids');

//           // Push the ID into the array
//           ids.push(id);

//           // Resolve the promise
//           resolve();
//         }

//         // Continue the intercepted request
//         interceptedRequest.continue();
//       });
//     });

//     await page.goto(url);

//     // Wait until an intercepted request occurs or a timeout
//     await Promise.race([interceptedRequestPromise, new Promise(resolve => setTimeout(resolve, 10000))]);

//     // Remove request interception to prevent it from affecting other URLs
//     // await page.setRequestInterception(false);
//     await page.close();
//   }

//   // Close the browser
//   await browser.close();

//   // Output the collected IDs to a text file
//   fs.writeFileSync('ids.txt', ids.join('\n'));

//   console.log('IDs have been written to ids.txt');
// })();



// const EventSource = require('eventsource');

// const eventSource = new EventSource('https://www.chess.com/service/presence/watch/users?ids=2dba766c-fb3e-11ea-b924-8577032ce688');
// // const eventSource = new EventSource(url);

// eventSource.onmessage = function(event) {
//   console.log('Received event:', event.data);
// };



const EventSource = require('eventsource');

// List of URLs to monitor
const urls = ["https://www.chess.com/service/presence/watch/users?ids=0ba38690-699b-11ed-8185-3373ff2c67dc","https://www.chess.com/service/presence/watch/users?ids=b54c293e-f3f3-11e4-8004-000000000000","https://www.chess.com/service/presence/watch/users?ids=9821adbc-9694-11e6-801a-000000000000","https://www.chess.com/service/presence/watch/users?ids=a2761738-b155-11df-8018-000000000000","https://www.chess.com/service/presence/watch/users?ids=6f4deb88-7718-11e3-8016-000000000000","https://www.chess.com/service/presence/watch/users?ids=7c1fb36a-2ef4-11e0-803d-000000000000","https://www.chess.com/service/presence/watch/users?ids=5a96a38a-e436-11dd-8018-000000000000","https://www.chess.com/service/presence/watch/users?ids=b5ffabc2-daa1-11e5-803a-000000000000","https://www.chess.com/service/presence/watch/users?ids=a3d2b2ec-54c4-11ed-ad9a-4309ca96bc57","https://www.chess.com/service/presence/watch/users?ids=55bc0d56-c677-11e6-8040-000000000000","https://www.chess.com/service/presence/watch/users?ids=83417b16-f9d4-11e8-800e-000000000000","https://www.chess.com/service/presence/watch/users?ids=3b3c9d3e-cf92-11df-8039-000000000000","https://www.chess.com/service/presence/watch/users?ids=8ae1ef8a-0855-11e7-8024-000000000000","https://www.chess.com/service/presence/watch/users?ids=76811d66-1a8e-11df-8027-000000000000","https://www.chess.com/service/presence/watch/users?ids=34b06608-0857-11dd-8007-000000000000","https://www.chess.com/service/presence/watch/users?ids=19a65d98-7dd6-11ea-96a1-db12b2572cad","https://www.chess.com/service/presence/watch/users?ids=941622c6-20bd-11e7-8010-000000000000","https://www.chess.com/service/presence/watch/users?ids=5c49285e-7098-11e7-8008-000000000000","https://www.chess.com/service/presence/watch/users?ids=cf9e460c-5aea-11ee-bc4d-5f324fa622a2","https://www.chess.com/service/presence/watch/users?ids=18b71150-2f8f-11e6-804c-000000000000","https://www.chess.com/service/presence/watch/users?ids=259f84c8-c511-11ed-b631-73fa17f82dd2","https://www.chess.com/service/presence/watch/users?ids=2dba766c-fb3e-11ea-b924-8577032ce688","https://www.chess.com/service/presence/watch/users?ids=a52051ea-630e-11ea-88cb-478d6d4098ea","https://www.chess.com/service/presence/watch/users?ids=a09142cc-0c99-11ea-abcb-b9aff282bac9","https://www.chess.com/service/presence/watch/users?ids=ea103016-2647-11e6-8040-000000000000","https://www.chess.com/service/presence/watch/users?ids=7502a14e-eca9-11e2-802a-000000000000","https://www.chess.com/service/presence/watch/users?ids=8b3ce8fc-0f2b-11e9-8032-000000000000","https://www.chess.com/service/presence/watch/users?ids=50758188-90e9-11e6-8018-000000000000","https://www.chess.com/service/presence/watch/users?ids=634b94f8-a0dd-11e4-8014-000000000000","https://www.chess.com/service/presence/watch/users?ids=9e725456-ed1f-11e5-8062-000000000000","https://www.chess.com/service/presence/watch/users?ids=12120a32-f21e-11e7-805e-000000000000","https://www.chess.com/service/presence/watch/users?ids=024738a2-872c-11ea-a5ad-89f3e64a5819","https://www.chess.com/service/presence/watch/users?ids=e471a0a4-d8fc-11e7-8016-000000000000","https://www.chess.com/service/presence/watch/users?ids=568bffe2-5492-11e4-8030-000000000000","https://www.chess.com/service/presence/watch/users?ids=36ecefaa-35c0-11e6-8024-000000000000","https://www.chess.com/service/presence/watch/users?ids=4362c2ba-f29f-11e4-804e-000000000000","https://www.chess.com/service/presence/watch/users?ids=3f150a8a-875f-11e8-8020-000000000000","https://www.chess.com/service/presence/watch/users?ids=c294f900-d587-11e6-805a-000000000000","https://www.chess.com/service/presence/watch/users?ids=50ef5ad0-dc0f-11e3-8008-000000000000","https://www.chess.com/service/presence/watch/users?ids=384ee260-20cc-11e3-803a-000000000000","https://www.chess.com/service/presence/watch/users?ids=505dce66-7f42-11e1-8013-000000000000","https://www.chess.com/service/presence/watch/users?ids=32b2e99a-7bb3-11e8-8042-000000000000","https://www.chess.com/service/presence/watch/users?ids=29a28f80-d972-11e5-8048-000000000000","https://www.chess.com/service/presence/watch/users?ids=95c33e26-0e6b-11ea-90a1-7d91b59138fc","https://www.chess.com/service/presence/watch/users?ids=5046ed02-f4d1-11ed-beb5-ede1fc4e02ff","https://www.chess.com/service/presence/watch/users?ids=b6128e98-6534-11ed-aca2-a7dbb59643c7","https://www.chess.com/service/presence/watch/users?ids=5ebdca54-8f15-11e2-800a-000000000000","https://www.chess.com/service/presence/watch/users?ids=fb4e9690-1897-11e7-8010-000000000000","https://www.chess.com/service/presence/watch/users?ids=e86dd130-8b78-11ed-b955-e919b39462ab","https://www.chess.com/service/presence/watch/users?ids=ff6b642a-ecc2-11e1-8016-000000000000","https://www.chess.com/service/presence/watch/users?ids=86edacca-d0d1-11e3-8022-000000000000","https://www.chess.com/service/presence/watch/users?ids=b75fb7c4-bf8a-11e9-8182-2b4f0deea18a","https://www.chess.com/service/presence/watch/users?ids=cf092044-c228-11e5-8054-000000000000","https://www.chess.com/service/presence/watch/users?ids=d060c78c-ed2a-11e8-8048-000000000000","https://www.chess.com/service/presence/watch/users?ids=09020b6e-a98a-11e6-8028-000000000000","https://www.chess.com/service/presence/watch/users?ids=7069ad12-71b4-11e4-8022-000000000000"];

// Function to create EventSource objects for each URL
function createEventSources(urls) {
  return urls.map(url => {
    const eventSource = new EventSource(url);
    eventSource.onmessage = function(event) {
      console.log(`Received event from ${url}:`, event.data);
    };
    return eventSource;
  });
}

// Create EventSource objects for each URL
let eventSources = createEventSources(urls);


// Interval to recreate EventSource objects periodically
const interval = setInterval(() => {
  // Close existing EventSource connections
  eventSources.forEach(eventSource => {
    eventSource.close();
  });
  
  // Recreate EventSource objects for each URL
  eventSources = createEventSources(urls);
}, 120000); // Interval in milliseconds (e.g., 60000 milliseconds = 1 minute)