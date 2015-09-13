casper.test.begin("Testing 03_home", function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to " + config.url);
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  casper.then(function(){
    test.assertEval(function() {
      return __utils__.findAll("article").length >= 30;
    }, "More than 30 articles found");
  });

  casper.run(function () {
    test.done();
  });

});
