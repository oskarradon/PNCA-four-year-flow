function animate() {
  let tl = new TimelineLite();

  // OBJECTS

  // circles
  let blue = document.querySelector( '.flow__circle-blue' );
  let white = document.querySelector( '.flow__circle-white' );
  let black = document.querySelector( '.flow__circle-black' );

  // columns

  let columnOne = [
    document.querySelector( '.flow__article-explore' ),
    document.querySelector( '.flow__article-year' ),
    document.querySelector( '.flow__article-year-one' ),
    document.querySelector( '.flow__article-foundation' ),
  ];

  let columnTwo = [
    document.querySelector( '.flow__article-experiment' ),
    document.querySelector( '.flow__article-year-two' ),
    document.querySelector( '.flow__article-majors' ),
  ];

  let columnThree = document.querySelector( '.flow__article-areas' );

  let columnFour = [
    document.querySelector( '.flow__article-year-four' ),
    document.querySelector( '.flow__title-focus' ),
    document.querySelector( '.flow__title-thesis' ),
    document.querySelector( '.flow__article-thesis' )
  ]

  // other objects
  let line = document.querySelector( '.flow__line' );


  tl.add( TweenLite.to( blue, 2, { left: 260 } ),
          TweenLite.to( white, 2, { left: 720 } ),
          TweenLite.to( black, 2, { left: 770 } ),
          TweenLite.to( line, 2, { left: 92, width: 680 } ),

          new TimelineLite().staggerTo( columnOne, 2, { delay: 2, opacity: 1 }, .3 ),

          new TimelineLite().staggerTo( columnTwo, 2, { delay: 3, opacity: 1 }, .3 ),

          TweenLite.to( columnThree, 1, { delay: 4, opacity: 1 } ),

          new TimelineLite().staggerTo( columnFour, 2, { delay: 4., opacity: 1 }, .3 )
         );
}

setTimeout( () => { animate() }, 600 );
