$(document).ready(function () {
	var rating = {};
    function pageDisplay() {
        var page = parseInt($('ul#pageNo').find('li.active').attr('value'));
        console.log(page);

        return page;
    }
    var comment = [];
    $('.#submitbutton').click(function () {
        var page = pageDisplay();
        comment[page] = $('#comment').val();
        $('input[type="text"]').val("");
        console.log(comment);
    })
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
    
            msg = " You rated this " + ratingValue + " stars.";
        $('.success-box div.text-message').html("<span>" + msg + "</span>");
        

    });


});


