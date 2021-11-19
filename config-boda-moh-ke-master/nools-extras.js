module.exports = {
  covidPercTested(c,r) {
    return r.form === 'cov' && r.fields.symptoms_cov === 'true');
  },