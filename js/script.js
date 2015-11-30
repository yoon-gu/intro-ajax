
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
    var city = $("#city")[0].value;

    // YOUR CODE GOES HERE!
    var node = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + city + '">';

    $body.append(node);
    
    return false;
};

$('#form-container').submit(loadData);
