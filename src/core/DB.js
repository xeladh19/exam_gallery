export default {
	apiURL: null,

	setApiURL(data) {
		this.apiURL = data;
	},
	async findAll() {
		const resp = await fetch(this.apiURL + "/Gallery_examen");
		return await resp.json();
	}
};
