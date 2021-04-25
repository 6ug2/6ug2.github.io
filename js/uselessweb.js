function uselessWebButton(button, popup) {
	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;
	var randomRange = 6;

	var sitesList = [
		["http://heeeeeeeey.com/", false],
		["http://thatsthefinger.com/", false],
		["http://cant-not-tweet-this.com/", false],
		["http://weirdorconfusing.com/", false],
		["http://eelslap.com/", false],
		["http://www.staggeringbeauty.com/", false],
		["http://burymewithmymoney.com/", true],
		["http://endless.horse/", false],
		["http://www.fallingfalling.com/", true],
		["http://www.trypap.com/", false],
		["http://www.republiquedesmangues.fr/", false],
		["http://www.movenowthinklater.com/", false],
		["http://www.partridgegetslucky.com/", false],
		["http://www.rrrgggbbb.com/", true],
		["http://beesbeesbees.com/", false],
		["http://www.sanger.dk/", true],
		["http://www.koalastothemax.com/", false],
		["http://www.everydayim.com/", false],
		["http://www.leduchamp.com/", true],
		["http://r33b.net/", true],
		["http://randomcolour.com/", false],
		["http://cat-bounce.com/", true],
		["http://www.sadforjapan.com/", true],
		["http://www.taghua.com/", true],
		["http://chrismckenzie.com/", true],
		["http://hasthelargehadroncolliderdestroyedtheworldyet.com/", false],
		["http://ninjaflex.com/", false],
		["http://iloveyoulikeafatladylovesapples.com/", true],
		["http://ihasabucket.com/", false],
		["http://corndogoncorndog.com/", false],
		["http://www.ringingtelephone.com/", true],
		["http://www.pointerpointer.com/", false],
		["http://imaninja.com/", false],
		["http://willthefuturebeaweso.me/", false],
		["http://www.ismycomputeron.com/", false],
		["http://www.nullingthevoid.com/", true],
		["http://www.muchbetterthanthis.com/", true],
		["http://www.ouaismaisbon.ch/", true],
		["http://www.yesnoif.com/", false],
		["http://iamawesome.com/", false],
		["http://www.pleaselike.com/", false],
		["http://crouton.net/", false],
		["http://corgiorgy.com/", false],
		["http://www.electricboogiewoogie.com/", true],
		["http://www.wutdafuk.com/", false],
		["http://unicodesnowmanforyou.com/", false],
		["http://www.crossdivisions.com/", false],
		["http://tencents.info/", false],
		["http://intotime.com/", true],
		["http://leekspin.com/", true],
		["http://www.patience-is-a-virtue.org/", false],
		["http://whitetrash.nl/", false],
		["http://www.theendofreason.com/", false],
		["http://zombo.com", true],
		["http://pixelsfighting.com/", false],
		["http://baconsizzling.com/", false],
		["http://isitwhite.com/", false],
		["http://onemillionlols.com/", false],
		["http://www.omfgdogs.com/", false],
		["http://oct82.com/", false],
		["http://semanticresponsiveillustration.com/", true],
		["http://chihuahuaspin.com/", false],
		["http://www.blankwindows.com/", false],
		["http://www.biglongnow.com/", true],
		["http://dogs.are.the.most.moe/", false],
		["http://tunnelsnakes.com/", false],
		["http://www.infinitething.com/", false],
		["http://www.trashloop.com/", false],
		["http://www.ascii-middle-finger.com/", false],
		["http://www.coloursquares.com/", false],
		["http://spaceis.cool/", false],
		["http://buildshruggie.com/", false],
		["http://buzzybuzz.biz/", false],
		["http://yeahlemons.com/", false],
		["http://burnie.com/", false]
	];

	var sites = null;

	var init = function() {
		button.onclick = onButtonClick;
		sites = sitesList.slice(0);

		if (supportsHtmlStorage() === true) {
			if (localStorage["sites"] !== undefined) {
				loadSites();
			}
		}
	};

	var removeFlashWebsites = function() {
		var i, site;
		var newList = [];

		for (i = 0; i < sitesList.length; i++) {
			site = sitesList[i];
			if (site[1] === false) {
				newList.push(site);
			}
		}

		sitesList = newList;
	};

	var selectWebsite = function() {
		var site, range, index;

		range = randomRange > sites.length ? sites.length : randomRange;
		index = Math.floor(Math.random() * range);

		site = sites[index];
		sites.splice(index, 1);

		return site;
	};

	var openSite = function(url) {
		window.open(url);
	};

	var onButtonClick = function() {
		if (initialClick === false) {
			document.getElementById("joint").innerHTML = "TO A";
			initialClick = true;
		}

		var url = selectWebsite()[0];

		var sel = document.getElementById('dropdownId');
		if (sel.options[sel.selectedIndex].value === 'skynet') {
		    var skynet_url = [
		      ["https://hackerpaste.hns.siasky.net"],
		      ["https://skysend.hns.siasky.net"],
		      ["https://skey.hns.siasky.net"],
		      ["https://skyaccounts.hns.siasky.net"],
		      ["https://snew.hns.siasky.net"],
		      ["https://sinpapeles.hns.siasky.net"],
		      ["https://skygallery.hns.siasky.net"],
		      ["https://sky-guide.hns.siasky.net"],
		      ["https://skynet-hackathon.hns.siasky.net"],
		      ["https://riftapp.hns.siasky.net"],
		      ["https://skyvert.hns.siasky.net"],
		      ["https://skybrain.hns.siasky.net"],
		      ["https://skynet-send.hns.siasky.net"],
		      ["https://sky-review.hns.siasky.net"],
		      ["https://doesn.hns.siasky.net"],
		      ["https://skyspace.hns.siasky.net"],
		      ["https://skylearn.hns.siasky.net"],
		      ["https://skapp.hns.siasky.net"],
		      ["https://encode-skynet.hns.siasky.net"],
		      ["https://marstorage.hns.siasky.net"],
		      ["https://maari.hns.siasky.net"],
		      ["https://skymessage.hns.siasky.net"],
		      ["https://entropybeacon.hns.siasky.net"],
		      ["https://skyfeed.hns.siasky.net"],
		      ["https://dbaz.hns.siasky.net"],
		      ["https://ohthehumanity.hns.siasky.net"],
		      ["https://note-to-self.hns.siasky.net"],
		      ["https://sitebysite.hns.siasky.net"],
		      ["https://sinpa.hns.siasky.net"],
		      ["https://vup.hns.siasky.net"],
		      ["https://skydocs.hns.siasky.net"],
		      ["https://skylive.hns.siasky.net"],
		      ["https://sky-id.hns.siasky.net"],
		      ["https://sky-note.hns.siasky.net"],
		      ["https://covalent.hns.siasky.net"],
		      ["https://skyfeed-dev.hns.siasky.net"],
		      ["https://myimmortal.hns.siasky.net"],
		      ["https://keeweb.hns.siasky.net"],
		      ["https://skylearn.hns.siasky.net"]
		    ];
				var url = skynet_url[Math.floor(Math.random() * skynet_url.length)];
		}

		openSite(url);

		if (sites.length == 0) {
			sites = sitesList.slice(0);
		}

		storeSites();
	};

	var storeSites = function() {
		localStorage["sites"] = JSON.stringify(sites);
	};

	var loadSites = function() {
		sites = JSON.parse(localStorage["sites"]);
	};

	init();
}
