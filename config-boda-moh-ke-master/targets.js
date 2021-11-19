const 
  {
    covidPercTested,
 }  

module.exports = [
  {
    id: 'percentage-covid-test',
    type: 'percent',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.covid.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'contacts',
    appliesToType: ['person'],
    
    passesIf: covidPercTested,
  
    date:'reported',
  },

];




