(function(){
    function templatize(a){
        return new Function("token","var buffer=[];buffer.push('"+a.replace(/\n/g,"\\n").replace(/'/g,"\\'").replace(/\[([^\:]*)\:([^\[]*)\[/g,"');for(var $2=0;$2<token.$1.length;$2++){buffer.push('").replace(/\]\]\.join\(([^\)]*)\)/g,"');buffer.push('$1');}buffer.pop();buffer.push('").replace(/\]\]/g,"');}buffer.push('").replace(/{{([^}]*)}}/g,"',token.$1,'")+"');return buffer.join('');");
    }
    if(typeof exports !== 'undefined' && this.exports !== exports){
        module.exports = templatize;
    }else{
        window.templatize = templatize;
    }
})();