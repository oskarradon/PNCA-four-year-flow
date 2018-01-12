function animate() {
  let tl = new TimelineLite();

  // OBJECTS

  // circles
  let blue = document.getElementById( 'flow__blue-circle' );
  let white = document.getElementById( 'flow__white-circle' );
  let black = document.getElementById( 'flow__black-circle' );

  // titles
  let focusTitle = document.getElementById( 'flow__title-focus' );
  let thesisTitle = document.getElementById( 'flow__title-thesis' );

  // columns

  let columnOne = [
    document.getElementById( 'flow__article-explore' ),
    document.getElementById( 'flow__article-year' ),
    document.getElementById( 'flow__article-year-one' ),
    document.getElementById( 'flow__article-foundation' ),
  ];

  let columnTwo = [
    document.getElementById( 'flow__article-experiment' ),
    document.getElementById( 'flow__article-year-two' ),
    document.getElementById( 'flow__article-majors' ),
  ];

  let columnThree = document.getElementById( 'flow__article-areas' );

  // other objects
  let line = document.getElementById( 'flow__line' );


  tl.add( TweenLite.to( blue, 2, { left: 280 } ),
          TweenLite.to( white, 2, { left: 740 } ),
          TweenLite.to( black, 2, { left: 790 } ),
          TweenLite.to( line, 2, { left: 92, width: 700 } ),

          new TimelineLite().staggerTo( columnOne, 2, { delay: 2, opacity: 1 }, .3 ),

          new TimelineLite().staggerTo( columnTwo, 2, { delay: 3, opacity: 1 }, .3 ),

          TweenLite.to( columnThree, 1, { delay: 4, opacity: 1 } ),

          TweenLite.to( focusTitle, 1, { delay: 5, opacity: 1 } ),
          TweenLite.to( thesisTitle, 1, { delay: 5, opacity: 1 } ),
         );
}

setTimeout( () => { animate() }, 600 );
