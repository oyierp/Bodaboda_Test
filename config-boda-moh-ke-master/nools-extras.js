const posCovidPercTested = contact => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Positive');
};

const negCovidPercTested = contact => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Negative');
};

const skipChw = contact=> {
  //skipping CHWs
  return contact.role !== 'chw';
  };

module.exports = {
  posCovidPercTested,
  negCovidPercTested,
  skipChw,
}; 
