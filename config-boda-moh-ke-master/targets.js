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
    appliesIf: covidPercTested(contact,report) {
      return report.form === 'sampling' && report.fields.screening_cov === 'true');
  },
    passesIf: covidPercTested (contact) 
  {
     //If there is a screening report, count the contact as pass
      return contact.reports.cov(report => report.form === 'screening');
    },
    date: 'reported'
  },

];




