const posCovidPercTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Positive');
};

const negCovidPercTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Negative');
};

const pendCovidPercTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Pending');
};

module.exports = {
  posCovidPercTested,
  negCovidPercTested,
  pendCovidPercTested,
}; 
