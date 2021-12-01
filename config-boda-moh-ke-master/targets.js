const extras = require('./nools-extras');

const {
  posCovidPercTested,
  negCovidPercTested,
  skipChw,
} = extras; 

module.exports = [
{
  id: 'percentage-positive-covid-test',
  type: 'percent',
  icon: 'medic-covid-case',
  goal: -1,
  translation_key: 'targets.posCovid.title',
  subtitle_translation_key: 'targets.this_month.subtitle',
  type: 'percent',
  appliesTo: 'contacts',
  appliesToType: ['person'],
  appliesIf: skipChw,
  passesIf: posCovidPercTested,
  date:'reported',
},

{
  id: 'percentage-negative-covid-test',
  type: 'percent',
  icon: 'medic-covid-case',
  goal: -1,
  translation_key: 'targets.negCovid.title',
  subtitle_translation_key: 'targets.this_month.subtitle',

  type: 'percent',
  appliesTo: 'contacts',
  appliesToType: ['person'],

  appliesIf: skipChw,
 
  passesIf: negCovidPercTested,
  date:'reported',
  },

];
