/**
 * Created by qianguoqing on 16/11/20.
 */
var $textSize = $('#text-size');
var $textColor = $('#text-color');
var $textSpeed = $('#text-speed');
var $textContent = $('#text-content');
var $positionX = $('#positionX');
var $positionY = $('#positionY');
var $btnSet = $('#btn-set');
var $btnSend = $('#btn-send');
var $btnClear = $('#btn-clear');
var $danmuSection = $('.danmu-section');

$btnSet.on('click', function () {
    if ($textSize.val() === "") $textSize.val(0);
    if ($textColor.val() === "") $textColor.val("black");
    if ($textContent.val() === "") $textContent.val(" ");
    if ($textSpeed.val() === "") $textSpeed.val(0);
    if ($positionX.val() === "") $positionX.val(0);
    if ($positionY.val() === "") $positionY.val(0);
});

$btnSend.on('click', function () {
    var $sendBlock = $('<div>' + $textContent.val() + '</div>');

    $sendBlock.css({
        'font-size': $textSize.val() + "px",
        'color': $textColor.val(),
        'position': 'absolute',
        'right': $positionX.val() + "px",
        'top': $positionY.val() + "px",
    });

    $sendBlock.appendTo($danmuSection);

    setInterval(function () {
        $sendBlock.animate({
            right: "+=" + $textSpeed.val()*5 + "px"
        }, 1000, 'linear', function () {
            var sendLeft = $sendBlock.position().left;
            if (sendLeft < 0) {
                $(this).remove();
            }
        });
    }, 0);
})

$btnClear.on('click', function () {
    $danmuSection.children().remove();
});
