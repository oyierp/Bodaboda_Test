const extras = require('./nools-extras');

const {
  posCovidPercTested,
  negCovidPercTested,
} = extras; 

module.exports = [  
  {
    id: 'percentage-positive-covid-test',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.posCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['person'],
    passesIf: posCovidPercTested,
    date:'reported',
  },

  {
    id: 'percentage-negative-covid-test',
    type: 'count',
    icon: 'medic-covid-case',
    goal: -1,
    translation_key: 'targets.negCovid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['person'],
    passesIf: negCovidPercTested,
    date:'reported',
  },

];
