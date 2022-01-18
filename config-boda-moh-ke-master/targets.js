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
  posCovidTestedMks,
  posCovidTestedKjd,
  mksCovidTested,
  kjdCovidTested,
} = extras; 

module.exports = [  
  {
    id: 'tests-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.all_timeTests.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    date:'now',
  },

  {
    id: 'kajiado-tests-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.kjd_all_timeTests.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf:kjdCovidTested, 
    date:'now',
  },

  {
    id: 'machakos-tests-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.mks_all_timeTests.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf:posMksCovidTested, 
    date:'now',
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
    id: 'pendIncompCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.pendIncompCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: function(contact){
      return pendCovidTested (contact) || incCovidTested (contact) || emptCovidTested(contact);
    },
    date:'now',
  },
 
  {
    id: 'posCovidMks-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovidMks.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'reports',
    appliesToType:['case_investigation'],
    appliesIf: posCovidTestedMks,
    date:'now',
  },
  
  {
    id: 'posCovidKjd-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal:-1,
    translation_key: 'targets.posCovidKjd.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'reports',
    appliesToType:['case_investigation'],
    appliesIf: posCovidTestedKjd,
    date:'now',
  },
];

