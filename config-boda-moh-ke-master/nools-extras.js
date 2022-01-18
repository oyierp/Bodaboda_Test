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
  return return  contact.reports.some(report => ((report.form === 'case_investigation' && report.contact.parent._id === 'be17a990-9b88-47b0-9b86-d99fa9674768') && report.fields.testing && report.fields.testing.cov_test);
  };

const kjdCovidTested = (contact) => {
  return  contact.reports.some(report => ((report.form === 'case_investigation' && report.contact.parent._id === '290cddae-3b9a-435b-82f0-40bb4614403d') && report.fields.testing && report.fields.testing.cov_test);
};

const posCovidTestedMks = (contact) => {
  return return  contact.reports.some(report => ((report.form === 'case_investigation' && report.contact.parent._id === 'be17a990-9b88-47b0-9b86-d99fa9674768') && report.fields.testing && report.fields.testing.cov_test ==='Positive');
  };

const posCovidTestedKjd = (contact) => {
  return  contact.reports.some(report => ((report.form === 'case_investigation' && report.contact.parent._id === '290cddae-3b9a-435b-82f0-40bb4614403d') && report.fields.testing && report.fields.testing.cov_test ==='Positive');
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
  posCovidTestedMks,
  posCovidTestedKjd,
  mksCovidTested,
  kjdCovidTested,
}; 

