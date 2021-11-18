module.exports = [
{
    id: 'consent2',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: 5000,
    translation_key: 'targets.consent.title',
    subtitle_translation_key: 'targets.all_time.subtitle',

    appliesTo: 'contacts',
    date: 'now'
  },
  {
    id: 'cov_test',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.covid_test.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'reports',
    date: 'reported'
  },

{
    id: 'tb_test',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.tb_test.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'reports',
    date: 'reported'
  },
{
    id: 'ag_test',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.ag_test.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
  
    appliesTo: 'reports',
    date: 'reported'
  },

];




