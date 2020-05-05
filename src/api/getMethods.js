import request from "./Request.js";
import helper from "../helper.js";

const getRequest = {
	loadHospitals: () => {
		return request.get('/hospitals/all')
	},

	loadAvailableDoctors: function (hospitalId) {
		return request.get(`schedule/by-hospital-and-date?hospital_id=${hospitalId}&date=${helper.currentDate()}`);
	},
	loadCardsByPatient: function(userId) {
		return request.get(`/tasks/by-patient?patient_id=${userId}&active=true`)
	},
	loadsCardsByDoctor: function(doctorId) {
		return request.get(`/tasks/by-doctor-and-date?doctor_id=${doctorId}&date=${helper.currentDate()}&active=true`)
	}

}

export default getRequest
