function animate() {
  let tl = new TimelineLite();

  // OBJECTS

  // circles
  let yellow = document.querySelector( '.flow__circle-yellow' );
  let blue = document.querySelector( '.flow__circle-blue' );
  let white = document.querySelector( '.flow__circle-white' );
  let black = document.querySelector( '.flow__circle-black' );

  // other objects
  let line = document.querySelector( '.flow__line' );

  // articles
  let articleExplore = document.querySelector( '.flow__article-explore' );
  let articleYear = document.querySelector( '.flow__article-year' );
  let articleYearOne = document.querySelector( '.flow__article-year-one' );
  let articleFoundation = document.querySelector( '.flow__article-foundation' );
  let articleExperiment = document.querySelector( '.flow__article-experiment' );
  let articleYearTwo = document.querySelector( '.flow__article-year-two' );
  let articleMajors = document.querySelector( '.flow__article-majors' );
  let articleAreas = document.querySelector( '.flow__article-areas' );
  let articleYearFour = document.querySelector( '.flow__article-year-four' );
  let articleThesis = document.querySelector( '.flow__article-thesis' )

  // titles
  let titleFocus = document.querySelector( '.flow__title-focus' );
  let titleThesis = document.querySelector( '.flow__title-thesis' );

  // columns
  // (these are for the large screen size layout, a TimelineLite will iterate through the array to stagger the objects within appearing)
  let columnOne = [
    articleExplore,
    articleYear,
    articleYearOne,
    articleFoundation
  ];

  let columnTwo = [
    articleExperiment,
    articleYearTwo,
    articleMajors
  ];

  // column three is just articleAreas

  let columnFour = [
    articleYearFour,
    titleFocus,
    titleThesis,
    articleThesis
  ]

  let width = window.innerWidth; // this is used to animate the elements differently based on the screen size

  if ( width < 768 ) {
    tl.add( TweenLite.to( blue, 2, { top: 250 } ),
            TweenLite.to( white, 2, { top: 458 } ),
            TweenLite.to( black, 2, { top: 508 } ),
            TweenLite.to( line, 2, { top: 23, height: 490 } ),
            //
            // new TimelineLite().staggerTo( columnOne, 2, { delay: 2, opacity: 1 }, .3 ),
            //
            // new TimelineLite().staggerTo( columnTwo, 2, { delay: 3, opacity: 1 }, .3 ),
            //
            // TweenLite.to( columnThree, 1, { delay: 4, opacity: 1 } ),
            //
            // new TimelineLite().staggerTo( columnFour, 2, { delay: 4., opacity: 1 }, .3 )
          );
  } else {
    tl.add( TweenLite.to( blue, 2, { left: 230 } ),
            TweenLite.to( white, 2, { left: 690 } ),
            TweenLite.to( black, 2, { left: 740 } ),
            TweenLite.to( line, 2, { left: 92, width: 650 } ),

            new TimelineLite().staggerTo( columnOne, 2, { delay: 2, opacity: 1 }, .3 ),

            new TimelineLite().staggerTo( columnTwo, 2, { delay: 3, opacity: 1 }, .3 ),

            TweenLite.to( articleAreas, 1, { delay: 4, opacity: 1 } ),

            new TimelineLite().staggerTo( columnFour, 2, { delay: 4., opacity: 1 }, .3 )
          );
  }

};

setTimeout( () => { animate() }, 600 );

// not working
// window.addEventListener( "resize", () => {
//   animate();
// });
