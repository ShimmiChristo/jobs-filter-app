const express = require('express');
const router = express.Router();
const cors = require('cors');
let Parser = require('rss-parser');
const $ = require('cheerio'); // jquery for node
const rp = require('request-promise');

let parser = new Parser();
const url = 'https://newyork.craigslist.org/search/jjj?format=rss&query=web%20development';


const craigslistJobs = [];

const getCraigslistJobs = function() {
  return parser.parseURL(url)
    .then(function(html){
      html.items.forEach(item => {
        craigslistJobs.push({
          'title': item.title,
          'link': item.link,
          'description': item.content,
          'date': item.date,
          'platform': 'Craigslist'
        });
      })
    })
    .catch(function(err){
      console.log(err);
    });
}


Promise.all([getCraigslistJobs()])
  .then(result => {
    // console.log(craigslistJobs);
    return result;
  })
  .catch(function(err) {
    console.log(err);
  })

const options = {
  origin: true,
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": true,
  "Access-Control-Allow-Headers": true,
  "Access-Control-Expose-Headers": true
};

// GET craigslist jobs
router.get('/', cors(options), function(req, res, next) {
  // res.send('respond with a resource');

  res.json( craigslistJobs )


});

module.exports = router;