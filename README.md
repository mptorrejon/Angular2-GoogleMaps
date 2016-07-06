#FOLLOW THE FOLLOWING INSTRUCTIONS TO CONFIGURE YOUR FOLDER
1.	Run npm run-script ts && npm run-script _development_
	interchange development for production depending on which change you are on.
2.	Run npm install

At this point you should have a folder named:
*	typings
*	node_modules



In assets, you will find templates(html|jade) and styles(sass|styles|css). I did not want to include
assests with src because I do not want my gulpfile to go over files that are not .ts

Ideally, I will look into speeding up my gulpfile so development testing can happen instantaneously.
