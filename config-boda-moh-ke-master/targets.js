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
  
  {
    id: 'posCovidTestedMks-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovidKjd.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: posCovidTestedMks,
    date:'now',
   },

  
  {
    id: 'posCovidKjd-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovidkKjd.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    appliesIf: posCovidTestedKjd,
    date:'now',
   },


];
