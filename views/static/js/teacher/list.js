define(['jquery','template'], function($, template) {
     $.ajax({
         url:"/api/teacher",
         type:"get",
         success:function(data){
             console.log(data);
             $(".teacher_list").html(template("teacher_list_tpl",data));
         }
     }); 
});