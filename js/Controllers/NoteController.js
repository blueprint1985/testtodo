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
        var r = confirm("Are you sure?");

        if (r == true) {
            NoteFactory.delNote(note).then(getNotes, function() {
                alert("Error deleting note");
            });
        }
    }

    // Show overlay with form for updating a note
    thisApp.showUpd = function(note)
    {
        var overlaycover = document.getElementById("overlaycover");
        var overlaybox = document.getElementById("overlaybox");
        overlaycover.style.opacity = .65;

        if(overlaycover.style.display == "block"){ // For toggling overlay
            getNotes;
            overlaycover.style.display = "none"; // Hide div overlaycover
            overlaybox.style.display = "none"; // Hide div overlaybox
        } else {
            thisApp.noteupd = note;

            if (note.completed == 1) {
                thisApp.noteupd.completed = true;
            } else {
                thisApp.noteupd.completed = false;
            }

            overlaycover.style.display = "block"; // Show div overlaycover
            overlaybox.style.display = "block"; // Show div overlaybox
        }
    }

    function updNote(note) {
        NoteFactory.updNote(note).then(function() {
            getNotes;
            overlaycover.style.display = "none"; // Hide div overlaycover
            overlaybox.style.display = "none"; // Hide div overlaybox
        }, function() {
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
