const extras = require('./nools-extras');

const {
  posCovidPercTested,
  negCovidPercTested,
  dateVisited,
} = extras; 

module.exports = [  
  {
    id: 'posCovid-test-all-time',
    type: 'percent',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['person'],
    idType: tentVisitDates,
    appliesIf: posCovidPercTested,
    date:'now',
  },

  {
    id: 'posCovid-test-this-month',
    type: 'percent',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['person'],
    idType: tentVisitDates,
    date: 'reported'
  }

  {
    id: 'negCovid-test-all-time',
    type: 'percent',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.negCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['person'],
    idType: tentVisitDates,
    appliesIf: negCovidPercTested,
    date:'now',
  },

];
