'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('app'));

// const rp = require('request-promise');
// const feeds = [];

// function writeToDoc(feed){
// 	document.querySelector('.buy').innerHTML = feed.B;
// 	document.querySelector('.sell').innerHTML = feed.S;
// 	document.querySelector('.percentage').innerHTML = feed.P + "%";
// 	const label = document.querySelector('.rising');
// 	if(feed.rising) {
// 		label.innerHTML = "Rising";
// 		label.style.color = "green";
// 	} else {
// 		label.innerHTML = "Dropping";
// 		label.style.color = "red";
// 	}
// 	document.querySelector('.date').innerHTML = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
// }
//
// setInterval(function () {
// 	rp('http://marketools.plus500.com/Feeds/UpdateTable?instsIds=123')
// 		.then(function (res) {
// 			let data = JSON.parse(res);
// 			let feed = data.Feeds[0];
// 			if(feeds.length === 0) {
// 				feeds.push(feed);
// 				writeToDoc(feed);
// 				return;
// 			}
// 			let oldFeed = feeds[feeds.length-1];
// 			if(oldFeed.B !== feed.B && oldFeed.S !== feed.B && oldFeed.B !== feed.P) {
// 				feed.rising = feed.P > oldFeed.P;
// 				writeToDoc(feed);
// 				feeds.push(feed);
// 			}
// 		})
// 		.catch(function (err) {
// 			console.log(err);
// 		});
//
// }, 1000);