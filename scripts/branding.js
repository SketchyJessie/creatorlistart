document.getElementById(".logo").innerHTML = ' <img href="creatorlist.art" src="assets/logo.png" style="max-width:460px;"></img> ';
document.getElementById(".footer").innerHTML = ' <p style="text-align:center;">This website is fictional and only serves as a demonstration for a hypothetical business.</p> ';
document.getElementById(".nav").innerHTML = ' <p><a href="index.html">HOME</a> | <a href="about.html">ABOUT</a> | <a href="list.html">THE LIST</a> | <a href="">CONTACT</a> <span class="contact">( <a href="artist_contact.html">ARTISTS</a> | <a href="sponsor_contact.html">SPONSORS</a> )</span> </p>';

function toggleContact()
{
    if (document.getElementById(".contact").style.visibility === 'hidden')
    {
        document.getElementById(".contact").style.visibility = 'visible';
    }
    else
    {
        document.getElementById(".contact").style.visibility = 'hidden';
    }
}