$('#btn1').on('click', function () {
    const randomNumber1 = Math.ceil(Math.random() * 9) + 1;

    if (randomNumber1 >= 7 && randomNumber1 <= 9) {
        $('#computer').html('ぐー');
        $('#result').html('あいこ');
    } else if (randomNumber1 >= 4 && randomNumber1 <= 6) {
        $('#computer').html('ちょき');
        $('#result').html('かち');
    } else {
        $('#computer').html('ぱー');
        $('#result').html('まけ');
    }
});

$('#btn2').on('click', function () {
    const randomNumber2 = Math.ceil(Math.random() * 9) + 1;

    if (randomNumber2 >= 7 && randomNumber2 <= 9) {
        $('#computer').html('ぐー');
        $('#result').html('まけ');
    } else if (randomNumber2 >= 4 && randomNumber2 <= 6) {
        $('#computer').html('ちょき');
        $('#result').html('あいこ');
    } else {
        $('#computer').html('ぱー');
        $('#result').html('かち');
    }
});

$('#btn3').on('click', function () {
    const randomNumber3 = Math.ceil(Math.random() * 9) + 1;

    if (randomNumber3 >= 7 && randomNumber3 <= 9) {
        $('#computer').html('ぐー');
        $('#result').html('かち');
    } else if (randomNumber3 >= 4 && randomNumber3 <= 6) {
        $('#computer').html('ちょき');
        $('#result').html('まけ');
    } else {
        $('#computer').html('ぱー');
        $('#result').html('あいこ');
    }
});