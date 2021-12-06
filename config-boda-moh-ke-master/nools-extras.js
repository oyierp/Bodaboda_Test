const posCovidPercTested = contact => {

  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.screening.bi === 'chest');
};

const negCovidPercTested = contact => {
  
  return contact.reports.some(report => report.form === 'case_investigation' && report.fields.screening.bi === 'cough fever');
};

const dateVisited = contact => {
	const tentVisitDates = new Set(contact.reports.map (report=> toDateString(report.reported_date)));
	return Array.from (tentVisitDates).map(date => '${patient_id}~(${date}');
};
module.exports = {
  posCovidPercTested,
  negCovidPercTested,
  dateVisited,
}; 
