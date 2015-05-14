var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var quizController=require('../controllers/quiz_controller');
=======
>>>>>>> b29e7ed08b261953d0582d1c38c5aa1d379b8b58

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
<<<<<<< HEAD
//router.get('author');
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/quizes/author', quizController.author);
=======

>>>>>>> b29e7ed08b261953d0582d1c38c5aa1d379b8b58
module.exports = router;
