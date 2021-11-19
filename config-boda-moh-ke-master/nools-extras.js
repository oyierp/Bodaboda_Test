function covidPercTested(contact)
{
  return contact.reports.some(report => report.form === 'sampling' && report.fields.screening_cov === 'true');
}

module.exports = {
  covidPercTested,
};