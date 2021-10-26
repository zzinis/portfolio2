$("input[type=submit]").on("click", function(e){
    
    if(!isTxt("userid", 4)) e.preventDefault(); 
    if(!isName("username")) e.preventDefault(); 
    if(!isPwd("pwd1", "pwd2", 5)) e.preventDefault(); 
    if(!isEmail("email")) e.preventDefault();
    if(!isSelect("sns")) e.preventDefault(); 
}); 

function isTxt(name, len){

    if(len === undefined) len = 5; 
    let txt = $("[name="+ name +"]").val();

    if(txt.length >= len){  

        $("[name="+name+"]").parent().find("span").remove(); 
        return true;  
    }else{      
        $("[name="+name+"]").parent().find("span").remove(); 
        $("[name="+name+"]").parent().append(
            "<span>입력항목을 "+ len+"글자 이상 입력하세요</span>"
        ); 
        return false;  
    }
}


function isName(name, len){

    if(len === undefined) len = 5; 
    let txt = $("[name="+ name +"]").val();

    if(txt.length >= len){  

        $("[name="+name+"]").parent().find("span").remove(); 
        return true;  
    }else{      
        $("[name="+name+"]").parent().find("span").remove(); 
        $("[name="+name+"]").parent().append(
            "<span>이름을 입력하세요.</span>"
        ); 
        return false;  
    }
}

function isPwd(name1, name2, len){
 
    let pwd1 = $("input[name="+name1+"]").val(); 
    let pwd2 = $("input[name="+name2+"]").val(); 

    let num = /[0-9]/; 
    let eng = /[a-zA-Z]/; 
    let spc = /[~!@#$%^&*()_+\[\]-]/;

    if(pwd1 === pwd2 && pwd1.length >=len && num.test(pwd1) && eng.test(pwd1) && spc.test(pwd1)){

        $("input[name="+name1+"]").parent().find("span").remove(); 
        return true; 
    }else{ 
        $("input[name="+name1+"]").parent().find("span").remove(); 
        $("input[name="+name1+"]").parent().append(
            "<span>비밀번호는 "+len+"글자 이상 영문, 특수문자, 숫자를 포함해서 동일하게 입력하세요.</span>"
        ); 
        return false; 
    }

}

function isEmail(name) {

    let txt = $("[name="+name+"]").val(); 

    if(email == ""){      
        $("[name="+name+"]").parent().find("span").remove(); 
        return true; 
    }else{      
        $("[name="+name+"]").parent().find("span").remove(); 
        $("[name="+name+"]").parent().append(
            "<span>메일 아이디를 입력하세요.</span>"
        ); 
        return false; 
    }
}

function isSelect(name){

    let sel = $("select[name="+name+"]").children("option:radio").val(); 
 
    if(sel !==""){
       $("select[name="+name+"]").parent().find("span").remove(); 
       return true; 
    }else{
       $("select[name="+name+"]").parent().find("span").remove(); 
       $("select[name="+name+"]").parent().append(
          "<span>필수 입력항목을 선택해 주세요 </span>"
       ); 
       return false; 
    }
 }
