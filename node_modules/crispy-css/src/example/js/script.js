import $ from 'cash-dom';

$(function() {

    const $nav = $('#nav');

    $('#nav-button').on('click', function() {
        $nav.toggleClass('show');
    });
});