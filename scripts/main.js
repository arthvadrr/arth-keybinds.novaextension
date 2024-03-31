exports.activate = function () {
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

  nova.commands.register("arth.moveCursorUpTen", (editor) => {
    editor.moveUp(10);
  });

  nova.commands.register("arth.moveCursorDownTen", (editor) => {
    editor.moveDown(10);
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

  nova.commands.register("arth.selectToBeginningOfWord", (editor) => {
    editor.selectToBeginningOfWord();
  });

  nova.commands.register("arth.selectToEndOfWord", (editor) => {
    editor.selectToEndOfWord();
  });

  nova.commands.register("arth.selectToBeginningOfLine", (editor) => {
    editor.selectToBeginningOfLine();
  });

  nova.commands.register("arth.selectToEndOfLine", (editor) => {
    editor.selectToEndOfLine();
  });

  nova.commands.register("arth.selectLineUp", (editor) => {
    editor.selectUp();
  });

  nova.commands.register("arth.selectLineDown", (editor) => {
    editor.selectDown();
  });
};
