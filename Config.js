/*=========================================
*               SETTINGS
*=========================================
*/

var sourceCalendars = [                // The ics/ical urls that you want to get events from along with their target calendars (list a new row for each mapping of ICS url to Google Calendar)
                                       // For instance: ["https://p24-calendars.icloud.com/holidays/us_en.ics", "US Holidays"]
                                       // Or with colors following mapping https://developers.google.com/apps-script/reference/calendar/event-color, 
                                       // for instance: ["https://p24-calendars.icloud.com/holidays/us_en.ics", "US Holidays", "11"]
  ["https://strautomator.com/api/calendar/109863990/806208a5637e327bfdfc0757/clubs.ics?countries=1&link=1", "From Strava"]
  
];

var howFrequent = 5;                     // What interval (minutes) to run this script on to check for new events.  Any integer can be used, but will be rounded up to 5, 10, 15, 30 or to the nearest hour after that.. 60, 120, etc. 1440 (24 hours) is the maximum value.  Anything above that will be replaced with 1440.
var onlyFutureEvents = true;          // If you turn this to "true", past events will not be synced (this will also removed past events from the target calendar if removeEventsFromCalendar is true)
var addEventsToCalendar = true;        // If you turn this to "false", you can check the log (View > Logs) to make sure your events are being read correctly before turning this on
var modifyExistingEvents = true;       // If you turn this to "false", any event in the feed that was modified after being added to the calendar will not update
var removeEventsFromCalendar = true;   // If you turn this to "true", any event created by the script that is not found in the feed will be removed.
var removePastEventsFromCalendar = false;  // If you turn this to "false", any event that is in the past will not be removed.
var addAlerts = "yes";                 // Whether to add the ics/ical alerts as notifications on the Google Calendar events or revert to the calendar's default reminders ("yes", "no", "default").
var addOrganizerToTitle = true;       // Whether to prefix the event name with the event organiser for further clarity
var descriptionAsTitles = false;       // Whether to use the ics/ical descriptions as titles (true) or to use the normal titles as titles (false)
var addCalToTitle = false;             // Whether to add the source calendar to title
var addAttendees = false;              // Whether to add the attendee list. If true, duplicate events will be automatically added to the attendees' calendar.
var defaultAllDayReminder = -1;        // Default reminder for all day events in minutes before the day of the event (-1 = no reminder, the value has to be between 0 and 40320)
                                       // See https://github.com/derekantrican/GAS-ICS-Sync/issues/75 for why this is neccessary.
var overrideVisibility = "";           // Changes the visibility of the event ("default", "public", "private", "confidential"). Anything else will revert to the class value of the ICAL event.
var addTasks = false;

var emailSummary = true;              // Will email you when an event is added/modified/removed to your calendar
var debugSummary = false;              // Always email the summary, primarily for diagnostics purposes.
var email = "napervillebikeclub+webmaster@gmail.com";                        // OPTIONAL: If "emailSummary" is set to true or you want to receive update notifications, you will need to provide your email address
var customEmailSubject = "[NBC] Strava event update information";              // OPTIONAL: If you want to change the email subject, provide a custom one here. Default: "GAS-ICS-Sync Execution Summary"
var dateFormat = "YYYY-MM-DD"             // date format in the email summary (e.g. "YYYY-MM-DD", "DD.MM.YYYY", "MM/DD/YYYY". separators are ".", "-" and "/")
