const posCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Positive');
};

const negCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Negative');
};

const pendCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing.cov_test === 'Pending');
};

module.exports = {
  posCovidTested,
  negCovidTested,
  pendCovidTested,

}; 
