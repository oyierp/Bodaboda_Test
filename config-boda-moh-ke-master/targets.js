const extras = require('./nools-extras');

const {
  covidPercTested

} = extras;

module.exports = [
  {
    id: 'percentage-covid-test',
    type: 'percent',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.covid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
    
    passesIf: function covidPercTested(contact)
  {
      return contact.reports.some(report => report.form === 'cov_test' && report.fields.screening.cov === 'true');
  }
  
    date:'reported'
  },

];




