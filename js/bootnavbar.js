function bootnavbar(el = 'main_navbar', options){
    let defaultOption  ={

    }

    options = {...defaultOption, ...options }


    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    this.init = function(){
        var dropdowns = document.getElementById(el).getElementsByClassName("dropdown");
        console.log(dropdowns);
        for (var i = 0; i < dropdowns.length; i++) {
            var dropdown = dropdowns.item(i);
            dropdown.addEventListener("mouseover", function(){
                this.classList.add('show');
                this.getElementsByClassName("dropdown-menu")[0].classList.add('show');
            });
            dropdown.addEventListener("mouseout", function(){
                this.classList.remove('show');
                this.getElementsByClassName("dropdown-menu")[0].classList.remove('show');
            });
        }
        // document.getElementById(el).getElementsByClassName("dropdown").forEach(dropdown => {
        //     dropdown.addEventListener("mouseover", function(){
        //         dropdown.classList.add('show');
        //         dropdown.getElementsByClassName("dropdown-menu")[0].classList.add('show');
        //     });
        //     dropdown.addEventListener("mouseout", function(){
        //         dropdown.classList.remove('show');
        //         dropdown.getElementsByClassName("dropdown-menu")[0].classList.remove('show');
        //     });
        // });
    }

    this.init();    
}