exports.activate = function() {
	console.log('hi');
	
	nova.commands.register("arth.moveCursorUp", (editor) => {
		editor.moveUp();
	});
	
	/**
	 * Editor navigation
	 */
	nova.commands.register("arth.moveCursorUp", (editor) => {
		editor.moveUp();
	});
	
	nova.commands.register("arth.moveCursorDown", (editor) => {
		editor.moveDown();
	});
	
	nova.commands.register("arth.moveCursorLeft", (editor) => {
		editor.moveLeft();
	});
	
	nova.commands.register("arth.moveCursorRight", (editor) => {
		editor.moveRight();
	});
	
	nova.commands.register("arth.moveCursorWordEnd", (editor) => {
		editor.moveToEndOfWord();
	});
	
	nova.commands.register("arth.moveCursorWordBeginning", (editor) => {
		editor.moveToBeginningOfWord();
	});
	
	nova.commands.register("arth.moveCursorLineEnd", (editor) => {
		editor.moveToEndOfLine();
	});
	
	nova.commands.register("arth.moveCursorLineBeginning", (editor) => {
		editor.moveToBeginningOfLine();
	});
	
	nova.commands.register("arth.moveCursorLineBeginning", (editor) => {
		editor.moveToBeginningOfLine();
	});
	
	/**
	 * Selecting
	 */
	 nova.commands.register("arth.selectLeft", (editor) => {
		 editor.selectLeft();
	 });
	 
	 nova.commands.register("arth.selectRight", (editor) => {
		  editor.selectRight();
	  });
}

exports.deactivate = function() {
	// Clean up state before the extension is deactivated
}