---
author: admin
comments: true
date: 2014-02-19 14:00:07+00:00
type: post
link: http://www.amanda-regan.com/2014/02/19/unexpected-challenges-result-important-informative-discussions-transparent-discussion-stripping-content-stopwords/
slug: unexpected-challenges-result-important-informative-discussions-transparent-discussion-stripping-content-stopwords
title: 'Unexpected Challenges Result in Important and Informative Discussions: a transparent
  discussion about stripping content and stopwords'
wordpressid: 565
categories:
- Digital History Fellowship
- Hacking THAT Camp's Yack
tags:
- hacking-that-camps-yack
---

**This post is the fourth in a set of 5 written by the [Digital History Fellows](http://chnm.gmu.edu/courses/fellowship/?pageid=11) at the [Roy Rosenzweig Center for History and New Media](http://chnm.gmu.edu/). The original post by Jannelle Legg can be found on the [Digital History Fellowship Blog](http://chnm.gmu.edu/courses/fellowship/).**




As described in previous [posts](http://chnm.gmu.edu/courses/fellowship/?p=446), the first year Digital Fellows at CHNM have been working on a project under the Research division that involves collecting, cleaning, and analyzing data from a corpus of THATCamp content. Having overcome the hurdles of writing some python script and using MySQL to grab content from tables in the backend of a Wordpress install, we moved on to the relatively straightforward process of running our stripped text files through MALLET.




As we opened the MALLET output files, excited to see the topic models it produced, we were confronted with a problem we didn’t reasonably anticipate and this turned into a rather important discussion about data and meaning.


As a bit of background: topic modeling involves a process of filtering “stopwords” from a data set. Frequently a list of stopwords includes function words, or terms that appear repeatedly in discourse, like: “a, an, the”. These are filtered out because they serve a grammatical purpose but have little lexical meaning. Additionally, errors, misspellings, and lines of code that were skipped in the previous steps can also be filtered out at this stage.


As we opened the file of keys produced by MALLET, we found that some terms appeared that raised questions about what should or should not be included in our analysis. In particular, the discussion centered around spelling errors and function words in Spanish and French.




The conversation that followed, reproduced below, was significant and as people look through the results of this project or consider their own efforts reproduce something like this elsewhere, we’d like to be transparent about the decisions we made and, perhaps, spur a discussion about how to address scenarios like this in the future.

---

<div style="text-align: left; margin-bottom: 35px;"><i><b>
Take a look at what MALLET spit out: there are some errors. <br>
Stuff like “xe, xc, zijn, xb, en, la”.
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
Yeah, I saw that.<br>
We can make a custom stoplist to remove those.<br>
Make a list and we’ll add it.<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
Interesting keys though - did you see that "women" came up in #0?<br>

I’m excited to see this once it’s all graphed.<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
There’s some stuff though that I’m not sure we want to remove: Is CAA an error or an abbreviation?<br>
“socal” - is that social misspelled or Southern California, abbreviated?<br>

Hmm, that could be an organization...<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
Yeah, SoCal, as in Southern California.<br>

 There was a camp there.<br>

 This adds a larger question: do we remove misspellings?<br>

 For clarity?<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
I have mixed feelings.<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
Me too.<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
I think it’s appropriate to remove backend stuff-tags and metadata, but content is not something we should modify.<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
I agree.<br>

 We don’t want to skew the results.<br>

 Some of it occurred when we stripped all the alphanumeric stuff out.<br>

 It took out apostrophes- causing words like “I’ve” to become “I ve”.<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
The errors in themselves are telling about the nature of THATCamps.<br>

That the content is generated spontaneously<br>

lends itself to deviations from appropriate spelling ect.<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
I agree<br>

Look at 17 and 18.<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
Whoa, where did “humanidades” come from?<br>
Oh, right! There are international conference posts in here too!<br>
</b></i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
How do we handle this?<br>

Its possible to strip out the camps that are not in English<br>

or even to run analysis on them separately.<br>

I don’t want to skew the results but this also throws things off.<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
I know.<br>
I say we leave it. It shows a growing international influence.<br>
We’ll be able to see the emergence of International THATCamps.<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
I’ve never run into this before.<br>
It brings up some interesting issues -<br>
I wonder if there is standard procedure for something like this<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
What about things like “en” which is Spanish for “is”-
that would have been removed on an English stoplist.<br>
And now function words in Spanish and French seem to appear more frequently because the English terms have been filtered out. <br>
How do you do topic modeling with multiple languages?<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
What about special characters?<br>
We’ve stripped stuff out, how about how that would affect the appearance of words?<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
We have to find a stoplist for each of the languages.<br>
To strip out the function words of all of them.<br>
</i></div>


<div style="text-align: left; margin-bottom: 35px;"><i><b>
Good call. This got complicated quick!<br>
</b></i></div>


<div style="text-align: right; margin-bottom: 35px;"><i>
Agreed.<br>
</i></div>




---



As outlined above, when we opened the text file with keys, new questions were raised about the relevance and complications of running a particular stoplist on a corpus of texts. Similarly, we were forced to rethink how we handle misspellings and unfamiliar abbreviations. In the end, we tracked down stoplists for Spanish (and French) terms, so that no function words in any language would skew the results of our analysis. We also carefully examined the keys to identify abbreviations and misspellings and decided that they are a significant contribution to the analysis.




A few questions remained for us: how might removing non-alphanumeric characters (a-z,A-Z,0-9) alter the meaning of special characters used in languages other than English? How have others responded to spelling errors? How significant are errors?


Hopefully a post of this nature will foster discussion and produce a stronger, more complete analysis on this and other documents.
