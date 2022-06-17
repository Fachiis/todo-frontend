import axios from "axios";

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post("http://127.0.0.1:8000/auth/convert-token", {
			token: accesstoken,
			backend: "facebook",
			grant_type: "convert_token",
			client_id: "pcADyT4cKCsVChX3f8NMja75YKSPkrfw12TWFWE2",
			client_secret:
				"WlSOdXP8syaLtonKUu29Cw0v9PjIfK9m3Cyb9Pp0BdxMgFmjtEJr0BprOu4ncLcmVdWZnJs3dXkKcueyydRKBN4azdfJRGL9opSYurCrg3y7OzdE4hBSKmXN8b0skm73",
		})
		.then((res) => {
			localStorage.setItem("access_token", res.data.access_token);
			localStorage.setItem("refresh_token", res.data.refresh_token);
		});
};

export default facebookLogin;
