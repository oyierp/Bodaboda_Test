function covidPercTested(contact, report) {
  return contact.reports.some(report => report.form === 'screening' && report.fields.cov === 'true');
  }

module.exports = 
{
  covidPercTested
  };



  