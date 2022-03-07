---
author: Amanda Regan
comments: true
date: 2014-12-09 22:13:24+00:00
type: post
link: http://www.amanda-regan.com/2014/12/09/mapping-gymnasiums-boston/
slug: mapping-gymnasiums-boston
title: Mapping Gymnasiums in Boston, 1914-1924 (A Visualization for Clio 3)
wordpress_id: 820
categories:
- Coursework
- Programming for Historians
---

{{<figure src="/images/Screenshot-2014-12-09-17.06.27.png" height="400" title="Mapping Gymnasiums in Boston">}}

In 1889 Josiah Quincey was elected Mayor of Boston.  Throughout his term as mayor he implemented a new system of municipal baths and gymnasiums in the city designed to encourage moral behavior, hygiene, foster community, and encourage exercise for the cities residents.  These gymnasiums, although open to all residents, were placed largely in immigrant heavy neighborhoods and reflected a focus on physical culture that was reminiscent of life in Eastern Europe.  [This visualization](http://www.amanda-regan.com/Clio3-Final/) shows the location of each municipal and private gymnasium in Boston between 1914 and 1925 and provides some information about the ward that these gymnasiums existed in.  Clicking on the public gymnasiums (teal circles) or the private gymnasiums (dark blue circles) pulls up relevant information about the ward the gymnasium was located in.  The size of the public gymnasiums corresponds to the total attendance in each year and clicking on a public gymnasium populates a pie chart with the breakdown of class attendance at that gym.

{{<figure src="/images/Screen-Shot-2014-12-08-at-6.34.45-AM.png"  title="An image of the shapefile overlayed on top of the historical map in QGIS." >}}


The data for this visualization came from three sources.  First, the map itself was created using the Javascript visualization library D3.  The shape file used to generate the map was created from a historic map digitized and available through the Boston Public Library.  Using QGIS the map was geo-referenced and then traced to create a shape containing all the wards in Boston. For more information on the process of creating this shape see my blog post. Second, the locations of the public gymnasiums as well as the attendance data came from the [Report of the Boston Parks Department](http://catalog.hathitrust.org/Record/001506575). The private gymnasium locations were pull from Boston city directories.  Lastly, the demographic data about each ward draws from sampled 1910 census data that is available through the [Integrated Public Use Microdata Set](https://www.ipums.org/) (IPUMS). The correlation between the location of gymnasiums and demographics about the ward is, admittedly, a jump.  The demographics of the ward where a gymnasium is located is not necessarily indicative of who may have attended this gym.  This visualization is, however, a starting point for a future research project.

## Conclusions

This visualization does two very basic things that were useful for this project and for future research.  First, I was able to get a sense of where the municipal gymnasiums were located compared to private gymnasiums and conclude that they were, for the most part, located in the wards with high immigrant populations.  Privately owned and membership based gymnasiums were located in middle class neighborhoods rather than in the working class districts of Central Boston. This was useful as I continued my research because it clearly contradicted much of the rhetoric coming out of the Parks Department and the discourse about gymnasiums by those who supported these institutions.  Often it was claimed that the gymnasiums were for the betterment of the community  and were democratic institutions.  While Bostonians may have believed this, the location of the gymnasiums suggests that there was a clear class distinction in physical culture in Boston. Furthermore, this map along with descriptions in newspapers suggests that the aims of the public and private institutions were quite different.  The public gymnasiums were thought to help clean up the streets and promote proper hygiene.  In contrast, the private gymnasiums, often referred to as “athletic” or “exercise clubs” were a social gathering place for men.  Within this space politics and business in addition to exercise were conducted.




Several historians have discussed the public baths and gymnasium movement in Boston.  They often focus on the municipal institutions that were established by reformers in immigrant districts.  Marilyn Thorton Williams, author of _Washing the Great Unwashed_, argues that there was a shift around the turn of the century from municipal institutions focused on hygiene to institutions that focused on recreation by combining the baths and gyms.   However, as this visualization suggests, there was also a range of private institutions that focused on recreation and defined the role of gymnasiums differently putting an emphasis on creating an environment for socializing as well as athletics. The membership rates of these institution, although varied, also suggests that they catered to a different group than the municipal gymnasiums.




In addition to assembling this visualization I read a variety of sources about the role of the gymnasium in the modern city as well as the construction, layout, and location. After all of this, I am left with more questions about Boston’s gymnasiums and a potential future direction.  Who actually attended these gymnasiums and what was their reasoning for doing so?  Aside from the publicity about Boston’s gymnasiums and reports about the ideal function of gymnasiums within the modern city, what were the spaces used for? Were these, as newspaper articles suggest,  spaces for socialization and community? Or were they focused on the physical development of the body at a time when the industrial city, particularly mechanization, was causing concern about efficiency and the active body? How often were demonstrations held and who attended?  Announcement and floor plans suggest that the body became a spectacle within these gymnasiums and members of the public would gather to observe women “taking exercise.”




Lastly, was there a correlation between the location of gymnasiums and public space in Boston? I think this is a question that would be easily answered by making adjustments to the shapefile in order to display the locations of parks and playgrounds, and perhaps even streetcar lines.  This visualization, along with some primary source research, helped me to gain a better understanding of where the gymnasiums were located and what the layout of the city was.  The insight provided by the visualization has sparked new questions and future directions for research.




Second, the visualization is a template my future research.  I hope to be able to make a trip up to the Harvard University Libraries eventually where they have [Dudley Allen Sargent’s](http://en.wikipedia.org/wiki/Dudley_Allen_Sargent) papers. Sargent was the director of physical training at Harvard and was very involved in advocating for Physical Culture in Boston.  His papers contain index cards from gymnasiums in Boston and all over the east coast where he visited and observed the members.  From what I can tell, the cards include detailed information about those who attended the gymnasiums and I think this data would make for a far more interesting and useful visualization.  Now that I have a shapefile (the map base) of Boston’s wards, the location of the gymnasiums, and the total attendance in each year plugging in data about individuals should be relatively easy and provide more insight into who actually attended those gymnasiums.




The [visualization is available here](http://www.amanda-regan.com/Clio3-Final/). All of my code is on [GitHub](https://github.com/regan008/Clio3-Final).
