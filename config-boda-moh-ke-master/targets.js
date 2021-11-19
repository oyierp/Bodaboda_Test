const extras = require('./nools-extras');

const {
  covidPercTested,

} = extras;

module.exports = [
  {
    id: 'percentage-covid-test',
    type: 'percent',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.covid_test.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
    appliesIf: covidPercTested,

    passesIf: function(contact)
  {
      return contact.reports.cov(report => report.form === 'screening');
  },
    date: 'reported'
  },

];




