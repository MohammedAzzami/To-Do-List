$("#add-task").on("click", addTask);
$("#task-input").on("keydown", function(event) {
    if (event.which === 13 || event.keyCode === 13) {
        addTask();
    }
})

function addTask() {
    var taskInput = $("#task-input");
    var taskText = taskInput.val().trim();
        if (taskText !== "") {
            var li = $("<li></li>");
            var checkBox = $("<input type='checkBox'>");
            checkBox.addClass("check-box");
            var label = $("<label></label>");
            label.addClass("label-task");
            var deleteButton = $("<button></button>");
            deleteButton.text("Delete");
            deleteButton.addClass("delete-button");
            $(checkBox).on("change", function() {
                if ($(this).prop("checked")) {
                    $(label).addClass("completed");
                } else {
                    $(label).removeClass("completed");
                }
            })
            label.text(taskText);
            li.append(checkBox);
            li.append(label);
            li.append(deleteButton);
            $("#task-list").append(li);
            taskInput.val('');
            $(deleteButton).on("click", function() {
                $(li).remove();
            })
        } else {
            alert("Please Enter your task.");
        }

}

