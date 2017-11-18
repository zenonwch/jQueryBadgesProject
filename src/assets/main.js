$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Zenonwch.json',
    dataType: 'jsonp',
    success: function(resp) {
      addCourses(resp.courses.completed);
    }
  });

  function addCourses(courses) {
    let $badges = $('#badges');

    courses.forEach(c => {
      let $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: c.title
      }).appendTo($course);

      $('<img />', {
        src: c.badge
      }).appendTo($course);

      $('<a />', {
        href: c.url,
        target: '_blank',
        'class': 'btn btn-primary',
        text: 'See Course'
      }).appendTo($course);
    });
  }

});
