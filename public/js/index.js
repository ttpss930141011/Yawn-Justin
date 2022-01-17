function click() {
    var audio = new Audio('./sound/yawn.mp3');
    audio.play();
}
document.addEventListener('keydown', (e) => {
    if (!e.repeat){
        document.body.style.backgroundImage = "url('./images/yawn.jpg')";
        click();
        $.ajax({
            url: '/api/yawnTap',
            method: 'GET',
            async: true,　
        
            success: res =>{
                $('#show').text(`已經打了${res}次哈欠`)
            },
            error: err =>{
                $('#show').text(err)
            },
        });
    }
});
document.addEventListener('keyup', (e) => {
    document.body.style.backgroundImage = "url('./images/off.jpg')";
})

document.addEventListener('mousedown',function(e){
    click();
    document.body.style.backgroundImage = "url('./images/yawn.jpg')";
    $.ajax({
        url: '/api/yawnTap',
        method: 'GET',
        async: true,　
    
        success: res =>{
            $('#show').text(`已經打了${res}次哈欠`)
        },
        error: err =>{
            $('#show').text(err)
        },
    });
})

document.addEventListener('mouseup',function(e){
    document.body.style.backgroundImage = "url('./images/off.jpg')";
})
