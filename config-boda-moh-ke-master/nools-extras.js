module.exports = {
  function covidPercTested(contact) {
    return contact.reports.some(report => report.form === 'screening' && report.fields.cov === 'true');
  }

module.exports = {
  covidPercTested,
  },
};



  