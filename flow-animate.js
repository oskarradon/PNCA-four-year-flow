function animate() {
  let tl = new TimelineLite();

  // OBJECTS

  // circles
  let blue = document.getElementById( 'flow__blue-circle' );
  let white = document.getElementById( 'flow__white-circle' );
  let black = document.getElementById( 'flow__black-circle' );

  // titles
  let thesisTitle = document.getElementById( 'flow__title-thesis' );

  // other objects
  let line = document.getElementById( 'flow__line' );


  tl.add( TweenLite.to( blue, 2, { left: 510 } ),
          TweenLite.to( white, 2, { left: 820 } ),
          TweenLite.to( black, 2, { left: 850 } ),
         );

  tl.add( TweenLite.to( thesisTitle, 1, { opacity:1 } ),
          TweenLite.to( line, 2, { left: 100, width: 900 } )
        );
}

setTimeout( () => { animate() }, 1000 );
