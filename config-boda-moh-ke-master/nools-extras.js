module.exports = {
  covidPercTested(contact) {
    return contact.reports.some(report => report.form === 'screening' && report.fields.cov === 'true');
  }

};





  