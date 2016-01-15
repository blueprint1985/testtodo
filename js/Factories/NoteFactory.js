angular.module('todoApp').factory('NoteFactory', factory);

function factory($http) {
    var service = {
        getNotes: getNotes,
        addNote: addNote,
        delNote: delNote,
        delNote: delNote,
        showNote: showNote
    };

    return service;
    
    function getNotes() {
        return $http({
            method : 'GET',
            url : 'http://localhost:8000/notes'
        }).then(function(response) {
            return response;
        });
    }

    function addNote(noteAdd) {
        $http({
            method : 'PUT', 
            url : 'http://localhost:8000/notes',
            data : $.param(noteAdd),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            return response;
        });
    }

    function delNote(noteDel) {
        return $http({
            method : 'DELETE',
            url : 'http://localhost:8000/notes',
            data : $.param(noteDel),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            return response;
        });
    }

    function updNote(noteUpd) {
        $http({
            method : 'POST', 
            url : 'http://localhost:8000/notes',
            data : $.param(noteUpd),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            return response;
        });
    }

    function showNote(noteShow) {
        return $http({
            method : 'GET',
            url : 'http://localhost:8000/notes' + noteShow
        }).then(function(response) {
            return response;
        });
    }

}