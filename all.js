// function myFunction() {
//   let checkState1 = document.getElementById("check1").checked ;
//   let checkState2 = document.getElementById("check2").checked;
//   console.log(checkState1, checkState2);
// } 
// let myFunction = () => {
//   let checkState1 = document.getElementById("check1").checked;
//   let checkState2 = document.getElementById("check2").checked;
//   console.log(checkState1, checkState2);
// }

$.getJSON('https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json', function (data) {
	//data is the JSON string
	data.forEach((x) => {
		document.getElementById('content_list').innerHTML +=
			'<div class="list">'
			+ '<div class="charge">' + x.Charge + '</div>'
			+ '<div class="location">' + x.Location + '</div>'
			+ '<div class="address">' + x.Address + '</div>'
			+ '</div>';
	});
	document.getElementById('check1').onclick = () => {
		let checkState1 = document.getElementById("check1").checked;
		let checkState2 = document.getElementById("check2").checked;
		if (checkState1 === true && checkState2 === true) {
			//顯示全部
			document.getElementById('content_list').innerHTML = "";
			data.forEach((x) => {
				document.getElementById('content_list').innerHTML +=
					'<div class="list">'
					+ '<div class="charge">' + x.Charge + '</div>'
					+ '<div class="location">' + x.Location + '</div>'
					+ '<div class="address">' + x.Address + '</div>'
					+ '</div>';
			});
		} else if (checkState1 === true && checkState2 === false) {
			//清空、顯示免費
			document.getElementById('content_list').innerHTML = "";
			data.forEach((x) => {
				if (x.Charge === "免費") {
					document.getElementById('content_list').innerHTML +=
						'<div class="list">'
						+ '<div class="charge">' + x.Charge + '</div>'
						+ '<div class="location">' + x.Location + '</div>'
						+ '<div class="address">' + x.Address + '</div>'
						+ '</div>';
				}
			})

		} else if (checkState1 === false && checkState2 === true) {
			//清空、顯示投幣式
			document.getElementById('content_list').innerHTML = "";
			data.forEach((x) => {
				if (x.Charge === "投幣式") {
					document.getElementById('content_list').innerHTML +=
						'<div class="list">'
						+ '<div class="charge">' + x.Charge + '</div>'
						+ '<div class="location">' + x.Location + '</div>'
						+ '<div class="address">' + x.Address + '</div>'
						+ '</div>';
				}
			})
		} else if (checkState1 === false && checkState2 === false) {
			//清空全部
			document.getElementById('content_list').innerHTML = "";
		}
	}

	document.getElementById('check2').onclick = () => {
		let checkState1 = document.getElementById("check1").checked;
		let checkState2 = document.getElementById("check2").checked;
		if (checkState1 === true && checkState2 === true) {
			//顯示全部
			document.getElementById('content_list').innerHTML = "";
			data.forEach((x) => {
				document.getElementById('content_list').innerHTML +=
					'<div class="list">'
					+ '<div class="charge">' + x.Charge + '</div>'
					+ '<div class="location">' + x.Location + '</div>'
					+ '<div class="address">' + x.Address + '</div>'
					+ '</div>';
			});

		} else if (checkState1 === true && checkState2 === false) {
			//清空、顯示免費
			document.getElementById('content_list').innerHTML = "";
			data.forEach((x) => {
				if (x.Charge === "免費") {
					document.getElementById('content_list').innerHTML +=
						'<div class="list">'
						+ '<div class="charge">' + x.Charge + '</div>'
						+ '<div class="location">' + x.Location + '</div>'
						+ '<div class="address">' + x.Address + '</div>'
						+ '</div>';
				}
			})
		} else if (checkState1 === false && checkState2 === true) {
			//清空、顯示投幣式
			document.getElementById('content_list').innerHTML = "";
			data.forEach((x) => {
				if (x.Charge === "投幣式") {
					document.getElementById('content_list').innerHTML +=
						'<div class="list">'
						+ '<div class="charge">' + x.Charge + '</div>'
						+ '<div class="location">' + x.Location + '</div>'
						+ '<div class="address">' + x.Address + '</div>'
						+ '</div>';
				}
			})
		} else if (checkState1 === false && checkState2 === false) {
			//清空全部
			document.getElementById('content_list').innerHTML = "";
		}
	}

})







