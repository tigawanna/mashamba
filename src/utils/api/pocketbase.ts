import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

// pb.afterSend = function (response, data) {
//     console.log('afterSend', response, data);
//     return Object.assign(data, {
//         // extend or modify the data after each request and before resolving the Promise data...
//         // "label": data?.name??"no name value here",
//         // "value": data.id,
//         // data.item
//     });
// };
