var config = {
  url: "http://localhost:7777",
  // url: "http://reyhan.org",
};

// casper.options.verbose = true;V
// casper.options.logLevel = "debug";

casper.test.begin('Test an invidual post', function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to reyhan.org");
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  casper.then(function(){
    test.comment("Check an article link exists");
    test.assertExists('article h2 a');
    
    test.comment("Get the article h2 a text");
    var articleLinkText = this.evaluate(function() { 
      return __utils__.findOne('article h2 a').innerText; 
    }); 
    // this.echo(articleLinkText);

    test.comment("Click the article h2 a link");
    this.click("article h2 a");

    casper.then(function() {
      test.comment("Check the post's <title> is correct");
      test.assertSelectorHasText("title", articleLinkText);

      test.assertExists("article");
      test.assertExists("h2");
      test.assertExists("time");
    });
  });

  casper.run(function () {
    test.done();
  });
});
