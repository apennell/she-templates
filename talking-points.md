Topics to address

## HTML tags
  * Tell the browser how to format our content
  * Need to start with an opening `<tag>` and end with a closing `</tag>`:
    ```html
    <div>
      <h1>Title</h1>
      <p>Content here</p>
    </div>
    ```
  * Determine which tag to use by the purpose of the content. Common examples include:
    * `body`: this is used once and all tags are nested within this; to apply a style to all elements on a page, target `body`
    * `div`: a multipurpose tag that allows you to group and style multiple HTML elements together:
      ```html
      <div class="image-container">
        <img src="images/logo.png">
        <p>Image caption</p>
      </div>
      ```
    * Semantic tags, which say something useful about the content they contain and are helpful for
    developers understanding code and for screen readers rendering accessible code, eg:
      * `nav`, `main`, `footer`
      * `section`, `article`
    * Individual elements:
      * `p`: paragraph text
      * `h1`, `h2`, `h3`, `h4`, `h5`, `h6`: headings of diminishing size
      * `a`: a link; must include `href` attribute, set to the url to navigate to when clicked, eg:
      `<a href="http://sheleads.io/">`
      * `button`: styled as a button and should receive instructions of what to do when clicked
      * `img`: renders an image; should receive `src` attribute, set to the url or relative link
      where the image can be found, eg: `<img src="images/logo.png" class="brand-logo">`
    * `span`: can be used inside of an element tag to style a specific part of it, eg:
    `<p>This is <span class="bold">some</span> text.</p>`
    * `input`/form elements

## HTML attributes
  * Attributes are like options that you can send to an HTML element, like:
    * class
    * id
    * type (eg, input type)

## CSS Selectors
  * Classes
  * Element types
  * IDs

## CSS basics
  * display
  * padding (creates space around the edges *inside* the element); margin (creates space aroung the
  edges *outside* the element)
  * `margin: 0 auto`
  * flexbox model
  * media queries
  * colors: basic names, hex, rgb/rgba

## Dev tools, StackOverflow

## Code style
  * Link to Airbnb guides?

<!-- Things to add -->
* background image
* input/form
* static top nav/animation
