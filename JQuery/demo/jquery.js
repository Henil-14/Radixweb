
$(document).ready(function () {

    // jQuery code here
    console.log("usingng jQuery");

    //jQuery syntax looks like this
    //$('selector').clock();
    
    //click on all the p elements
    //$('p').click(); //click on p
    $('p').click(function () {
        console.log('you clicked on p', this);
        //$('#id').hide();
        //$('.class').hide;
        // $(this).hide();
    });//do this when we click on p


    //three types of selectors in jQuery
    //(1) Element selector
   // $('p').click();

    //(2) ID selector
    //$('#third').click();
    
    //(3) Class selector
  //  $('.odd').click();
   // $('p.odd').click();

    //select all element
    //$('*').click();

    //Events in  jQuery
    
    //double click
    // $('p').dblclick(function () {
    //     console.log('you double clickclicked on p', this);
       
    // })

       //mouse entered
    //    $('p').mouseenter(function () {
    //     console.log('you entered:', this);
       
    // })

        //mouse leave
        // $('p').mouseleave(function () {
        //     console.log('you entered:', this);
           
        // })

        // Mouse Hovered 
//         $('p').hover(function () {
//             console.log('you hovered on:', this);
           
//         })

//Demo on method 

$('p').on({
    click:function(){
    console.log('Thanks for clicking')
},
mouseleave: function(){
console.log('mouse leave')
}

})

//hide 
// $('#he').hide(2000,function(){
//     console.log('hidden');                                                                                                                                                                         
// });

//show
// $('#he').show(4000,function(){
//     console.log('show');                                                                                                                                                                         
// });

//Toggle
// $('#btn').click(function(){
//     $('#he').toggle(3000);
// })

// //fade out
// $('#btn').click(function(){
//     $('#he').fadeOut(3000);
// })

// //fade in
// $('#btn').click(function(){
//     $('#he').fadeIn(3000);
// })

// //fade toggle
// $('#btn').click(function(){
//     $('#he').fadeToggle(3000);
// })

//fade to
// $('#btn').click(function(){
//     $('#he').fadeTo(3000);
// })


//Slide function 
// $('#he').slideUp(2000)
// $('#he').slideDown(2000)

// $('#btn').click(function(){
//     $('#he').slideToggle(2000);
// })

// animate function in jquery
    // $('#he').animate({
    //     opacity:0.5,
    //     height:'250px',
    //     width:'350px'
    // },"slow")
    
     $('#he').animate({opacity:0.3},3000);
     $('#he').animate({opacity:0.5} ,'slow');
     $('#he').animate({opacity:0.9} , 2000);
     $('#he').animate({width:'550px'}, 5000);
    
    $('#he').css('background-color' , 'red')


})