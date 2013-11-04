// JavaScript source code
var HOME_URL = "queryPage.html";
var queryMap;
var queryId;

$(function () {
    $('#homeButton').click(function (e) {
        e.preventDefault();
        window.location.href = HOME_URL;
    });

    var imgList = [];
    imgList['0'] = "google.com";
    imgList['1'] = "http://i.imgur.com/haTdJMg.jpg";
    imgList['2'] = "http://i.imgur.com/WGMJxjO.jpg";
    imgList['3'] = "http://i.imgur.com/k75LJdh.jpg";
    imgList['4'] = "http://i.imgur.com/mdR3f0P.jpg";

    // Thanks to http://snipplr.com/view/19838/get-url-parameters/
    function getUrlVars() {
        var map = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            map[key] = value;
        });
        return map;
    }

    queryMap = getUrlVars();
    queryId = queryMap['id'];

    if (queryId === undefined) {
        // TODO: load home page, and all of its goodness
        $('#blankParamBlock').show();
        $('#showQueryResultBlock').hide();

        addListeners();

        // Add click listeners
        function addListeners() {
            $('.listImg').click(function (e) {
                e.preventDefault();
                var id = $(this).attr('id');
                window.location.href = HOME_URL + "?id=" + id;
            });
        }
    } else {
        // TODO: load picture
        $('#blankParamBlock').hide();
        $('#showQueryResultBlock').show();

        var imgurl = imgList[queryId];

        $('#imgToShow').append(
            $('<img>').attr('src', imgurl).addClass('selectedImg')
            ).append(
            $('<h2>').html('This is image ' + queryId)
            );
    }
});