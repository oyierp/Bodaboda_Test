const allCovidTested = (contact) => { 
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing && report.fields.testing.cov_test);
};
const posCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing && report.fields.testing.cov_test === 'Positive');
};

const negCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing && report.fields.testing.cov_test === 'Negative');
};

const pendCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing && report.fields.testing.cov_test === 'Pending');
};

const incCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing && report.fields.testing.cov_test === 'Inconclusive' );
};

const emptCovidTested = (contact) => {
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing && report.fields.testing.cov_test === null);
};

const mksCovidTested = (contact) => {
  return contact.parent && contact.parent._id === '2a0b7d2a-05a0-4b67-a6e9-0248429615ab';
};

const kjdCovidTested = (contact) => {
  return contact.parent && contact.parent._id === '2a0b7d2a-05a0-4b67-a6e9-0248429615ab';
};

module.exports = {
  allCovidTested,
  posCovidTested,
  negCovidTested,
  pendCovidTested,
  incCovidTested,
  emptCovidTested,
  mksCovidTested,
  kjdCovidTested,
}; 

