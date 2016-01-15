<!doctype html>
<html ng-app="todoApp">
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

	    <link href="/css/bootstrap.min.css" rel="stylesheet">
	    <link href="/css/overlay-control.css" rel="stylesheet">
	    <link href="/css/list-control.css" rel="stylesheet">

		<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
		<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		
		<!--<script src="/js/Controllers/MainController.js"></script>-->

		<script src="/js/AppModule.js"></script>
		<script src="/js/Factories/NoteFactory.js"></script>
		<script src="/js/Controllers/NoteController.js"></script>
		<script src="/js/Factories/UserFactory.js"></script>
		<script src="/js/Controllers/UserController.js"></script>
		<script src="/js/Factories/ProjectFactory.js"></script>
		<script src="/js/Controllers/ProjectController.js"></script>

		<script src="/js/bootstrap.min.js"></script>
	</head>
	<body>
		<!--<div id="overlaycover" ng-click="myControl.showUpd(0)"></div>

		<div id="overlaybox">
			<div class="col-md-12" ng-controller="NoteController as notes">
				<h4>Update:</h4>
				<form ng-submit="notes.updNote()">
					<div class="form-group">
						<label for="updContent">Note:</label>
						<textarea rows="5" cols="30" class="form-control" id="updContent" name="updContent" ng-model="noteupd.content"></textarea>
					</div>
					<div class="form-group">
						<label for="updDeadline">Deadline (format YYYY-MM-DD HH:MM:SS):</label>
						<input type="text" class="form-control" id="updDeadline" name="updDeadline" ng-model="noteupd.deadline" />
					</div>
					<div class="checkbox">
						<label>
							<input type="checkbox" id="updCompleted" name="updCompleted" ng-model="noteupd.completed" /> - Completed
						</label>
					</div>
					<div class="form-group">
						<input type="hidden" id="updID" ng-model="noteupd.id" /><br/>
						<button type="submit" class="btn btn-info">Update</button>
					</div>
				</form>
				Click utside the square to close.
			</div>
		</div>-->

		<div class="container">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="listDiv" ng-controller="NoteController as notes">
				<h1>Todo-list:</h1>
				<p>
					<img src="/images/legend-normal.png"> - Unfinished&emsp;
					<img src="/images/legend-completed.png"> - Finished&emsp;
					<img src="/images/legend-late.png"> - Late  
				</p>
				<table class="table" id="list-table">
					<tr>
						<th>Note:</th>
						<th>Author:</th>
						<th>Project:</th>
						<th>Created:</th>
						<th>Deadline:</th>
						<th colspan="2">Modify:</th>
					</tr>
					<tr ng-repeat="note in notes.getNotes()" ng-class="rowClass(note.completed, note.deadline)">
						<td> {{ note.content }} </td>
						<td> {{ note.user }} </td>
						<td> {{ note.project }} </td>
						<td> {{ note.created }} </td>
						<td> {{ note.deadline }} </td>
						<td><button type="button" class="btn btn-info" ng-click="myControl.showUpd(note.id)">Update</button></td>
						<td><button type="button" class="btn btn-danger" ng-click="myControl.delTodo(note.id)">Delete</button></td>
					</tr>
				</table>
			</div>
			<!--<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="formDiv">
				<h3>Add new note:</h3>
				<form ng-submit="myControl.addTodo()">
					<div class="form-group">
						<label for="newUser">User:</label>
						<select ng-model="noteadd.user" class="form-control" id="newUser" name="newUser">
							<option ng-repeat="user in myControl.users" value="{{ user.id }}">{{ user.name }}</option>
						</select><br/>
					</div>
					<div class="form-group">
						<label for="newProject">Project:</label>
						<select ng-model="noteadd.project" class="form-control" id="newProject" name="newProject">
							<option ng-repeat="project in myControl.projects" value="{{ project.id }}">{{ project.name }}</option>
						</select><br/>
					</div>
					<div class="form-group">
						<label for="newContent">Note:</label>
						<textarea rows="5" cols="30" ng-model="noteadd.content" class="form-control" id="newContent" name="newContent"></textarea><br/>
					</div>
					<div class="form-group">
						<label for="newDeadline">Deadline (format YYYY-MM-DD HH:MM:SS):</label>
						<input type="text" ng-model="noteadd.deadline" class="form-control" id="newDeadline" name="newDeadline" /><br/>
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-info">Add</button>
					</div>
				</form>
			</div>-->
		</div>
	</body>
</html>