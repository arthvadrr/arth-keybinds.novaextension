exports.activate = function() {
	console.log('hi');
	
	nova.commands.register("editor.moveCursorUp", (editor) => {
		editor.moveUp();
	});
	
	nova.commands.register("editor.moveCursorDown", (editor) => {
		editor.moveDown();
	});
	
	nova.commands.register("editor.moveCursorLeft", (editor) => {
		editor.moveLeft();
	});
	
	nova.commands.register("editor.moveCursorRight", (editor) => {
		editor.moveRight();
	});
	
	nova.commands.register("editor.moveCursorWordEnd", (editor) => {
		editor.moveToEndOfWord();
	});
	
	nova.commands.register("editor.moveCursorWordBeginning", (editor) => {
		editor.moveToBeginningOfWord();
	});
	
	nova.commands.register("editor.moveCursorLineEnd", (editor) => {
		editor.moveToEndOfLine();
	});
	
	nova.commands.register("editor.moveCursorLineBeginning", (editor) => {
		editor.moveToBeginningOfLine();
	});
}

exports.deactivate = function() {
	// Clean up state before the extension is deactivated
}