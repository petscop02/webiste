window.onload = function (e)
{
    var x = document.getElementById("first");
    x.classList.remove("div1");
    x.classList.add("div11");
    x.classList.add("w3-animate-left");
    var f = document.getElementById("footer");
    f.classList.remove("tbl0");
}
window.onscroll = function (e)
{
    var y = document.getElementById("second");
    if (window.scrollY >= first.offsetTop + 150)
    {
        y.classList.remove("div2");
        y.classList.add("div22");
        y.classList.add("w3-animate-right");
    }
    var z = document.getElementById("third");
    var t = document.getElementById("table1");
    var h = document.getElementById("hthree");
    var footer = document.getElementById("real_footer");
    if (window.scrollY >= first.offsetTop + 450) 
    {
        z.classList.remove("div3");
        z.classList.add("div33");
        z.classList.add("w3-animate-left");
        footer.classList.remove("tbl0");
    }
    if(window.scrollY >= first.offsetTop + 700)
    {
        h.classList.remove("tbl0");
        t.classList.remove("tbl0");
        t.classList.add("tbl");
    }
}