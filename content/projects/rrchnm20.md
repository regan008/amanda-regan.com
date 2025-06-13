---
title: "RRCHNM20 Digital Archive & Network Visualization"
author: "Amanda Regan"
role: Collaborator
description: "Network visualization designed for the 20th anniversary of the Roy Rosenzweig Center for History and New Media. It highlighted the relationship between people and projects at RRCHNM. This network visualization sought to answer the question: How are the people and projects of Roy Rosenzweig Center for History and New Media related? How can we visualize these relationships over a twenty-year history?"
projectType: "Digital History Project"
draft: FALSE
lastmod: "2021-10-27"
category: "projects"
images: ["portfolio-rrchnm20.png"]
img: "portfolio-rrchnm20.png"
projectlink: https://20.rrchnm.org/
---

{{< figure src="/images/portfolio-rrchnm20.png" height=350px class="image-right" >}} As a Digital History Fellow at the [Roy Rosenzweig Center for History and New Media](https://www.rrchnm.org), I collaborated with <a href='www.jannellelegg.com'>Jannelle Legg</a> to create an Omeka archive that contains grants and supporting documents from the first twenty years of RRCHNM. We designed an information architecture that would capture the data contained on the coversheet of grant applications and we each input documents related to one of the center's major projects. The item metadata is designed in a way that is meant to be flexible and allow researchers to use the API to ask and answer questions about the history of RRCHNM.

Later, I collaborated with several colleagues to use the archive to build [a network visualization]() that highlighted the relationship between people and projects at RRCHNM. This network visualization sought to answer the question: How are the people and projects of Roy Rosenzweig Center for History and New Media related? How can we visualize these relationships over a twenty-year history? Using the Omeka API and a R package created by Lincoln Mullen, we pulled the item information from the collaborator, affiliate, staff member, and project fields from the RRCHNM 20 site. This provided us with a dataset of related projects and people. We cleaned up the data using R and Google Open Refine, primarily to standardize the name variations and to remove errant organizations that had crept into our dataset. To check our work an initial network analysis was completed in R before moving the results into d3 to produce the visualizations below. This visualization was a collaborative effort by Ken Albers, Peter Carr Jones, Jannelle Legg, Lincoln Mullen, Patrick Murray-John, Allison O'Connor, Faolan Cheslack-Postava, and myself.

{{< rawhtml >}}
<a type="button" href="" class="btn btn-sm btn-outline-primary">View the archive</a>  <a type="button" href="" class="btn btn-sm btn-outline-primary">View the network visualization</a>
{{< /rawhtml >}}
