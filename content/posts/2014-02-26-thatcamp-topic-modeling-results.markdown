---
author: admin
comments: true
date: 2014-02-26 14:30:57+00:00
type: post
link: http://www.amanda-regan.com/2014/02/26/thatcamp-topic-modeling-results/
slug: thatcamp-topic-modeling-results
title: THATCamp Topic Modeling Results
wordpress_id: 589
categories:
- Digital History Fellowship
- Hacking THAT Camp's Yack
tags:
- hacking-that-camps-yack
---

**This post is the last in a set of 5 written by the [Digital History Fellows](http://chnm.gmu.edu/courses/fellowship/?page_id=11) at the [Roy Rosenzweig Center for History and New Media](http://chnm.gmu.edu/). The original post, which was collectively written by the DH Fellows, can be found on our [Digital History Fellowship Blog](http://chnm.gmu.edu/courses/fellowship/).**



We have spent the last few weeks working to build a python script that would allow us to download and prep all of the THATCamp blog posts for topic modeling in MALLET (for those catching up, we detailed this process in a series of [previous posts](http://chnm.gmu.edu/courses/fellowship/)). As our last post [detailed](http://chnm.gmu.edu/courses/fellowship/?p=448), we encountered a few more complications than expected due to foreign languages in the corpus of the text.  After some discussion, we worked through these issues and were able to add stoplists to the script for German, French, and Spanish.  Although this didn’t solve all of our issues and some terms do still show up (we didn’t realize there was Dutch too), it led to some interesting discussion about the methodology behind topic modeling.  Finally we were able to rerun the python script with the new stopwords and then feed this new data into MALLET.

MALLET, or MAchine Learning for Language Toolkit, is an open source java package that can be used for natural language processing.  We used the [Programming Historian’s tutorial on MALLET](http://programminghistorian.org/lessons/topic-modeling-and-mallet).  Topic modeling is an important digital tool that analyzes a corpus of text and seeks to extract ‘topics’ or sets of words that are statistically relevant to each other.  The result is a particular number of word sets also known as “topics.” In our case we asked MALLET to return twenty topics based on our set of THATCamp blog posts. The topics returned by MALLET were:




  1. xa digital art history research university scholarship graduate field center publishing open today institute cultural knowledge professor online world


  2. university games pm humanities http digital september knowledge kansas saturday game conference state registration play information representation workshop boise


  3. thatcamp session sessions day participants free technology page unconference university nwe conference discussion information google propose hope event proposals


  4. people make time questions things idea access process ideas world work great making lot build add kind interesting nthe


  5. digital humanities data tools text projects research scholars omeka texts tool analysis scholarly archive reading online based book scholarship


  6. digital humanities session dh library libraries support projects open discussion librarians amp talk work journal sessions propose faculty list


  7. history public digital historical collections museum media project projects mobile online maps museums collection historians users sites site applications


  8. games zotero thinking place game code end cultural chnm hack year documentation humanists version number pretty application visualization set


  9. session open area data workshop tool knowledge teach interested bay prime bootcamp gis workshops reality night thatcampva virginia lab


  10. work interested students ways teaching post working talk writing blog love issues don conversation create collaborative thinking start discuss


  11. project web content information tools community resources archives experience research create learn creating learning share development materials specific provide


  12. xb xa del se humanidades digitales xad al madrid www mi este aires buenos digital personas taller cuba parte


  13. caption online id align width open attachment accessibility women read university american building accessible gender media november floor race


  14. data http org session www open twitter texas good wikipedia nhttp status wiki start commons drupal metadata people crowd


  15. xa workshop session omeka publishing http gt propose org workshops friday docs open hands amp doc studies topic discuss


  16. students digital learning technology education media college faculty humanities research game pedagogy student courses classroom assignments skills arts social


  17. xa oral digital humanities video event local application community offer interviews planning center education software jewish weekend college histories


  18. een het voor op te zijn deze met workshop kunnen om digitale bronnen data onderzoek historici nl wat worden


  19. social media technology studies arts performance museums xcf play participants cultural performing reading st email object platforms interaction technologies


  20. xa thatcamp org http thatcamps details read movement published planned access nthatcamp browse software follow break series google join


As you can see we have an impressive list of terms. Before we organize them in a meaningful way, we will briefly point out a common problem that scholars may confront when working with MALLET. As you may notice, we realized that we have quite a few errors such as ‘xa’ that appear in the results.  While we don’t have a great answer for why this is, we think it has to do with complex encoding issues related to moving content from a Wordpress post that is stored in a MySQL database using Python. Each of these uses a different coding system and the error appears to be related to non-breaking spaces.  A little bit of Googling revealed that the non-breaking space character used by Wordpress is ‘&nbsp’ which is different that the ASCII encoding of a non-breaking space ‘/xa0’.  When Python reads Wordpress’s non-breaking space character ‘&nbsp’, it understands the space but encodes it as the UTF-8 version ‘/xa0’.  As second year fellow Spencer Roberts explained the issue is that meaning is lost in translation. He used this analogy: Python reads and understands the French word for “dog” then translates it and returns the English word.

In this case, what shows up in our results is not ‘/xa0’ but rather ‘xa’ because we had stripped out all of the non-alphanumeric characters prior to running the data through MALLET.  We think the errors such as ‘xa’ and ‘xb’ are because of these encoding issues.  Anyone interested in clarifying or continuing this discussion with us can do so in the comments.

Returning to our MALLET results, our next challenge was to present and analyze the large amount of data.  We drew from both [Cameron Blevins](http://historying.org/2010/04/01/topic-modeling-martha-ballards-diary/) and [Robert K. Nelson](http://dsl.richmond.edu/dispatch/) in our approach and decided to group the topics by theme so that trends could be more easily identified.  We determined that there were about seven broad themes in the corpus of THATCamp blog posts from 2008 to present:




  1. Accessibility


  2. Building


  3. Community


  4. International


  5. Pedagogy


  6. Public Digital Humanities


  7. THATCamp Structure


Utilizing these larger categories, we were able to create several charts that demonstrate the changes over time with the THATCamps. The charts are available below; you’ll note that we have graphed them using percentages. The percentages that appear represent the number of times that topic occurred within the posts at that camp.

[caption id="attachment_489" align="aligncenter" width="584"][![Chart of Topics Overall](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.27.42-PM-1024x780.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.27.42-PM.png) Topics Overall[/caption]
<table cellpadding="0" width="450" cellspacing="0" border="0" >
<tbody >
<tr style=""border: none;" >

<td >

[caption id="attachment_504" align="alignnone" width="150"][![Chart of the topic Accessibility.](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.16-PM-150x150.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.16-PM.png) Topics relating to Accessibility[/caption]
</td>

<td >

[caption id="attachment_503" align="alignnone" width="150"][![Graph of the Community Topic](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.27-PM-150x150.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.27-PM.png) Topics relating to Community[/caption]
</td>

<td >

[caption id="attachment_502" align="alignnone" width="150"][![Graph of the THATCamp Structure Topics](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.35-PM-150x150.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.35-PM.png) Topics relating to THATCamp Structure[/caption]
</td>
</tr>
<tr >

<td >

[caption id="attachment_501" align="alignleft" width="150"][![Graph of topics relating to Pedagogy](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.47-PM-150x150.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.47-PM.png) Topics relating to Pedagogy[/caption]
</td>

<td >

[caption id="attachment_500" align="alignleft" width="150"][![Graph of topics relating to Public Digital Humanities](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.56-PM-150x150.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.52.56-PM.png) Topics relating to Public Digital Humanities[/caption]
</td>

<td >

[caption id="attachment_499" align="alignleft" width="150"][![Graph of topics relating to building in the humanities.](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.53.04-PM-150x150.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.53.04-PM.png) Topics relating to Building[/caption]
</td>
</tr>
<tr >

<td >

[caption id="attachment_498" align="alignleft" width="150"][![Topics relating to the international influence of THATCamp.](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.53.13-PM-150x150.png)](http://chnm.gmu.edu/courses/fellowship/wp-content/uploads/2014/02/Screen-Shot-2014-02-20-at-5.53.13-PM.png) International Digital Humanities[/caption]
</td>

<td >
</td>

<td >
</td>
</tr>
</tbody>
</table>


We found these results to be particularly interesting. A larger overall conclusion is that THATCamp content emphasizes the various applications of digital technology to scholarship, from public uses to tool building or teaching. Since THATCamp was founded, it has become a more varied community. However close examination of the topic models this exercise produced reveals that a number of the same terms appear frequently across all of the topic models (“digital”, for instance, appears in 8 of the 20 topics). This references the way in which ideas are circulated throughout camps and unifies the community. It also reflects the subjects that are the focus of the community.




If you’re interested in the data, you can view the various files here:







  * [Averages for each year and the overall chart ](https://docs.google.com/spreadsheet/ccc?key=0AsGU0Xg7inL5dEQ2M2FjRXdNSGhJdG9xb0dJb3hOZ2c&usp=sharing)(Google Spreadsheet)


  * [Data for each individual camp and charts by grouping](Screen Shot 2014-02-20 at 5.53.13 PM Screen Shot 2014-02-20 at 5.53.04 PM Screen Shot 2014-02-20 at 5.52.56 PM Screen Shot 2014-02-20 at 5.52.47 PM Screen Shot 2014-02-20 at 5.52.35 PM Screen Shot 2014-02-20 at 5.52.27 PM Screen Shot 2014-02-20 at 5.52.16 PM) (Google Spreadsheet)


  * [Data from MALLET](https://www.dropbox.com/sh/ufxbl2dfzl6x8jf/fOFjvXWY2H)


  * [Raw data](https://www.dropbox.com/sh/upvnv5a59fr52xr/3T1IsPYqO2)
