casper.test.begin('Testing home', function suite(test) {

  casper.start('http://localhost:7777', function () {
    test.assertHttpStatus(200, "Connected to reyhan.org");
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  casper.then(function(){
    test.assertEval(function() {
      return __utils__.findAll("article").length >= 30;
    }, "more than 10 articles found");
  });

  casper.run(function () {
    test.done();
  });
});
