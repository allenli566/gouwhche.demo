


  window.onload=function(){
    var index=0;
    var dots = document.getElementsByClassName('dots-item');
    var pics=document.getElementsByClassName('slider-item');
    var size = pics.length;
    var timer = null;
    var product = document.getElementById('product');
    var productItem=document.getElementsByClassName('product-item');
    var productItem2=document.getElementsByClassName('product-item2');
    var navTip = document.getElementsByClassName('navtip')[0]
    var navItem=$('.header-nav-link');
    
    
    
    function addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, true);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        }
        else {
            element['on' + type] = handler;
        }
    }
    
    function changeImg(){
        for(var i=0,len=dots.length;i<len;i++){
            dots[i].classList.remove("active");
            pics[i].style.display = "none";
        }
        dots[index].classList.add("active");
        pics[index].style.display = "block";
     }
     
    
    
    for(var i=0,len=dots.length;i<len;i++){
        dots[i].id = i;
        addHandler(dots[i],"click",function(){
            index = this.id;
            console.log(index);
            changeImg();
        });
     }
    
    
     // 图片自动轮播
    function startAutoPlay(){
        timer = setInterval(function(){
            index++;
            if(index >= size){
               index = 0;
            }
            changeImg();
        },3000)
     }
    
    
     startAutoPlay();
    
    
     //产品缩放动画
    
     for(var i=0,len=productItem.length;i<len;i++){
        productItem[i].id = i;
        addHandler(productItem[i],"mouseenter",function(){
            index = this.id;
            productItem[index].classList.add("product-item-done");
        });
    
        addHandler(productItem[i],"mouseleave",function(){
            index = this.id;
            productItem[index].classList.remove("product-item-done");
        });
    
    
     }
    
     for(var i=0,len=productItem2.length;i<len;i++){
        productItem2[i].id = i;
        addHandler(productItem2[i],"mouseenter",function(){
            index = this.id;
            productItem2[index].classList.add("product-item-done");
        });
    
    
        addHandler(productItem2[i],"mouseleave",function(){
            index = this.id;
            productItem2[index].classList.remove("product-item-done");
        });
    
    
    
     }
    
    
     //顶部导航条设置
    
    
    var switchNavItemsActive=function(idx){
        for(var i=0;i < 6;i++){
            navItem.removeClass('header-nav-link-active')
        }
    
        navItem[idx].classList.add('header-nav-link-active')
    
    }
    
    
    for(var i=0;i<6;i++){
        navItem[i].id = i;
        addHandler(navItem[i],"click",function(){
            index=this.id
            console.log(index);
            
            
            switchNavItemsActive(index)
            // document.documentElement.scrollTop = index*373 ;
    
    
            if(parseInt(index) === 0){
                document.documentElement.scrollTop = 0 ;
                navslide()
            }else if(parseInt(index) === 1){
                document.documentElement.scrollTop = parseInt(index)*600 ;
                navslide()

            }else if(parseInt(index) === 2){
                document.documentElement.scrollTop = parseInt(index)*799 +100 ;
                navslide()

            }else if(parseInt(index) === 3){
                document.documentElement.scrollTop = parseInt(index)*684 +100;
                navslide()

            }else if(parseInt(index) === 4){
                document.documentElement.scrollTop = parseInt(index)*714 +150;
                navslide()

            }else if(parseInt(index) === 5){
                document.documentElement.scrollTop = 3519 ;
                navslide()

            }
        })
    
    }
    
    // var setNavJump = function(elem){
    //     var elem = lib[i];
    //     elem.onclick = function(){
    //       document.body.scrollTop = i*800 + 1;
    //     }
    //   }
      
    
            
    
    
    
    
    $(function(){
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var header=$('.header-container');
            
            if(scrollTop > 100){
                header.addClass('header-active')
            }else{
                header.removeClass('header-active')
            }
    
    
    
            if(scrollTop < 600){
                switchNavItemsActive(0)
                navslide()

            }
            if(scrollTop > 600){
                switchNavItemsActive(1)
                navslide()
            }
            if(scrollTop > 1598){
                switchNavItemsActive(2)
                navslide()

            }
            if(scrollTop > 2152){
                switchNavItemsActive(3)
                navslide()

            }
            if(scrollTop > 3006){
                switchNavItemsActive(4)
                navslide()

            }
            if(scrollTop > 3341){
                switchNavItemsActive(5)
                navslide()

            }
        })  
    })



    var setTip=function(idx,lib){


        lib[idx].onmouseover=function(){
            navTip.style.left = ( idx * 96 )+'px';
        }

        var currentIdx = 0;

        lib[idx].onmouseout=function(){
            for(var i=0;i<6;i++){
                if(lib[i].getAttribute('class').indexOf('header-nav-link-active') > -1){
                    currentIdx=i;
                    break;
                }

            }
            navTip.style.left = ( currentIdx * 96 )+'px';
        }


    }




    

    for(var i=0;i<6;i++){
        setTip(i,navItem)
    }




    var navslide=function(){
        for(var i=0;i<6;i++){
            if(navItem[i].getAttribute('class').indexOf('header-nav-link-active') > -1){
                currentIdx=i;
                break;
            }
    
        }
        navTip.style.left = ( currentIdx * 96 )+'px';
    }
    



    
    







  }
  


