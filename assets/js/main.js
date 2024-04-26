//  ---------------------- Parallax Home ----------------- //
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX*speed)/200;
      layer.style.transform = `translateX(${x}px)`;
    })
}
document.addEventListener("mousemove", parallax);


// -------------------------- typing Animation -------------------- //
var typed = new Typed('.type', {
    strings: ['Frontend Developer', 'Wordpress Developer', 'Website Developer'],
    typeSpeed:90,
    backSpeed:70,
    loop:true,
});


// -------------------------- navigation Responsive ---------------------- //
const menutoggle = document.querySelector('.toggle');
const navigation = document.querySelector('.nav');
menutoggle.onclick = function() {
  menutoggle.classList.toggle('active');
  navigation.classList.toggle('active');
}


//  ------------------- Counter ---------------- //
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}


// ----------- Tabs --------------------- //
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i<list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j<list.length; j++) {
            list[j].classList.remove('active');
        }

        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++) {
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}


// ---------------------------- Clints Swiper --------------------- //
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});


// ------------------------------- Smooth Scroll ------------------------ //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});