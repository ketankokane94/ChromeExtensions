Build an Extension which on youtube video played automatically speeds it upto 1.5x!!

Basics of making chrome extentions

Files:
manifest.json (which is like a config file)
background.js (background script files which acts as process file for the extension)
content.js (is the script file which gets injected in the tab process and interacts it with it)

important: the content.js and the background.js file cannot call each other, hence have to use communication API of chrome to enable the communication.

used : 
 browser_action API
 


