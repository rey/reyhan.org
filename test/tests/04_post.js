casper.test.begin("Testing 04_post", function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to " + config.url);
    test.assertUrlMatch("/", "URL is root");
    test.assertTitle("This is my homepage", "<title> is correct");
  });

  // Check that an article link exists
  casper.then(function(){
    casper.log("Check an article link exists", "info");
    test.assertExists("article h2 a");
  });

  // Check the user can click an article link, and that it takes you to the
  // correct destination
  casper.then(function(){

    // Get the <a> text, as this is what is shown in the <title> of the post
    casper.log("Get the article link text", "info");
    var articleLinkText = this.evaluate(function() {
      return __utils__.findOne('article h2 a').innerText;
    });

    // Click the article link
    casper.log("Click the article link");
    this.click("article h2 a");

    casper.then(function() {
      // Check the post is correct, that it matches the title on the previous page
      casper.log("Check the post's <title> is correct", "info");
      test.assertSelectorHasText("title", articleLinkText);
    });

    casper.then(function() {
      // Check the post has all the right bits and pieces
      casper.log("Check an article has <article>, <h2> and <time>", "info");
      test.assertExists("article");
      test.assertExists("h2");
      test.assertExists("time");
    });

  });

  casper.run(function () {
    test.done();
  });
});
