const extras = require('./nools-extras');

const {
  posCovidPercTested,
  negCovidPercTested,
  pendCovidPercTested,
} = extras; 

module.exports = [  
  {
    id: 'Covid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.Covid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['person'],
    date:'now',
    idType: 'contact'
  },

  {
    id: 'posCovid-test-this-month',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType:['person'],
    appliesIf:posCovidPercTested, 
    date: 'now',
  },

  {
    id: 'negCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.negCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType:['person'],
    appliesIf: negCovidPercTested,
    date:'now',
  },
  
  {
    id: 'pendCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.pendCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType:['person'],
    appliesIf: pendCovidPercTested,
    date:'now',
  },

];
