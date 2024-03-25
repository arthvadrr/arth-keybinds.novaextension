exports.activate = function() {
	console.log('hi');
	
	nova.commands.register("editor.moveCursorDown", (editor) => {
		console.log("down");
		nova.commands.invoke("editor:moveCursorDown");
	});
}

exports.deactivate = function() {
	// Clean up state before the extension is deactivated
}