
// i did nut write this script because i really don't understand js (personallu fuck js)


$(document).ready(function(){


    var titles = ['kotlico ⎻⎼⎽⎼⎻','kotlico ⎼⎻⎼⎽⎼','kotlico ⎽⎼⎻⎼⎽','kotlico ⎼⎽⎼⎻⎼',];

    var timeInterval = 300; /** interval between each titles **/

    getTime();
    async function getTime() {
    const response = await fetch(
        'http://worldtimeapi.org/api/timezone/Europe/Kyiv'
    );
    const data = await response.json();
    document.getElementById("timezone").innerHTML = "GMT " + data.utc_offset;
    };

    exec();

    setInterval(function(){
        exec();
    }, timeInterval * titles.length);

    function exec(){
        $.each(titles, function(k, v){
            setTimeout(function(){
                $('title').html(v);
            }, timeInterval * (k + 1));
        });
    }

});