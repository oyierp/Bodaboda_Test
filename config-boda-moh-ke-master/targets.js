const extras = require('./nools-extras');

const {
  posCovidTested,
  negCovidTested,
  emptCovidTested,
  incCovidTested,
  pendIncCovidTested,
} = extras; 

module.exports = [  
  {
    id: 'covid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.all_timeCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
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
    id: 'pendIcompCovid-test-all-time',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.pendIcompCovid.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'contacts',
    appliesToType:['suspected_case'],
    idType: contact => {
        const pendIncCovidTested = (contact) => pendCovidTested(contact) || incCovidTested(contact) || emptCovidTested(contact);
  },
    date:'now',
  },
    
];

