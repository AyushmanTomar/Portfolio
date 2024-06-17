// navigation bar function 
function myMenuFunction()
{
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className==="nav-menu")
    {
        menuBtn.className+=" responsive";
    }
    else{
        menuBtn.className="nav-menu";
    }
}

// shodow on navigation bar 
window.onscroll = function()
{
    headerShadow()
};
function headerShadow(){
    const navHeader = document.getElementById("header");
    if(document.body.scrollTop>10 || document.documentElement.scrollTop>10)
    {
        navHeader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="0 1px 6px rgba(0, 0, 0 , 0.1)";
    }
    else{
        navHeader.style.boxShadow="none";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";
    }
}
let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click",function() {
    window.open('https://www.linkedin.com/in/ayushman-tomar-3a357b25a', '_blank');
  });

  let insta = document.getElementById("instagram");
  insta.addEventListener("click",function() {
    window.open('https://www.instagram.com/_ayushmaan__21/', '_blank');
  });

  let git = document.getElementById("github");
  git.addEventListener("click",function() {
    window.open('https://github.com/AyushmanTomar', '_blank');
  });
  let mail = document.getElementById("mail");
  mail.addEventListener("click",function() {
    window.open("mailto:ayuhmantomar721@gmail.com", '_blank');
  });

  let linkedin1 = document.getElementById("linkedin1");
  linkedin1.addEventListener("click",function() {
      window.open('https://www.linkedin.com/in/ayushman-tomar-3a357b25a', '_blank');
    });
  
    let insta1 = document.getElementById("instagram1");
    insta1.addEventListener("click",function() {
      window.open('https://www.instagram.com/_ayushmaan__21/', '_blank');
    });
  
    let git1 = document.getElementById("github1");
    git1.addEventListener("click",function() {
      window.open('https://github.com/AyushmanTomar', '_blank');
    });
    let mail1 = document.getElementById("mail1");
    mail1.addEventListener("click",function() {
      window.open("mailto:ayuhmantomar721@gmail.com", '_blank');
    });
    function openTiffin()
    {
      window.open("https://tiffinindia.in/");
    }

  //give link for optifit website
  function openOptifitWeb()
  {
    window.open("https://opti-fit.netlify.app/");
  }
  function openSpamHam()
  {
    window.open("https://spamham-6xl4.onrender.com/")
  }
  function openBirdWing()
  {
    window.open("https://github.com/AyushmanTomar/WingBird")
  }
  function openOddEvenGit()
  {
    window.open("https://github.com/AyushmanTomar/Handcricket");
  }
  function openFlowtalk()
  {
    window.open("https://flowtalk.netlify.app/");
  }

function downloadAlert()
{
    alert("Downloading Resume");
}
    var typed = new Typed('.typedText', {
        strings: ['DEVELOPER!', 'SOFTWARE ENGINEER!','CODER!','TECHNOLOGY ENTHUSIAST!','LEADER!'],
        typeSpeed: 40,smartBackspace: true,loop:true,backSpeed:30,onBegin: (self) => {},backDelay:1000,
      });
//  dark mode 
      const body = document.querySelector("body"),
      toggleSwitch = document.getElementById("toggle-switch");
      toggleSwitch.addEventListener('click', () => {
      body.classList.toggle("dark");})
     
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1500,
  reset: true     
 })

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 100})
sr.reveal('.featured-text-btn',{delay: 100})
sr.reveal('.social_icons',{delay: 100})
sr.reveal('.featured-image',{delay: 200})
sr.reveal('.col',{delay:100})
sr.reveal('.cnt',{delay: 100})
sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '50px',
  duration: 1500,
  reset: true
})
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.skill-list',{delay:100})

srRight.reveal('.form-control',{delay: 100})


const srLeft = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 1500,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.education-box',{delay: 100})
srLeft.reveal('.left',{delay: 100})
srLeft.reveal('.right',{delay: 100})
// srLeft.reveal('.rights',{delay:100})
const srbottom = ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 1500,
  reset: true
})
srbottom.reveal('.social_icons2',{delay: 100})
srbottom.reveal('.rights',{delay: 100})
srbottom.reveal('.nav-name2',{delay: 100})

function hireMe()
{
  window.open("hire.html","_self")
}




// const sections = document.querySelectorAll('section[id]')
// function scrollActive() {
//   const scrollY = window.scrollY;
//   sections.forEach(current =>{
//     const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute('id')
//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
//         document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
//     }  else {
//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll', scrollActive)




// function open()
// {
//   window.open("")
// }

