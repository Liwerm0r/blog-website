const express = require('express'),
      app = express(),
      ejs = require('ejs'),
      _ = require('lodash'),
      port = 3000;

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const posts = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//////////////////////////////////////////////////////
//////////////////// GET REQUESTS ////////////////////
//////////////////////////////////////////////////////

app.get("/posts/:postTitle", (req, res) => {
  const requestedTitle = req.params.postTitle;
  posts.forEach( post => {
    if ( _.kebabCase(post.title) === _.kebabCase(requestedTitle) ) {
      res.render('post', {post: post});
    }
  });
});

app.get("/", (req, res) => {
  // pass only 100 characters wide post content to homepage
  // const charactersLimit = 100;
  // const shortenedPosts = [];
  // posts.forEach( post => {
  //   const shortenedPost = {
  //     title: post.title,
  //     content: post.content.substring(0, charactersLimit) + "..."
  //   };
  //   shortenedPosts.push(shortenedPost);
  // });
  res.render('home', {
    homeStartingContent: homeStartingContent,
    posts: posts
  });
});

app.get("/about", (req, res) => {
  res.render('about', {aboutContent: aboutContent});
});

app.get("/contact", (req, res) => {
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", (req, res) => {
  res.render('compose', {});
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postContent
  };
  posts.push(post);
  res.redirect("/");
});















app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
