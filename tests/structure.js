// casper.options.verbose = true;
// casper.options.logLevel = "debug";

casper.test.begin('Testing website structure', function suite(test) {

  casper.start('http://localhost:7777', function () {
    test.assertHttpStatus(200, "Connected to reyhan.org");
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  casper.then(function(){
    test.comment("Check if <header> exists");
    test.assertExists("header");

    test.comment("Check <header> has the correct content");
    test.assertSelectorHasText("header h1", "This is my homepage");
  });

  casper.then(function(){
    test.comment("Check if <aside> exists");
    test.assertExists("aside");
  });

  casper.then(function(){
    test.comment("Check if <footer> exists");
    test.assertExists("footer");

    test.comment("Check <footer> has the correct content");
    test.assertSelectorHasText("footer p", "<3 Jekyll");
  });

  casper.run(function () {
    test.done();
  });
});
