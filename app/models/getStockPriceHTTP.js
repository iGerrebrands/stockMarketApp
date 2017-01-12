import rp from 'request-promise';

export default (id) => {
	return rp('http://marketools.plus500.com/Feeds/UpdateTable?instsIds=' + id);
}

// .then(function (res) {
//     let data = JSON.parse(res);
//     let feed = data.Feeds[0];
//     if(feeds.length === 0) {
//         feeds.push(feed);
//         writeToDoc(feed);
//         return;
//     }
//     let oldFeed = feeds[feeds.length-1];
//     if(oldFeed.B !== feed.B && oldFeed.S !== feed.B && oldFeed.B !== feed.P) {
//         feed.rising = feed.P > oldFeed.P;
//         writeToDoc(feed);
//         feeds.push(feed);
//     }
// })
//     .catch(function (err) {
//         console.log(err);
//     });