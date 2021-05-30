$(function() {
	let signal = 
	[
		'',
		'000010000',
		'100000001',
		'001010100',
		'101000101',
		'101010101',
		'101101101'
	];
	// ランダムな賽の目rを生成
	let r = Math.floor(Math.random() * 6) + 1;
	// 賽の目の出力
	console.log(signal[r]);
	for(let i=0; i<9; i++) {
		let ko = $('<div>');
		if(signal[r].charAt(i) == '1') {
			if(r == 1) {
				ko.css('background-color', '#c00');
			} else {
			ko.css('background-color', '#000');
			}
		}
		$('#container').append(ko);
	}
	let moji = 'hogetarahogetarahogetarahoi';
	console.log(moji.charAt(4));
	// クリック時の予約
	$('#msg').on('click', function() {
		$(this).animate({'width': '50px','height': '50px','opacity': 0.1},2000);
	});
	
});
