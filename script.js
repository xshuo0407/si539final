// -----------------------homepage---------------------------



document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var sideMenu = document.getElementById('side-menu');
    var btnClose = document.querySelector('.btn-close');

    // 
    function toggleMenu() {
        // 
        sideMenu.style.width = sideMenu.style.width === '250px' ? '0' : '250px';
        // 更新菜单切换按钮的文本

    }

    // 点击菜单切换按钮时打开或关闭侧边菜单
    menuToggle.addEventListener('click', function() {
        toggleMenu();
    });

    // 点击关闭按钮时关闭侧边菜单
    btnClose.addEventListener('click', function() {
        toggleMenu();
    });

    // 点击侧边菜单外的任何地方时关闭侧边菜单
    window.addEventListener('click', function(event) {
        if (sideMenu.style.width === '250px' && !sideMenu.contains(event.target) && event.target !== menuToggle) {
            toggleMenu();
        }
    });

    // 更新日期和时间
    function updateDateTime() {
        var now = new Date();
        var dateTime = now.toLocaleString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        });
        dateTime += ' | Ann Arbor, Michigan';
        document.getElementById('date-time').textContent = dateTime;
    }

    // 每秒钟更新一次日期和时间
    setInterval(updateDateTime, 1000);
    updateDateTime();
});




// -------------------------Movie---------------------------


document.addEventListener('DOMContentLoaded', function() {
    function closeDetails() {
      document.querySelectorAll('.movie-details').forEach(function(detail) {
        detail.style.display = 'none';
      });
    }
    
    // 
    document.querySelectorAll('.learn-more-btn').forEach(function(button) {
      button.addEventListener('click', function() {
        var details = this.nextElementSibling; 
        details.style.display = 'block';
      });
    });
  
    // 
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.learn-more-btn')) {
        closeDetails();
      }
    });
  });
  

// -----------------------------photos--------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    document.querySelector('.right-arrow').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length; 
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
    });

    document.querySelector('.left-arrow').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
    });
});

// --------aboutme-----

function toggleVideo() {
    var video = document.getElementById('portraitVideo');
    var image = video.previousElementSibling; 

    if (video.style.display === 'none') {
        video.style.display = 'block';
        video.play(); 
        image.style.display = 'none'; 
    } else {
        video.style.display = 'none'; 
        video.pause(); 
        video.currentTime = 0; 
        image.style.display = 'block'; 
    }
}











// document.addEventListener('DOMContentLoaded', function() {
//     var menuToggle = document.getElementById('menu-toggle');
//     var sideMenu = document.getElementById('side-menu');
//     var btnClose = document.querySelector('.btn-close');

//     menuToggle.addEventListener('click', function() {
//         sideMenu.style.width = sideMenu.style.width === '250px' ? '0' : '250px';
//     });

//     btnClose.addEventListener('click', function() {
//         sideMenu.style.width = '0';
//         menuToggle.textContent = '☰';
//     });
//     window.addEventListener('click', function(event) {
//         if (sideMenu.style.width === '250px' && !sideMenu.contains(event.target) && event.target !== menuToggle) {
//             toggleMenu();
//         }
//     });

//     function updateDateTime() {
//         var now = new Date();
//         var dateTime = now.toLocaleString('en-US', { 
//             weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
//             hour: 'numeric', minute: 'numeric', second: 'numeric' 
//         });
//         // 添加地点到日期时间字符串
//         dateTime += ' | Ann Arbor, Michigan';
//         document.getElementById('date-time').textContent = dateTime;
//     }

//     setInterval(updateDateTime, 1000);
//     updateDateTime();
// });


// for iphone
var photoFrames = document.querySelectorAll('.photo-frame');


photoFrames.forEach(function(frame) {
    frame.addEventListener('click', function() {
       
        frame.classList.toggle('active');
    });
});

var photoFrames = document.querySelectorAll('.photo-frame');

photoFrames.forEach(function(frame) {
    frame.addEventListener('click', function() {
       
        var photoLocation = frame.querySelector('.photo-location');
        if (photoLocation.style.display === 'block') {
            photoLocation.style.display = 'none';
            photoLocation.style.opacity = 0;
        } else {
            photoLocation.style.display = 'block';
            photoLocation.style.opacity = 1;
        }
    });
});

