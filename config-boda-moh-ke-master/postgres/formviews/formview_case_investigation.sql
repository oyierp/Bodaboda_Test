DROP VIEW IF EXISTS formview_case_investigation;
CREATE VIEW formview_case_investigation AS
SELECT
  doc #>> '{fields,inputs,source}' AS source,
  doc #>> '{fields,inputs,source_id}' AS source_id,
  doc #>> '{fields,patient_id}' AS patient_id,
  doc #>> '{fields,patient_age_in_years}' AS patient_age_in_years,
  doc #>> '{fields,patient_age_in_months}' AS patient_age_in_months,
  doc #>> '{fields,group_reporting_info,date_of_reporting}' AS date_of_reporting,
  doc #>> '{fields,group_reporting_info,reporting_facility}' AS reporting_facility,
  doc #>> '{fields,group_reporting_info,reporting_facility}' AS county,
  doc #>> '{fields,group_reporting_info,subcounty}' AS subcounty,
  doc #>> '{fields,group_reporting_info,poe_detected}' AS poe_detected,
  doc #>> '{fields,group_reporting_info,poe_detection_date}' AS poe_detection_date,
  doc #>> '{fields,group_clinical_information,patient_condition}' AS patient_condition,
  doc #>> '{fields,group_clinical_information,symptoms_onset_date}' AS symptoms_onset_date,
  doc #>> '{fields,group_clinical_information,unknown_hospital_condition}' AS unknown_hospital_condition,
  doc #>> '{fields,group_clinical_information,first_admission_date}' AS first_admission_date,
  doc #>> '{fields,group_clinical_information,hospital_name}' AS hospital_name,
  doc #>> '{fields,group_clinical_information,isolation_date}' AS isolation_date,
  doc #>> '{fields,group_clinical_information,patient_ventilated}' AS patient_ventilated,
  doc #>> '{fields,group_clinical_information,patient_health_status}' AS patient_health_status,
  doc #>> '{fields,group_clinical_information,death_date}' AS death_date,
  doc #>> '{fields,group_patient_symptoms,death_date}' AS patient_symptoms,
  doc #>> '{fields,group_patient_symptoms,symptoms_specify}' AS symptoms_specify,
  doc #>> '{fields,group_patient_symptoms,pain_type}' AS pain_type,
  doc #>> '{fields,group_patient_signs,temperature}' AS temperature,
  doc #>> '{fields,group_patient_signs,reported_patient_signs}' AS reported_patient_signs,
  doc #>> '{fields,group_patient_signs,reported_patient_signs_specify}' AS reported_patient_signs_specify,
  doc #>> '{fields,group_conditions_comorbidity,conditions_comorbidity}' AS conditions_comorbidity,
  doc #>> '{fields,group_conditions_comorbidity,trimester}' AS trimester,
  doc #>> '{fields,group_conditions_comorbidity,conditions_comorbidity_others}' AS conditions_comorbidity_others,
  doc #>> '{fields,group_exposure_travel_information,occupation}' AS occupation,
  doc #>> '{fields,group_exposure_travel_information,specify_occupation}' AS specify_occupation,
  doc #>> '{fields,group_exposure_travel_information,patient_travelled_past_2_weeks}' AS patient_travelled_past_2_weeks,
  doc #>> '{fields,group_exposure_travel_information,travel_type}' AS travel_type,
  doc #>> '{fields,group_exposure_travel_information,no_of_countries}' AS no_of_countries,
  doc #>> '{fields,group_exposure_travel_information,group_cities}' AS cities,
  doc #>> '{fields,group_exposure_travel_information,place_from}' AS place_from,
  doc #>> '{fields,group_exposure_travel_information,place_from}' AS place_to,
  doc #>> '{fields,group_exposure_travel_information,has_patient_visited_facility_2_weeks}' AS has_patient_visited_facility_2_weeks,
  doc #>> '{fields,group_exposure_travel_information,patient_had_close_contact_ari}' AS patient_had_close_contact_ari,
  doc #>> '{fields,group_exposure_travel_information,contact_setting}' AS contact_setting,
  doc #>> '{fields,group_exposure_travel_information,specify_contact_settings}' AS specify_contact_settings,
  doc #>> '{fields,group_exposure_travel_information,patient_had_close_contact_with_case}' AS patient_had_close_contact_with_case,
  doc #>> '{fields,group_exposure_travel_information,visited_live_animal_market}' AS visited_live_animal_market,
  doc #>> '{fields,group_exposure_travel_information,animal_market_location}' AS animal_market_location,
  doc #>> '{fields,group_laboratory_information,was_specimen_collected}' AS was_specimen_collected,
  doc #>> '{fields,group_laboratory_information,why_specimen_collected}' AS why_specimen_was_not_collected,
  doc #>> '{fields,group_laboratory_information,specimen_id}' AS specimen_id,
  doc #>> '{fields,group_laboratory_information,date_specimen_collected}' AS date_specimen_collected,
  doc #>> '{fields,group_laboratory_information,specimen_type}' AS specimen_type,
  doc #>> '{fields,group_laboratory_information,specify_specimen}' AS specify_specimen,
  doc #>> '{fields,group_laboratory_information,testing_lab}' AS testing_lab,
  doc #>> '{fields,group_laboratory_information,date_specimen_sent}' AS date_specimen_sent
FROM
  couchdb
WHERE
  doc ->> 'type' = 'data_record' AND 
  doc ->> 'form' = 'case_investigation'
;

