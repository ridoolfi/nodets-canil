const express = require('express');
const PageController = require('../controllers/pageController')
const searchController = require('../controllers/searchController')
const router = express();


router.get('/', PageController.home)
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);
router.get('/search', searchController.search)
module.exports = router;