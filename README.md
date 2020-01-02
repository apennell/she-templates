# SHE TEMPLATES

**SHE TEMPLATES** is the most basic responsive site template needed for the girl who's ready to build an empire and needs to start right away!

By [Annie Pennell](http://anniepennell.com/) | [GitHub](https://github.com/apennell) | [LinkedIn](https://www.linkedin.com/in/anniepennell/)


## Table of Contents
1. [Technologies](#technologies-and-dependencies)
2. [Getting Started](#getting-started)
3. [Code Structure](#code-structure)
  * [`index.html`: Make it say what you want](#indexhtml-make-it-say-what-you-want)
    * [`<!DOCTYPE html>`](#doctype-html)
    * [`HEAD`](#head)
    * [`BODY`](#body)
  * [`/styles`: Make it look good with CSS](#styles-make-it-look-good-with-css)
    * [CSS variables](#css-variables)
    * [Responsiveness](#responsiveness)
  * [`/scripts`: Make it do cool stuff with JavaScript](#scripts-make-it-do-cool-stuff-with-javascript)
4. [Customizing your site](#customizing-your-site)
  * [HTML elements](#html-elements)
  * [HTML classes](#html-classes)
  * [Navigation bar](#navigation-bar)
  * [Icons](#icons)
5. [Releasing your site](#releasing-your-site)
6. [Making your site do even more](#making-your-site-do-even-more)


## Technologies and Dependencies
This simple boilerplate uses HTML, CSS, Javascript, [jQuery](https://jquery.com/), and [Materialize](https://materializecss.com/).


## Getting Started
1. [Clone locally](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) using `git clone https://github.com/apennell/she-templates.git`, or simply download
2. Open the `she-templates` directory in your favorite text editor (my favorite is [Sublime](https://www.sublimetext.com/3))
3. Add content to the `index.html` file, style it up in the `styles/style.css` file, or even make it do anything you can imagine by adding JavaScript to `scripts/script.js`!
4. To view your changes, open `index.html` in your web browser


## Code Structure

### `index.html`: Make it say what you want
```
<!DOCTYPE html>
<html>
<head>
  <!-- <meta> info -->
  <!-- <title> -->
  <!-- import CSS files and fonts -->
</head>
<body>
  <!-- page content -->
  <!-- import scripts -->
</body>
</html>
```

#### `<!DOCTYPE html>`
* `DOCTYPE` tells the browser how to interpret the document. Start your document with
`<!DOCTYPE html>` to indicate that we're using HTML5, the latest version of HTML.


#### `HEAD`
* Wraps around all elements that aren't actual page content
* `<link>` tag lets us import CSS files, fonts, and any scripts needed immediately when browser
starts loading--either from local files (relative links) or cloud-hosted sources (absolute links)
* For improved performance, add scripts at the end of `body` wherever possible so that the content isn't held up before beginning to render
* [TODO: meta info]
* Update `title` with your own site's name
* [TODO: Expand on using Materialize framework and Material UI]
* [TODO: Expand on adding fonts]


#### `BODY`
* Page content
* Import scripts at the bottom, before closing `</body>`


### `/styles`: Make it look good with CSS
CSS controls the style of the HTML content

#### Specificty
CSS stands for "Cascading Style Sheets" and "cascading" refers to how the language handles deciding
which rule to abide when multiple rules apply to one element. It follows this hierarchy:
  1. id, eg `#header-1`
  2. class, eg `.header-group`
  3. HTML tag type, eg `header`

Given the following HTML and CSS, what color do you think "Title" will be?
```html
<header id="header-1" class="header-group">Title</header>
```
```css
#header-1 {
  color: red;
}
.header-group {
  color: purple;
}
header {
  color: blue
}
```

The answer is red! Although all 3 CSS rules target the same element, `#header-1` wins with the greatest specificity. *However*, it's best to avoid using id for CSS and use classes or HTML tag types wherever possible.


#### CSS variables


#### Responsiveness
Responsive design allows a site to look good on any device, regardless off the screen/browser size.
We can use CSS to make the appearance of our content adapt well to different browser widths, so that
it looks just as good on a phone as it does on a large desktop computer.

By applying a `media query`, we can specify at what browser size a certain style will apply.
For example:
```css
h1 {
  font-size: 40px;
}

@media (max-width: 720px) {
  h1 {
    font-size: 24px;
  }
}
```
The above code will set the font-size of all `h1` elements to `24px` if the browser is 720px wide
or smaller; if it's wider than 720px, it will be `40px`.

We always want to look at our website at many different browser widths, all the way down to common
mobile sizes. An iPhone X, for example, is 375px wide, while an iPad is 768px wide.


### `/scripts`: Make it do cool stuff with JavaScript
* **jQuery** is a JavaScript library that provides utility functions for common chunks of code used
in JavaScript so we can skip to the fun stuff. When we use `$`, we're calling jQuery.
In order to use it, though, we need to import the library! That's what we're doing at the bottom of
index.html with `<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>`.
Because loading the library takes work, you only want to include it if you need and are using it.
The Materialize CSS library we're using requires it for actions like opening the mobile menu, but
if you're not using Materialize's JavaScript helpers and not using jQuery yourself, then remove
that link from index.html for a slightly faster load time.


## Customizing your site

### HTML tags
* `<img src="images/logo.png" class="brand-logo">`
  * Include link to image source in `src` attribute
  * `src` can be an absolute link, which looks like a normal website link but goes directly to an image:
  `https://she-templates.com/logo.png`
  * `src` can also be a relative link, which is a shortcut to a file saved on the same domain as
  the webpage: `images/logo.png`


### HTML classes
* `class` is an HTML tag attribute that lets you group and name tags, which can then be used to
target with CSS and JavaScript.


### Navigation bar
* `nav` element


### Icons
* All of [Google's Material Design icons](https://material.io/resources/icons/?style=baseline) are
available because we imported them into the `HEAD` of our Index.html file using a CDN link. Search
for [all options here](https://material.io/resources/icons/?style=baseline).
* Another popular option is [Font Awesome](https://fontawesome.com/). If you'd like to use this
instead, remove `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`
from the `HEAD` of Index.html so that you don't import unnecessary code.


## Releasing your site
* [TODO: gitpages]


## Making your site do even more
* `create-react-app`
* Node.js
* Ruby on Rails

## Alternatives to coding your own from scratch
* Wordpress
* Squarespace
* Wix
