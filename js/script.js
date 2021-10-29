document.addEventListener("DOMContentLoaded", () => {
	const inputFive = document.querySelector("#inputFive");
	const sumFive = document.querySelector("#sumFive");
	const inputTwo = document.querySelector("#inputTwo");
	const sumTwo = document.querySelector("#sumTwo");
	const inputOne = document.querySelector("#inputOne");
	const sumOne = document.querySelector("#sumOne");
	const inputFifty = document.querySelector("#inputFifty");
	const sumFifty = document.querySelector("#sumFifty");
	const inputTwenty = document.querySelector("#inputTwenty");
	const sumTwenty = document.querySelector("#sumTwenty");
	const inputTen = document.querySelector("#inputTen");
	const sumTen = document.querySelector("#sumTen");
	const sumAmount = document.querySelector("#sumAmount");
	const sumTotal = document.querySelector("#sumTotal");
	const weightCoins = document.querySelector("#weightCoins");
	const weightStatus = document.querySelector("#weightStatus");
	const tableStatus = document.querySelector(".tableStatus");
	const sealedCash = document.querySelector(".sealedCash");

	const amountFive = document.querySelector("#amountFive");
	const totalFive = document.querySelector("#totalFive");
	const amountTwo = document.querySelector("#amountTwo");
	const totalTwo = document.querySelector("#totalTwo");
	const amountOne = document.querySelector("#amountOne");
	const totalOne = document.querySelector("#totalOne");
	const amountFifty = document.querySelector("#amountFifty");
	const totalFifty = document.querySelector("#totalFifty");
	const amountTwenty = document.querySelector("#amountTwenty");
	const totalTwenty = document.querySelector("#totalTwenty");
	const amountTen = document.querySelector("#amountTen");
	const totalTen = document.querySelector("#totalTen");
	const totalMoney = document.querySelector("#totalMoney");
	const totalValue = document.querySelector("#totalValue");
	const depositAmount = document.querySelector("#depositAmount");
	const amountWords = document.querySelector("#amountWords");
	const sealNumber = document.querySelector("#sealNumber");
	const secureNumber = document.querySelector("#secureNumber");
	const inputName = document.querySelector("#inputName");

	const convert = document.querySelector(".convert");
	//	console.log(inputFive)

	sealedCash.addEventListener("input", (e) => {
		totalFive.innerText = (inputFive.value * 5).toFixed(2);
		sumFive.innerText = totalFive.innerText + " zł";
		amountFive.innerText = inputFive.value;
		totalTwo.innerText = (inputTwo.value * 2).toFixed(2);
		sumTwo.innerText = totalTwo.innerText + " zł";
		amountTwo.innerText = inputTwo.value;
		totalOne.innerText = (inputOne.value * 1).toFixed(2);
		sumOne.innerText = totalOne.innerText + " zł";
		amountOne.innerText = inputOne.value;
		totalFifty.innerText = (
			Math.round(inputFifty.value * 0.5 * 10) / 10
		).toFixed(2);
		sumFifty.innerText = totalFifty.innerText + " zł";
		amountFifty.innerText = inputFifty.value;

		totalTwenty.innerText = (
			Math.round(inputTwenty.value * 0.2 * 10) / 10
		).toFixed(2);
		sumTwenty.innerText = totalTwenty.innerText + " zł";
		amountTwenty.innerText = inputTwenty.value;

		totalTen.innerText = (Math.round(inputTen.value * 0.1 * 10) / 10).toFixed(
			2
		);
		sumTen.innerText = totalTen.innerText + " zł";
		amountTen.innerText = inputTen.value;

		secureNumber.innerText = sealNumber.value;

		sumAmount.innerText =
			parseFloat(inputFive.value) +
			parseFloat(inputTwo.value) +
			parseFloat(inputOne.value) +
			parseFloat(inputFifty.value) +
			parseFloat(inputTwenty.value) +
			parseFloat(inputTen.value);
		totalMoney.innerText = sumAmount.innerText;
		totalValue.innerText = (
			Math.round(
				(parseFloat(sumFive.innerText) +
					parseFloat(sumTwo.innerText) +
					parseFloat(sumOne.innerText) +
					parseFloat(sumFifty.innerText) +
					parseFloat(sumTwenty.innerText) +
					parseFloat(sumTen.innerText)) *
					10
			) / 10
		).toFixed(2);
		sumTotal.innerText = totalValue.innerText + " zł";
		depositAmount.innerText = totalValue.innerText + " zł";
		weightCoins.innerText =
			Math.round(
				(parseFloat(inputFive.value) * 0.00654 +
					parseFloat(inputTwo.value) * 0.00521 +
					parseFloat(inputOne.value) * 0.005 +
					parseFloat(inputFifty.value) * 0.00394 +
					parseFloat(inputTwenty.value) * 0.00322 +
					parseFloat(inputTen.value) * 0.00251) *
					100
			) / 100;
		console.log(weightCoins.innerText);
		if (weightCoins.innerText >= 16) {
			weightStatus.innerText = "worek jest za ciężki!!!";
			tableStatus.className = "table-danger";
		} else {
			weightStatus.innerText = "worek ma odpowiednią wagę";
			tableStatus.className = "table-success";
		}

		//convert.innerText = convertValue(parseFloat(sumTotal.innerText).toFixed(2))
		amountWords.innerText = convertValue(
			parseFloat(sumTotal.innerText).toFixed(2)
		);
		console.log(amountWords.innerText.length);
		console.log(amountWords.innerText);
	});

	//max number 999999
	function convertThreeNumbers(number) {
		this.number = number;
		let setki = null;
		let dziesiatki = null;
		let jednosci = null;
		let numberWords = "";

		if (this.number.length == 3) {
			setki = this.number[0];
			dziesiatki = this.number[1];
			jednosci = this.number[2];
		} else if (this.number.length == 2) {
			dziesiatki = this.number[0];
			jednosci = this.number[1];
		} else if (this.number.length == 1) {
			jednosci = this.number[0];
		}

		if (setki == 1) {
			numberWords = "sto ";
		} else if (setki == 2) {
			numberWords = "dwieście ";
		} else if (setki == 3) {
			numberWords = "trzysta ";
		} else if (setki == 4) {
			numberWords = "czterysta ";
		} else if (setki == 5) {
			numberWords = "pięćset ";
		} else if (setki == 6) {
			numberWords = "sześćset ";
		} else if (setki == 7) {
			numberWords = "siedemset ";
		} else if (setki == 8) {
			numberWords = "osiemset ";
		} else if (setki == 9) {
			numberWords = "dziewięćset ";
		}

		if (dziesiatki == 2) {
			numberWords = numberWords + "dwadzieścia ";
		} else if (dziesiatki == 3) {
			numberWords = numberWords + "trzydzieści ";
		} else if (dziesiatki == 4) {
			numberWords = numberWords + "czterdzieści ";
		} else if (dziesiatki == 5) {
			numberWords = numberWords + "pięćdziesiąt ";
		} else if (dziesiatki == 6) {
			numberWords = numberWords + "sześćdziesiąt ";
		} else if (dziesiatki == 7) {
			numberWords = numberWords + "siedemdziesiąt ";
		} else if (dziesiatki == 8) {
			numberWords = numberWords + "osiemdziesiąt ";
		} else if (dziesiatki == 9) {
			numberWords = numberWords + "dziewięćdziesiąt ";
		} else if (dziesiatki == 1) {
			if (jednosci == 0) {
				numberWords = numberWords + "dziesięć ";
			} else if (jednosci == 1) {
				numberWords = numberWords + "jedenaście ";
			} else if (jednosci == 2) {
				numberWords = numberWords + "dwanaście ";
			} else if (jednosci == 3) {
				numberWords = numberWords + "trzynaście ";
			} else if (jednosci == 4) {
				numberWords = numberWords + "czternaście ";
			} else if (jednosci == 5) {
				numberWords = numberWords + "piętnaście ";
			} else if (jednosci == 6) {
				numberWords = numberWords + "szesnaście ";
			} else if (jednosci == 7) {
				numberWords = numberWords + "siedemnaście ";
			} else if (jednosci == 8) {
				numberWords = numberWords + "osiemnaście ";
			} else if (jednosci == 9) {
				numberWords = numberWords + "dziewiętnaście ";
			}
		}

		if (dziesiatki == 1) {
			//	console.log('juz zrobione')
		} else if (jednosci == 1) {
			numberWords = numberWords + "jeden ";
		} else if (jednosci == 2) {
			numberWords = numberWords + "dwa ";
		} else if (jednosci == 3) {
			numberWords = numberWords + "trzy ";
		} else if (jednosci == 4) {
			numberWords = numberWords + "cztery ";
		} else if (jednosci == 5) {
			numberWords = numberWords + "pięć ";
		} else if (jednosci == 6) {
			numberWords = numberWords + "sześć ";
		} else if (jednosci == 7) {
			numberWords = numberWords + "siedem ";
		} else if (jednosci == 8) {
			numberWords = numberWords + "osiem ";
		} else if (jednosci == 9) {
			numberWords = numberWords + "dziewięć ";
		}
		return numberWords;
	}

	function convertNumbersToWords(number) {
		this.number = number;
		let word = "";
		let tab = [];

		if (this.number.length % 3 == 1) {
			tab.push(this.number[0]);
			for (let i = 0; i < Math.floor(this.number.length / 3); i++) {
				let numberTemp = this.number.substr(1);
				tab.push(numberTemp.substr(-(numberTemp.length - 3 * i), 3));
			}
		} else if (this.number.length % 3 == 2) {
			tab.push(this.number.substr(0, 2));
			for (let i = 0; i < Math.floor(this.number.length / 3); i++) {
				let numberTemp = this.number.substr(2);
				tab.push(numberTemp.substr(-(numberTemp.length - 3 * i), 3));
			}
		} else if (this.number.length % 3 == 0) {
			for (let i = 0; i < Math.floor(this.number.length / 3); i++) {
				tab.push(this.number.substr(-(this.number.length - 3 * i), 3));
			}
		}

		for (let i = 0; i < tab.length; i++) {
			word = word + convertThreeNumbers(tab[i]);
			if (tab.length == 2 && i == 0) {
				word = word + "tyś ";
			}
		}

		return word;
	}

	function convertValue(number) {
		this.number = number;
		const valueZlotych = this.number.substr(0, this.number.length - 3);
		const valueGroszy = this.number.substr(-2);
		let wordGroszy = "";
		let wordZlotych = "";
		if (valueGroszy == 0) {
			wordGroszy = "zero ";
		} else {
			wordGroszy = convertNumbersToWords(valueGroszy);
		}
		if (valueZlotych == 0) {
			wordZlotych = "zero ";
		} else {
			wordZlotych = convertNumbersToWords(valueZlotych);
		}

		return wordZlotych + "zł i " + wordGroszy + "gr";
	}

	function PrintElem() {
		var mywindow = window.open("", "PRINT", "height=400,width=600");

		mywindow.document.write(
			"<html><head><title>" + document.title + "</title>"
		);
		// mywindow.document.write('</head><body >');
		// mywindow.document.write('<h1>' + document.title  + '</h1>');
		mywindow.document.write(document.querySelector(".toPrint").innerHTML);
		// mywindow.document.write('</body></html>');

		mywindow.document.close(); // necessary for IE >= 10
		mywindow.focus(); // necessary for IE >= 10*/

		mywindow.print();
		mywindow.close();

		return true;
	}

	/*
function workers(){
	console.log('asdasf')
const workers = JSON.parse(workers);
alert(workers[0].firstName)
}
*/

	const btnPrint = document.querySelector(".btnPrint");
	btnPrint.addEventListener("click", bbb);
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	function ggg() {
		window.print();
	}

	function bbb() {
		console.log("funkcja bbb");
		const image = new Image();

		//console.log("bbb")
		image.addEventListener("load", (e) => {
			ctx.drawImage(image, 0, 0);
			ctx.beginPath();

			let aaa = "Automat-Spec Sp. z o.o. Sp. k.";
			aaa = aaa.toUpperCase();
			if (aaa > 27) {
				aaa = [...aaa];
				for (let i = 0; i < aaa.length; i++) {
					if (aaa[i] === ".") {
						aaa[i - 1] = aaa[i - 1] + aaa[i];
						aaa.splice(i, 1);
					}
				}
			}
			//console.log(aaa)
			const bbb = "KASZÓW	382	32-060	LISZKI";
			const nr = "94175010480000000022772538";
			const kwota = totalValue.innerText;
			const nazwaZleceniodwacy = inputName.value.toUpperCase();
			const now = new Date();
			const nazwaZlecenia =
				"UTARG WARSZAWA " +
				now.getDate() +
				"." +
				(now.getMonth() + 1) +
				"." +
				now.getFullYear();

			function wordLength(word, x, y) {
				this.word = word;
				this.x = x;
				this.y = y;
				ctx.font = "bold 50px Courier";
				//console.log(this.word.length)
				if (this.word.length <= 27) {
					//	console.log('mniej niz 28')
					for (let i = 0; i < this.word.length; i++) {
						if (i == 0) {
							ctx.fillText(this.word[i], this.x, this.y);
						} else {
							ctx.fillText(this.word[i], this.x + 59 * i, this.y);
						}
					}
				} else if (this.word.length <= 54) {
					ctx.fillText(this.word, this.x, this.y);
				}
			}

			wordLength(aaa, 110, 95);

			/*for(let i=0; i<aaa.length; i++){
				//ctx.moveTo(20, i*20); 
				
				ctx.font = "bold 50px Courier";
				if(i==0){
					ctx.fillText(aaa[i], 110, 95)
				} else {	
					ctx.fillText(aaa[i], 110+59*i, 95)				
				}
			}*/

			for (let i = 0; i < bbb.length; i++) {
				//ctx.moveTo(20, i*20);
				ctx.font = "bold 50px Courier";
				if (i == 0) {
					ctx.fillText(bbb[i], 110, 200);
				} else {
					ctx.fillText(bbb[i], 110 + 59 * i, 200);
				}
			}

			for (let i = 0; i < nr.length; i++) {
				//ctx.moveTo(20, i*20);
				ctx.font = "bold 50px Courier";
				if (i == 0) {
					ctx.fillText(nr[i], 110, 300);
				} else {
					ctx.fillText(nr[i], 110 + 59 * i, 300);
				}
			}

			for (let i = 0; i < kwota.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i == 0) {
					ctx.fillText(kwota[i], 1003, 400);
				} else {
					ctx.fillText(kwota[i], 1003 + 59 * i, 400);
				}
			}
			let vbb = amountWords.innerText.toUpperCase();
			//console.log(vbb)
			for (let i = 0; i < vbb.length; i++) {
				ctx.font = "bold 30px Courier";
				if (i == 0) {
					ctx.fillText(vbb[i], 110, 500);
				} else {
					ctx.fillText(vbb[i], 110 + 20 * i, 500);
				}
			}

			for (let i = 0; i < nazwaZleceniodwacy.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i == 0) {
					ctx.fillText(nazwaZleceniodwacy[i], 110, 600);
				} else {
					ctx.fillText(nazwaZleceniodwacy[i], 110 + 59 * i, 600);
				}
			}

			for (let i = 0; i < nazwaZlecenia.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i == 0) {
					ctx.fillText(nazwaZlecenia[i], 110, 800);
				} else {
					ctx.fillText(nazwaZlecenia[i], 110 + 59 * i, 800);
				}
			}

			for (let i = 0; i < nazwaZleceniodwacy.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i == 0) {
					ctx.fillText(nazwaZleceniodwacy[i], 110, 900);
				} else {
					ctx.fillText(nazwaZleceniodwacy[i], 110 + 59 * i, 900);
				}
			}

			const koperta = "BEZPIECZNA KOPERTA O NR. " + sealNumber.value;
			ctx.font = "bold 30px Courier";
			ctx.fillText(koperta, 110, 1000);
			/*for(let i=0; i<koperta.length; i++){
				ctx.font = "bold 50px Courier";
				if(i==0){
					ctx.fillText(koperta[i], 110, 900)
				} else {
					ctx.fillText(koperta[i], 110+59*i, 900)
				}
			}*/
		});
		image.src = "druk.png";
	}
	const btnSave = document.querySelector(".btnSave");
	btnSave.addEventListener("click", saveCanvas);

	function saveCanvas() {
		const url = canvas.toDataURL();
		console.log(url);
		//const canvas2 = document.querySelector(".blankietCanvas2");
		const img = document.querySelectorAll(".imgimg");
		console.log(img);
		//	img.className = "imgimg"
		//	img.crossorigin="anonymous"

		img.forEach(function (img) {
			img.src = url;
		});

		//		img.src = url;
		//canvas2.appendChild(img);
	}

	/*	const canvas2 = document.querySelector(".myCanvas2");
	const ctx2 = canvas2.getContext("2d");
	image.addEventListener("load", e => {
	  ctx2.drawImage(image, 0, 0);
		ctx2.beginPath();
	})*/

	/*for(let i=0; i<aaa.length; i++){
		//ctx.moveTo(20, i*20); 
		ctx2.font = "bold 50px Courier";
		if(i==0){
			ctx2.fillText(aaa[i], 110, 90)
		} else {
			ctx2.fillText(aaa[i], 110+59*i, 90)
		}
	}*/
	/*
const canvas3 = document.querySelector(".myCanvas3");
const ctx3 = canvas3.getContext("2d");
  ctx3.drawImage(image, 0, 0);
	ctx3.beginPath();

for(let i=0; i<aaa.length; i++){
	//ctx.moveTo(20, i*20); 
	ctx2.font = "bold 50px Courier";
	if(i==0){
		ctx2.fillText(aaa[i], 110, 90)
	} else {
		ctx2.fillText(aaa[i], 110+59*i, 90)
	}
}
*/

	//window.print();
	//})

	/*
var dataURL = canvas.toDataURL('image/jpeg', 1.0);
console.log(dataURL);*/
});
