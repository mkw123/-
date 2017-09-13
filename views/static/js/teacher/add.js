define(['jquery','template','utils'], function($, template,utils) {
      var id=utils.getQueryObj().id;
      if(id){
          $.ajax({
                url:"/api/teacher/edit",
                data:{
                   tc_id:id   
                },
                type:"get",
                success:function(data){
                    if(data.code==200){
                      data.result.title="编辑讲师";
                      data.result.btnTitle="保存";
                      data.result.url="/api/teacher/update";
                      $("#add-teacher").html(template("teacher_tpl",data.result));
                      $(".btn").click(function(){
                        $.ajax({
                             url:"/api/teacher/update",
                             type:"post",
                             data:$("form").serialize(),
                             success:function(data){
                               if(data.code==200){
                                  location.href="/teacher/list";      
                               }
                             }
                        });
                      return false;  
                    });
                  }  
                }
          }); 
      }else{
          var obj={
                title:"添加讲师",
                url:"/api/teacher/add",
                btnTitle:"添 加"
          }
          $("#add-teacher").html(template("teacher_tpl",obj));
          $(".btn").click(function(){
                $.ajax({
                     url:"/api/teacher/add",
                     type:"post",
                     data:$("form").serialize(),
                     success:function(data){
                       if(data.code==200){
                          location.href="/teacher/list";      
                       }
                     }
                });
              return false;  
          });
      }
});