const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.advert,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.iframe,
		C3.Behaviors.Anchor,
		C3.Plugins.FileSystem,
		C3.Plugins.Share,
		C3.Plugins.BinaryData,
		C3.Plugins.PlatformInfo,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.JavaScriptInEvents.EventSheet1_Event1_Act1,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.PlatformInfo.Cnds.IsOnMobile,
		C3.Plugins.BinaryData.Acts.SetFromString,
		C3.Plugins.Share.Acts.AddFile,
		C3.Plugins.Share.Acts.Share,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Browser.Acts.InvokeDownload
	];
};
self.C3_JsPropNameTable = [
	{Touch: 0},
	{LocalStorage: 0},
	{MobileAdvert: 0},
	{Audio: 0},
	{Browser: 0},
	{Anchor: 0},
	{iframe: 0},
	{FileSystem: 0},
	{Share: 0},
	{BinaryData: 0},
	{PlatformInfo: 0},
	{ADCodeAppOpen: 0},
	{ADCodeRewarded: 0},
	{ADCodeInterstitial: 0},
	{ADCodeBanner: 0},
	{BannerOpenClose: 0},
	{yedek_icerik: 0},
	{yedek_adi: 0},
	{yedek_icer_uri: 0},
	{indir_tetik: 0}
];

self.InstanceType = {
	Touch: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	MobileAdvert: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	iframe: class extends self.IIframeInstance {},
	FileSystem: class extends self.IInstance {},
	Share: class extends self.IInstance {},
	BinaryData: class extends self.IBinaryDataInstance {},
	PlatformInfo: class extends self.IInstance {}
}