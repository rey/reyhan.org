casper.test.begin("Testing 01_home", function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to " + config.url);
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  casper.then(function() {
    casper.log("Check <head> exists", "info");
    test.assertExists("head");

    casper.log("Check each CSS file exists", "info");
    var css = casper.getElementsAttribute("link", "href");
  });

  casper.thenOpen("http://reyhan.org/assets/css/style.css", function() {
  // casper.thenOpen("http://reyhan.org", function() {
    test.assertHttpStatus(200, "Connected to stylesheet");
  });

  casper.run(function () {
    test.done();
  });

});
