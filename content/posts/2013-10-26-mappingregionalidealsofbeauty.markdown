---
author: admin
comments: true
date: 2013-10-26 15:17:50+00:00
type: post
link: http://www.amanda-regan.com/2013/10/26/mappingregionalidealsofbeauty/
slug: mappingregionalidealsofbeauty
title: 'Mapping Regional Ideals of Beauty, 1900-1940: A Digital Research Resouce'
wordpress_id: 445
categories:
- Clio Wired I
- Coursework
---

As I've mentioned a few times before I am interested in ideas about the body and beauty in the early twentieth century.  My digital resource is a research tool that would help me to analyze the mass amounts of newspaper articles available.


## Background


Between 1900 and 1940 there were several distinct shifts in the ideas of beauty and physical culture for women in the United States.  Shifts in the image and role of the New Woman, from the Gibson Girl to the Flapper, were accompanied by changes in the ideal female body.  The 1920s were dominated by a “Reducing Craze” which gave way in the late 1920s to a more sensible and health based routine of diet and exercise.  This model of physical culture lasted throughout most of the 1930s but began to decline, for reasons that are complex, in the late 1930s.


## The Problem


While my research suggests that there are numerous shifts the ideas about physical culture between 1900 and 1940 and perhaps even regionally based differences within these ideas, the amount of material in newspaper archives alone relating to this topic is so large it would be prohibitive to read every single article.  A simple search for “diet” between 1900 and 1940 in ProQuest’s Historical Newspaper database returns over 239,000 hits.

[caption id="attachment_452" align="alignleft" width="150"][![The interface of the digital history project Mapping Texts.  ](http://www.amanda-regan.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-26-at-10.28.14-AM-150x150.png)](http://www.amanda-regan.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-26-at-10.28.14-AM.png) The interface of the digital history project _[Mapping Texts](http://www.mappingtexts.org)_.[/caption]

The scholars at the _[Mapping Texts](http://www.mappingtexts.org) _project have proposed and developed a way to deal with this mass amount of data. Their project looks solely at newspapers in Texas but provides a framework and foundation that can be expanded on.

I am proposing a tool that would draw on the foundation laid by these scholars and use some of their code ([open source on GitHub](https://github.com/mcgeoff/Document-OCR-Quality-Visualization)) to mine and map data from a collection of newspapers that are specifically relevant to my research.  In addition to the open source code made available by _Mapping Texts_, I would draw on other open source software such as the University of Massachusetts’s [MALLET](http://mallet.cs.umass.edu/) (MAchine Learning LanguagE Toolkit) to perform the [topic modeling](http://en.wikipedia.org/wiki/Topic_model).


## The Tool


This tool will display data from text-mined newspaper articles that mention physical culture, reducing, or beauty on a heatmap and will allow users to filter between time, topic, word counts, and topic models.  The process of creating this tool will be composed of several steps.  First, articles will be accessed from ProQuest’s Historical Newspaper database using some strategic key word searches.

Second, the resulting articles (possibly thousands) will be text-mined and the following data will be collected:



	
  * word counts (by year, location, and newspaper title)

	
  * Topic Models or co-occurring words that are found in the collection as a whole (by year, location, newspaper title).


Lastly, these trends will be mapped using the [Google Maps HeatMap API ](https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap)(application programming interface) and a final interface that allows users to search, filter, and interact with the data will be created.


## Interface


[caption id="attachment_468" align="alignright" width="150"][![An example of a Heatmap using the Google Maps API](http://www.amanda-regan.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-26-at-11.08.40-AM-150x150.png)](http://www.amanda-regan.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-26-at-11.08.40-AM.png) An example of a Heatmap using the Google Maps API[/caption]

The tool’s interface will allow users to filter the collected data and display it visually on a [heatmap](http://en.wikipedia.org/wiki/Heat_map) based on trends and findings from the textual analysis.  The interface will include options to narrow the date, topic, region, and newspaper.  Two main filters will appear at the top of the tool: a date filter and a topic filter.  The second main filter would be topical.  The topical filter would allow users to filter by topics such as beauty, physical culture, or diet.  Additionally they would be able to narrow the results by type of article (editorial vs. advertisement) to display the differences in the various places and manners in which physical culture and ideas about the body were discussed.

[caption id="attachment_459" align="alignleft" width="150"][![A mockup of the interface for my proposed digital resource entitled "Mapping Ideals of Beauty, 1900-1940"](http://www.amanda-regan.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-26-at-10.46.29-AM-150x150.png)](http://www.amanda-regan.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-26-at-10.46.29-AM.png) A mockup of the Interface for my tool. (Click to enlarge)[/caption]

Below the map users would also have an additional set of filters that are meant for more advanced inquiries of the data.  The “Publications by location” filter would allow users to filter results by region, city, or newspaper.   This aspect of the tool is geared toward analyzing regional differences in ideas about beauty and physical culture.

In addition to data being displayed on the map, users will also be presented with a word frequency count and a [topic model](http://en.wikipedia.org/wiki/Topic_model) based on the filters selected.  The word frequency count would draw on text mining analysis to display the most common words (excluding common English words such as “the” and “in”) present in the newspapers selected.  The [topic model ](http://en.wikipedia.org/wiki/Topic_model)will use a program such as [MALLET](http://mallet.cs.umass.edu/) to determine which phrases are statistically important and common within an article or set of articles.  The goal is to identify trends across large amounts of data that may not have otherwise been seen.
