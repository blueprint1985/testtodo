angular.module('todoApp').factory('NoteFactory', factory);

function factory($http) {
    var service = {
        getNotes: getNotes,
        addNote: addNote,
        delNote: delNote,
        updNote: updNote,
        showNote: showNote
    };

    return service;
    
    function getNotes() {
        return $http({
            method : 'GET',
            url : 'http://localhost:8000/notes'
        });
    }

    function addNote(noteAdd) {
        return $http({
            method : 'PUT', 
            url : 'http://localhost:8000/notes',
            data : $.param(noteAdd),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    function delNote(noteDel) {
        return $http({
            method : 'DELETE',
            url : 'http://localhost:8000/notes',
            data : $.param(noteDel),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    function updNote(noteUpd) {
        return $http({
            method : 'POST', 
            url : 'http://localhost:8000/notes',
            data : $.param(noteUpd),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    function showNote(noteShow) {
        return $http({
            method : 'GET',
            url : 'http://localhost:8000/notes' + noteShow
        });
    }

}
