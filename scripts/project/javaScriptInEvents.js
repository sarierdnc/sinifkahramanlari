

const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		window.addEventListener("message", function(event) {
		    if (event.data && event.data.action === "GAME_EVENT") {
		        
		        // Yedek indirme sinyali
		        if (event.data.event === "YEDEK_INDIR") {
		            runtime.globalVars.yedek_icerik = event.data.raw;
		            runtime.globalVars.yedek_icer_uri = event.data.uri;
		            runtime.globalVars.yedek_adi = event.data.isim;
		            runtime.globalVars.indir_tetik = 1;
		        }
		        
		        // Dinozor büyüme sinyali
		        else if (event.data.event === "SET_DINO_FRAME") {
		            runtime.globalVars.hedef_dino_frame = event.data.frame;
		            runtime.globalVars.dino_tetik = 1;
		        }
		    }
		});
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
