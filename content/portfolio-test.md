---
title: "Digital Humanities Portfolio"
description: ""
draft: false
lastmod: "2019-10-30"
slug: "portfolio-test"
---
My digital humanities work is reflective of my commitment to using digital technology to highlight diverse voices and promote the reevaluation of research methodologies, pedagogical approaches, and scholarly infrastructure.

I have dedicated time to learning digital history tools and techniques--such as text analysis, databases, and mapping—as well as relevant programming languages such as R, Python, JavaScript, and PHP. I am also fluent in basic web design principals and languages including HTML, CSS, as well as basic server management.

Below is a compilation of some of my digital humanities work which includes major projects at the Roy Rosenzweig Center for History and New Media, numerous visualizations that I've built, course projects, and several examples of Digital Humanities Projects where I have tackled the project's website design and functionality. Click each image below to see a link and description of the project. To see how I've incorporated digital technology in my courses and teaching see my teaching page.

<hr>

<img class="mr-3" src="/images/mgg.png" width="200px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

## Mapping the Gay Guides

[Mapping the Gay Guides (MGG)](www.mappingthegayguides.org) is an in-progress collaboration between myself and [Dr. Eric Gonzaba](http://ericnolangonzaba.net/). MGG draws on the Damron Guides, an early but longstanding travel guide aimed at gay men since the early 1960s. An LGBT equivalent to the African American “green books,” the Damron Guides contained lists of bars, bathhouses, cinemas, hotels and cruising sites in every U.S. state. MGG seeks to associate geographical coordinates with each location mentioned within the Damron Guides and provide an interface for visualizing the growth. Made up of a public-facing and freely available web app as well as a series of digital vignettes that analyze the data using historical context, MGG stands to make a significant contribution to scholars understanding of the ways in which LGBTQ people negotiated and appropriated public space to form community.

Using a subset of the data digitized for this project, we have also proposed an article entitled “Mapping the New Gay South: Queer Space and Southern Life 1965-1980” for publication in _Southern History Quarterly_. In this article, we argue that the appearance and utilization of gay space as an integral part of southern life helped create what we refer to as “the New Gay South,” a robust but close-knit network of queer geography far from the gay meccas of San Francisco or New York.

---

<img src="/images/portfolio_pressforward.png" width="200px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">


## PressForward

[PressForward](www.pressforward.org) is a free and open-source software project that enables teams of researchers to aggregate, filter, and disseminate relevant scholarship using the popular WordPress web publishing platform. First, as the Graduate Research Assistant, and later the Software Development Manager, I collaborated with team members to outline development priorities and milestone goals while also overseeing the testing and release processes. I also built the [PressForward TurnKey Theme](https://pressforward.org/version-2-0-of-the-pressforward-turnkey-theme-released/) which allows publications to make PressForward statistics easily viewable by readers. In 2017 I undertook redesigning the PressFoward.org website.

---
<img src="/images/portfolio-dhnow.png" width="200px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">


## Digital Humanities Now

[Digital Humanities Now](www.digitalhumanitiesnow.org) is PressForward’s flagship publication which seeks to curate and publish scholarly literature such as white papers and grant reports that otherwise may not have had a venue for publication. Using the PressForward plugin and relying on a community of volunteer editors, DHNow has sought to encourage scholars to share their research and learned expertise on the open web. DHNow had developed methodologies and technologies to facilitate the aggregation and curation of gray literature-scholarly work (white papers, presentations, research reports, essays etc.) that may not otherwise have a formal venue for publication.

As the Managing Editor of Digital Humanities Now, I have helped to transition the journal into a self-sustaining model of open scholarship and publication on the web by revamping the website's design and building backend user management software and systems to help the publication manage its growing body of editors and reduce the institutional overhead required to run the journal.

---

## Visualization: Mining <i>My Day</i>
<img src="/images/portfolio-mininger.png" width="250px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

This <a href='http://shinyapps.io'>Shiny</a> app visualizes the common themes, or 'topics', in Eleanor Roosevelt's <i>My Day</i> columns. From December 1935 until September 1962, Roosevelt authored a nationally syndicated newspaper column entitled <i>My Day</i> and because Roosevelt did not keep any sort of diary and her appointment books were often incomplete, the <i>My Day</i> columns have become a valuable source for historians. The columns, authored six days a week until January 1961 and then three days a week thereafter, represent the only consistent account of her public activities. Thanks to the work of the Eleanor Roosevelt Papers’ staff, who transcribed each My Day column and made them available online, anyone with internet access can now explore this important piece of history. <br> <br>The <a href='https://www2.gwu.edu/~erpapers/myday/browsebyyear.cfm'>online repository of My Day columns</a> allows users to look for columns by year or find a particular word or phrase within the collection through keyword search. Keyword search however, requires a level of specificity and familiarity with the topics discussed within the archive. A topic model allows for a more thematic and interactive way of exploring the archive. Providing a thematic overview, a topic model allows users a different entry point into the archive generated by the content (words) of the documents rather than a predetermined organizing schemata such as Library of Congress subject headings or even keywords.<br><br> In collaboration with <a href='http://joshuacatalano.org'>Joshua Catalano,</a> we used MALLET to divide all of the 7,987 My Day columns (as plain text files) into 70 'topics.' Each 'topic' is a set of words that frequently co-occur together throughout the corpus. These words indicate themes or discourses within the corpus. With Python and R, we then transformed the MALLET output into several different types of visualizations using Shiny and a number of other packages. The benefit of using Shiny is that it allows users to change specific input parameters such as the topic, number of words, and the number of documents to display. The resulting app includes a word cloud representing the top words in the topic, a chart depicting the prominence of the topic over time, a map detailing the locations where the most prominent columns in the topic were written, and a list of the prominent columns in the topic (with a link to the text). Additionally, a tab at the bottom of the page allows users to view the top words in all 60 topics.

---

<img src="/images/portfolio-mappinggyms.png" width="200px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

## Visualization: Mapping Gymnasiums in Boston

This visualization was completed for Clio Wired 3: Programming for Historians with Lincoln Mullen. The visualization, built in D3.js with a custom basemap marries census data with a dataset created from city directories and reports. Josiah Quincey, the mayor of Boston elected in 1889, implemented a new system of municipal baths and gymnasiums in the city during the Progressive Ear. The gymnasiums were designed to encourage moral behavior, hygiene, foster community, and encourage exercise for the city's residents. These gymnasiums, although open to all residents, were placed largely in immigrant heavy neighborhoods and reflected a focus on physical culture that was reminiscent of life in Eastern Europe. This visualization shows the location of each municipal and private gymnasium in Boston between 1914 and 1925 and provides some information about the ward that these gymnasiums existed in. Clicking on the public gymnasiums (teal circles) or the private gymnasiums (dark blue circles) pulls up relevant information about the ward the gymnasium was located in. The size of the public gymnasiums corresponds to the total attendance in each year and clicking on a public gymnasium populates a pie chart with the breakdown of class attendance at that gym. This visualization was created as a case-study and proof of concept for a larger project which would map data about gymnasium participants using Dudley Allen Sargent's extensive collection of measurement cards and information collected for each gymnasium participant.

---

<img src="/images/portfolio-rrchnm20site.png" width="200px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

## RRCHNM20 Archive

As a Digital History Fellow at the Roy Rosenzweig Center for History and New Media, I collaborated with [Jannelle Legg](http://jannellelegg.com/) to create an Omeka archive that contains grants and supporting documents from the first twenty years of RRCHNM. We designed an information architecture that would capture the data contained on the coversheet of grant applications and we each input documents related to one of the center's major projects. The item metadata is designed in a way that is meant to be flexible and allow researchers to use the API to ask and answer questions about the history of the Roy Rosenzweig Center for History and New Media. This archive continues to expand and it was used as the basis for a network visualization that highlighted the relationship between people and projects at RRCHNM during the Twentieth Anniversary conference.

---
<img class="mr-3" src="/images/portfolio-rrchnm20.png" width="200px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

## RRCHNM20 Visualization
As a Digital History Fellow at the Roy Rosenzweig Center for History and New Media, I collaborated with <a href='www.jannellelegg.com'>Jannelle Legg</a> to create an Omeka archive that contains grants and supporting documents from the first twenty years of RRCHNM. We designed an information architecture that would capture the data contained on the coversheet of grant applications and we each input documents related to one of the center's major projects. The item metadata is designed in a way that is meant to be flexible and allow researchers to use the API to ask and answer questions about the history of the Roy Rosenzweig Center for History and New Media. This archive continues to expand and it was used as the basis for a network visualization that highlighted the relationship between people and projects at RRCHNM during the Twentieth Anniversary conference.

[Visualization](#)

---
# Design Work and Metadata Consultations
<br>

<img src="/images/portfolio-wgh.png" width="250px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

## Wearing Gay History

I served as the Digital Design Consultant for Wearing Gay History, a digital public history project built in Omeka and consisting of digitized t-shirts from numerous lesbian, gay, bisexual, and transgender archives across the United States. As the Digital Design Consultant I collaborated with site creator Eric Gonzaba to redesign the site appearance and functionality.

---

<img src="/images/portfolio-aptrails.png" width="250px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

## Appalachian Trail Histories

Custom Omeka theme and design for Mills Kelly.

---

<img src="/images/portfolio-clio2.png" width="250px" style="float:left; margin-right: 25px;"alt="Generic placeholder image">

## Clio Wired 2 Digital Design Project

Students in the PhD program at George Mason University are required to take a sequence of two digital history courses known as Clio Wired I and II. The first semester of Clio Wired focuses on the theory of and debates in the field of digital history. This website is the homepage for the second half of Clio Wired, which focuses on Creating History in New Media. Over the course of this semester we learned the basics of design and visual communication. Included on this website are several assignments that demonstrate an understanding of web design, typography, and design for historical websites. While the assignments were primarily about web design fundamentals, the content is equally important. The content focused on my historical interests, mainly the history of women's physical culture between 1880 and 1950.
