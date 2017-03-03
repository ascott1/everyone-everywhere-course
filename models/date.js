module.exports = function() {

  var today = new Date().getTime();
  var eventDate = new Date(2056, 10, 05).getTime();
  var span = ((eventDate - today) / 1000);
  var diff = {};

  // naively calculates the differences
  diff.years = Math.floor(span / 31536000);
  diff.days = Math.floor(span / 86400 % 365.25) + 1;
  diff.hours = Math.floor(span / 3600 % 24) + 1;
  diff.minutes = Math.floor(span / 60 % 60) + 1;

  return diff;
}
