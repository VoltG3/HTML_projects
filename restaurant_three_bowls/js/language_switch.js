/* ***************** */
/* language switcher */
/* ***************** */

  var NO = 'NO'; 
  var EN = 'EN';
  var RS = 'RS'; 

  // default first onload
  //
 
  //setCookie("language", NO, 1); 

  var display_BLOCK = 'display: block;';
  var display_NONE  = 'display: none;';
 
    function switch_lang(target) {
      switch(target) {
        case NO:
          display_NO(display_BLOCK);
          display_EN(display_NONE);
          display_RS(display_NONE);
            NO_btn();
              setCookie("language", NO, 1); // :: 'language_cookie.js'
              console.log("getCookies SWITCH --> " + getCookie("language"));
          break;
        case EN:
          display_NO(display_NONE);
          display_EN(display_BLOCK);
          display_RS(display_NONE);
            EN_btn();
              setCookie("language", EN, 1); // :: 'language_cookie.js'
              console.log("getCookies SWITCH --> " + getCookie("language"));
          break;
        case RS:
          display_NO(display_NONE);
          display_EN(display_NONE);
          display_RS(display_BLOCK);
            RS_btn();
              setCookie("language", RS, 1); // :: 'language_cookie.js'
              console.log("getCookies SWITCH --> " + getCookie("language"));
          break;
        default:
          // code block
      } 
    } 
/*
    function switch_lang(target) {
      if (target == NO) {
        display_NO(display_BLOCK);
        display_EN(display_NONE);
        display_RS(display_NONE);
          NO_btn();
      } else if (target == EN) {
        display_NO(display_NONE);
        display_EN(display_BLOCK);
        display_RS(display_NONE);
          EN_btn();
      } else if (target == RS) {
        display_NO(display_NONE);
        display_EN(display_NONE);
        display_RS(display_BLOCK);
          RS_btn();
        }
      }
*/
    function display_NO(target) {
      var txt_EN = document.querySelectorAll(".txt_NO");
      for (var i = 0; i < txt_EN.length; i++) { 
          document.getElementsByClassName("txt_NO")[i].style.cssText=target;
      } 
    }

    function display_EN(target) {
      var txt_NO = document.querySelectorAll(".txt_EN");
      for (var i = 0; i < txt_NO.length; i++) { 
          document.getElementsByClassName("txt_EN")[i].style.cssText=target;
      } 
    }

    function display_RS(target) {
      var txt_RS = document.querySelectorAll(".txt_RS");
      for (var i = 0; i < txt_RS.length; i++) { 
          document.getElementsByClassName("txt_RS")[i].style.cssText=target;
      } 
    }

    function NO_btn(){
      document.getElementsByClassName("NO_btn")[0].style.cssText='background-color:var(--w); color: var(--b);';  
      document.getElementsByClassName("EN_btn")[0].style.cssText='background-color:var(--b); color: var(--w);';
      document.getElementsByClassName("RS_btn")[0].style.cssText='background-color:var(--b); color: var(--w);';
    }

    function EN_btn(){
      document.getElementsByClassName("NO_btn")[0].style.cssText='background-color:var(--b); color: var(--w);';
      document.getElementsByClassName("EN_btn")[0].style.cssText='background-color:var(--w); color: var(--b);';  
      document.getElementsByClassName("RS_btn")[0].style.cssText='background-color:var(--b); color: var(--w);';
    }

    function RS_btn(){
      document.getElementsByClassName("NO_btn")[0].style.cssText='background-color:var(--b); color: var(--w);';
      document.getElementsByClassName("EN_btn")[0].style.cssText='background-color:var(--b); color: var(--w);'; 
      document.getElementsByClassName("RS_btn")[0].style.cssText='background-color:var(--w); color: var(--b);';  
    }