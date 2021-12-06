const extras = require('./nools-extras');

const {
  posCovidPercTested,
  negCovidPercTested,
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
    date:'now',
    idType: 'contact',
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
    passesIf:posCovidPercTested, 
    date: 'now',
    idType: 'contact',

  },

  {
    id: 'negCovid-test-all-time',
    type: 'percent',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.negCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['person'],
    passesIf: negCovidPercTested,
    date:'now',
    idType:'contact'
  },

];
