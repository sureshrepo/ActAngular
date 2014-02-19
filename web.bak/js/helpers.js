/********************************************************************************
 * JS products
 * Created by: Sparkman Vo
 * Created on: March 2013
 ********************************************************************************/

/********************************************************************************
 * Setup
 ********************************************************************************/
$(document).ready(function() {
	$(".check-image").each(function() {
		if (($(this).src == undefined) || (helpers.trim($(this).src) == "brokenimage1")) {
			$(this).parent().attr("href","#");
		}
	});
});

var helpers = {
	log:function(msg) {
		// detect browser
		// detect prod vs stag/dev
		console.log(msg);
	},
	checkImageLoad:function(source) {
		// empty
	},
	checkImageError:function(source) {
		source.src = "/images/noimageavail200.png";
		source.onerror = "";
		$(source).addClass('emptyTile');
		return true;
	},
	trim:function (str) {
	    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	},
	dump:function(arr,level) {
		var dumped_text = "";
		if(!level) level = 0;

		//The padding given at the beginning of the line.
		var level_padding = "";
		for(var j=0;j<level+1;j++) level_padding += "    ";

		if(typeof(arr) == 'object') { //Array/Hashes/Objects
			for(var item in arr) {
				var value = arr[item];

				if(typeof(value) == 'object') { //If it is an array,
					dumped_text += level_padding + "'" + item + "' ...\n";
					dumped_text += dump(value,level+1);
				} else {
					dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
				}
			}
		} else { //Stings/Chars/Numbers etc.
			dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
		}
		return dumped_text;
	},
    charLimit: function(str,limit) {
        var strRes = str;
        if (str.length>limit) {
            var l = limit-3
            strRes = str.substr(0,l);
            strRes = this.trim(strRes);
            strRes += "...";
        }
        return strRes;
    },
    /*
     * Returns a position object of the dropped callout
     *
     * returns height, width, top, left of the dropped object
     */
	getHelperPosO:function (uiHelper) {
        // elements
        var uiHelper = uiHelper;
        var droppable = $("#i2-callouts");                        // interactive image div

        // calc
        var offsetTop = uiHelper.offset().top;                  // offset top of the object dropped
        var offsetLeft = uiHelper.offset().left;                // offset left of the object dropped
        var offsetParentTop = droppable.offset().top;
        var offsetParentLeft = droppable.offset().left;

        var dragObjHeight = uiHelper.innerHeight();             // height of the object dropped
        var dragObjWidth = uiHelper.innerWidth();               // width of the object dropped
        var finalTop = (offsetTop - offsetParentTop);
        var finalLeft = (offsetLeft - offsetParentLeft);

        //
        var posO = new Object();
        posO.height = Math.floor(dragObjHeight);
        posO.width = Math.floor(dragObjWidth);
        posO.top = Math.floor(finalTop);
        posO.left = Math.floor(finalLeft);

        return posO;
    },
    loopValuesInObject:function (obj) {
        for (var value in obj) {
            console.log(value + ": " + obj[value]);
        }
    },

	/*
	 * Usage:
	 *
	 * loadjscssfile("myscript.js", "js") //dynamically load and add this .js file
	 * loadjscssfile("javascript.php", "js") //dynamically load "javascript.php" as a JavaScript file
	 * loadjscssfile("mystyle.css", "css") ////dynamically load and add this .css file
	*/
	loadjscssfile: function (filename, filetype) {
		if (filetype == "js") { //if filename is a external JavaScript file
			var fileref = document.createElement('script')
			fileref.setAttribute("type", "text/javascript")
			fileref.setAttribute("src", filename)
		}
		else if (filetype == "css") { //if filename is an external CSS file
			var fileref = document.createElement("link")
			fileref.setAttribute("rel", "stylesheet")
			fileref.setAttribute("type", "text/css")
			fileref.setAttribute("href", filename)
		}
		if (typeof fileref != "undefined")
			document.getElementsByTagName("head")[0].appendChild(fileref)
	},

	// parse a date in yyyy-mm-dd format
	parseDate: function(input) {
		var parts = input.split('-');
		// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
		var result = new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
		return result;
	},

	// check if object exists
	exists: function() {
		return this.length>0;
	}
} /* end helpers */