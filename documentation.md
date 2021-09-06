# Documentation on Uima socket

# Websocket Debugging
The Tool's Backend is based on Websocket uima.
In Chrome/Firefox's Nework Tab you can filter by WS (Websocket), then you have something with a status of 101 filename /uima... click on it, then go into the response tab, here you can see everything the websocket sends(green arrow)/receives(red arrow) from the server.
This can be extremly helpful in debugging why something does not work, if you send the server something and the server does not send a response it probally failed.
Internally you don't work directly with the websocket but with WebsocketService and a further abstraction DocumentService

# Github pages
The Project uses Github pages as a free web host it is reachable under [MobileAnnotator](https://cr-heidemann.github.io/MobileAnnotator)
Github pages only supports https. And modern Web Browser only allow secure content if the website is https.
Shapenet and uima both don't support https/wss we thus use a nginx proxy server which reroutes them

In the nginx config in a server unit which supports https use the following:

```nginx
server{
	...
    location /uima/ {

        proxy_pass http://textannotator.texttechnologylab.org/uima;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 1d;

    }

    location /shapenet/ {
    	keepalive_timeout  400;
        proxy_pass http://shapenet.texttechnologylab.org/;
        proxy_set_header X-Forwarded-Proto https;
    }
	...
}
```

In `src/url.config.ts` you can change this secure url which will be necessary if you want to continue using github pages, since nginx runs on a private server which i will not continue running indefinitely, better yet would be if uima supports wss and shapenet https.

# Documentation on the Mobile Annotator Iso space Tool

**sem-af.Component**
summary: handles how the sem-af-tool works, saves the annotation and link data into data structures; 
handles the colouration and saving the latest annotation


--genearteToolbarMenu()
	generates the toolbar with content unique for the sem-af.Component. While the Buttons that are in the Toolbar are for every Component, the menu is flexible. 
	We added an option to change the font size which is responsible for the token size, one for showing all the links and one for automatically reopening the menu after just picking the type
	The icons are available under
	https://www.angularjswiki.com/de/angular/angular-material-icons-list-mat-icon-list/
	first, the new menu entry needs to be declared, then it needs to be pushed in the const retval. for it to show up in the menu, its important to add it to the de.json and en.json files for translations.
	according to the style in them, with the name being in accordance of the name in parathesis in the json files and the tool being the current tool
	
--onMenuSelect()
	describes how a toolbar entry should react on being chosen. It can mean that only another function should be called (like save or show_links)
	in more complex cases like tokens per page or page size this newly selected number needs to be subscribed back to the toolbarmenu and contentholder
	

--removeallAnnotations()
	to select a new entity type thats also displayed via the colour coded background, this function deletes all previous annotations (in case the document is imported from a different annotator and has more than 1 annotation type.
	After that the new type can be subscribed to that ID.

--setFonstize()
	saves the selected fontsize in the class variable
	
--showLinks()
	sends the Link data to the semAFLinkOverview.Component of sem-af-link-overview.Component to open a menu displaying all links currently existing in the document with the option to change attributes there

**sem-af-picker.Component**
summary: handles the menu that opens for annotation. it's setup as a simple 2 tab menu, which corresponds with the attributes of each entity

the html document is seperated as a mat tab group, so seperate tabs for Enities and Links exist, which allow 2 seperate menus in one for better usability

--openDialog():
	opens the sem-af-Link-picker Menu to change attributes of Links, since having it all in one menu would be too cluttered

--openShapenet()
	opens the shapenet-picker Menu to select an icon

**sem-af-link-picker.Component**
summary: handles the menu that opens when link annotation is selected in the sem-af-picker menu. it corresponds with the link attributes

**sem-af-link-overview.Component**
summary: handels the display of all the links. its a copy of sem-af-link-picker.Component while not having the restriction of only displaying all the links of the selected token



**shapenet-picker.Component**
summary: handles the menu that opens when shape net objects are to be selected. it corresponds with the shapenet id database

-- set-shapenet(id:string) 
	this function saves the id to the data in the sem-af.Component and this component
	
**tool-bar.Component**
summary: changes in this menu allowed for including a "help" button to display the menu; toolbar menu can be individualised via a queue to this toolbar in the sem-af.component

 -- openmanual()
	this functions sole purpose is to open the manual.pdf that is saved for the certain tool
	other manuals for the other tools can be added for the simple if-statement. as there is only one manual now, the help button is hidden for the other tools per the picker.component.html.
	If other manuals are to be added, one can remove the ngIF "title...." that now checks if the title is the one of the Sem-AF annotator, otherwise it won't show, and only keep the button with the function.
 

**contentholderSemAF.Component**
summary: its made from copying the original contentholder, changes allow to visualise links and give more space between tokens for better selections

-- .entryDiv (in contentholder.Component.html)
	border-radius: set to be more rectangular than in the other tools, so that the links can be visualised easier (higher percent - more round; lower percent - more rectangulat)
	margin: needs to be changed to get more space between tokens and between lines

**uima**
summary: This provides a reference for completing the file "sem-af.utils".Do not change.

--example
"org.texttechnologylab.annotation.semaf.semafsr.SrLink": {
	//the above refer to sem-af.utils.type
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",	
    "features": [ 
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
		//"domain" sometimes needs to provide the path to the "reference option" in "utils"
        "name": "comment",
		// "name" needs to be consistent with the name in util
        "range": "uima.cas.String"
	
      },
**sem-af.utils**
summary: 