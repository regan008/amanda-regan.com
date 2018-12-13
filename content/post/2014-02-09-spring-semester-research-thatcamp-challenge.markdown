---
author: admin
comments: true
date: 2014-02-09 19:39:04+00:00
type: post
link: http://www.amanda-regan.com/2014/02/09/spring-semester-research-thatcamp-challenge/
slug: spring-semester-research-thatcamp-challenge
title: Spring Semester in Research and a THATCamp Challenge
wordpress_id: 546
categories:
- Coursework
- Digital History Fellowship
- Hacking THAT Camp's Yack
tags:
- hacking-that-camps-yack
---

**This post is the first in a set of 4 written by the [Digital History Fellows](http://chnm.gmu.edu/courses/fellowship/?page_id=11) at the [Roy Rosenzweig Center for History and New Media](http://chnm.gmu.edu/). The original post by Jannelle Legg can be found on the [Digital History Fellowship Blog](http://chnm.gmu.edu/courses/fellowship/).**




The spring semester is here and the first year DH fellows have begun our rotation into the Research division of CHNM.




To get the ball rolling, we spent a week working through the helpful tutorials at the[Programming Historian](http://programminghistorian.org/). As someone new to DH, with admittedly limited technical skill and knowledge, these were immeasurably useful. Each tutorial breaks content into smaller, less intimidating units. These can be completed in succession or selected for a particular topic or skill. While there is useful content for anyone, we focused our attention on [Python](http://programminghistorian.org/lessons/introduction-and-installation) and [Topic Modeling](http://programminghistorian.org/lessons/topic-modeling-and-mallet) with the aim of solving our own programming dilemma.




Our central challenge was to extract content across the THATCamp WordPress site to enable us to do some text analysis.




THATCamp, or “The Humanities and Technology Camp”, an unconference begun in 2008 at George Mason University, provides participants with space to collaborate and discuss the intersection of technology and the humanities. In five years there have been 148 THATCamps (Amanda French, THATCamp coordinator, works out the scale and scope of the camp’s impact in a blog post [here](http://thatcamp.org/04/24/how-long-how-much-how-many/)).




Each THATCamp has their own domain containing various posts about the event, proposals from attendees, and notes from sessions (for example:[dc2014.thatcamp.org](http://dc2014.thatcamp.org/)). While some camps are more active than others, every camp generates a large number of distinct posts. All of that content is uploaded to one multi-site WordPress install. On the backend, every additional THATCamp is given a distinctive number and a brand new set of tables is created (with upwards of 10 tables for each camp). With 148 separate camps (and an additional 32 upcoming camps), that translates into a massive database.




Given the wealth of information available, the THATCamp website offers an attractive opportunity to examine trends in DH discussion. However, there is no effective way for individuals to do so. If one wanted to learn more about the content discussed across multiple THATcamps, he or she could, theoretically, go to each individual page to read the text, but given the sizable amount of posts and the available, a more efficient option is necessary.




The goal of this project is to create a program using MySQL and Python that will allow us to collect the content available on the site and prepare it for further analysis (using tools like MALLET). This will require several steps:







  * access wordpress content which is stored in a MySQL database


    * create python code that logs into the database remotely





  * identify the tables from each THATCamp’s wordpress site within the database.


    * they are labeled sequentially i.e “wp_2_posts”, “wp_3_posts”, ect and interspersed with other tables like “wp_5_terms” and “wp_42_comments”.





  * grab content from each table that contains the blog posts


    * identify the difference between posts, pages, attachments (information found in the “post_type” column) and “publish” or “inherit”


    * query the content so that the script only pulls posts (not pages or attachments) and only published posts (rather than drafts).





  * create a text file of that content and save it


  * loop through the previous steps with each successive table until done.


Essentially, python builds the string using MySQL, drops it into the WordPress content as a query, where it digs around for the correct data until it receives the content back and then saves the file.

After all that content is downloaded, it needs to be cleaned up. Each post may (or may not) contain some stylistic information and deleted/modified posts may produce error messages that require a bit more work. There are two ways to do this: write another program to open each of those text files and strip out tags, then save them again as text files. Or, we can get the first string to work, then add additional scripts that process out the tags before saving the text file. Then the content is ready for analysis using tools like MALLET.
