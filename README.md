# She Templates

[View Demo](https://apennell.github.io/she-templates/)

**She Templates** is a basic responsive site template for the girl who's ready to build an empire
that's anything but basic. Developed by [Annie Pennell](http://anniepennell.com/) as a supplement
to the HTML Web Development workshop at the [Generation She](https://www.generationshe.co/) 2020
Entrepreneurship Makeathon.


## Table of Contents
1. [Technologies and Dependencies](#technologies-and-dependencies)
2. [Getting Started](#getting-started)
3. [Code Structure](#code-structure)
4. [HTML: Make it say what you want](#html-make-it-say-what-you-want)
    * [Basic HTML document structure](#basic-html-document-structure)
      * [`<!DOCTYPE html>`](#doctype-html)
      * [`html`](#html)
      * [`head`](#head)
      * [`body`](#body)
    * [Elements](#elements)
    * [Attributes](#attributes)
5. [CSS: Make it look good](#css-make-it-look-good)
    * [Syntax](#syntax)
    * [Selectors and specificity](#selectors-and-specificity)
    * [Common CSS properties](#common-css-properties)
    * [Custom properties (CSS variables)](#custom-properties-css-variables)
    * [Responsiveness](#responsiveness)
6. [Javascript: Make it do cool stuff](#javascript-make-it-do-cool-stuff)
7. [Materialize CSS](#materialize-css)
    * [Icons](#icons)
8. [Releasing your site](#releasing-your-site)
9. [Making your site do even more](#making-your-site-do-even-more)
10. [Alternatives to coding](#alternatives-to-coding)
11. [Additional Resources](#additional-resources)
    * [Free Online Courses](#free-online-courses)
    * [Clubs and Organizations](#clubs-and-organizations)


## Technologies and Dependencies

This simple boilerplate template uses [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML),
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript),
[jQuery](https://jquery.com/), and [Materialize](https://materializecss.com/).

You will also need a code text editor, such as [VSCode](https://code.visualstudio.com/) or
[Sublime Text](https://www.sublimetext.com/3), and a [GitHub account](https://github.com/join).

[To top](#table-of-contents) :arrow_up:


<!-- TODO: expand on specifics/ensure this works -->
## Getting Started

1. At the top of the [She Templates repository](https://github.com/apennell/she-templates), click
on the green **Use this template** button
2. Add a name for your repository (no spaces!), add a description for the site if you want, then
click **Create repository from template** button
3. You should now see the same file structure as this repo in your own shiny new repository! If
you're using [git](https://git-scm.com/) in your terminal,
[clone locally](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) using
`git clone https://github.com/apennell/she-templates.git`, otherwise click on the green **Clone or
download** button, then click **Download ZIP**
4. Unzip the downloaded file then open the new directory in your favorite text editor (I like
[VSCode](https://code.visualstudio.com/) and [Sublime Text](https://www.sublimetext.com/3))
5. Open `index.html` in your browser to view the site. One way is to find the file, then select
"Open with..." and choose the browser you want to use. Another is to open your browser (eg, Chrome)
then select "Open file..." and find and select `index.html`.
6. Back in the text editor, add content to the `index.html` file, style it up in the
`styles/style.css` file, and make it interactive by adding JavaScript to `scripts/script.js`!
7. Go back to `index.html` in your web browser at any time and refresh the page to view changes

[To top](#table-of-contents) :arrow_up:


## Code Structure

* **`README.md`**
  * Includes information about your project, instructions on how to get the code running, etc.
  * Good practice to include if someone else is going to be looking at your code—or even for your
  future self!
* **`index.html`**
  * Where we put our main content
  * [HTML](#html-make-it-say-what-you-want) describes the content and structure of a web page, and
  is the standard markup language for web pages
* **`/styles`**
  * Where we put our [CSS](#css-make-it-look-good) files, which is how we style our HTML content
  * CSS is a language that describes how the web browser should display an HTML document’s content
  * Can include custom CSS files, eg `style.css`
  * Can include imported CSS files from other libraries, eg `materialize.min.css`
* **`/scripts`**
  * Where we put our [JavaScript](#javascript-make-it-do-cool-stuff) code, which makes our site
  interactive
  * JavaScript is a language that allows us to program the behavior of web pages
  * Can include custom JS files, eg `script.js`
  * Can include imported JS files from other libraries, eg `materialize.min.js`
* **`/images`**
  * Where we put any images that we want to save and display
  * Be sure to always use images you have permission for! [Unsplash](https://unsplash.com/) is a
  great resource for copyright-free photos.
  * If you don't use the images included with the template, don't forget to delete them!

[To top](#table-of-contents) :arrow_up:


## HTML: Make it say what you want


### Basic HTML document structure

```html
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

[`DOCTYPE`](https://guide.freecodecamp.org/html/doctype-declaration/) tells the browser how to
interpret the document so it can display the content correctly.
Start your document with `<!DOCTYPE html>` to indicate that it's using
[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), the latest version of HTML.


#### `<html>`

* This is the [root element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) of an
HTML page.
* Pass the [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
attribute so that screen readers know what to language to announce and how to pronounce words:
  ```html
  `<html lang="en">`
  ```


#### `<head>`

* Wraps around all elements that aren't actual page content
* [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) tags allow us to pass
certain information that the browser needs to know
* [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) lets the browser know
the site's name, which is used in the browser's title bar or page's tab
* [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag lets us import CSS
files and [fonts](https://fonts.google.com/)--either from local files (relative links) or internet
sources (absolute links). For example, to use styles.css, we need to import it here by adding:
  ```html
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  ```
* You may add any [scripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) that
are needed immediately when browser starts loading here, but for improved performance, add scripts
at the end of `body` wherever possible so that the content isn't held up by a long script before
beginning to render
* You may also add [style](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) in the
`<head>`, but it's preferable to keep CSS separate in a [stylesheet](#css-make-it-look-good)


#### `<body>`

* You only use one [`<body></body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
tag in a document
* This is where we put all HTML content that will render in the browser
* Import scripts at the bottom, before closing `</body>` tag


### Elements

* Tell the browser how to format our content with
[HTML elements/tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* Most elements must start with an opening tag: `< >` and end with a closing tag: `</ >`:
  ```html
  <div>
    <h1>Title</h1>
    <p>Content here</p>
  </div>
  ```
* Determine which tag to use by the purpose of the content. Common examples include:
  * [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body): this is used only once and all tags are nested within this; to apply a style to all elements on a page, target `body`
  * [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div): a multipurpose tag that
  allows you to group and style multiple HTML elements together:
    ```html
    <div class="image-container">
      <img src="images/logo.png">
      <p>Image caption</p>
    </div>
    ```
  * Semantic tags, which say something useful about the content they contain and are helpful for
  developers understanding code and for screen readers rendering accessible code, eg:
    * [`nav`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav),
    [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main),
    [`footer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
    * [`section`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section),
    [`article`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
  * Individual elements:
    * [`p`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p): paragraph text
    * `h1`, `h2`, `h3`, `h4`, `h5`, `h6`:
    [headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) of
    diminishing size
    * [`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): a link (or "**a**nchor");
    must include `href` attribute, set to the url to navigate to when clicked, eg:
    `<a href="http://sheleads.io/">`
    * [`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button): styled as a
    button and should receive instructions of what to do when clicked
    * [`img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button): renders an image;
    should receive `src` attribute, set to the url or relative link
    where the image can be found, eg:
    `<img src="images/logo.png" class="brand-logo">`
  * [`span`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span): can be used inside of
  an element tag to style a specific part of it, eg:
  `<p>This is <span class="bold">some</span> text.</p>`
  * [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) and many more
  [form elements](https://developer.mozilla.org/en-US/docs/Learn/Forms) for gathering information
  * And [so many more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)!


### Attributes

* [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) are like options that
you can send to an HTML element so they behave a certain way, like:
  * [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class): a group
  identifier that can be used on any kind of HTML element. One element can have multiple classes,
  separated by spaces, and multiple elements can use the same class.
  `<p class="white-text small">A Bit of Text</p>`
  * [id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id): a unique
  identifier that can be used on any kind of HTML element. An element can only have one `id` and
  its id should be unique on the page.
  `<p id="intro">This is some unique intro text.</p>`
  * `type`: can only be used with certain elements, such as `button` and  `input`
* `class` and `id` let you group and name tags, which can then be used to target with CSS and JavaScript.

[To top](#table-of-contents) :arrow_up:


## CSS: Make it look good

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) controls the style of the HTML content


### Syntax

```css
.primary-bg {
  background-color: #ba68c8;
}

h1, h2 {
  color: #ffffff;
  font-family: 'Libre Baskerville', serif;
}
```
* Every CSS rule-set contains at least one
[selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) (`.primary-bg`) pointing
to a [declaration block](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax) (the curly braces
`{}`)
* A declaration block contains one or more declarations separated by semicolons: `background-color: #ba68c8`
* A declaration includes a CSS
[property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) name
(`background-color`) and value (`#ba68c8`), separated by a colon


### Selectors and specificity

CSS stands for "Cascading Style Sheets" and "cascading" refers to how the language handles deciding
which rule to abide when multiple rules apply to one element. It follows
[this hierarchy](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity):
  1. [**id**](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors), eg `#header-1`
  2. [**class**](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors), eg `.header-group`
  3. [**tag type**](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors), eg `header`

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

The answer is red! Although all 3 CSS rules target the same element, `#header-1` wins with the
greatest specificity.

*However*, it's best to avoid using id for CSS and use classes or HTML tag types wherever possible because we want to make our code as reusable as we can. An example where it would be okay is the use
of image `div`s in our template:
```html
<div class="image-section" id="image-section-1"></div>
```
```css
#image-section-1 {
  /* Set image and add light gradient overlay above image */
  background: linear-gradient(0deg, rgb(255, 235, 59, 0.3), rgba(255, 112, 67, 0.3)), url("../images/christina-wocintechchat-com-unsplash-1.jpg");
}

#image-section-2 {
  /* Set image and add light primary color overlay above image */
  background: linear-gradient(0deg, rgb(129, 212, 250, 0.3), rgba(129, 212, 250, 0.3)), url("../images/christina-wocintechchat-com-unsplash-2.jpg");
}

.image-section {
  height: 500px;
}
```
Because both `.image-section` `div`s share a height of `500px`, we set that style on the shared class
so we only have to write it once and they stay consistent. Because we're setting the image url using
the `background` property with a gradient overlay, we know we won't want any other elements to share
that declaration and can target each one directly.


### Common CSS Properties

* [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display): sets whether the element
is block or inline
* [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position): sets how the element is
positioned in a document. `static` is default, but some other properties depend on `position` being
`relative` or `absolute` to work.
* [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding): sets how much extra space
is added around all 4 sides of the element, outside of the actual content but within the border.
This space *is* considered to be inside the element and *is* included in its total height and width.
* [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin): sets how much extra space is
added around all 4 sides of the element, outside of the padding and border. This space *is not*
considered inside the element and *is not* included in its total height and width.
* There are a handful of options for setting
[the appearance of text](https://developer.mozilla.org/en-US/docs/Web/CSS/font), including:
    * [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family): specific or
    generic names for the font, like `Helvetica` or `sans-serif`
    * [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size): size of the font
    * [`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight): how bold the
    font is (`400` is 'normal')
    * [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): sets the height
    of a line box, increasing or decreasing the space between text lines
* [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) sets the color of the element's
text, while [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
sets the color of the element's background. There are 5 ways to declare the value of the color:
    * named: `pink`
    * hex: `#ffc0cb`
    * rgb (red, green, blue): `rgb(255, 192, 203)`
    * rgba: `rgba(255, 192, 203, 1)`--same as rgb, but the final value represents transparency of
    the color on a scale of `0` (fully transparent) to `1` (fully opaque)
    * hsl (hue, saturation, lightness): `hsl(350, 100%, 88%)`
    * hsla: `hsl(350, 100%, 88%, 1)`--same as hsl, but the final value represents transparency of
    the color on a scale of `0` (fully transparent) to `1` (fully opaque)


### Custom properties (CSS variables)

Commonly known as CSS variables,
[custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
allow us to define a CSS property in one place and reuse it in many places throught the CSS
document. In addition to letting you reference a color or font without copy-pasting the value over
and over, one important benefit is that it allows you to easily make a change in one place. For
example, this template is currently orange and blue, but you should be able to choose your own
colors! If you want to use green and yellow, instead of finding all instances of all colors in the
CSS and replacing them like you normally would, you can just change the variables at the top of the
file and everywhere that was orange will immediately be green and everywhere that was purple will
now be yellow.

Set the property/variable using custom property notation, with the name of the variable on the left
side, preceeded by 2 dashes:
```css
:root {
  --primary-color: #ba68c8;
  --primary-font: 'Libre Baskerville', serif;
}
```
`:root` is the common choice for where to define the custom properties, because `:root` is the very
highest level element of our HTML document, which means the property will be available for all
elements in the document.

The property name can be whatever you want, but it should be something useful and easy to reference.
It can be better to use names that describe the function of the property, rather than specifics. For
example, instead of calling the orange color `--orange`, we're using `--primary-color` because that
will still make sense if we want to change the main color to green.

To use the custom property, place it where you want to use it and access it using the `var()` function:
```css
h1 {
  color: var(--primary-color);
  font-family: var(--primary-font);
}
```

Something to keep in mind when working with CSS and JavaScript is that not all browsers can handle
fun "new" (or not so new!) properties and methods. When in doubt, check it on
[Can I use](https://caniuse.com/) for compatibility. You may choose not to care what users on
Internet Explorer see, but if a significant amount of your users aren't using modern browsers,
provide fallbacks for them so they can still use your site.
Custom CSS properties don't have [any support](https://caniuse.com/#feat=css-variables) on IE and
older versions of other browsers. If you want to control what users on unsupported browsers see,
then declare the property twice, with the standard value on the first and the variable on the
second. Remember what we learned about [specifity](#selectors-and-specificity)? CSS will use the
first declaration first, then override it with the second one, which is the custom property value.
Since unsupported browsers won't be able to do anything with the weird `var()` property value, it
will just stick with the first fallback value instead.
```css
body {
  font-family: 'Libre Baskerville', serif;
  font-family: var(--primary-font);
}
```


### Responsiveness
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

[To top](#table-of-contents) :arrow_up:


## JavaScript: Make it do cool stuff

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) makes the page interactive. We
can add this functionality between `<script></script>` tags at the bottom of the `<body>` tag in
index.html, but if we have a lot of JavaScript code, it's best to abstract it into a separate JavaScript file.
You may even choose to create multiple JS files so that the code is more manageable, organized, and
contained.

The [Materialize CSS](#materialize-css) framework included with this template
[includes a handful of useful JS helpers](https://materializecss.com/auto-init.html) ready for you
to use. Make your browser skinny so that the navbar collapses into a "hamburger" icon, then click
that icon. See the drawer pop out of the left side and display the hidden links? That's JavaScript,
courtesy of [Materialize](https://materializecss.com/sidenav.html)! We're initializing that code in
script/script.js with the line `$('.sidenav').sidenav();`, which uses jQuery to target the element
with the class `sidenav  ` and calls the Materialize helper method `sidenav()` on it.
Try out a [dropdown menu](https://materializecss.com/dropdown.html),
[image carousel](https://materializecss.com/carousel.html), or a
[tooltip](https://materializecss.com/tooltips.html)!

[**jQuery**](https://jquery.com/) is a JavaScript library that provides utility functions for
common chunks of code used in JavaScript so we can skip to the fun stuff. When we use `$`, we're
calling jQuery. In order to use it, though, we need to import the library! That's what we're doing
at the bottom of index.html with
`<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>`.
Because loading the library takes work, you only want to include it if you need and are using it.
The Materialize CSS library we're using requires it for actions like opening the mobile menu, but
*if you're not using Materialize's JavaScript helpers and not using jQuery yourself*, then remove
that link from index.html for a slightly faster load time.

[To top](#table-of-contents) :arrow_up:


## Materialize CSS

This template is using a CSS framework called [Materialize CSS](https://materializecss.com/).
Although we could do it all from scratch,
[CSS frameworks](https://github.com/troxler/awesome-css-frameworks) provide helpful startpoints
for common code. In addition, the framework is based on Google's
[Material Design](https://material.io), which has [guidelines](https://material.io/design/) you
can follow to create a great looking site even if you don't have design experience.
Some very useful parts of Materialize include:
* [Grid](https://materializecss.com/grid.html): makes it easy to lay out rows and columns that change
responsively so that the content looks good on any screen size
* [Helpers](https://materializecss.com/helpers.html): provide quick solutions to common CSS issues,
like vertical alignment, hiding and showing content, and text truncation.
* [Styled buttons](https://materializecss.com/buttons.html)
* [Navbar](https://materializecss.com/navbar.html): responsive navigation element
* [Icons](https://materializecss.com/icons.html)
* [Modals](https://materializecss.com/modals.html): open a smaller window above the other content
for dialog boxes, confirmations, or additional content
* [Styled form components](https://materializecss.com/text-inputs.html)

And when you're trying to understand something you can't figure out from the docs? Search for your
question on [Stack Overlflow](https://stackoverflow.com/questions/tagged/materialize) and see if
it's already been asked and answered!

*If you don't want to use Materialize CSS*, delete the `<link>` to the Materialize CSS from the
`<head>` of index.html
(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`),
delete the `<script>` calling the Materialize JS code from the bottom of the `<body>`
(`<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`).
If you aren't using jQuery for anything else either, you can also remove that `<script>` tag.

A popular alternative to consider is Twitter's [**Bootstrap**](https://getbootstrap.com/).


### Icons

All of [Google's Material Design icons](https://material.io/resources/icons/?style=baseline) are
available because we imported them into the `HEAD` of our Index.html file using a
[CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN) link. Search for
[all options here](https://materializecss.com/icons.html). To use the icon, add it in your HTML
where you want it to appear using this syntax: `<i class="material-icons">arrow_back</i>`,
replacing the content inside the `<i>` with the name of the icon you want. You can also change
the size by adding one of these classes: `tiny`, `small`, `medium`, `large`.
Eg: `<i class="large material-icons">cloud</i>`

Another popular font library is [**Font Awesome**](https://fontawesome.com/). If you'd like to use
that instead, remove
`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">` from the
`HEAD` of index.html so that you don't import unnecessary code.

[To top](#table-of-contents) :arrow_up:


## Releasing your site

Ready to take your site live? There are plenty of options, both free and paid. A simple free option
is [**GitHub Pages**](https://pages.github.com/), which will require you to create a
[GitHub](https://github.com/) account and a repository for this code. That's a very important step
for any developer, so don't be afraid to take it!

If you don't know [git](https://git-scm.com/) and aren't ready to learn yet, GitHub has made it easy
to create a code repository and deploy it to GitPages from within your GitHub dashboard without
entering the spooky terminal.
[This tutorial](https://medium.com/javascript-in-plain-english/how-to-host-a-static-website-for-free-7a2a959f5e4)
will take you through the steps.

If you already know a bit of git and are able to
[create a repository locally from your terminal](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository),
there's a nice [walk-through tutorial here](https://www.thinkful.com/learn/a-guide-to-using-github-pages/start/)
that will show you how to deploy your local repo to GitHub Pages.

If you own a custom domain name, you can even
[configure your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)
to use it.

If you have a lot of content to host, note that GitHub has a limiy of 1GB. A highly rated service
for deploying static sites (frontend only, no backend) is [**Netlify**](https://www.netlify.com/), which
offers a lot for free. They even can help with managing forms without needing server-side code!

Amazon's [**AWS**](https://aws.amazon.com/) is also very popular, with many cloud hosting options
and both free and paid tiers. Here's a
[good guide](https://www.freecodecamp.org/news/a-beginners-guide-on-how-to-host-a-static-site-with-aws/)
on deploying to AWS.

Did you take your site way beyond the scope of this static site template and have an app with a
backend? Then check out [**Heroku**](https://www.heroku.com/)!

[To top](#table-of-contents) :arrow_up:


## Making your site do even more

If you've taken your static site as far as it can go and want to keep learning and building, here
are some next steps:

* Learn JavaScript! This is a key language used by frontend developers, and can serve as a stepping
stone to learn any other code language.
* *Loving JavaScript and ready to make it do way more?* Get to know the
[most popular](https://2019.stateofjs.com/front-end-frameworks/) frontend framework,
[React](https://reactjs.org/), by starting an app using
[`create-react-app`](https://github.com/facebook/create-react-app). Run just one command and have a
modern web app created immediately, then make it your own!
* *Loving JavaScript and curious to learn the backend?* Then [Node.js](https://nodejs.org/en/)
might be for you. Node.js is a JavaScript runtime that allows you to build a backend using JavaScript.
* *Think JavaScript is okay, but want to see what else is out there?*
[Ruby on Rails](https://rubyonrails.org/) is a popular web application framework that's pretty
[quick to get started](https://www.ruby-lang.org/en/documentation/quickstart/) working with.

[To top](#table-of-contents) :arrow_up:


## Alternatives to coding

If you need to go from 0 to 100 and have a site up immediately without fiddling too much with the
code, there are other ways to make that happen.

* [Wordpress](https://wordpress.org/) is a free tool that lets you create a website, blog, or app
using little to no coding, but you can also add lots of code customization if that's something
you're up for.
* It's not free, but [Squarespace](https://www.squarespace.com/) is a popular, modern, easy-to-use
way to build a website without coding. It does provide options for customizing code with CSS, but
not to the extent that Wordpress does.
* [Wix](https://www.wix.com/) is another popular website builder, which offers free and paid plans.
* If you're really into design but not as interested in learning coding,
[Webflow](https://webflow.com/) might be right for you.

[To top](#table-of-contents) :arrow_up:


## Additional Resources

### Free Online Courses

* [**General Assembly Dash**](https://dash.generalassemb.ly/) -- quick and basic intro to HTML/CSS/JS
principles
* [**Codecademy**](https://www.codecademy.com/) -- follow along with tutorials on many programming
subjects
* [**freeCodeCamp**](https://www.freecodecamp.org/) -- build projects and earn certifications
* [**Grasshopper coding app**](https://grasshopper.app/) -- learn JavaScript with this app
* [**Made with Code**](https://www.madewithcode.com/) -- short block-based (not text-based coding)
projects geared toward teen girls to learn computer science/coding principles (by Google)
* [**Scratch**](https://scratch.mit.edu/) -- learn computer science/coding principles by creating
block-based games and animations (not text-based coding) (by MIT)

### Clubs and Organizations

* [Generation She](https://www.generationshe.co/)
* [Girls Who Code](https://girlswhocode.com/)
* [Built By Girls](https://www.builtbygirls.com/for-students)
* [Black Girls Code](http://www.blackgirlscode.com/)
* [Code.org](https://code.org/)

[To top](#table-of-contents) :arrow_up:
