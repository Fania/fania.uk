/**************************************************************/
/* Prepares the cv to be dynamically expandable/collapsible   */
/**************************************************************/
function prepareList() {
    $('#expList').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })

    .addClass('collapsed')
    .children('ul').hide()
    // document.getElementById("collapseList").style.visibility = 'hidden';
    document.getElementById("collapseList").style.color = '#756673';
    document.getElementById("expandList").style.color = '#756673';

    //Create the button funtionality
    $('#expandList')
    .unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children().show('medium');
        // document.getElementById("expandList").style.visibility = 'hidden';
        // document.getElementById("collapseList").style.visibility = 'visible';
        document.getElementById("expandList").style.color = '#9C6793';
        document.getElementById("collapseList").style.color = '#756673';
    })
    $('#collapseList')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children().hide('medium');
        // document.getElementById("collapseList").style.visibility = 'hidden';
        // document.getElementById("expandList").style.visibility = 'visible';
        document.getElementById("expandList").style.color = '#756673';
        document.getElementById("collapseList").style.color = '#9C6793';
    })

    $('.collapsed').ready(function () {
        $("#active").click();
    })
};

/**************************************************************/
/* Functions to execute on loading the document               */
/**************************************************************/
$(document).ready( function() {
    prepareList()
});