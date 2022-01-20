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
  return contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === '22a6a91c-2d1c-4fe4-8039-c69ab9782492') && report.fields.testing && report.fields.testing.cov_test);
};

const kjdCovidTested = (contact) => {
  return  contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === '9959032e-8414-4d30-9087-e01aa6f3dc87') && report.fields.testing && report.fields.testing.cov_test);
};

const nrbCovidTested = (contact) => {
  return contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === 'daef50d8-a8f7-48c3-bb32-a93598241f03') && report.fields.testing && report.fields.testing.cov_test);
};

const kbuCovidTested = (contact) => {
  return  contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === '96cfe72e-5b08-45eb-ab7f-a367187b74ac') && report.fields.testing && report.fields.testing.cov_test);
};

const posCovidTestedMks = (contact) => {
  return contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === '22a6a91c-2d1c-4fe4-8039-c69ab9782492') && report.fields.testing && report.fields.testing.cov_test ==='Positive');
};

const posCovidTestedKjd = (contact) => {
  return  contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === '9959032e-8414-4d30-9087-e01aa6f3dc87') && report.fields.testing && report.fields.testing.cov_test ==='Positive');
};

const posCovidTestedNrb = (contact) => {
  return contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === 'daef50d8-a8f7-48c3-bb32-a93598241f03') && report.fields.testing && report.fields.testing.cov_test ==='Positive');
};

const posCovidTestedKbu = (contact) => {
  return  contact.reports.some(report => (report.form === 'case_investigation' && report.contact.parent && report.contact.parent._id === '96cfe72e-5b08-45eb-ab7f-a367187b74ac') && report.fields.testing && report.fields.testing.cov_test ==='Positive');
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
  nrbCovidTested,
  kbuCovidTested,
  posCovidTestedMks,
  posCovidTestedKjd,
  posCovidTestedNrb,
  posCovidTestedKbu

}; 

