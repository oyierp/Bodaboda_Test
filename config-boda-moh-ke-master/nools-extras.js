module.exports = {
  covidPercTested(c,r) {
    return r.form === 'sampling' && r.fields.screening_cov === 'true');
  },