angular.module('todoApp')
    .controller('NoteController', function($scope, NoteFactory) {

    //.....
    var getNotes = NoteFactory.getNotes().then(function(data){
        thisApp.users = response.data;
    }, function() {
        alert("Error getting users");
    });

    var addNote = NoteFactory.addNote($scope.noteadd).then(function(data){
        thisApp.users = response.data;
    }, function() {
        alert("Error getting users");
    });

    var delNote = NoteFactory.delNote(noteDel).then(function(data){
        thisApp.users = response.data;
    }, function() {
        alert("Error getting users");
    });

    // Show overlay with form for updating a note
    thisApp.showUpd = function(noteID)
    {
        var overlaycover = document.getElementById("overlaycover");
        var overlaybox = document.getElementById("overlaybox");
        overlaycover.style.opacity = .65;

        if(overlaycover.style.display == "block" || noteID == 0){ // For toggling overlay
            overlaycover.style.display = "none"; // Hide div overlaycover
            overlaybox.style.display = "none"; // Hide div overlaybox
        } else {
            var getUpd = NoteFactory.updNote(noteUpd).then(function(data){
                thisApp.users = response.data;
            }, function() {
                alert("Error getting users");
            });

            noteupd.content = getUpd.content; // Update fields in form
            noteupd.deadline = getUpd.deadline;
            noteupd.id = getUpd.id;

            if (response.data.completed == 1) {
                noteupd.completed = true;
            } else {
                noteupd.completed = false;
            }

            overlaycover.style.display = "block"; // Show div overlaycover
            overlaybox.style.display = "block"; // Show div overlaybox
        }
    }

    var updNote = NoteFactory.updNote($scope.noteupd).then(function(data){
        thisApp.users = response.data;
    }, function() {
        alert("Error getting users");
    });

    // Check if deadline passed for each note in list
    $scope.rowClass = function(completed, deadline)
    {
        var nowTime = Math.floor(Date.now()/1000);
        var deadTime = new Date(deadline);
        var deadUTC = Math.floor(deadTime/1000);

        if (completed == 1) {
            return "success"; // Note is completed
        } else if (deadUTC < nowTime) {
            return "danger"; // Note is not completed, deadline passed
        } else {
            return "active"; // Note is not completed, still time left
        }
    }
}