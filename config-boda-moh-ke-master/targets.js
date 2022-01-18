const extras = require('./nools-extras');

const {
  allCovidTested,
  posCovidTested,
  negCovidTested,
  pendCovidTested,
  incCovidTested,
  emptCovidTested,
  mksCovidTested,
  kjdCovidTested,
} = extras; 

module.exports = [  
  {
    id: 'screened-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.all_timeScreened.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    date:'now',
    idType: 'contact'
  },

  {
    id: 'covid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.all_timeCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf:allCovidTested, 
    date:'now',
    idType: 'contact'
  },

  {
    id: 'posCovid-this-month',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
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
    subtitle_translation_key: 'targets.all_time.subtitle',
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
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: pendCovidTested,
    date:'now',
  },
  
  {
    id: 'incCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.incCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: incCovidTested,
    date:'now',
  },
  
  {
    id: 'emptCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.emptCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: emptCovidTested,
    date:'now',
  },
  
  {
    id: 'mksCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.mksCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: mksCovidTested,
    date:'now',
  },
  
  {
    id: 'kjdCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.kjdCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: kjdCovidTested,
    date:'now',
  },
];
