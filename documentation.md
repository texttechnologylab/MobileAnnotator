# Documentation on Uima socket
websocket based...

# Documentation on the Mobile Annotator Iso space Tool

**sem-af.Component**
summary: handles how the sem-af-tool works, saves the annotation and link data into data structures; 
handles the colouration and saving the latest annotation

**sem-af-picker.Component**
summary: handles the menu that opens for annotation. it's setup as a simple 2 tab menu, which corresponds with the attributes of each entity

**sem-af-link-picker.Component**
summary: handles the menu that opens when link annotation is selected in the sem-af-picker menu. it corresponds with the link attributes

**shapenet-picker.Component**
summary: handles the menu that opens when shape net objects are to be selected. it corresponds with the shapenet id database

-- set-shapenet(id:string) 
	this function saves the id to the data in the sem-af.Component and this component
	
**tool-bar.Component**
summary: changes in this menu allowed for including a "help" button to display the menu

 -- openmanual()
	this functions sole purpose is to open the manual.pdf that is saved for the certain tool
	other manuals for the other tools can be added for the simple if-statement. as there is only one manual now, the help button is hidden for the other tools per the picker.component.html.
	If other manuals are to be added, one can remove the ngIF "title...." that now checks if the title is the one of the Sem-AF annotator, otherwise it won't show, and only keep the button with the function.
 

**contentholderSemAF.Component**
summary: its made from copying the original contentholder, changes allow to visualise links and give more space between tokens for better selections

-- .entryDiv (in contentholder.Component.html)
	border-radius: set to be more rectangular than in the other tools, so that the links can be visualised easier (higher percent - more round; lower percent - more rectangulat)
	margin: needs to be changed to get more space between tokens and between lines
