module.exports = [
  {
    id: 'consent2',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: 5000,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.all_time.subtitle',

    appliesTo: 'consenting',
    appliesToType: ['contacts'],
    date: 'now'
  },
  {
    id: 'cov_test',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'reports',
    appliesToType: ['assessment'],
    date: 'reported'
  },

{
    id: 'tb_test',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'reports',
    appliesToType: ['assessment'],
    date: 'reported'
  },
{
    id: 'ag_test',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'reports',
    appliesToType: ['assessment'],
    date: 'reported'
  },

];




