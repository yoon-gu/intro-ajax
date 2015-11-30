
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

    // NYT API KEY : ​db298d73aecc9deae1d9f634b9a63f5c:2:73620129
    var ntyurl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq='+cityStr+'&api-key=db298d73aecc9deae1d9f634b9a63f5c:2:73620129'
    $.getJSON( ntyurl, function( data ) {
      $.each( data.response.docs, function( key, val ) {
        $('#nytimes-articles').append( "<li id='" + key + "'>" + val.headline.main + "</li>" );
      });
    });

    return false;
};

$('#form-container').submit(loadData);
