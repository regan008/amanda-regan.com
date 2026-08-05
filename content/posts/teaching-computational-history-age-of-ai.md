---
title: "Teaching Computational History in the Age of AI" 
date: 2026-08-05 
draft: false
subjects:
  - Artificial Intelligence
  - Computational History
  - Digital History
---

I am finishing up my syllabus for [Methods in Digital History II](/courses/8510fall26/) for Fall 2026. I have taught some version of this course at Clemson since Spring 2023 and its one of the core classes in our [Digital History Ph.D. Program](https://www.clemson.edu/cah/academics/history-and-geography/graduate/digital-history-phd/). Putting the four iterations of this course side by side, what strikes me is how much more I can ask of students now than I could three and a half years ago. The field is moving at the speed of light right now and I think its worth reflecting on just how much has changed in teaching computational methods.

Some of it is structural. This course was initially a single semester course but fairly quickly we decided it needed to be a two part sequence.[^1] But most of the change is not structural at all. In Spring 2023 the last month of the semester was a survey after we had learned computational basics. Networks in one session, computer vision in another single session, and a week called "next steps in computational history" that was really a gesture toward all the things we did not have time to do. This fall students will design and implement relational databases in SQL from their own sources, run OCR and vision model transcription against ground truth they build themselves, measure the error rates, do named entity recognition three different ways, work with embeddings and semantic change, and ship a Flask application. All in sixteen weeks.

## Origins of the course

When I started teaching this class I modeled it on a course taken with one of my mentors, [Lincoln Mullen](https://lincolnmullen.com/), at George Mason.[^2] [That class](https://files.lincolnmullen.com/syllabi/clio3.2014.pdf) was _hard_ and ambitious in a way I still think about. We scripted in bash, read about the Unix philosophy, created Makefiles, dabbled in JavaScript, R, D3.js, as well as mapping, text mining, and networks. It remains the best class I have ever taken. Not because I came out fluent in any of those languages. I definitely did not and there were many afternoons I wanted to throw my laptop at a wall. It was the best class I ever took because I learned to think computationally and to pivot to whatever I needed to learn next in order to ask the question I actually wanted to ask. That is a different skill from knowing a language deeply, and it is the one that has held up.

## How AI Has Changed Teaching Digital Methods

The dramatic shift in teaching this class in the age of generative AI is that the frustrating parts of coding have gotten much easier. No more hunting for two hours for a missing semicolon. No more staring at a cryptic and unhelpful error message trying to reverse engineer what the computer did not like about your syntax. AI helps with that and its damn good at it. As a result some of the frustrating barriers to doing this work have fallen away and as a result students can focus on the questions that matter more and the syntax less.

Mullen [made the same point](https://lincolnmullen.com/blog/this-semesters-syllabus-for-data-analysis-for-history/) when he rethought his own decade old syllabus from the ground up, replacing R with a mix of languages on the grounds that targeted AI help now lets students focus on the principles and the past rather than on semicolons.[^3] Cameron Blevins [has described](https://cblevins.github.io/posts/bottleneck-side-quests/) the two bottlenecks that have historically closed off lines of historical research before they began, the time and cost of transcription and the technical skill needed to analyze or visualize the results, and how quickly both have eroded.[^4] Jason Heppler put it about as plainly as it can be put when [he wrote](https://jasonheppler.org/2026/03/09/vibing-digital-history/) that generative AI is bad at doing history but can enable him to do good history.[^5]

I see this in my classroom. The kinds of digital work my students produce has grown dramatically over the last four years, and the growth is not incremental. It is a different category of work and they can produce substantial and sophisticated digital scholarship that make real historical interventions. It significantly lowers the barrier to doing sophisticated digital work. Mullen [described the same shift](https://lincolnmullen.com/blog/behind-ahead/) from the other direction this spring, watching a first year graduate student make a map in an hour that was as technically sophisticated as the one he used in his own job talk a decade earlier.[^6] 

But I want to be careful because I think we risk drawing the wrong conclusion from all of this. It is crucially important that we do not give up on teaching the computational thinking skills that all of this rests on. Our arguments rest on assumptions built into the code. The number of topics you choose for your topic model. The stop words you throw out. The blocking strategy you use before you compare records. The threshold at which you decide two things are the same thing. The projection you use to display points on a map. Every one of those decisions is an interpretive claim dressed up as a technical default, and every one of them shapes what you are able to see and ask. If you do not understand how and why the code works, the AI model makes those determinations on your behalf. At best that alters your results in ways you cannot account for. At worst it is flatly wrong and arrives looking authoritative.

Once you have the basics, you can use AI almost as a trampoline, jumping from language to language and doing genuinely advanced work. That is precisely what the second half of our sequence has become. But a trampoline only works if there is something solid underneath it and I think those foundational computational thinking skills are essential. Even Mullen, in the same post where he says it no longer makes sense for him to write code, notes that technical knowledge remains enormously helpful for getting good results on anything beyond basic complexity.[^7]

This is why the two courses in the sequence have opposite looking AI policies, and why I think both work well. 

In [Methods I](https://amanda-regan.com/courses/8500spring26/), AI tools are strictly prohibited for a little more than half of the semester. Students have to build foundational computational thinking without assistance. In week ten I introduce guardrails and students may begin using AI to understand code structure, debug, and work on technical skills, provided they understand every line they submit and document their use. The focus then shifts to understanding the methods and the kinds of historical questions we can use them to answer. The course is paired with [Josh Catalano’s](https://joshuacatalano.org/) Theories of Digital Analysis course and students come out well versed in both the application and theories behind methods like topic modeling, word embedding, and text reuse.

In Methods II, students choose a coding assistant in week one and use it all semester. The rule for the term is delegate then verify. You may offload substantial coding tasks to a model, but you are responsible for knowing whether what comes back is correct and for being able to explain how you know. Method Logs across the semester are where that explanation happens. Each one asks students to work out what a method assumes about a body of sources and whether it has anything to offer their own research, in their own words rather than the model's. If you cannot describe what your pipeline did without pasting in what the assistant told you, you do not yet know what it did.

The thing holding that second policy together is the third learning objective, which asks students to establish whether a computational result can be trusted at all. Students are asked to build ground truth and measure error with an appropriate metric. Compare against a baseline. Validate a sample by hand. Sometimes the conclusion will be that a method does not work on a particular body of sources, and being able to demonstrate why, is equally valuable.

Blevins argues that as the old bottlenecks of time and technical skill fall away, the new bottlenecks become judgment, discernment, and taste, and describes talking a model out of a clustering result it insisted was interesting.[^8] That kind of judgment comes from knowing what a method is actually doing and from having seen where it fails. A student who has never built a ground truth set has no basis on which to disagree with a model.

## Do digital historians need to learn to code?

All of this is a version of an argument the field has been having since at least 2011, when Stephen Ramsay stood up at the MLA and said that if you are not making anything you are not a digital humanist. It gets remembered as a claim that digital humanists have to code, though Ramsay called the coding question a canard in the same breath, on the grounds that plenty of people build without programming. He spent the following week clarifying anyway.[^9] Bethany Nowviskie later went back and traced where "more hack, less yack" actually came from, which turned out to be a joke about committee meetings rather than a manifesto against theory.[^10] Joe Nockels revived the question this spring, from a high school lecture hall in Sheffield, and reached a sensible answer, which is that we probably should not expect every historian to code, but that the projects worth having all depend on historians who understand what the machine is doing.[^11]

I am not going to relitigate that, and I do not think every digital humanist needs to write code. You need the skills that are relevant for the questions and projects you are working on. But I am training computational historians, and from inside that particular job the question looks different. It is not whether you can write code. It is whether you can read an argument in code, including code you did not write. That used to get answered incidentally, as a byproduct of the long painful process of learning to write it yourself. It does not get answered incidentally anymore, so it has to be taught on purpose. It’ll be even more important in the future.

That is what the sequence is trying to do. The first course keeps AI out of the room until students have built the foundation themselves. The second one hands them the tools and asks them to check the work that comes back.[^12] Josh Catalano's class does a deep dive on the theory behind these methods and looks at previous implementations in historical scholarship.

The most useful thing I can hand a student is not fluency in Python. Python is just what we happen to teach this year. When I was in graduate school a good number of the digital humanists I knew were writing Ruby, and ten years from now it may well be Go or Swift or something none of us have heard of yet. What lasts is the ability to look at a result and ask what the code assumed in order to produce it, and to understand a method well enough to see what questions it makes possible to ask of a body of historical sources. That is the part that transfers. In every version of this syllabus I’ve explained that “History drives the digital, not the other way around.” Four years of increasingly capable models have made it more true than ever.

---

[^1]: The details are more tangled than they need to be for anyone outside Clemson. HIST 8510 (Digital Methods II) was offered for the first time in Spring 2023 as a one semester course in computational history taught in R. Sequentially it came after HIST 8500 (Digital Methods I) which surveyed digital history projects, out of the box tools, and digital collections. I taught this version of 8510 twice, in Spring 2023 and Spring 2024. Wanting to deepen the skills we could offer students, we retooled and moved R into 8500 and built an entirely new 8510 on top of it. The new advanced course ran for the first time in Fall 2025 and is taught in Python and SQL. Many of the skills taught in 8500 originally are now offered in 8010 "Historical Methods and Digital Research."

[^2]: Lincoln Mullen, "Clio 3: Programming in History/New Media," HIST 698, George Mason University, Fall 2014, https://files.lincolnmullen.com/syllabi/clio3.2014.pdf.

[^3]: Lincoln Mullen, "This semester's syllabus for Data Analysis for History," January 25, 2025, https://lincolnmullen.com/blog/this-semesters-syllabus-for-data-analysis-for-history/.

[^4]: Cameron Blevins, "Bottlenecks, Side Quests, and the Calculus of Historical Research," March 27, 2026, https://cblevins.github.io/posts/bottleneck-side-quests/. See also his year in review, "Generative AI and History in 2025," December 19, 2025, https://cblevins.github.io/posts/gen-ai-history-2025/.

[^5]: Jason Heppler, "Vibing Digital History," March 9, 2026, https://jasonheppler.org/2026/03/09/vibing-digital-history/.

[^6]: Lincoln Mullen, "Behind, ahead," March 8, 2026, https://lincolnmullen.com/blog/behind-ahead/.

[^7]: Mullen, "Behind, ahead," note 2.

[^8]: Blevins, "Bottlenecks, Side Quests, and the Calculus of Historical Research."

[^9]: Stephen Ramsay, "Who's In and Who's Out," January 8, 2011. See an archived copy at https://onoirobrien.com/wp-content/uploads/2021/04/Whos-In-and-Whos-Out-Ramsay-2011.pdf, and "On Building," January 11, 2011. See an archived copy at https://onoirobrien.com/wp-content/uploads/2021/04/On-Building-Ramsay-2013-3.pdf. Both are reprinted in Vanhoutte, Nyhan, and Terras, eds., _Defining Digital Humanities_ (Ashgate, 2013).

[^10]: Bethany Nowviskie, "On the Origin of 'Hack' and 'Yack,'" January 8, 2014, https://nowviskie.org/2014/on-the-origin-of-hack-and-yack/, reprinted in Debates in the Digital Humanities 2016.

[^11]: Joe Nockels, "Yacks to Hacks, Should Historians Increasingly Code?" March 26, 2026, https://www.joenockels.org/post/yacks-to-hacks-should-historians-increasingly-code.

[^12]: Mark Humphries has been one of the most useful people to read on this. He argued for steering a middle course, teaching students when to use these tools, when to avoid them, and how to get the most out of them, rather than pretending they do not exist, in "Steering a Middle Course on AI in the History Classroom," Generative History, June 13, 2025, https://generativehistory.substack.com/p/steering-a-middle-course-on-ai-in. The sequence is my attempt at what that middle course looks like when the subject is method rather than writing. On what students are walking into, see "Is This the Last Generation of Historians?" Generative History, February 7, 2025, https://generativehistory.substack.com/p/is-this-the-last-generation-of-historians, and "The Agents Are Waking Up," Generative History, April 17, 2026, https://generativehistory.substack.com/p/the-agents-are-waking-up.

