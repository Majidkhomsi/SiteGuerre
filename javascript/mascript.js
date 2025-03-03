var pIds, pIdsHdr;
var idsCntr = 2;

window.onload = dat();
function dat(){
    document.getElementById("heure").innerHTML = new Date();
    setTimeout(dat, 1000);
}

function ajouter()
{
    pIds = document.getElementById("ids");
    pIdsHdr = "";
    pIdsHdr += '<p><label for="ide' + idsCntr + '">Id&eacute;e ' + idsCntr + ': </label>';
    pIdsHdr += '<input type="text" name="ide" id="ide' + idsCntr +'" class="form" /></p>';
    pIds.innerHTML += pIdsHdr;
    idsCntr++;
}

function azero()
{
    idsCntr = 1;
    pIds = document.getElementById("ids");
    pIdsHdr = "";
    pIdsHdr += '<p><label for="ide' + idsCntr + '">Id&eacute;e ' + idsCntr + ': </label>';
    pIdsHdr += '<input type="text" name="ide" id="ide' + idsCntr +'" class="form" /></p>';
    pIds.innerHTML = "";
    pIds.innerHTML += pIdsHdr;
    idsCntr++;
}

function supr()
{
    if (idsCntr > 2)
    {
        pIds = document.getElementById("ids");
        var lastIndex = dernierIndex();
        pIds.innerHTML = pIds.innerHTML.substring(0, lastIndex);
        idsCntr--;
    }
    else
    {
        alert("min: 1 idée");
    }    
}

function dernierIndex()
{
    var fValue;
    for (var i = 0; i < pIds.innerHTML.length; i++)
    {
        if (pIds.innerHTML.substring(i, i + 3) === "<p>" )
        {
            fValue = i;
        }
    }
    return fValue;
}

function vide()
{
    var a = 1;
    while(a < idsCntr)
    {
        if(document.getElementById("ide" + a).value.length == 0)
        {
            alert("Case " + a + " vide");
            document.getElementById("envoyer").addEventListener("click", event.preventDefault());
        }
        a++;
    }
}