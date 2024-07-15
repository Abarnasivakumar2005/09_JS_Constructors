// A calendar event constructor
var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var eventString = this.title + ": " + this.startDate + " - (" + this.startTime + " - " + this.endTime + ")";
        console.log(eventString);
    };
};

// Create the first event
var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent1.showEvent(); // Show the first event

// 1) Add a second event
var calEvent2 = new CalendarEvent(
    "Project Kickoff",
    "3/10/16",
    "10.00am",
    "11.00am"
);

// 2) Call the showEvent method on your new calendar event
calEvent2.showEvent(); // Show the second event

