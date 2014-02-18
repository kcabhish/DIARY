function warning(){
	   alert ("Links to other page are disabled, please open sample files seperately!!!");
	   return false;
	}



$(document).ready(function(){
    
    
    if ( $.browser.msie ) {   
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }
	
   $('a[title]').tooltip();
   $('span[title]').popover();
//    $('a[title]').qtip({
//       position: {
//          my: 'left center',  // Position my top left...
//		at: 'center right' // at the bottom right of...
//       }
//    });
   
	$('.close').click(function() {							 
			$(this).parents(".success, .notice").animate({opacity: 'hide'}, "slow");
			return false;
		});
		
	/* *********************************************************************
 * Notifications
 * *********************************************************************/
function InitNotifications () {
	$('.notification .close').click(function () {
		$(this).parent().fadeOut(1000, function() {
			$(this).find('p').fixClearType ();
		});		
		return false;
	});
}
InitNotifications();

/* *********************************************************************
 * Slide Box
 * *********************************************************************/
function InitBoxSlide () {
    $('.box-slide-head').click(function (event) {

        tgt = $(event.target);
        if (tgt.hasClass('clickable')) {
            return;
        }
        
        body = $(this).next();
        
        if (!body.hasClass('box-slide-body')) {
            body = body.find('.box-slide-body');
        }
        //body = $(this).next('.box-slide-body');

        if (body.is(':visible')) {
            body.hide();
            $(this).css("background-color","");
            $(this).css("font-weight","");
        }
        else {
            body.show();
            $(this).css("background-color","#f5f5f5");
            $(this).css("font-weight","bold");
        }
        
        return false;
    });
}
InitBoxSlide();

/* *********************************************************************
 * Slide Box
 * *********************************************************************/
function InitBoxSlide2 () {
   $('.box-slide-body').hide();
    $('.box-slide-link').click(function (event) {
       body = $(this).closest("tr").next().find('.box-slide-body');
       
        if (body.is(':visible')) {
            body.hide();
            $(this).closest("tr").css("background-color","");
            $(this).closest("tr").css("font-weight","");
        }
        else {
            body.show();
            $(this).closest("tr").css("background-color","#f5f5f5");
            $(this).closest("tr").css("font-weight","bold");
        }
        return false;
    });
}
InitBoxSlide2();


		//jQuery ready is quicker than onload
    //$(".stripeMe tr").mouseover(function(){$(this).addClass("over");}).mouseout(function(){$(this).removeClass("over");});
    $(".stripeMe tr:even").addClass("alt");

	//$(".modalsmall").colorbox({innerWidth:350, innerHeight:300, iframe:false});
	
	$('.modaldelete').click(function(){
		var answer = confirm('Are you sure you want to delete?');
		return answer
	});
	
	$('.confirmEdit').click(function(){
		var answer = confirm('Are you sure you want to edit?');
		return answer
	});
	
	$('.heavyquery').click(function(){
		var answer = confirm('\t\t\t\tNotice\nThis page takes an extensive amount of time to load.\n\t\tAre you sure you want to continue?');
		return answer
	});
	
	$(".plusIcon").button({icons: {primary: 'ui-icon-plus'}});
	
	$(".addBtn").button({
		icons: {
			primary: 'ui-icon-plus'
		}
	});

	$(".uimodal").click(function(event){
			var urlLocation = $(this).attr("href");
			var varTitle = $(this).attr("title");
			//alert(urlLocation);
			event.preventDefault();
			$('<div>').dialog({
				modal: true,
				open: function(){
					$(this).load(urlLocation);
				},
				height: 300,
            	width: 400,
				title: varTitle
			});
		});
		
		
	$(".globalmodal").click(function(event){
			var urlLocation = $(this).attr("href");
			event.preventDefault();
			$('<div>').dialog({
				modal: true,
				open: function(){
					$(this).load(urlLocation);
				},
				height: $(this).attr("height"),
            	width: $(this).attr("width"),
				title: $(this).attr("title"),
				close : function(){
					location.reload(true);
					//$(this).dialog('destroy');
				}

			});
		});
	
	$(".globalmodal2").click(function(event){
			var urlLocation = $(this).attr("href");
			event.preventDefault();
			$('<div>').dialog({
				modal: true,
				open: function(){
					$(this).load(urlLocation);
				},
				height: $(this).attr("height"),
            	width: $(this).attr("width"),
				title: $(this).attr("title")
			});
		});
	//$(".modal").colorbox({innerWidth:500, innerHeight:500});
		
	 //for table row
  //$("tbody tr:even").addClass('even');
  //$("tr:odd").css("background-color", "#EFF1F1");
});



function openPopupDialog(location, windowTitle, heightValue, widthValue) {

    var $dialog = $('#dialogWin').load('submission.asp')
        .dialog({
              autoOpen: false,
              modal: true,
              draggable: false,
              resizable: false,
              title: windowTitle,
              width: widthValue,
              height: heightValue
         });

    $dialog.dialog('open');

    return false;
}



(function(d){d.fn.aeImageResize=function(a){var i=0,j=d.browser.msie&&6==~~d.browser.version;if(!a.height&&!a.width)return this;if(a.height&&a.width)i=a.width/a.height;return this.one("load",function(){this.removeAttribute("height");this.removeAttribute("width");this.style.height=this.style.width="";var e=this.height,f=this.width,g=f/e,b=a.height,c=a.width,h=i;h||(h=b?g+1:g-1);if(b&&e>b||c&&f>c){if(g>h)b=~~(e/f*c);else c=~~(f/e*b);this.height=b;this.width=c}}).each(function(){if(this.complete||j)d(this).trigger("load")})}})(jQuery);

