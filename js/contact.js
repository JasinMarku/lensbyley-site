/* contact.js — Mailto form handler */
(function () {
  var form = document.querySelector('.inquiry-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name      = (form.elements['name'].value      || '').trim();
    var email     = (form.elements['email'].value     || '').trim();
    var phone     = (form.elements['phone'].value     || '').trim();
    var eventType = (form.elements['event_type'].value|| '').trim();
    var eventDate = (form.elements['event_date'].value|| '').trim();
    var message   = (form.elements['message'].value   || '').trim();

    var subject = name
      ? 'Inquiry from ' + name + (eventType ? ' — ' + eventType : '')
      : 'Photography Inquiry';

    var lines = [];
    lines.push('Name: '         + (name      || '—'));
    lines.push('Email: '        + (email     || '—'));
    if (phone) {
      lines.push('Phone: '      + phone);
    }
    lines.push('Event type: '   + (eventType || '—'));
    lines.push('Event date: '   + (eventDate || '—'));
    lines.push('');
    lines.push('Message:');
    lines.push(message || '—');

    var body = lines.join('\n');

    var mailto = 'mailto:LensByLeyla@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body='    + encodeURIComponent(body);

    window.location.href = mailto;
  });
})();
