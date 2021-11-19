
covidPercTested(contact,report) {
{
  return report.form === 'sampling' && report.fields.screening_cov === 'true');
},

module.exports = {
  covidPercTested,
}
};