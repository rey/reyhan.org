casper.test.begin("Testing 05_archive", function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to " + config.url);
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  casper.then(function(){
    casper.log("Check archive link exists");
    test.assertSelectorHasText("aside a", "Site archive");
    casper.then(function() {
      this.clickLabel('Site archive', 'a');
      casper.waitForSelectorTextChange("title", function() {
        casper.log("Check URL has changed to archive.html", "info");
        test.assertUrlMatch("/archive.html", "URL is /archive.html");
      });
    });
  });

  casper.then(function(){
    casper.log("Check if <ul.this> exists", "info");
    test.assertExists("ul.this");

    casper.log("Check if <ul.past> exists", "info");
    test.assertExists("ul.past");

    casper.log("Check if <ul.past> has posts", "info");
    test.assertEval(function() {
      return __utils__.findAll("ul.past li").length >= 10;
    }, "More than 10 articles found");
  });

  casper.then(function() {
    casper.log("Get the .this li a text", "info");
    var articleLinkText = this.evaluate(function() {
      return __utils__.findOne('.this li a').innerText;
    });

    casper.log("Click the .this li a link", "info");
    this.click(".this li a");
    casper.then(function() {
      casper.log("Check the post's <title> is correct", "info");
      test.assertSelectorHasText("title", articleLinkText);
    });
  });

  casper.thenOpen(config.url + "/archive.html", function() {
    this.test.assertUrlMatches(config.url + "/archive.html", "Switched to archive.html");
  });

  casper.then(function() {
    casper.log("Get the .past li a text", "info");
    var articleLinkText = this.evaluate(function() {
      return __utils__.findOne('.past li a').innerText;
    });

    casper.log("Click the .past li a link", "info");
    this.click(".past li a");
    casper.then(function() {
      casper.log("Check the post's <title> is correct", "info");
      test.assertSelectorHasText("title", articleLinkText);
    });
  });
  casper.run(function () {
    test.done();
  });
});
