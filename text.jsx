// A script to add menu text layers to the active Photoshop document.
// Font: Lucky Day Regular
// Size: 100pt for labels, larger for title.

// First, check if a document is open
if (app.documents.length > 0) {
  var doc = app.activeDocument;

  // --- SCRIPT SETTINGS (You can change these) ---
  var titleText = "SAUCES";
  var titleSize = 280; // Larger size for the main title
  var labelSize = 100; // The 100pt size you requested for the labels
  var fontName = "LuckyDay-Regular"; // IMPORTANT: The script needs the exact font name.
  
  // Define the text color (White)
  var textColor = new SolidColor();
  textColor.rgb.red = 255;
  textColor.rgb.green = 255;
  textColor.rgb.blue = 255;

  // A helper function to create a text layer
  function createTextLayer(content, x, y, size) {
    var textLayer = doc.artLayers.add();
    textLayer.kind = LayerKind.TEXT;
    textLayer.name = content; // Name the layer after its content
    
    var textItem = textLayer.textItem;
    textItem.contents = content;
    textItem.font = fontName;
    textItem.size = size;
    textItem.color = textColor;
    textItem.position = [x, y]; // Set position [x, y] from top-left corner
    textItem.justification = Justification.CENTER; // Center the text
  }

  // --- CREATE THE TEXT LAYERS ---
  // The X and Y coordinates are estimated from your image. You may need to adjust them slightly.

  // Title
  createTextLayer(titleText, 540, 450, titleSize);

  // Top Row of Sauces
  createTextLayer("Sauce big chicken", 225, 855, labelSize);
  createTextLayer("Sauce samourai", 540, 855, labelSize);
  createTextLayer("Honey mustard", 855, 855, labelSize);

  // Middle Row of Sauces
  createTextLayer("Ranch", 225, 1175, labelSize);
  createTextLayer("BBQ", 540, 1175, labelSize);
  createTextLayer("Ketchup", 855, 1175, labelSize);

  // Bottom Row of Sauces
  createTextLayer("Hot honey", 225, 1495, labelSize);
  createTextLayer("Garlic", 540, 1495, labelSize);
  createTextLayer("Mayo", 855, 1495, labelSize);
  
  alert("Text layers have been created!");

} else {
  alert("Error: Please open an image before running this script.");
}
