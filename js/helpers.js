$(document).ready(function() {

/////////// Product nav toggle

    $('#product-nav').hide();

    $('.logo-block .arrow').click(function() {
        $('#product-nav').slideToggle();
        $('#tree-nav').hide();
    });

/////////// Tree nav toggle

    $('#tree-nav').hide();

    $('.icon-tree-nav').click(function() {
        $('#tree-nav').slideToggle();
        $('#product-nav').hide();
    });

/////////// Table row expand toggle

    $('.expand-row').click(function() {
        $(this).toggleClass('expanded');
    });


/////////// Toggle assigned/unassigned jobs

    $('.unassigned').hide();

    $('#unassigned').click(function() {
        $('#assigned').removeClass('active');
        $(this).addClass('active');
        $('.assigned').hide();
        $('.unassigned').show();
    });
    $('#assigned').click(function() {
        $('#unassigned').removeClass('active');
        $(this).addClass('active');
        $('.unassigned').hide();
        $('.assigned').show();
    });

/////////// Header filter add/remove function

    $('#filter-unit-2').hide();

    $('#delete-filter').click(function () {
        $('#filter-unit-2').hide();
        $('#add-filter').show();
    });

    $('#add-filter').click(function () {
        $('#filter-unit-2').show();
        $('#add-filter').hide();
    });


/////////// Map slider collapse

    $('#collapse-map-slider').click(function() {
       $('.map-slider-menu-container').toggleClass('open');
    });


/////////// List view check all master plan checkboxes

    var masterCheckboxes = $('#master-plan-collapse th input');

    $('#master-select-all').click(function() {
        masterCheckboxes.attr('checked', true);
    });

    $('#clear-selected').hide();

    $('#master-select-all').click(function () {
        $('#clear-selected').show();
    });

    $('#clear-selected').click(function() {
        $(this).hide();
        masterCheckboxes.attr('checked', false);
    });

/////////// Create new draft plan add profile

    $('.op-3').hide();

    $('.op-2 a').click(function () {
        $(this).hide();
        $('.op-2').removeClass('unselected');
        $('.op-3').show();
    });

    $('.op-3 a').click(function () {
        $(this).hide();
        $('.op-3').removeClass('unselected');
    })


});