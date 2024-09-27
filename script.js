let humanpick = '';


function papier()
{
    humanpick = 'p';
    main();
}
function kamien()
{
    humanpick = 'k';
    main();
}
function nozyce()
{
    humanpick = 'n';
    main();
}


function main()
{
    let pick = Math.floor(Math.random() * 3);
    let tab = ["papier","kamień","nożyce"];
    let charpick = ''
    let tabchar = ['p','k','n'];
    charpick = tabchar[pick];

    let result = document.querySelector("#result");
    if (charpick==humanpick)
    {
        result.innerHTML = "Remis.";
    }
    if ((charpick == 'p' && humanpick == 'k') || (charpick == 'k' && humanpick == 'n') || (charpick == 'n' && humanpick == 'p'))
    {
        result.innerHTML = "Wygrał komputer.";
    }
    if ((humanpick == 'p' && charpick == 'k') || (humanpick == 'k' && charpick == 'n') || (humanpick == 'n' && charpick == 'p'))
    {
        result.innerHTML = "Wygrał użytkownik.";
    }

    let aipick = document.querySelector("#pick");
    aipick.innerHTML = "System wylosował: " + tab[pick];
}