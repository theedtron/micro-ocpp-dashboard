const API_ROOT = process.env.API_ROOT;
const NODE_ENV = process.env.NODE_ENV;

const API_ENDPOINT_BACKEND_URL = "/ocpp_backend";
const API_ENDPOINT_EV_STATUS   = "/status_ev";
const API_ENDPOINT_EVSE_STATUS   = "/status_evse";
const API_ENDPOINT_USER_AUTHORIZATION   = "/user_authorization";
const API_ENDPOINT_CERTIFICATE   = "/ca_cert";

export {
	API_ROOT,
	NODE_ENV,
	API_ENDPOINT_BACKEND_URL,
	API_ENDPOINT_EV_STATUS,
	API_ENDPOINT_EVSE_STATUS,
	API_ENDPOINT_USER_AUTHORIZATION,
	API_ENDPOINT_CERTIFICATE
};