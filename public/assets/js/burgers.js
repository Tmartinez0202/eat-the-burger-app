
$(document).ready(function(){
    $(".devour-form").on("submit", function(event){
        event.preventDefault()
        let burgerID = $(this).children(".burger_id").val()
        $.ajax({
            method: "PUT", 
            url: "/burgers/" + burgerID
        }).then(function(data){
            location.reload();
        })
    })
})
