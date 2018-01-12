# PNCA Four Year Flow Diagram

This is an animated version of the four year flow diagram from the PNCA guidebook. It is animated using the Greensock animation library.

This project is a part of my workstudy internship in the PNCA Communications office.


### Description

The CSS uses the BEM naming convention for elements. All of the class names are prefixed with `flow__` since this Flow Diagram is a module on a larger page. IDs are not used. More information on BEM can be found [here](http://getbem.com/naming/).

The `.flow__container` element is a wrapper for the content which is divided into a `.flow__shape-layer` and a `.flow__text-layer` which uses CSS grid to position each of the text `article` elements. `.flow__shape-layer` has an inner div: `.flow__shape-layer-inner` to center the shapes in the container.

The animation is accomplished using the GSAP TweenLite, TimelineLite, and CSSPlugin libraries which tween the circle's `left` values, each of which are set using variables in the CSS. The text is animated using the `opacity` value, and is staggered using TimeLine instances nested in the main Timeline.

The `article` elements in the `.flow__text-layer` are positioned using the `grid-area` property to specify their starting row and column. Since each of the `article` elements are only 1 row X 1 column their ending row and columns are not specified. This looks like `grid-area: 2 / 3`. More on CSS grids can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

&copy; Oskar Kimball 2017
