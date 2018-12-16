var x;
var word;
var podpowiedz;
var dlogosc;
var rysunek = 0;
var good = 0;
var bylo = [];

function kreski()
{
    dlogosc = word.length;
    for(var i = 1; i<=dlogosc;i++)
    {
        var y = i-1;
        document.getElementById('slowko').innerHTML += '<span id="litera'+i+'" class="kreski">_</span>';
    }

}

function controler()
{
    kreski();
}

function check(id)
{
    if(word.includes(id))
    {
        correct(id);
    }
    else
    {
        wrong(id);
    }
}

function correct(id)
{
    if(rysunek<11 & bylo.includes(id)==false){
    bylo.push(id);
    document.getElementById(id).style.borderColor = "green";
    document.getElementById(id).style.color = "green";
    for(var i = 0; i<word.length;i++)
    {
        if(word[i] == id)
        {
            var x = i+1;
            document.getElementById('litera'+x).innerHTML = id;
            good++;
        }
    }
    if(good==word.length){setTimeout('win()',100);}
    }
}

function wrong(id)
{
    if(rysunek<11 & good<word.length & bylo.includes(id)==false)
    {
        bylo.push(id);
        document.getElementById(id).style.borderColor = "red";
        document.getElementById(id).style.color = "red";
        var x = rysunek + 1;
        document.getElementById("screen").innerHTML = '<img src="step'+x+'.png">';
        if(document.getElementById('screen').innerHTML == '<img src="step11.png">')
        {
            setTimeout('fail()',100);
        }
        rysunek++;
    }
}

function fail()
{
    document.getElementById('box').style.visibility = "hidden";
    document.getElementById('alerts').innerHTML += '<div id="okno"><div id="title">Przegrałeś :(</div><div id="replay" onclick="replay();">Zagraj ponownie</div></div>';
    
}

function win()
{
    document.getElementById('box').style.visibility = "hidden";
    document.getElementById('alerts').innerHTML += '<div id="okno"><div id="title">Wygrałeś!!!</div><div id="replay" onclick="replay();">Zagraj ponownie</div></div>';
}

function play()
{
    if(document.getElementById('input').value.trim()!="" & document.getElementById('podpowiedz').value.trim()!="" & document.getElementById('input').value.trim() != document.getElementById('podpowiedz').value.trim())
    {
        word = document.getElementById('input').value.toLowerCase().trim();
        podpowiedz = document.getElementById('podpowiedz').value.toLowerCase().trim();
        document.getElementById('okno').remove(); 
        document.getElementById('box').style.visibility = "visible";
        controler();
    }
    else
    {
        if(document.getElementById('input').value.trim()=="")
        {
            document.getElementById('input').style.border = "1px solid red";
        }
        else
        {
            document.getElementById('input').style.border = "none";
        }

        if(document.getElementById('podpowiedz').value.trim()=="")
        {
            document.getElementById('podpowiedz').style.border = "1px solid red";
        }
        else
        {
            document.getElementById('podpowiedz').style.border = "none";
        }
    }
}

function replay()
{
    location.replace('index.html');
}

function kliknij()
{
    document.getElementById('podpowiedz-box').innerHTML = podpowiedz;
}