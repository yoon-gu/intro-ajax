
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
    
    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354">');
    
    return false;
};

$('#form-container').submit(loadData);
