const extras = require('./nools-extras');

const {
    covidPercTested,
    tbPercTested,
    pcrPercTested,
  } = extras; 

module.exports = [
  {
    id: 'percentage-covid-test',
    type: 'percent',
    icon: 'covid-case',
    goal: -1,
    translation_key: 'targets.covid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
 
    passesIf: covidPercTested,
 
    date:'reported',
  },

{
    id: 'percentage-tb-test',
    type: 'percent',
    icon: 'icon-people-person-general@2x',
    goal: -1,
    translation_key: 'targets.tb.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
 
    passesIf: tbPercTested,
 
    date:'reported',
  },

{
    id: 'percentage-pcr-test',
    type: 'percent',
    icon: 'icon-people-man',
    goal: -1,
    translation_key: 'targets.covid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
 
    passesIf: pcrPercTested,
 
    date:'reported',
  },

];




