posCovidPercTested(contact) {
  return contact.reports.some(report => report.form === 'screening' && report.fields.cov_test === 'Positive');
  }

negCovidPercTested(contact) {
  return contact.reports.some(report => report.form === 'screening' && report.fields.cov_test === 'Negative');
  }

module.exports = {
posCovidPercTested,
negCovidPercTested,
};



  