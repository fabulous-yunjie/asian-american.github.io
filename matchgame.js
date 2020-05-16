$(document).ready(function() {
      var correctCards = 0;
      $( init );

      function init() {

        // Hide the success message
        $('#successMessage').hide();
        $('#successMessage').css( {
          width: 0,
          height: 0
        } );

        // Reset the game
        correctCards = 0;
        // $('#cardPile').html( '' );
        $('#cardSlots').html( '' );

        // Create the pile of shuffled cards
        var numbers = [ 2, 9, 5, 
                        8, 4, 7, 
                        3, 6, 1 ];
        var terms = ['Chinese <br>American', 
        'Pakistani <br>American', 
        'Filipino <br>American', 
                    'Japanese <br>American', 
                    'Asian Indian <br>American', 
                    'Vietnamese <br>American', 
                    'Korean <br>American', 
                    'Cambodian <br>American',
                    'Hmong <br>American'];
        <!--numbers.sort( function() { return Math.random() - .5 } );-->
        
        var s=0.1;
        for ( var i=0; i<9; i++ ) {
          $('<div>' + terms[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
            stack: '#cardPile div',
            cursor: 'move',
            revert:true

          } );
        }

        // Create the card slots
        var words = ['Colorado declared its Recognition Day ', 
                    'Highest Population with >4 million', 
                    'U.S. has the largest diaspora community of the ethinicity', 
                    'Fastest population growth recently <br>(2x in 20 years)', 
                    'Sailors are first Asians in North America', 
                    '>50% people don\'t possess high school degree', 
                    'Highest civic assimilation to the U.S. and activism', 
                    'Used to be 3rd largest group but declined recently',
                    'Having been targets for hate crimes since 911', ];
        for ( var i=1; i<=9; i++ ) {
          $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
          } );
        }

      }

      function handleCardDrop( event, ui ) {
        var slotNumber = $(this).data( 'number' );
        var cardNumber = ui.draggable.data( 'number' );

        // If the card was dropped to the correct slot,
        // change the card colour, position it directly
        // on top of the slot, and prevent it being dragged
        // again

        if ( slotNumber == cardNumber ) {
          ui.draggable.addClass( 'correct' );
          ui.draggable.draggable( 'disable' );
          $(this).droppable( 'disable' );
          ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
          ui.draggable.draggable( 'option', 'revert', false );
          correctCards++;
        } 
        
        // If all the cards have been placed correctly then display a message
        // and reset the cards for another go

        if ( correctCards == 9 ) {
          $('#successMessage').show();
          $('#successMessage').animate( {
            width: '40vw',
            height: '35vh',
            opacity: 0.8
          } );
        }
        

        // $(this).data("draggable").originalPosition = {
        //   top:s,
        //   left:0
        // }

      }

});