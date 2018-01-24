function animate() {


  let tl = new TimelineLite();


  // OBJECTS


  // SHAPES

  let yellow = document.querySelector( '.flow__circle-yellow' );
  let blue = document.querySelector( '.flow__circle-blue' );
  let white = document.querySelector( '.flow__circle-white' );
  let black = document.querySelector( '.flow__circle-black' );
  let line = document.querySelector( '.flow__line' );

  // ARTICLES

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

  // TITLES

  let titleFocus = document.querySelector( '.flow__title-focus' );
  let titleThesis = document.querySelector( '.flow__title-thesis' );
  // these are for small screen size only
  let titleExplore = document.querySelector( '.flow__article-explore h1' );
  let titleExperiment = document.querySelector( '.flow__article-experiment h1' );
  let titleArticleFocus = document.querySelector( '.flow__article-thesis h1' );

  // TEXT
  let textExplore = document.querySelector( '.flow__article-explore p' );
  let textExperiment = document.querySelector( '.flow__article-experiment p' );
  let textFocus = document.querySelector( '.flow__article-thesis p' );

  // ROWS

  let rows = [
    articleYear,
    articleYearOne,
    titleExplore,
    textExplore,
    articleYearTwo,
    titleExperiment,
    textExperiment,
    articleYearFour,
    titleArticleFocus,
    textFocus,
    articleFoundation,
    articleMajors,
    articleAreas
  ]

  // COLUMNS

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

  let blackCircleBoundingRect = black.getBoundingClientRect()
  console.log(blackCircleBoundingRect.top, blackCircleBoundingRect.right, blackCircleBoundingRect.bottom, blackCircleBoundingRect.left );

  // ANIMATION


  if ( width < 768 ) {
    tl.add( TweenLite.to( blue, 2, { top: 250 } ),
            TweenLite.to( white, 2, { top: 458 } ),
            TweenLite.to( black, 2, { top: 508 } ),
            TweenLite.to( line, 2, { top: 23, height: 490 } ),

            new TimelineLite().staggerTo( rows, 2, { delay: 2, opacity: 1 }, .3 )
          );
  } else {
    tl.add( TweenLite.to( blue, 2, { left: 230 } ),
            TweenLite.to( white, 2, { left: 690 } ),
            TweenLite.to( black, 2, { left: 740 } ),
            TweenLite.to( line, 2, { left: 20, width: 720 } ),

            new TimelineLite().staggerTo( columnOne, 2, { delay: 2, opacity: 1 }, .3 ),

            new TimelineLite().staggerTo( columnTwo, 2, { delay: 3, opacity: 1 }, .3 ),

            TweenLite.to( articleAreas, 1, { delay: 4, opacity: 1 } ),

            new TimelineLite().staggerTo( columnFour, 2, { delay: 4, opacity: 1 }, .3 )
          );
  }

};

setTimeout( () => { animate() }, 600 );


// window.addEventListener( "resize", () => {
//   let width = window.innerWidth;
// });
