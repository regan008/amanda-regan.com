---
author: Amanda Regan
comments: false
date: 2022-01-07
title: "History 8510: Methods in Digital History II"
subtitle: "Clemson University, Spring 2023"
officehours: Mondays from 11am-12pm. Wednesdays 10-12pm and by appointment.
officehourslink: #
officelocation: Hardin Hall 023
semester: Spring 2023
type: courses
extras:
credithours: 3
meetingdays:
university: Clemson University
section1num: 01
section1time: Wednesdays 4:00-7:00pm
location: Hardin Hall Conference Room
coursebanner: /images/banner-computationalhistory.png
samplesyllabus: TRUE
---


{{< rawhtml >}}
<br>
<div class="alert alert-secondary">
<i> This is a sample syllabus for History 8510: Methods in Digital History II at Clemson University. If you would like to view the online version of this syllabus you can do so at www.amanda-regan.com/courses/computationalhistory.</i>
</div>
<br>
{{< /rawhtml >}}

### Course Description
Welcome to History 8510, Methods in Digital History II. This course in computational history will teach you to create, manipulate, explore, and visualize historical data with the goal of advancing historical arguments.

This class is the second in a series of digital history courses at Clemson University. It is designed to build on History 8500: Digital Methods I. In that course you reviewed digital history projects and methods, experimented with out of the box tools, and developed your own digital research collections. In this course we will build on that and you will now learn to use computational methods to analyze historical sources in the programming language R.

This course will break down into roughly four units. The first, will provide an overview of computational history and look at examples of historical scholarship that have relied on computational methods to make historical arguments. The second, will focus on creating methodologically transparent and clean datasets from primary sources. You will learn to document those datasets and methodologies in a reproducible manner using GitHub and version control. The next unit focuses on the basics of the programming with an emphasis on computational thinking skills and the foundational patterns behind every programming language. Finally, in the last half of our course, we will survey various methods within computational history and ask ourselves, what kinds of historical questions do these methods make possible? Each week will focus on a new method -- visualization, mapping, text analysis, and network analysis. By the end of this course you'll have gained a basic familiarity and competency all of these approaches, but **more importantly** you'll understand how to ask and answer historical questions using the computational methods that are useful to you. At the conclusion of the course you will be prepared to produce a seminar paper in digital history and potentially employ digital methods for your dissertation.

{{< rawhtml >}}
<br>
{{< /rawhtml >}}

#### Why R?
There are numerous languages we could learn in this course but we'll focus on R which is common in the field of digital history as well as data science. With roots in statistical analysis, R is a high level programming language (meaning further from machine code or really complicated languages like C++). However, more important than the specific language are the programming fundamentals you will learn. After this class you may decide that Python, PHP, Go, or any other number of programming languages better suits your needs based on the historical questions you want to ask. Learning these fundamentals will allow you to pivot as needed and learn new languages, syntaxes, and tools.

{{< rawhtml >}}
<br>
{{< /rawhtml >}}

#### A Note on Data and Sources for this Class
For the most part, I've provided datasets for all of the assignments in this class so that you don't have to worry about learning the material *and* creating a historical dataset that will work with that approach. The only exception to this is the assignment on dataset creation but I will provided suggested primary source repositories in case you don't yet have a set of sources in mind. However, you are welcome (and encouraged) to use your own data for any assignment. Doing so will only further prepare you for your future classes in digital history and for your dissertation.

{{< rawhtml >}}
<br>
{{< /rawhtml >}}

### Learning goals:
**At the conclusion of this course you will:**
* be able to use a computer programming language (R) to make historical arguments.
* understand the basic computational patterns in programming.
* Be able to use documentation for programming languages and libraries to learn skills as they become applicable to your work.
* be able to create historical data from primary sources.
* Understand how to clean, organize, manipulate, and document that data.
* Critically evaluate existing historical data.
* be familiar with the major computational methodologies (i.e. mapping, text analysis etc) and what types of historical data and questions those methods are useful for. Understand their limitations and strengths.
* visualize your work and communicate your methods to other historians.

{{< rawhtml >}}
<br>
<hr>
<br>
{{< /rawhtml >}}

### Assignments & Grades

* **Worksheets/Problem Sets (40%):** Many weeks you will complete a worksheet that is based on the method for the week. With a few exceptions, these worksheets will be due the week after we discuss that method. Worksheets will be R Markdown documents that allow you to blend code and prose and in these worksheets you'll be asked to practice various concepts with a provided dataset. These worksheets will contain a mix of problems ranging from easy to very hard. The goal is not perfect completion of a worksheet and there isn't an answer key that I'll grade from. Rather, the goal here is to *practice the methodology at hand.* It's one thing to read about the methodology and read the documentation for the associated R packages, but it's another thing to actually apply that methodology to historical sources and ask questions of it. So, in other words, the goal of these worksheets is twofold. First, it is to grasp the basic programming concepts related to the methodology. Second, it is to understand what types of historical questions can be asked of that method and what kinds of arguments or interpretations it makes possible.
* **Dataset Biography (25%):** Each of you will create a Dataset Biography during the semester. Creating a historical dataset is a process that is fraught with decisions that impact how the dataset can be used. This assignment asks you to think about and document the process of collecting information from primary sources and turning it into data. Using primary sources of your choosing (I can provide suggestions if you need them), your data management plan should come up with a data structure and define key elements of the dataset. What is the dataset based on? What information will be captured and how will it be stored? Will you be importing external data? (i.e. Historical place names from an existing dataset or information about a person's term in office.) If so, where will that information come from? Who owns it? What are the methods behind the data collection design and process?
* **Historical Dataset Review (10%):** For most weeks during the semester one student will give a short presentation on a historical dataset. Much like a book review in a traditional historical seminar, this dataset review should interrogate the methods used to create the dataset. A handout will be provided in class, but your review should ask questions like: Are the data logically and consistently organized? What primary sources is the dataset based on? What is added and what is missing? Was the data processed? Are they layers of scholarly interpretation integrated into the dataset? What digital scholarly products have been produced using this dataset? How does the dataset shape the interpretation that the authors were able to reach? You'll sign up for a date and a dataset in the first weeks of class. I'll provide a list of suggestions, however, if you have a dataset that you'd like to review and isn't on my list email me to discuss the potential of including it.
* **Final Project** Data Driven Historical Vignette (25%) - At the conclusion of the course you will demonstrate the skills you have learned by writing a data driven historical vignette. This vignette can use a dataset provided for class or one of your own creation, but it will use data visualizations and analysis to make a historical argument about the data. It should blend prose and visualization in a .Rmd document and include citations to other scholarship where necessary. It should be no longer than 1500 words.

{{< rawhtml >}}
<br>
<hr>
<br>
{{< /rawhtml >}}

## Schedule

{{< rawhtml >}}
<br>
<div class="alert alert-secondary">
<b>Unit 1: What is Computational History and do historians need to learn to program?</b><br>
<i>The course will begin with an overview of computational history and look at examples of scholarship that has relied on computational methods to make historical arguments before learning the skills necessary to do so. We will ask, what does it mean to do computational history? Do historians need to learn to program? And what is data? How can we avoid creating historical datasets that replicate the violence of the archive?</i>
</div>
<br>
{{< /rawhtml >}}

#### January 11, 2023
* **Topic:** What is Computational History? Do Historians Need to Learn to Code?
* **Readings:**
	* David M. Berry. ["The Computational Turn: Thinking about the Digital Humanities](https://culturemachine.net/wp-content/uploads/2019/01/10-Computational-Turn-440-893-1-PB.pdf), *Cultural Machine* 12 (2011). [https://doi.org/10.2337/DB11-0751](https://doi.org/10.2337/DB11-0751)
	* Taylor Arnold & Lauren Tilton. [New Data? The Role of Statistics in DH](https://dhdebates.gc.cuny.edu/read/untitled-f2acf72c-a469-49d8-be35-67f9ac1e3a60/section/a2a6a192-f04a-4082-afaa-97c76a75b21c#ch24) in *Debates in the Digital Humanities 2019*, ed. Matthew K. Gold and Lauren F. Klein (University of Minnesota Press, 2019).
	* Fred Gibbs. [New Forms of History: Critiquing Data and Its Representations](https://www.oah.org/tah/issues/2016/february/new-forms-of-history-critiquing-data-and-its-representations/) in *The American Historian*, (February 2016).
	* Adam Crymble. [How to Solve Programming Problems if you're learning Programming](http://adamcrymble.blogspot.com/2014/04/how-to-solve-programming-problems-if.html), (2014).
* We'll spend sometime in class setting up dependencies on your machines. But ahead of class, do your best to **install each of the following:**
	* [R](https://cran.r-project.org/mirrors.html) (There are many locations that host or mirror the package and make it available for download. Just choose a CRAN mirror that is nearby and don't worry too much about this.)
	* [R Studio.](https://www.rstudio.com/)
	* [Homebrew](https://brew.sh/) (only if you have a mac).
	* Plain Text Editor. Choices include [Atom](https://atom.io/),  [Sublime Text](https://www.sublimetext.com/), [Visual Studio Code (mac only)](https://code.visualstudio.com/).
	* [Create a GitHub Account.](https://github.com/)
	* [Join the Slack Group](#)
----

#### January 18, 2023
* **Topic:** History and Data
* **Readings:**
	* Anelise Hanson Shrout. ["(Re)Humanizing Data: Digitally Navigating the Bellevue Almshouse"](https://crdh.rrchnm.org/essays/v01-10-(re)-humanizing-data/) in _Current Research in Digital History_ 1 (2018), [https://doi.org/10.31835/crdh.2018.10](https://doi.org/10.31835/crdh.2018.10)
	* Jessica Marie Johnson. ["Markup Bodies: Black [Life] Studies and Slavery [Death] Studies at the Digital Crossroads"](https://read.dukeupress.edu/social-text/article-abstract/36/4%20(137)/57/137032/Markup-BodiesBlack-Life-Studies-and-Slavery-Death) in *Social Text* 36, no 4, [https://doi.org/10.1215/01642472-7145658](https://doi.org/10.1215/01642472-7145658)
	* Abraham Gibson & Cindy Ermus. [The History of Science and the Science of History: Computational Methods, Algorithms, and the Future of the Field](https://www.journals.uchicago.edu/doi/full/10.1086/705543), *Isis* 110, no 3 (2019). [http://dx.doi.org/10.1086/705543](http://dx.doi.org/10.1086/705543)
	* The Turing Way Community, Becky Arnold, Louise Bowler et.al, [_The Turing Way: A Handbook for Reproducible Data Science_.](https://the-turing-way.netlify.app/welcome.html) v0.0.4, Zenodo, 2019. _DOI.org (Datacite)_, https://doi.org/10.5281/ZENODO.3233986.
	* Geir Kjetil Sandve, Anton Nekrutenko, James Taylor, and Eivind Hovig. [Ten Simple Rules for Reproducible Computational Research](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285), PLOS Computational Biology 9(10): e1003285. [https://doi.org/10.1371/journal.pcbi.1003285](https://doi.org/10.1371/journal.pcbi.1003285)
	* Ben Marwick, Carl Boettiger & Lincoln Mullen (2018) [Packaging Data Analytical Work Reproducibly Using R (and Friends),](https://www.tandfonline.com/doi/full/10.1080/00031305.2017.1375986) *The American Statistician*, 72:1, 80-88, DOI: [10.1080/00031305.2017.1375986](https://doi.org/10.1080/00031305.2017.1375986)
	* Read through Karl Broman's [Git/GitHub Tutorial](https://kbroman.org/github_tutorial/)
---

{{< rawhtml >}}
<br>
<div class="alert alert-secondary">
<b>Units 2 & 3: Historical Data. Programming and Data Analysis Basics.</b><br>
<i>
<p>After taking time to define the field of computational history, we will learn how to create methodologically transparent and clean datasets from primary sources. We'll also learn how to document those datasets so others can review your work in a reproducible manner. As the field of digital history evolves and digital scholarship becomes more frequent, it'll be increasingly important that our methodologies are transparent so that peer-review can occur. That means engaging with and describing our methods in more detail than historians typically do. Historians can learn from those in data science and the sciences on this front. We will learn to use GitHub to make our code and data available and we'll review and interrogate existing datasets.</p>

<p>In this unit we'll also begin learning the programming language R. R is a common language for digital historians (although it isn't the only one). While R is the language of choice today, it is inevitable that over the course of a student's career the languages that digital humanists use for doing computational history will evolve. Unlike learning a foreign language, computer languages change frequently as technology advances. But what doesn't change is the basic computational thinking skills and patterns that undergird each language. Its fairly easy to look up the syntax and functions up to adapt to a new language -- but it is these core skills that will serve a student repeatedly throughout their career. Learning these basics will allow them to adapt and evolve alongside technology and be confident in their ability to learn something new in order to ask and answer a historical question.</i></p>
</div>
<br>
{{< /rawhtml >}}


#### January 25, 2023
* **Topics:**
	* Discussion: Reproducible Research
	* Intro to Git & the Command line
* **Reading:**
	* The Turing Way Community, Becky Arnold, Louise Bowler et.al, [_The Turing Way: A Handbook for Reproducible Data Science_.](https://the-turing-way.netlify.app/welcome.html) v0.0.4, Zenodo, 2019. _DOI.org (Datacite)_, https://doi.org/10.5281/ZENODO.3233986.
	* Geir Kjetil Sandve, Anton Nekrutenko, James Taylor, and Eivind Hovig. [Ten Simple Rules for Reproducible Computational Research](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285), PLOS Computational Biology 9(10): e1003285. [https://doi.org/10.1371/journal.pcbi.1003285](https://doi.org/10.1371/journal.pcbi.1003285)
	* Ben Marwick, Carl Boettiger & Lincoln Mullen (2018) [Packaging Data Analytical Work Reproducibly Using R (and Friends),](https://www.tandfonline.com/doi/full/10.1080/00031305.2017.1375986) *The American Statistician*, 72:1, 80-88, DOI: [10.1080/00031305.2017.1375986](https://doi.org/10.1080/00031305.2017.1375986)
	* Read through Karl Broman's [Git/GitHub Tutorial](https://kbroman.org/github_tutorial/)
* **Activities (to be completed before class):**
	* [Introduction to the Bash Command Line](https://programminghistorian.org/en/lessons/intro-to-bash) (For mac users.)
	* [Introduction to the Windows Command Line with PowerShell](https://programminghistorian.org/en/lessons/intro-to-powershell) (For windows users.)
	* [Hello World: Git Tutorial](https://docs.github.com/en/get-started/quickstart/hello-world)
* **Assignments:**
	* Create a GitHub repository for your weekly worksheets. Share the link to the repository on Slack.
		* Your rep should include a `Readme.md` file that explains what the repo contains (or will contain).  
---



#### February 1, 2023
* **Topic:**
	* Why R?
	* R Basics
* **Reading:**
	* Bruno Rodrigues. *Modern R*, [Chapter 1: Getting to know R Studio](https://b-rodrigues.github.io/modern_R/objects-types-and-useful-r-functions-to-get-started.html)
	* Hadley Wickham & Garrett Grolemund. *R for Data Science*: Chapters 2 (Basics), 4 (Scripts), 6 (Projects), 8 (Data Import), and 21 (R Markdown).
	* [R Markdown Document](https://rmarkdown.rstudio.com/)
* **Assignments:**
	* The R Basics Worksheet Due

---
#### February 8, 2023
* **Topics:**
	* Information as Data (Tidy Data)
* **Reading:**
	* Karl W. Broman and Kara H. Woo, “Data Organization in Spreadsheets,” _American Statistician_ 72, no. 1 (2018): 2–10, [https://doi.org/10.1080/00031305.2017.1375989](https://doi.org/10.1080/00031305.2017.1375989).
	* Hadley Wickham, “[Tidy Data](http://www.jstatsoft.org/v59/i10),” _Journal of Statistical Software_ 50, no. 10 (2014).
	* Watch Hadley Wickham, “[Tidy Data and Tidy Tools](http://vimeo.com/33727555),” NYC Open Statistical Computing Meetup, Dec. 2011.
* **Assignment:**
	* Create a dataset: Using the principles of Tidy Data create a well structured csv file before class. You should use either a primary source dataset that you have already, or one of the primary source sets in the course GitHub Repository.
* **Homework:**
	* Complete the Tidy Data Worksheet (focuses on data structures, functions, and loops).
---
#### February 15, 2023
* **Topics:**
	* Wrangling & Manipulating Data (Tidy Data pt 2)
* **Reading:**
	* Wickham & Groulemund, *R for Data Science*, chs 5, 12, 13.
	* [The Tidy Tools Manifesto](https://cran.r-project.org/web/packages/tidyverse/vignettes/manifesto.html)
	* [Welcome to the Tidyverse](https://cran.r-project.org/web/packages/tidyverse/vignettes/paper.html)
	* [Introduction to dplyr](https://cran.r-project.org/web/packages/dplyr/vignettes/dplyr.html)
* **Assignments:**
	* Tidy Data Worksheet Due
* **Complete after class:**
	* Data Manipulation Worksheet (focuses on data manipulation using the tools provided in the Tidyverse)

---

{{< rawhtml >}}
<br>
<div class="alert alert-secondary">
<b>Unit 4: Survey of Methods in Computational History</b><br>
<i>Finally, in the last half of our course, we will survey various methods within computational history and ask ourselves, what kinds of historical questions do these methods make possible? Each week will focus on a new method -- visualization, mapping, text analysis, and network analysis. By the end of this course students will have gained a basic familiarity and competency all of these approaches, but <b>more importantly</b> students will understand how to ask questions of the methods that are useful to them. Students will be prepared not only to use these methods in their own work but converse about the strengths and weaknesses of each. At the conclusion of the course they will be prepared to produce a seminar paper in digital history and potentially employ digital methods in their dissertation.</i>
</div>
<br>
{{< /rawhtml >}}

#### February 22, 2023
* **Topics:**
	* Data visualization
* **Reading:**
	* Hadley Wickham & Garret Groulemund, *R for Data Science,* chs 1, 3, 22.
	* Kieran Healy, *Data Visualization*, 1, 3, 4.
	* David Staley, *Computers, Visualization, and History: How New Technology will Transform Our Understanding of the Past*, Introduction and Chapter 2.
	* Look at:
		* [The R Graph Gallery](https://www.r-graph-gallery.com/)
		* [Top 50 ggplot2 Visualizations](http://r-statistics.co/Top50-Ggplot2-Visualizations-MasterList-R-Code.html)
* **Assignments:**
	* Data Manipulation Worksheet Due.
	* Find one historical visualization and post it in the slack channel. In your post, describe why this visualization is useful (or why it is flawed.)
* **Complete After Class:**
	* Data Visualization Worksheet
---
#### March 1, 2023
* **Topic:**
	* Using Exploratory Data Analysis to Ask and Answer Questions
* **Reading:**
	* Hadley Wickham & Garret Groulemund, *R for Data Science*, Chapter 7
	* Roger Peng, [Exploratory Data Analysis with R](https://bookdown.org/rdpeng/exdata/), Chapters 3-6
	* Kieran Healy and James Moody. ["Data Visualization in Sociology",](https://kieranhealy.org/files/papers/data-visualization.pdf) *Annual Review of Sociology* 40 (July 2014). DOI:10.1146/annurev-soc-071312-145551
* **Assignments:**
	* Data Visualization Worksheet Due
* **Complete after class:**
	* Exploratory Data Analysis Worksheet

---

#### March 8, 2023
* **Topic:**
	* Creating Historical Geographic Data
* **Reading:**
	* Jannelle Legg. [“Mapping Deaf Missions.”](https://scholarship.rrchnm.org/legg-dissertation/) Also look at the data in Legg's [GitHub repository.](https://github.com/jannellelegg/MappingDeafMinistry/tree/master)
	* Cameron Blevins and Richard W. Helbock. ["US Post Offices."](https://cblevins.github.io/us-post-offices/)
		* Be sure to read the [Data Biography](https://cblevins.github.io/us-post-offices/data-biography/) then explore [Gossamer Network](https://gossamernetwork.com/)
	* Jordan Bratt. ["Geolocating the Towns from *A New Nation Votes*"](https://earlyamericanelections.org/blog/2017/08/22/geolocating-towns.html) on [*Mapping Early American Elections.*](https://earlyamericanelections.org/)
	* Review the [`ggmap` documentation.](https://github.com/dkahle/ggmap)
	* Peter Prevos. [Geocoding with `ggmap` and the Google API](https://www.r-bloggers.com/2018/10/geocoding-with-ggmap-and-the-google-api/)
* **Assignments:**
	* Exploratory Data Analysis Worksheet due.
* **Complete after class:**
	* Geocoding & Geographic Data Worksheet
---
#### March 15, 2023
* **Topics:**
	* Maps
* **Reading:**
	* Robert K. Nelson and Edward L. Ayers, eds., [_American Panorama: An Atlas of United States History_](https://dsl.richmond.edu/panorama/)
	* Cameron Blevins, "Space, Nation, and the Triumph of Region: A View of the World from Houston", _Journal of American History_, Volume 101, Issue 1, June 2014, Pages 122–147, [https://doi.org/10.1093/jahist/jau184](https://doi.org/10.1093/jahist/jau184)
	* [`Leaflet` library documentation ](https://cran.r-project.org/web/packages/leaflet/index.html)
		* You may also find the [documentation on the leaflet website useful.](https://leafletjs.com/)
	* [`sf` library documentation](https://cran.r-project.org/web/packages/sf/index.html)
	* [`tigris` library documentation](https://cran.r-project.org/web/packages/tigris/index.html)
* **Assignments:**
	* Geocoding & Geographic Data Worksheet due.
* **Complete after class:**
	* Mapping worksheet

---
#### March 22, 2023
* Spring Break

---

#### March 29, 2023
* **Topic:**
	* Text Analysis I: The Basics
* **Reading:**
	* Matthew K. Gold and Lauren F. Klein et al., “[Forum: Text Analysis at Scale](http://dhdebates.gc.cuny.edu/debates/text/93),” in _Debates in the Digital Humanities 2016_ (University of Minnesota Press, 2016), 525–568.
	* Kasper Welbers, Wouter Van Atteveldt, and Kenneth Benoit. ["Text Analysis in R,"](https://doi.org/10.1080/19312458.2017.1387238) *Communication Methods & Measures* 11, no 4 (2017). https://doi.org/10.1080/19312458.2017.1387238
	* Taylor Arnold, Nicolas Ballier, Paula Lisson, and Lauren Tilton. ["Beyond lexical frequencies: using R for text analysis in the digital humanities,"](https://doi.org/10.1007/s10579-019-09456-6) *Language Resources and Evaluation* 53 (2019). https://doi.org/10.1007/s10579-019-09456-6
* Review the Documentation for:
	* [`quanteda`](https://quanteda.io/)
	* [`cleanNLP`](https://statsmaths.github.io/cleanNLP/)

---

#### April 5, 2023
* **Topic:**
	* Text Analysis II: Topic Modeling, Text Reuse, and Clustering
* **Reading:**
	* Joshua Catalano, “Digitally Analyzing the Uneven Ground: Language Borrowing Among Indian Treaties,” _Current Research in Digital History_ 1 (2018): [https://doi.org/10.31835/crdh.2018.02](https://doi.org/10.31835/crdh.2018.02).
	- Ryan Cordell, “Reprinting, Circulation, and the Network Author in Antebellum Newspapers,” _American Literary History_ 27, no. 3 (2015): 417–445, [https://doi.org/10.1093/alh/ajv028](https://doi.org/10.1093/alh/ajv028)
	*  Andrew Goldstone and Ted Underwood, “[The Quiet Transformations of Literary Studies: What Thirteen Thousand Scholars Could Tell Us](http://muse.jhu.edu/journals/new_literary_history/v045/45.3.goldstone.pdf)” in *New Literary History* 45, no.3 (Summer 2014). https://doi.org/10.1353/nlh.2014.0025
		* Also explore the accompanying website [*Quiet Transformations*](https://www.sas.rutgers.edu/virtual/ag978/quiet/) and a related project [_Signs@40: Feminist Scholarship through Four Decades_](http://signsat40.signsjournal.org/)
* **Assignments:**
	* Text Analysis Worksheet due
* **Complete after class:**
	* Topic Modeling & Clustering Worksheet

---

#### April 12, 2023  
* **Topic:**
	* Topic Modeling III: Word Embeddings (first half of class)
	* Final Project Sandbox Time (second half of class)
- **Readings:**  
	- Ben Schmidt, “[Vector Space Models for the Digital Humanities](http://bookworm.benschmidt.org/posts/2015-10-25-Word-Embeddings.html)” (October 25, 2015).
	-  Ben Schmidt, “[Rejecting the Gender Binary: A Vector-Space Operation](http://bookworm.benschmidt.org/posts/2015-10-30-rejecting-the-gender-binary.html)” (October 30, 2015).
	- Sydney Bowen. ["Using Temporal Word Embeddings to Reveal the Shifting Notion of Beauty in _Vogue_"](https://www.canva.com/design/DAEkFyjYuoE/tkVh45du5_tFiXxYMljoAw/view?website#2:using-temporal-word-embeddings-to-reveal-the-shifting-notion-of-beauty-in) from *Robots Reading Vogue.*
	- Sandeep Soni, Lauren F. Klein, Jacob Eisenstein, ["Abolitionist Networks: Modeling Language Change in Nineteenth-Century Activist Newspapers,"](https://culturalanalytics.org/article/18841-abolitionist-networks-modeling-language-change-in-nineteenth-century-activist-newspapers), *Journal of Cultural Analytics* 6, no. 1 (2021).
- **Assignments:**
	- Topic Modeling Worksheet Due
- **Complete After Class:**
	- Word Embeddings Worksheet

---

#### April 19, 2023
* **Topic:**
	* Networks (first half of class)
	* Final Project Sandbox Time (second half of class)
* **Reading:**
	* Yann C. Ryan and Sebastian E. Ahnert, ["The Measure of the Archive: The Robustness of Network Analysis in Early Modern Correspondence,"](https://culturalanalytics.org/article/25943) *The Journal of Cultural Analytics* 6, no. 3 (2021).
	* Jim Casey, ["A Committee of the Whole,"](https://crdh.rrchnm.org/essays/v02-02-a-committee-of-the-whole/) *Current Research in Digital History*, 2 (2019).
- **Assignments:**
	- Word Embeddings Worksheet
* **Complete after class:**
	* Networks Worksheet


---

#### April, 26, 2023
* **Topic:**
	* Computer Vision & Next steps in Computational History (first half of class)
	* Final Project Sandbox Time (second half of class)
* **Reading:**
	* Taylor Arnold, Lauren Tilton, and Annie Berke, ["Visual Style in Two Network Era Sitcoms,"](https://culturalanalytics.org/article/11045) *Journal of Cultural Analytics*, 4, no 2 (2019).
		* See also Taylor Arnold & Lauren Tilton, ["Distant Viewing Toolkit: A Python Package for the Analysis of Visual Culture"](https://statsmaths.github.io/pdf/2020-dvtoolkit-joss.pdf), *Journal of Open Source Software*, 45, no. 5 (2020).
		* Lauren Tilton, ["The Visual Turn in DH,"](http://laurentilton.com/files/Keynote_Tilton_October2019.pdf) Keynote, *Digital Humanities and the Visual World Symposium*
* **Assignments:**
	* Network Worksheet Due

---

#### Finals Week
* Public presentation of projects for department and campus community.
