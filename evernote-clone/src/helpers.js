// Wait for the user to stop typing for 2 seconds
export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
  // for preview on left-hand sidebar
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };