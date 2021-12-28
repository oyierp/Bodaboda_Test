const extras = require('./nools-extras');

const {
  posCovidTested,
  negCovidTested,
  pendCovidTested,
} = extras; 

module.exports = [  
  {
    id: 'Covid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.all_timeCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    Covid-test-all-time
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    date:'now',
    idType: 'contact'
  },

  {
    id: 'posCovid-this-month',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf:posCovidTested, 
    date: 'now',
  },

  {
    id: 'negCovid-this-month',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.negCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: negCovidTested,
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
    appliesToType:['suspected_case'],
    appliesIf: pendCovidTested,
    date:'now',
  },

];
