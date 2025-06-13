---
author: admin
comments: true
date: 2014-02-09 20:54:45+00:00
type: post
link: http://www.amanda-regan.com/2014/02/09/extracting-data-python-mysql/
slug: extracting-data-python-mysql
title: Extracting Data from the THATCamp Database Using Python and MySQL
wordpress_id: 536
categories:
- Coursework
- Digital History Fellowship
- Hacking THAT Camp's Yack
tags:
- hacking-that-camps-yack
---

**This post is the second in a set of 4 written by the [Digital History Fellows](http://chnm.gmu.edu/courses/fellowship/?page_id=11) at the [Roy Rosenzweig Center for History and New Media](http://chnm.gmu.edu/). The original post can be found on the [Digital History Fellowship Blog](http://chnm.gmu.edu/courses/fellowship/).**


This week we've continued to work on building a python script that will extract all of the blog posts from the various THATCamp websites. As [Jannelle described last week](http://chnm.gmu.edu/courses/fellowship/?p=421), our goal was to write a script that downloads the blog posts in plain text form and strips all of the html tags, stopwords, and punctuation so that we can feed it into MALLET for topic modeling and text analysis. After several long days and a lot of help from second year fellow Spencer Roberts, we've successfully gotten the code to work.

To recap, the script should do the following:




  1. connect to the mySQL database


  2. select the relevant table using a sql query.


  3. open a text file and write the content from the database


  4. loop over the code and do this for each table


Connecting to the MySQL database has to be done in two places. First in the terminal using a secure shell and secondly in the script. To connect in the terminal, we used a secure shell port tunnel which allowed our computer to communicate with the database.


    ssh -L 3306:localhost:3306 user@host.edu


Next, we began writing a python script that would connect to the database and download all of the blog posts from each of the THATCamp sub-sites. The THATCamp website is a wordpress [multisite ](http://codex.wordpress.org/Glossary#Multisite)install with multiple tables for each individual THATCamp (over 200 individual camps). The blog posts are stored in a table labeled 'wp_xx_posts', with xx being the number assigned to a particular THATCamp. To complicate matters, the posts are not perfectly sequential. There are several skipped numbers for content that has been deleted or created erroneously. Our script would need to respond to these challenges.

The first step was to import the relevant python libraries. For this script, we first imported the [MySQLdb ](http://mysql-python.sourceforge.net/MySQLdb.html)module and asked python to refer to library as 'mdb'. We also imported the [os python module](http://docs.python.org/2/library/os.html) which allows the script to interact with the operating system. In this case, we used it to open and write to text files.


    import MySQLdb as mdb
    import os


The next portion of the script defined a loop and designated where in the database to find the blog post data. Because of the naming convention we needed python to start by looking for wp_1_posts and continue to run the same operation for each sequentially numbered table.


    x = 1
    while x < 500:
    	table= 'wp_' + str(x) + '_posts'
    	query= "SELECT post_content FROM "+ str(table) + " WHERE post_status = 'publish' AND post_type = 'post'"


The beginning portion of the code defines a loop and tells python to begin at 1 and count up to 500. Each time python loops back it will look for a table named ‘wp_x_posts’. The script then defines a [MySQL SELECT query](https://dev.mysql.com/doc/refman/5.0/en/select.html) which tells python where to look for the content and defines what content it should pull. In this case, we had to specify that the query should pull the contents of data that matched the following criteria:




  * In the post_content column


  * From the table defined by the string above (wp_x_posts where x increases sequentially each loop)


  * Where the Post_status is published


  * And where the Post_type is post


So far the code has given python instructions on where to query the information from and has set up a loop. The next step is to actually tell python how and where to connect to the database as well as what to do with the information it receives. First, python should open a new file and save it with the same name as the table. The string defined above will name the file wp_x_posts.txt and will count up sequentially because of the loop. The file permission is set to ‘a’ so that python can add to the document each time it pulls a row from the database.


    f = open('wp_' + str(x) + '_posts.txt', 'a')


Next, we set up a compound statement in python using [try and except ](http://docs.python.org/2/reference/compound_stmts.html)to create a statement that will download and write the content to the file. It will also provide an exception that will tell python what to do if the table doesn’t exist in the database.


    try:
    		con = mdb.connect(host="127.0.0.1", port=3306, user="usrname", passwd="pass", db="clone-thatcamp");

    		cur = con.cursor()
    		cur.execute(str(query))

    		rows = cur.fetchall()

    		for row in rows:
    			line = str(row)
    			f.write(line +'\n')


The MySQLdb module that we imported at the top of the script uses the [cursor method](http://docs.python.org/release/2.5.2/lib/sqlite3-Cursor-Objects.html) to create a cursor object for processing MySQL statements. The cursor is first created then it executes the query which we defined above. It then fetches all of the rows that are returned by the query and prints each one to the open text file. It prints the rows one by one inserting a line break after each one.

An additional challenge, described above, was that while tables in the database were numbered sequentially, there are occasional skips. For example there isn’t a "wp_1_posts" but there is a "wp_2_posts". When we were writing the script we kept encountering an error when python couldn’t find a table. To get around this we used the [except statement](http://docs.python.org/2/reference/compound_stmts.html). The except statement tells python to remove the empty text file if the table does not exist so that we don’t have a bunch of empty and useless text files. Using the [operating system function](http://docs.python.org/2/library/os.html), python deletes any file that it can’t pull data for.


     except:
    	os.remove('wp_' + str(x) + '_posts.txt')
    	f.close


Finally, python adds one to x, causing the script to loop back to the top and follow the instructions for each sequential table.


     x += 1


When we ran the program it downloaded over 200 plain text files for us to work with. However, the files were often a mess. They had html tags and some very odd formatting so we had to go through and clean them up. Our next blog post will describe how we cleaned up these text files to prepare them for topic modeling with MALLET.

The final code looks like this:


    import MySQLdb as mdb
    import os

    x = 1
    while x < 500:
    	table= 'wp_' + str(x) + '_posts'
    	query= "SELECT post_content FROM "+ str(table) + " WHERE post_status = 'publish' AND post_type = 'post'"

    # save as file
    	f = open('wp_' + str(x) + '_posts.txt', 'a')

    	try:
    		con = mdb.connect(host="127.0.0.1", port=3306, user="usr", passwd="password", db="clone-thatcamp");

    		cur = con.cursor()
    		cur.execute(str(query))

    		rows = cur.fetchall()

    		for row in rows:
    			line = str(row)
    			f.write(line +'\n')

    	except:
    		os.remove('wp_' + str(x) + '_posts.txt')
    		f.close
    	x += 1


Download the entire code here.
