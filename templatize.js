(function(){
    function templatize(a){
        return new Function("scope","var buffer=[];buffer.push('"+a.replace(/\n/g,"\\n").replace(/'/g,"\\'").replace(/\[([^\:\]]*)\:([^\[]*)\[/g,"');for(var $2=0;$2<$1.length;$2++){buffer.push('").replace(/\[\?([^\[]*)\?\[/g,"');if($1){buffer.push('").replace(/\]\]\.join\(([^\)]*)\)/g,"');buffer.push('$1');}buffer.pop();buffer.push('").replace(/\]\]/g,"');}buffer.push('").replace(/{{([^}]*)}}/g,"',$1,'").replace(/\<\!\-\-/g,"").replace(/\-\-\>/g,"")+"');return buffer.join('');");
    }
    if(typeof exports !== 'undefined' && this.exports !== exports){
        module.exports = templatize;
    }else{
        window.templatize = templatize;
    }
})();
