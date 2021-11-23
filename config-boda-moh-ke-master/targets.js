const extras = require('./nools-extras');

const {
    posCovidPercTested,
    negCovidPercTested,
  } = extras; 

module.exports = [
  {
    id: 'percentage-positive-covid-test',
    type: 'percent',
    icon: 'covid-case',
    goal: -1,
    translation_key: 'targets.covid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
 
    passesIf: posCovidPercTested,
 
    date:'reported',
  },

{
    id: 'percentage-negative-covid-test',
    type: 'percent',
    icon: 'covid-case',
    goal: -1,
    translation_key: 'targets.covid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
 
    passesIf: negCovidPercTested,
 
    date:'reported',
  },

];




