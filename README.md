# Neel Choksi Personal Portfolio with project pitcher pages

## Technologies used :
1. React JS
2. CSS
3. Firebase

## call to action:
1. view samples for portfolio page components, pitcher page
2. change its theme :
- colors of components according to your preference
- input content you want in the sample
4. add it to the cart : click add to cart
5. go to cart --> preview your selected samples,download pdf
6. email the pdf to me on my email
7. video explaining above + showing update in google sheet ,live refresh
## Software Requirement Specificaiton:
1. home --> grid for call to action
2. about
3. contact
4. cv, resume
5. navbar
6. social media bar
7. work grid with work cards(data fetch google sheets)
   - onclicking on card ===> directed to pitcher page for project(user guide , video) ((data from google sheets))
8. pitcher page:(data fetch from google sheets)
	- name
	- tech stack used
	- explaination of goal and journey of development
	- code links
	- tracking bar
	- docs explaining features of the project with screenshots
	- software requirements document
	- appropriate uml diagrams
9. personal portfolio, pitcher samples page: cart modal(fetch from firebase) , add to cart , download pdf ,samples,change theme , input content for the sample-->post to firebase
   - a page to choose designs and models for building your own personal portfolio, pitcher pages
   - homepage , navbar , work section , about, contact , social , resume ,cv,
   - pitcher page in different forms:
     -- docs format including references/inspiration srs, sds ,use case description, task analysis, HTA, Storyboarding
     -- user guide format
     -- video guide format


##execution:
1. admin panel : adds workcard to work, adds pitcher page section to pitcher page of project
  - password to access admin page: firebase auth
2. sample page : cart to add templates , print pdf



## Resume :
1. Tech Stack : HTML , CSS , Javascript , d3.js , React JS , R , Java
	      : MongoDB , Firebase, Apollo Server , Apollo Client, GraphQL, Node JS , Express JS
2. About me : Aspiring Web Developer , keen to learn new technologies related to the web. Learning to create and display interactive visualizations in the web.

3. Projects:
	- GrowYourBusiness: HTML , CSS , JS , D3 JS
	- Data Analytics of Sales Data : R
	- Customer Relationship Management tool : GMERN
	- Distributor Level Operations Manager : MERN ,Charts JS, D3 JS
	- Covid 19 data analytics with Relief Support : MERN , Charts JS , D3 JS
	- Portfolio Page and Pitcher Page : React, Firebase

## CV:
1. same tech stack , same about me
2. Projects:
	- sem2:
		-- CSE2003: C++
	- sem3:
		-- CSE2004 : PHP,MySQL
		-- CSE2005 : Java, Maven
	- sem4:
		-- CSE3001 : PHP,MySQL
		-- CSE3013 : Python, PyTorch,Tensorflow
		-- CSE3021 : Python, PyTorch,Tensorflow
	- sem5:
		-- CSE2006 : 8086 Assembly
		-- CSE3501 :
		-- CSE3009 : Arduino, C
		-- PHY1901 :


## References:
1. CSS cards:
	https://youtu.be/5DEq5cWNYt8 (done)
2. React Firebase image management:
	https://youtu.be/vUe91uOx7R0 (done)
3. React responsive design:
	 https://youtu.be/hQjlM-8C4Ps
4. React Firebase learning:
- https://youtu.be/VqgTr-nd7Cg (done)
- https://youtu.be/D9W7AFeJ3kk 
- insta:https://youtu.be/f7T48W0cwXM (in progress)
- linkedin:https://youtu.be/xP3cxbDUtrc (in progress)
- linked in,slack,snapchat:https://youtu.be/tbvguOj8C-o
- auth:https://youtu.be/PKwu15ldZ7k



# Firebase Information:
1. project account: neelchoksi1611@gmail.com
2. project name: learning-firebase-img-crud
3. docs:
https://firebase.google.com/docs/web/setup#available-libraries
https://firebase.google.com/docs/reference/js/firestore_

# Framer Motion React Animations:
1. https://www.framer.com/motion/
# svg images:
https://freesvg.org/1534129544




# try 2 :

## firebase
1. https://console.firebase.google.com/project/personalportfoliopitcher/overview
2. authentication
3. firestore db

# doc refs
1. firebase auth:https://firebase.google.com/docs/auth/where-to-start
2. react router dom: https://reactrouter.com/docs/en/v6/getting-started/overview
3. react router active : https://youtu.be/ZpBuaYkW09k
4. firebase schema:
- https://youtu.be/Ofux_4c94FI?list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ
- https://youtu.be/T-GfSkC1JpE
- https://youtube.com/playlist?list=PLpPVLI0A0OkJ-bu1zSiknRYEUIy33gCwp
- https://youtube.com/playlist?list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS


# doc refs following
4. firebase schema
- https://youtu.be/Ofux_4c94FI?list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ
what is cloud firestore?
-
why is it a horizontally scaling nosql document database in the cloud




- https://youtu.be/T-GfSkC1JpE

- https://youtube.com/playlist?list=PLpPVLI0A0OkJ-bu1zSiknRYEUIy33gCwp


- https://youtube.com/playlist?list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS



# implementation
## react 1

## react 2

### home compoenent [update , preview]
1. name
2. photo URL : from photo uploader
3. position
4. personal pitch
5. theme

- preview done
- update [to be implemented]


### about compoenent

### work experience compoenent [add , update ,delete , preview]

### projects compoenent
- grid of projects with the details :
for add , update :  
1. name
2. from date
3. to date
4. one line pitch (description)
5. photourl
6. link to pitcher page
7. actual link
8. github link
9. preview pitcher page
10. theme
for preview
- show above in cards

## pitcher page comeponent
- seen for only the one clicked grid card for project


for add , update :
1. name , from to date, github link , deployed link , actual link , pitcher statement from the project card
2. google slides link to embed pitcher Presentation(slide format)
3. youtube video link to embed pitcher presenetation (video format)
4. explain how to use the project, what the project is about, srs doc, sds doc , system design , user selling proposition in the content grid : (manual found with every product) add , update these grid cards as many as desired
- content grid card can be of form : [Title / Subtitle/ ImageUrl/Text/List/ Link/YouTube video link]
5. theme 
for preview:
- show above in a black box


### contact compoenent

### certificate compoenent

### language compoenent

### interests compoenent


### images component [add, update , delete, view]
