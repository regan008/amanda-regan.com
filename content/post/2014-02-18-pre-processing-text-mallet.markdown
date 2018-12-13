---
author: admin
comments: true
date: 2014-02-18 14:00:29+00:00
type: post
link: http://www.amanda-regan.com/2014/02/18/pre-processing-text-mallet/
slug: pre-processing-text-mallet
title: Pre-Processing Text for MALLET
wordpress_id: 568
categories:
- Digital History Fellowship
- Hacking THAT Camp's Yack
tags:
- hacking-that-camps-yack
---

**This post is the third in a set of 5 written by the [Digital History Fellows](http://chnm.gmu.edu/courses/fellowship/?page_id=11) at the [Roy Rosenzweig Center for History and New Media](http://chnm.gmu.edu/). The original post can be found on the [Digital History Fellowship Blog](http://chnm.gmu.edu/courses/fellowship/).**


In our previous [post](http://chnm.gmu.edu/courses/fellowship/?p=439), we described the process of writing a python script that pulled from the THATCamp MySQL Database. In this post, we will continue with this project and work to clean up the data we've collected and prepare it for some analysis. This process is known as "pre-processing". After running our script in the THATCamp database all of the posts were collected and saved as text files. At this stage, the files are filled with extraneous information relating to the structure of the posts. Most of these are tags and metadata that would disrupt any attempts to look across the dataset. Our task here was to clean them up so they could be fed into MALLET. In order to do this, we needed to strip the html tags, remove punctuation, and remove common stopwords. To do this, we used chunks of code from the [Programming Historian's lesson on text analysis](http://programminghistorian.org/lessons/from-html-to-list-of-words-1) with python and modified the code to work with the files we had already downloaded.


## Defining a Strip Tags Function


We began by writing some functions so that we could import and call all of them at once. First, we removed the html tags from the document. Essentially we asked python to look at each character in the document and locate each opening tag, '<'. If an opening tag was identified, it would ignore it and any following characters until the closing tag, '>'. We drew on the code that is used in the Programming Historian and modified it so that it would begin at the start of the text file. The end-result of the function was this:


    def stripTags(pageContents):

    	content = pageContents[0:]

    	inside = 0
    	text = ' '

    	for char in content:
    		if char == '<': 			inside = 1 		elif (inside == 1 and char == '>'):
    			inside = 0
    		elif inside == 1:
    			continue
    		else:
    			text += char

    	return text


The function begins at the beginning of a variable called page contents and essentially returns any character that is not in between the opening and closing html tags.


## Removing Non-Alpha Numeric Characters


Next, we needed to define a function that would remove all of the non-alpha numeric characters in the text. Punctuation is removed because it also distorts the results of text analysis. Borrowing again from the Programming Historian we defined a function that imported regular expression functions. According to the python documentation a Regular Expression (RE) specifies a set of strings that matches it. The function we adapted from the Programming Historian asks python to remove everything that doesn't match the string of unicode characters defined by RE (A-Z,a-z,0-9). It then splits them into a list.


    def stripNonAlphaNum(text):
    	import re
    	return re.compile(r'\W+', re.UNICODE).split(text)




## Removing Stopwords


The last function we needed to define was one that would remove stopwords from the text. This process is meant to filter out common function words. We used the same function defined in the Programming Historian lesson and the open source list of stopwords that the lesson drew on to accomplish this.

The stop words were defined at the top of list of functions:


    stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards']
    stopwords += ['again', 'against', 'all', 'almost', 'alone', 'along']
    stopwords += ['already', 'also', 'although', 'always', 'am', 'among']
    stopwords += ['amongst', 'amoungst', 'amount', 'an', 'and', 'another']
    stopwords += ['any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere']
    stopwords += ['are', 'around', 'as', 'at', 'back', 'be', 'became']
    stopwords += ['because', 'become', 'becomes', 'becoming', 'been']
    stopwords += ['before', 'beforehand', 'behind', 'being', 'below']
    stopwords += ['beside', 'besides', 'between', 'beyond', 'bill', 'both']
    stopwords += ['bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant']
    stopwords += ['co', 'computer', 'con', 'could', 'couldnt', 'cry', 'de']
    stopwords += ['describe', 'detail', 'did', 'do', 'done', 'down', 'due']
    stopwords += ['during', 'each', 'eg', 'eight', 'either', 'eleven', 'else']
    stopwords += ['elsewhere', 'empty', 'enough', 'etc', 'even', 'ever']
    stopwords += ['every', 'everyone', 'everything', 'everywhere', 'except']
    stopwords += ['few', 'fifteen', 'fifty', 'fill', 'find', 'fire', 'first']
    stopwords += ['five', 'for', 'former', 'formerly', 'forty', 'found']
    stopwords += ['four', 'from', 'front', 'full', 'further', 'get', 'give']
    stopwords += ['go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her']
    stopwords += ['here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers']
    stopwords += ['herself', 'him', 'himself', 'his', 'how', 'however']
    stopwords += ['hundred', 'i', 'ie', 'if', 'in', 'inc', 'indeed']
    stopwords += ['interest', 'into', 'is', 'it', 'its', 'itself', 'keep']
    stopwords += ['last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made']
    stopwords += ['many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine']
    stopwords += ['more', 'moreover', 'most', 'mostly', 'move', 'much']
    stopwords += ['must', 'my', 'myself', 'name', 'namely', 'neither', 'never']
    stopwords += ['nevertheless', 'next', 'nine', 'no', 'nobody', 'none']
    stopwords += ['noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of']
    stopwords += ['off', 'often', 'on','once', 'one', 'only', 'onto', 'or']
    stopwords += ['other', 'others', 'otherwise', 'our', 'ours', 'ourselves']
    stopwords += ['out', 'over', 'own', 'part', 'per', 'perhaps', 'please']
    stopwords += ['put', 'rather', 're', 's', 'same', 'see', 'seem', 'seemed']
    stopwords += ['seeming', 'seems', 'serious', 'several', 'she', 'should']
    stopwords += ['show', 'side', 'since', 'sincere', 'six', 'sixty', 'so']
    stopwords += ['some', 'somehow', 'someone', 'something', 'sometime']
    stopwords += ['sometimes', 'somewhere', 'still', 'such', 'system', 'take']
    stopwords += ['ten', 'than', 'that', 'the', 'their', 'them', 'themselves']
    stopwords += ['then', 'thence', 'there', 'thereafter', 'thereby']
    stopwords += ['therefore', 'therein', 'thereupon', 'these', 'they']
    stopwords += ['thick', 'thin', 'third', 'this', 'those', 'though', 'three']
    stopwords += ['three', 'through', 'throughout', 'thru', 'thus', 'to']
    stopwords += ['together', 'too', 'top', 'toward', 'towards', 'twelve']
    stopwords += ['twenty', 'two', 'un', 'under', 'until', 'up', 'upon']
    stopwords += ['us', 'very', 'via', 'was', 'we', 'well', 'were', 'what']
    stopwords += ['whatever', 'when', 'whence', 'whenever', 'where']
    stopwords += ['whereafter', 'whereas', 'whereby', 'wherein', 'whereupon']
    stopwords += ['wherever', 'whether', 'which', 'while', 'whither', 'who']
    stopwords += ['whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with']
    stopwords += ['within', 'without', 'would', 'yet', 'you', 'your']
    stopwords += ['yours', 'yourself', 'yourselves']


The function definition was called below all of the other functions:


    def removeStopwords(wordlist, stopwords):
        return [w for w in wordlist if w not in stopwords]


The function essentially asks python to compare a list of words called 'wordlist' to the list of stopwords defined above. It returns every word not defined in the list of stopwords.

We named the file with all of these functions 'rmv.py' and then started a new python script that would import these functions and apply them to all of the text files we downloaded from the THATCamp database.


## Defining a script to remove all of the tags


After we had defined all the necessary functions to remove html tags, strip out any non-alphanumeric characters, and remove stopwords, we needed to write a script that would import and apply all of these functions.

First, we import both the os and sys modules so that we can ask python to interact with the files located on our computer. We also import the rmv file that contains all of the functions.


    import os, sys
    import rmv


Next, we begin to define a loop that will apply each of those functions to a text document and then loop back and continue until it has done this with every text file. Setting x = 1 allows us to define where in the list of documents the script to start and we also instruct python to only complete the following loop while x is less than 300. This gives python a starting and stopping point.


    x = 2
    while x < 300:


Everything that follows the 'while' statement is part of the loop and we'll use a try and except statement to tell python what to do if a file doesn't exist. We begin by defining the file name and opening the text file. In the previous post, we downloaded all of the posts from each that camp and named them 'wp_x_posts.txt'. 'X' increased sequentially and matched the table number in the THATCamp database. We'll do the same thing here asking python to open a text file called 'wp_x_posts.txt' and increase x sequentially each time it loops through. We use the os commands to open the file, read it, and then store it in a variable called content.


    try:
    		f = open('wp_' + str(x) + '_posts.txt', 'r')
    		content = f.read()


Now that python has opened and read the content we can begin to call the functions we defined in 'rmv.py' on the content. We'll work through those functions in the order we added them to the 'rmv' module and call them using several variables. First, we call 'rmv.stripTags' on the content variable we defined above and store it in a variable called 'words'. Then we call 'rmv.stripNonAlphaNum' on the variable words we just created and store it in a variable called 'fullwordlist'. We've now removed the tags and all of the non-alphanumeric characters from the post. The final function we need to call is the 'removeStopwords'. We have to define what to remove the stopwords from and where the stopwords can be found. To do this we call the function we defined, 'rmv.removeStopwords', on 'fullwordlist' and ask it to remove any of the words from the stoplist by referring to 'rmv.stopwords'. We tell python to store this all in a variable called 'wordlist'.


    words = rmv.stripTags(content).lower()
    		fullwordlist = rmv.stripNonAlphaNum(words)
    		wordlist = rmv.removeStopwords(fullwordlist, rmv.stopwords)


Now that python has stripped the tags, non-alphanumeric characters, and the stopwords from the file the resulting text is in a variable called wordlist. That data needs to be re-written to the file. To accomplish this we asked the os module to create a new file, defined as 'fo' rather than 'f' this time, and open the same string as before: 'wp_x_posts.txt'. Then we tell it to write fo to the file with a line break after each word. However, because the text in wordlist is now a python list we have to instruct python to write a list rather than a string to the file. To do this we call '.join' on the wordlist variable which is a built-in type in python that concatenates the lists. The '.join' function combines a word list into a string and by adding a line break, '/n', each of our words is returned neatly onto a new line in our file.


    fo = open('wp_' + str(x) + '_posts.txt', 'w')
    		fo.write('\n' .join(wordlist))


Lastly we need to tell python what to do if a file doesn't exist and add one to the loop causing it to repeat on the next sequentially numbered file. The except statement here tells python what to do if a file doesn't exist. Normally it would throw an error and stop the script from running but by telling python to clear the exception it just ignores the error. Finally, adding one to x causes the script to repeat.


    except Exception:
    		sys.exc_clear()

    	x += 1


The result is 191 cleaned up text files ready to be processed using MALLET.
