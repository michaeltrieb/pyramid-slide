


function drawPyramid() {


    //  User Favored Character
        var symbol =  $("#symbol").val();


    //  Slider value, converted to integer
        var heightStr   = $("#height").val();
        var height      = parseInt(heightStr);


    //  Clear the content area
        $(".pyramid").empty();


    //  Deliver Variable Content to Content Area
        for (var row = 0; row < height; row++) {

            //  Determine number of Bricks and Spaces
                var numBricks = row + 2;
                var numSpaces = height - row - 1;

            //  Build string of Bricks, for each Row
                var rowStr = "";
                for (var i = 0; i < numSpaces; i++) {
                    var spaceChar = "&nbsp";
                    rowStr += spaceChar;
                }
                for (var i = 0; i < numBricks; i++) {
                    rowStr += symbol;
                }

            //  Build Content Block, Append to Content Area
                rowElem = $("<p>").html(rowStr);
                $(".pyramid").append(rowElem);
        }


}
