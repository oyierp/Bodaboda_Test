module.exports = {
  covidPercTested(contact) {
    return contact.reports.some(report => report.form === 'screening' && report.fields.cov === 'true');
  },

  tbTested(contact) {
    return contact.reports.some(report => report.form === 'screening' && report.fields.tb === 'true');
  },

pcrPercTested(contact) {
    return contact.reports.some(report => report.form === 'screening' && report.fields.rtpcr === 'true');
  }

};





  