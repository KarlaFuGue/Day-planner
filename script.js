$(document).ready(function() {
//Variables
var today = moment().format('dddd, MMM Do');
    //Hours (24 hour time) & am/pm
var rightNow = moment().format('H A')

//Working hours
var workingHours = [
    {time: '8 AM', event:''},
    {time: '9 AM', event:''},
    {time: '10 AM', event:''},
    {time: '11 AM', event:''},
    {time: '12 PM', event:''},
    {time: '1 PM', event:''},
    {time: '2 PM', event:''},
    {time: '3 PM', event:''},
    {time: '4 PM', event:''},
    {time: '5 PM', event:''},
    {time: '6 PM', event:''},
]

//Local Storage
var dayEvents = JSON.parse(localStorage.getItem("workDay"));
if (dayEvents) {
    planWorkday = dayEvents;
}
//Present-day
$('#present-day').text(today);

planWorkday.forEach(function(timeBlock, index) {
    var timeLabel = timeBlock.time;
    var colorArea = colorRow(timeLabel);
    var row=
    `<div class="time-block" id="${index}"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">${timeLabel}</div><textarea class="form-control ${blockColor}">${timeBlock.event}</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-bookmark"></i></button></div></div></div>`;

    //ROWS
    $('.container').append(row);
});

});