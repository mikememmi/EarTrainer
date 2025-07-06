$('#upInstrument').on('click', function() {
    if (displayInstrument !== 4) {
        displayInstrument++;
        var elInstrument = document.getElementById('itext');
        elInstrument.textContent = instrumentNames[displayInstrument];
        keepRange = true;
        updateCheck();
        if (displayInstrument !== workInstrument) {
            $('button#keepButton').removeClass('redback').removeClass('greenback');
            $('button#keepButton').addClass('greenback');
            $('button#keepButton2').removeClass('redback').removeClass('greenback');
            $('button#keepButton2').addClass('redback');
        } else {
            $('button#keepButton').removeClass('redback').removeClass('greenback');
            $('button#keepButton2').removeClass('redback').removeClass('greenback');
        };
        $('#acInstrument').find('.redx').remove();
        if (displayInstrument !== workInstrument) {
            $('#acInstrument').html('&nbsp;&nbsp;&nbsp;' + instrumentNames[workInstrument] +'&nbsp;&nbsp;&nbsp;' + '<span class="redx"> | ' + '&nbsp;&nbsp;&nbsp;' +  instrumentNames[displayInstrument] + '</span>');
        };
    };
});


$('button#keepButton2').on('click', function() {
    if ($('button#keepButton2').hasClass('redback')) {
        $('button#keepButton2').removeClass('redback').addClass('greenback');
        $('button#keepButton').removeClass('greenback').addClass('redback');
        keepRange = false;
    } else { 
        if ($('button#keepButton2').hasClass('greenback')) {
            $('button#keepButton2').removeClass('greenback').addClass('redback');
            $('button#keepButton').removeClass('redback').addClass('greenback');
            keepRange = true;
        };
    }
});


$('#downLowRange').on('click', function() {
    if (displayLowRange !== 0) {
        displayLowRange = displayLowRange - 1;
        var elLowEnd = document.getElementById('lowRangeDisplay');
        elLowEnd.innerHTML = '<span>Range Low End: ' + arrNoteNames[displayLowRange].toString() + '</span>';
        $('#acLowRange').find('.redx').remove();
        if (displayLowRange !== workLowRange) {
            $('#acLowRange').append('<span class="redx">  |  ' + arrNoteNames[displayLowRange].toString() + '</span>');                        
        };
        updateCheck();
    };
});