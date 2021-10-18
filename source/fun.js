/*Interval for the background images of the about section */
let i=0;
let interval;
const changeBackgroundInterval=()=>{interval = setInterval(changeBck,5000);}
const changeBck=()=>{i++; if(i==4){i=0} document.getElementById('welcome-section').style.backgroundImage="url('source/icons/poster"+i+".jpg')"}
const changeBckButton=()=>{clearInterval(interval);changeBck();changeBackgroundInterval()}

/*Modal functions*/

function showproject(project)
    {   
    clearInterval(gInterval); redDot(1);
    modalBck.style.visibility="visible";
    theModal.style.transform="translateY(0%)";
    document.body.setAttribute("class","block-scrollbar");

    theGalery.style.backgroundImage=`url(source/img/${project["images"][0]})`;
    theGalery.dataset.name=project.title[0];
    g_i=1;
    setGaleryInterval(project.title[0]);

    document.getElementById('modal-project-title').innerHTML=project.title[1];
    document.getElementById('modal-project-description').innerHTML=project.description;
    let fatherN=document.getElementById('made-with');
    let icons=[];
        for(let i=0;i<=project["made-with"].length-1;i++)
        {
        icons[i]=document.createElement("img");
        icons[i].setAttribute("src","source/icons/"+project["made-with"][i]);
        icons[i].setAttribute("class","modal-mini-icon flush");
        fatherN.appendChild(icons[i]);
        } 
    document.getElementById('visit').setAttribute("onclick",`openInNewPage(${project.title[0]},0)`);
    document.getElementById('code1').setAttribute("onclick",`openInNewPage(${project.title[0]},1)`);
    document.getElementById('code2').setAttribute("onclick",`openInNewPage(${project.title[0]},2)`);

    }

const openInNewPage=(x,y)=>
    {
        if(x.link[y]=="disabled")
        {
            alert("You are here :)")
            return false;
        }
window.open(x.link[y], '_blank');}

function hideproject()
    {
    modalBck.style.visibility="hidden";
    theModal.style.transform="translateY(-200%)";
    document.body.setAttribute("class","");
    clearInterval(gInterval);
    flushThaDots();
    flush();
    }
function flush()
    {
    flushit=document.getElementsByClassName('flush');
    let leng=flushit.length-1;
    for(let i=0;i<=leng;i++)
        {
        flushit[0].remove();
        }
    }
/*Galery Interval and Dots functions*/

let g_i=1;
let gInterval;

function setGaleryInterval(project)
    {
    gInterval = setInterval(() =>
        {
        g_i++;
        if(g_i==4){g_i=1}
        flushThaDots();
        redDot(g_i);
        theGalery.style.backgroundImage=`url(source/img/${project+g_i}.png)`;
        },4000);
    }

function dotsSelect(x)
    {
    flushThaDots();
    clearInterval(gInterval);
    g_i=x;
    redDot(x);
    let project=theGalery.dataset.name;
    theGalery.style.backgroundImage=`url(source/img/${project+x}.png)`;
    setGaleryInterval(project);
    }
function flushThaDots()
    {
    let dot = document.getElementsByClassName('dots-style');
        for(let i=0;i<=2;i++)
        {
        dot[i].style.background="#FFFFFF";
        }
    }
const redDot=(x)=>{document.getElementById('dot'+x).style.background="red";}



   

