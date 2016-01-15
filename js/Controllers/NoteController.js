angular.module('todoApp').controller('NoteController', function($scope, NoteFactory) {
    var thisApp = this;
     // exposed functions in the view
    thisApp.addNote = addNote;
    thisApp.delNote = delNote;
    thisApp.updNote = updNote;
    
    // controller init sort of say
    function activate() {
        getNotes();
    }
    activate();
    
    function getNotes() {
        NoteFactory.getNotes().then(function(response){ 
            thisApp.notes = response.data; 
        }, function() { 
            alert("Error getting notes"); 
        });
    }

    function addNote(note) {
            NoteFactory.addNote(note).then(getNotes, function() {
            alert("Error adding note");
        });
    }

    function delNote(note) {
            var noteObj = JSON.parse('{"id":' + note + '}'); // JSON for req
            NoteFactory.delNote(noteObj).then(getNotes, function() {
            alert("Error deleting note");
        });
    }

    // Show overlay with form for updating a note
    thisApp.showUpd = function(note)
    {
        var overlaycover = document.getElementById("overlaycover");
        var overlaybox = document.getElementById("overlaybox");
        overlaycover.style.opacity = .65;

        if(overlaycover.style.display == "block" || note == 0){ // For toggling overlay
            overlaycover.style.display = "none"; // Hide div overlaycover
            overlaybox.style.display = "none"; // Hide div overlaybox
        } else {
            var getUpd = NoteFactory.updNote(note).then(function(data){
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

    function updNote(note) {
            NoteFactory.updNote(note).then(getNotes, function() {
            alert("Error updating note");
        });
    }

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
});
