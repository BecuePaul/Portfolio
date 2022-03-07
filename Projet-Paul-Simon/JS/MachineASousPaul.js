$(
    function()
    {
$('#btnRecommencer').css('display','none');
var cagnotte = 100;
$('#cagnotte').val(cagnotte+" €");
var mise;
$('#btnLancer').click(function()
{  
    $('#resultat').empty();
    if($('#mise').val()<=0)
    {
        $('#resultat').css('margin-left','30%');
        $('#resultat').append("Vous devez miser de l'argent !");
        $('#resultat').css('color','red');
    }
    else if ($('#mise').val()>cagnotte)
    {
        $('#resultat').css('margin-left','20%');
        $('#resultat').append("Tu n'as pas assez d'argent dans ta cagnotte !");
        $('#resultat').css('color','red');
    }
    else
    {
        $('#mise').attr('disabled',true);
        $('.position').playSpin(
        {
            onFinish:function()
            {
                $('#mise').attr('disabled',false);
                gain();
            }
        });
    }
});
function gain()
{
    if(($('#G').css('top')) == ($('#M').css('top')) && ($('#M').css('top')) == ($('#D').css('top')))
    {
        mise=$('#mise').val();
        $('#resultat').append("Vous avez gagné "+mise*2+" €");
        $('#resultat').css('color','gold');
        cagnotte=(mise*3)-mise+cagnotte;
        $('#cagnotte').val(cagnotte+" €");
    }
    else if(($('#G').css('top')) == ($('#M').css('top')) || ($('#G').css('top')) == ($('#D').css('top')) || ($('#M').css('top')) == ($('#D').css('top')))
    {
        mise=$('#mise').val();
        $('#resultat').append("Vous avez gagné "+mise+" €");
        $('#resultat').css('color','lawngreen');
        cagnotte=(mise*2)-mise+cagnotte;
        $('#cagnotte').val(cagnotte+" €");
    }
    else
    {
        mise=$('#mise').val();
        $('#resultat').append("Vous avez perdu "+mise+" €");
        $('#resultat').css('color','red');
        cagnotte=cagnotte-mise;
        $('#cagnotte').val(cagnotte+" €");
        if(cagnotte==0)
        {
            $('#btnRecommencer').css('display','');
            $('#btnLancer').css('display','none');
        }
    }
}
$('#btnRecommencer').click(function(){
    cagnotte=100;
    $('#cagnotte').val(cagnotte+" €");
    $('#resultat').empty();
    $('#btnRecommencer').css('display','none');
    $('#btnLancer').css('display','');
    $('#mise').val("");
});
});
