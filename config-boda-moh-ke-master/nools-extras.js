module.exports = {
  covidPercTested(c,r) {
    return r.form === 'cov' && r.fields.screening_cov === 'true');
  },