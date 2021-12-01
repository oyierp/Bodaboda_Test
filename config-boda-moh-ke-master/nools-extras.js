const posCovidPercTested = contact => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Positive');
};

const negCovidPercTested = contact => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Negative');
};

module.exports = {
  posCovidPercTested,
  negCovidPercTested,
}; 
