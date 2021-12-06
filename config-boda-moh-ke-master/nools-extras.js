const posCovidPercTested = contact => {

  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.screening.bi === 'chest');
};

const negCovidPercTested = contact => {
  
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.screening.bi === 'cough fever');
};


module.exports = {
  posCovidPercTested,
  negCovidPercTested,
 }; 
