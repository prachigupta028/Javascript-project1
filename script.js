  function submit(){

    var tm=500;
    document.getElementById("total-m").innerText=tm;
      var total=parseInt(document.getElementById("math").value)+
      parseInt(document.getElementById("english").value)+
      parseInt(document.getElementById("science").value)+
      parseInt(document.getElementById("ss").value)+
      parseInt(document.getElementById("hindi").value);

      document.getElementById("marks").innerText = total;

      var per=(parseInt(document.getElementById("marks").innerText)/parseInt(document.getElementById("total-m").innerText))*100;
      var p=per;
      document.getElementById("percentage").innerText=p +"%";

      if(p>=60){
        document.getElementById("remark").innerHTML="<span style='color:green'>Pass</span>";
      }
      else{
        document.getElementById("remark").innerHTML="<span style='color:Red'>Fail</span>";
      }

      if(p>=95){
        document.getElementById("grade").innerText="A+";
      }
       else if(p>=85){
        document.getElementById("grade").innerText="A";
      }
      else if(p>=70){
        document.getElementById("grade").innerText="B";
      }
      else if(p>=60){
        document.getElementById("grade").innerText="C";
      }
      else if(p>=1){
        document.getElementById("grade").innerText="D";
      }

      

  }

  let input=document

  