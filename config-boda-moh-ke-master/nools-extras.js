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
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.testing && report.fields.testing.cov_test === ' ' );
};

const mksCovidTested = (contact) => {
  return return contact.parent && contact.parent.parent && contact.parent.parent._id === "002c45ee-79e1-4a3e-be07-4838788cf608" && 
  contact.reports.some(report => report.form === ‘case_investigation’) && contact.parent.name === 'DHARC-MKS';
};

const kjdCovidTested = (contact) => {
  return return contact.parent && contact.parent.parent && contact.parent.parent._id === "002c45ee-79e1-4a3e-be07-4838788cf608" && 
  contact.reports.some(report => report.form === ‘case_investigation’) && contact.parent.name === 'DHARC-KJD';
};

module.exports = {
  posCovidTested,
  negCovidTested,
  pendCovidTested,
  incCovidTested,
  emptCovidTested,
  mksCovidTested,
  kjdCovidTested,
}; 

