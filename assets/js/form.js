$('#volunteer').submit(function(e){
        e.preventDefault();
        var messageval = document.getElementById('message');
        if(messageval.value.length == 0)
            messageval.value = "-";
        var formdata = toJSONString(this);
        console.log(formdata);
        $.ajax({
            type: "POST",
            url: URL,
            dataType: "json",
            contentType: "application/json",
            data: formdata,
            beforeSend: function(data) {
                $('#volsubmit').attr('disabled', true);
                $('#volsubmit').val('Submitting..').show();
            },
            success: function(data) {
                console.log(data);
                $('#volsubmit').val('Success!').show();
                $('#volsubmit').removeProp('disabled');
                $('#volunteer')[0].reset();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#volsubmit').val('Failed').show();
                $('#volsubmit').removeProp('disabled');
            }
        });
    function toJSONString (form) {
		var obj = {};
		var elements = form.querySelectorAll("input, select, textarea");
		for(var i = 0; i < elements.length; ++i) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;
			if(name) {
				obj[name] = value;
			}
        }
        return JSON.stringify(obj);
    }
});