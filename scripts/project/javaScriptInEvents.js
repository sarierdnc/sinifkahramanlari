

const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		window.addEventListener("message", function(event) {
		    if (event.data && event.data.action === "GAME_EVENT" && event.data.event === "YEDEK_INDIR") {
		        runtime.globalVars.yedek_icerik = event.data.raw; // Ham metni buraya al
		        runtime.globalVars.yedek_icer_uri = event.data.uri; // URI'yi buraya al
		        runtime.globalVars.yedek_adi = event.data.isim;
		        runtime.globalVars.indir_tetik = 1;
		    }
		});
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
