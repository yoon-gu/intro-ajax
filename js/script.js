
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $("#street")[0].value;
    var cityStr = $("#city")[0].value;
    var address = streetStr + ', ' + cityStr;

    // YOUR CODE GOES HERE!
    var node = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '">';

    $greeting.text('So, you want to live at ' + address + '?');
    $body.append(node);
    
    return false;
};

$('#form-container').submit(loadData);
