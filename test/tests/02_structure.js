casper.test.begin("Testing 02_structure", function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to " + config.url);
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  casper.then(function(){
    casper.log("Check if <html> exists", "info");
    test.assertExists("html");

    casper.log("Check if <body> exists", "info");
    test.assertExists("body");

    casper.log("Check if <head> exists", "info");
    test.assertExists("head");

    casper.log("Check if <header> exists", "info");
    test.assertExists("header");

    casper.log("Check <header> has the correct content", "info");
    test.assertSelectorHasText("header h1", "This is my homepage");

    casper.log("Check if <aside> exists", "info");
    test.assertExists("aside");

    casper.log("Check if <footer> exists", "info");
    test.assertExists("footer");

    casper.log("Check <footer> has the correct content", "info");
    test.assertSelectorHasText("footer p", "<3 Jekyll");
  });

  casper.run(function () {
    test.done();
  });
});
