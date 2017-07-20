// Using my created framework
$('#loginBtn').click(function(){
    var loginGrtr = G$('Tarun', 'Nagpal');
    $('#loginDiv').hide();
    loginGrtr.setLang($('#language').val()).HTMLGreetings('#heading', true).log();
});