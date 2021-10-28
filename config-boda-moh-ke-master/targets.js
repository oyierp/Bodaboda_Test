module.exports = [
{
    id: 'assessments-all-time',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.all_time.subtitle',

    appliesTo: 'reports',
    appliesToType: ['assessment'],
    date: 'now'
  }
];

module.exports = [
  {
    id: 'assessments-all-time',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.all_time.subtitle',

    appliesTo: 'reports',
    appliesToType: ['assessment'],
    date: 'now'
  },
  {
    id: 'assessments-this-month',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',

    appliesTo: 'reports',
    appliesToType: ['assessment'],
    date: 'reported'
  }
];




