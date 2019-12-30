# SHE TEMPLATES

### **SHE TEMPLATES** is the most basic responsive site template needed for the girl who's ready to build an empire and needs to start right away!

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

#### `<!DOCTYPE html>`

* [TODO: expand on this]


#### `HEAD`

* Import CSS files, fonts, and any scripts needed immediately when browser starts loading
* For improved performance, add scripts at the end of `body` wherever possible so that the content isn't held up before beginning to render
* [TODO: meta info]
* Update `title` with your own site's name
* [TODO: Expand on using Materialize framework and Material UI]
* [TODO: Expand on adding fonts]


#### `BODY`

* Page content
* Import scripts at the bottom, before closing `</body>`


### `/styles`: Make it look good with CSS

#### CSS variables


#### Responsiveness


### `/scripts`: Make it do cool stuff with JavaScript

* jQuery


## Customizing your site

### HTML elements


### HTML classes


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
