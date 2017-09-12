define(['jquery','template','bootstrap'], function($, template) {
    $(function(){
        //讲师列表的基本显示事件
        $.ajax({
            url:"/api/teacher",
            type:"get",
            success:function(data){
                console.log(data);
                $(".teacher_list").html(template("teacher_list_tpl",data));
            }
        }); 
        
        //模态框的点击事件
        $(".teacher_list").on("click",".check-info",function(){
            var tc_id=$(this).parent().data("id");
             $.ajax({
                 url:"/api/teacher/view",
                 data:{
                   tc_id:tc_id  
                 },
                 type:"get",
                 success:function(data){
                     console.log(data);
                    if(data.code==200){
                    $(".modal-dialog").html(template("teacher_modal_tpl",data.result));
                    $("#teacherModal").modal("show");   
                    }
                 }

             });
        });

        //给所有注销启动按钮添加点击事件
        $(".teacher_list").on("click",".btn-status",function(){
             var id=$(this).parent().data("id");
             var status=$(this).data("status");
             var that=$(this);
             $.ajax({
                 url:"/api/teacher/handle",
                 type:"post",
                 data:{
                    tc_id:id,
                    tc_status:status 
                 },
                 success:function(data){
                     if(data.code==200){
                         if(data.result.tc_status==1){
                            that.removeClass("btn-warning").addClass("btn-success").text("启用");
                         }else{
                            that.removeClass("btn-success").addClass("btn-warning").text("注销")
                         }
                         that.data("status",data.result.tc_status);
                     }
                 }
             });
        });
    });
});