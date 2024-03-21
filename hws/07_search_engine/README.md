<!-- Clarification

We made a clarification on the discussion forum. In case you didn't pay attenton there, we are adding the clarification here.

2. However, these are two situations where the above rule does not apply:

2.1. when constructing the snippet, this above rule does not apply. When constructing the snippet, you just find the first occurrence of that word (or that query), and that really is saying that you can just call the **std::string::find**() function to find the first occurrence of that word (or that query) within the body section of the HTML file. And therefore your snippet may be like this:

"I am Lady Gaga."

when the search is a phrase search of "Lady Gaga". So this means that "." after Gaga is okay, we do not care.

This is also why for test case 4.2, the following is showed in the snippet:

"Since 1982, The Statue of Liberty-Ellis Island Foundation has partnered with the"

when the search query is a phrase search of "Statue of Liberty". And this means that "-" after Liberty is okay, we do not care.

2.2. when counting the number of occurrences of each keyword (in the keyword density score calculation process), the above rule does not apply. When counting the occurrences of each keyword, you can just call the **std::string::find**() function to find the occurrence of that keyword. And therefore, when the keyword is *Gaga*, and the **std::string::find**() function finds *Gaga* in the sentence of "I am Lady Gaga.", that is okay, we will count this one as a valid occurrence even though there is period "." after *Gaga*.

So you may see that 1 and 2 are not consistent; but the only reason we allow this inconsistence to exist in this assignment is to simplify your task. A fully functioning search engine will need to handle a lot of complicated cases, and that's way beyond the scope of this course.-->

# Homework 7 — Design and Implementation of a Simple Google

In this assignment you will develop a simple search engine called New York Search. Your program will mimic some of the features provided by Google. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice writing recursive programs.
- Practice using std::map and std::set.

## Background

When talking about Google Search Engine, what words come to your mind? Page Ranking? Inverted Indexing? Web Crawler?

When developing a search engine, the first question we want to ask is, where to start? When you type "Selena Gomez" or "Tom Brady" in the search box in Google, where does Google start? Does Google start searching from one specific website? The answer is Google does not start from one specific website, rather they maintain a list of URLs which are called Seed URLs. These Seed URLs are manually chosen which represent a diverse range of high-quality, reputable websites. Search engines usually have a component called web crawler, which crawls these URLs and then follow links from these web pages to other web pages. As the web crawler crawls these other web pages, it collects links from these other web pages to more web pages, and then follow these links to crawl more web pages. This process continues, ultimately, the goal is to discover as many web pages as possible. Once all pages are visited, the search engine will build a map, which is known as the inverted index, which maps terms (i.e., individual words) to web pages (also known as documents). Below is an example:

| Key (Term) | Value (List of Document References)      |
|-----------|---------------------------------------|
| apple     | Document1, Document3, Document5       |
| banana    | Document2, Document4                   |
| orange    | Document1, Document2                   |

**Note**: in this README, the term web page, page, document, and HTML file, all have the same meaning.

<!--Term Frequency

Metadata and Links:

The index may also store metadata associated with each web page, such as the page's URL, title, and description. Additionally, the index can include information about links from one page to another, which is used for link analysis and page ranking.-->

When a user enters a search query, the search engine consults its inverted index map to identify the documents that match the query term. These matching documents will then be ranked based on various factors, and the ranked documents will then be presented to the user. And this ranking process is the so-called Page Ranking.

## Implementation

Based on the above description, you can see there are 3 steps when implementing a search engine: 

1. web crawling
2. query searching
3. page ranking

And thus, in this assignment, you are recommended to (but not required to) write your search engine following this same order of 3 steps. More details about each of these 3 steps are described below:

### Web Crawling

The Web Crawler's goal is to build the inverted index.

### Query Searching

The Query Searching component's goal is to identify the matching documents.

### Page Ranking

Once the matching documents are identified, you should rank these documents and present them to the user. Google uses a variety of factors in its page ranking, but in this assignment, your page ranking is required to consider the following factors:

- Keywords Density. <!--(keyword stuffing)-->
- Backlinks. <!--: The number and quality of links from other reputable websites are assessed.-->
<!--- Freshness.-->

For each page to be presented, we calculate a page score, and then present these pages in a descending order to the user, i.e., pages whose page score is higher should be presented first. As the page score consists of two factors, we will calculate the score for each of these two factors, and we name them the *keywords density score*, and the *backlinks score*, respectively. Once we have these two scores, we can get the page score using this formula:

page score = (0.5 * keywords density score + 0.5 * backlinks score); [**formula 1**] <a name="formula-1"></a>

In order to match the results used by the autograder, you should define all scores as *double*. Next we will describe how to calculate the keywords density score and the backlinks score.

#### Keywords Density Score

A search query may contain one keyword or multiple keywords. Given a set of keywords, we can calculate the keywords density score by following these two steps:

1. Calculate a density score for each keyword within the document. 
2. Accumulate these individual density scores into a combined score. <!--represent the overall keyword density of the document for the given set of keywords.-->

For each keyword, the keyword's density score is a measure of how the keyword's frequency in a document compares to its occurrence in all documents, and we can use the following formula to calculate the density score of one keyword. (**Note:** here the term "all documents" literally means all documents, not just the documents which contain the query.)

```console
Keyword Density Score = (Number of Times Keyword Appears in this One Document) / (Total Content Length of this One Document * Keyword Density Across All Documents)
```

Here, we consider the content of each document as a string. Also, here "Total Content Length" means the total length of the whole document, not just the length of the &lt;body&gt; section; and the "Number of Times Keyword Appears" means the number of times the keyword appears in the whole document, not just in the &lt;body&gt; section. Similarly, when calculating the "Keyword Density Across All Documents", you should also consider the whole document, not just the &lt;body&gt; section.

Let's explain this formula with an example: let's say we have 4 documents in total, and the user wants to search *Tom Cruise*. Assume the first document has 50 characters (i.e., the document length of the first document is 50), the second document has 40 characters, the third document has 100 characters, and the fourth document has 200 characters. The keyword *Tom* appears in the first document 2 times, appears in the second document 3 times, appears in the third document 4 times, and appears in the fourth document 0 times. Then for this keyword *Tom*, the density across all documents would be:

```console
(2 + 3 + 4 + 0) / (50 + 40 + 100 + 200) = 0.023
```

and the keyword density score for this keyword *Tom* in the first document, would be:

```console
2 / (50 * 0.023) = 1.739

```

and the keyword density score for this keyword *Tom* in the second document, would be:

```console
3 / (40 * 0.023) = 3.261

```

and the keyword density score for this keyword *Tom* in the third document, would be:

```console
4 / (100 * 0.023) = 1.739

```

Once we get the density score for the keyword *Tom* in the first document (let's denote this score by denScore1), and we get the density score for the keyword *Cruise* in the first document (let's denote this score by denScore2), then the keywords density score for the search query *Tom Cruise* in the first document would be *(denScore1 + denScore2)*.

#### Backlinks Score

There are typically two types of links on the Internet.

1. **Outgoing Links**: These are links from a particular webpage on your website to other webpages or websites. Outgoing links are also known as "outbound links". They provide navigation from your webpage to other relevant resources on the internet.

2. **Incoming Backlinks**: These are links from other websites or webpages that direct users to a specific webpage on your website. Incoming backlinks are also commonly referred to as "inbound links" or simply "backlinks". Search engines like Google consider incoming backlinks as an important factor when determining the authority, relevance, and popularity of a webpage. Pages with a higher number of quality backlinks are often perceived as more authoritative and are likely to rank higher in search engine results pages.

A backlinks score for a webpage is based on the importance of its incoming backlinks, considering that pages with fewer outgoing links are considered more valuable and contribute more to the score. Let's say there are N web pages which have links pointing to this current page. We name these pages doc_1, doc_2,... to doc_N, and we use doc_i->outgoingLinks to denote how many outgoing links document i has. Then we can calculate the backlinks score of this current page as following:


```console
backlinks score = ( 1.0 / (1 + doc_1->outgoingLinks) + 1.0 / (1 + doc_2->outgoingLinks) + ... + 1.0 / (1 + doc_N->outgoingLinks) );
```

Once you have both the keywords density score and the backlinks score, you can then use [formula 1](#formula-1) to get the overall score for a page.

## Assignment Scope

To reduce the scope of the assignment, and hence reduce the amount of work from you, we make the following rules for this search engine.

### Rule 1. Search HTML Files Only

Search Engines like Google will search all types of files on the Internet, but in this assignment, we assume all files we search are HTML files. 

### Rule 2. Local Searching Only

The search engine you implement will not search anything on the Internet, as that requires extensive knowledge in computer networks and will need to include network libraries, which is way beyond the scope of this course. In this assignment, we limit our searches to a local folder, which is provided as [html_files](html_files).

You are also not allowed to use file system libraries such as &lt;filesystem&gt; to access the HTML files, rather, you should follow the instructions given in the [other useful code](#other-useful-code) section to open HTML files and follow links within each HTML file to get to other HTML files.

## Supported Commands

Your program will be run like this:

```console
nysearch.exe html_files/index.html input.txt
```

Here:

- *nysearch.exe* is the executable file name.
- html_files/index.html is the Seed URL. While Google maintains a list of Seed URL, in this assignment, we will just use one single HTML file as the Seed page and the path of this file is the Seed URL.
- input.txt is the input file which contains search queries. Each line of this file is a search query.

Your program should treat each line in the input file as a search query, and print the search results corresponding to each search query into a separate file.
Name your output file(s) this way: out1.txt, out2.txt, out3.txt, out4.txt, ...

Here
1. out1.txt contains the search results for the first search query - i.e., the query appears in line 1 of the input file.
2. out2.txt contains the search results for the second search query - i.e., the query appears in line 2 of the input file.
3. out3.txt contains the search results for the third search query - i.e., the query appears in line 3 of the input file.
4. out4.txt contains the search results for the fourth search query - i.e., the query appears in line 4 of the input file.
...

You must name your output files in such a way. You will fail the test cases if your output files are not named as "out1.txt", "out2.txt", "out3.txt", "out4.txt", etc. And yes, if the input file has 1000 lines, then your program will produce 1000 output files.

### Phrase Search vs Regular Search

Your search engine should support both phrase search and regular search.  
1. When searching multiple words with double quotes, it is called a phrase search. In phrase search, the whole phrase must exist somewhere in the searched document. In other words, the search engine will search for the exact phrase, word for word, and in the specified order.
2. When searching multiple words without double quotes, it is called a regular search. In this assignment, we define the term *regular search* as such: the search engine should look for documents which contain every word of the search query, but these words do not need to appear together, and they can appear in any order within the document. 

Based on the above definition, a document which only contains the following two lines is a valid document when the user performs a regular search looking for *Tom Cruise*:

```console
Tom and Jerry show
Have Fun And Save Now With Great Deals When You Cruise With Carnival. Book Online Today.
```

Because we can find both the word *Tom* and the word *Cruise*. But it is not a valid document if the user does a phrase search - *"Tom Cruise"*, as no exact match can be found in this document.

### Definition of Match/Appearance/Occurrence

In the context of search engine, the term *Match* or *Appearance* or *Occurrence*, has a special meaning. More specifically, in this assignment, when searching a document to determine *match*/*appearance*/*occurrence*, you should follow these rules:

### Rule 1. Case-sensitive Search Engine

Search engines are usually case-insensitive, but making the search engine case-insensitive will require some extra work and likely need to call some functions we have not learned in this course. Therefore, to simplify your tasks and reduce the amount of your work, in this assignment, the search engine you are going to implement is case-sensitive. In other words, when searching *Tom*, the word *Tom* is a match, neither the word *TOM* nor the word *tom* is a match.

### Rule 2. Word Boundary

When searching the word *Tom*, we do not consider the substring *Tom* in *Tomato* as a match, and we do not consider the substring *Tom* in *4Tom* or *Tom32* as a match; but we do consider the substring *Tom* in *Tom.*, *Tom-*, *.Tom*, *-Tom*, *_Tom*, *Tom!*, " Tom", " Tom ", etc., as a match. In other words, the word *Tom* is found in a document only if it appears as a standalone word, meaning that the character right before *Tom* and the character right after *Tom* must be a word boundary. And in this assignment, you can consider any non-alphanumeric character as a word boundary. This behavior is consistent with what Google does.

Such a rule also applies to phrase search. We consider a phrase to be a match only if we find the phrase and the character right before the phrase and the character right after the phrase is a word boundary, i.e., a non-alphanumeric character.

To determine if a character is an alphanumeric character or not, you can call std::isalnum(). This function considers the following characters as alphanumeric:

```console
digits (0123456789)
uppercase letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)
lowercase letters (abcdefghijklmnopqrstuvwxyz)
```

The function takes one single character as its sole argument. It return a non-zero value if the character is an alphanumeric character, 0 otherwise.

## Input Files

Your program takes two types of input files: the HTML files and the input.txt file, which contains all the search query terms.

All the HTML files are provided under the [html_files](html_files) directory. Among these HTML files, there is only one HTML file which will be provided via the command line, and this file will be considered as the Seed file, and the path of this file (i.e. html_files/index.html) therefore will be used as the Seed URL. Your web crawler should search this HTML file and find links contained in this HTML file, and then follow these links to crawl other HTML files, and repeat this process until you can not reach any more files. Keep in mind that links which take you to an HTML file which you have already crawled, should be skipped, otherwise you will get into an infinite loop situation.

## Output File Format

The output of your program should go to the output file. All output files used by the autograder are provided in the [sample_output](sample_output) folder.

- If no matches can be found for a search query, your search engine should print the following message to the output file.

```console
Your search - dsdwoddjojdjeokdddfjwoewojo - did not match any documents.
```

Replace *dsdwoddjojdjeokdddfjwoewojo* with the search query.

This behavior matches with what Google does.

![alt text](images/no_match.png "no match")

- If matches are found, you should print the ranked results in a format similar to what Google does, as shown in this following image:

![alt text](images/celtics.png "Boston Celtics")

More specifically, for each document, print
1. the title
2. the url
3. the description
4. a snippet

### The Title

In all HTML files we provide, in the &lt;head&gt; section of the HTML, we have a "title" element. It is used to define the title of the web page or document. In the following example, the text "ESPN" within the &lt;title&gt; tags represents the title of the web page, which is typically displayed in the browser's title bar or tab, and it is often used by search engines to display the title of the page in search results.

```html
<title>ESPN</title>
```

### The URL

This portion will be different from what Google shows, as our search is limited to the [html_files](html_files) folder, the URL we present will just be a path within this folder. Here are some example URLs we use in this assignment:

```plaintext
html_files/file1.html
html_files/subdir1/subdir2/file7.html
html_files/subdir1/subdir2/subdir3/subdir4/file13.html
```

### The Description

In all HTML files we provide, in the &lt;head&gt; section of the HTML, we have a meta description tag which provides a brief description of the page's content. This description is often displayed by search engines in search results to give users an idea of what the web page is about. The following is an example:

```html
<meta name="description" content="Boston Celtics Scores, Stats and Highlights">
```

Here, "Boston Celtics Scores, Stats and Highlights" is the description.

### The Snippet

This snippet contains an excerpt from the page's content that is directly related to the search query. In this assignment, the requirements for this snippet is:

1. when constructing the snippet, you should only consider the &lt;body&gt; section of the HTML files. In other words, the snippet must come from the &lt;body&gt; section only.

2. The snippet should contain exactly 120 characters.

3.1 For a phrase search, the snippet should start from the beginning of a sentence which contains the query; This means the query itself may not appear in the snippet: this is possible when a sentence contains the query, but that query does not appear in the first 120 characters of the sentence. If the query appears multiple times in a document, consider the first occurrence only. In other words, to construct the snippet, your program should search the first occurrence of the query in the &lt;body&gt; section of the document.

3.2 For a regular search, if an exact match can be found in the &lt;body&gt; section of the document, the snippet should start from the beginning of a sentence which contains the query, and if the query appears multiple times in the &lt;body&gt; section of the document, consider the first occurrence only; if an exact match can not be found in the &lt;body&gt; section of the document, the snippet should start from the beginning of a sentence which contains the first keyword of the query, and if the first keyword appears multiple times in the &lt;body&gt; section of the document, consider the first occurrence only.

**Note**, to simplify the construction of the snippets, we have tailored the provided HTML files such that you can identify the beginning of a sentence via searching the period sign before the sentence. In this assignment, you can assume that there is always a period sign before the sentence which contains the snippet you are going to construct, however, it is possible that there are some whitespaces in between the period and the start of the sentence.

## Useful String Functions

You may find the following functions to be useful (most of them are string functions, except *std::isspace*):

- rfind: this function does reverse find in a string. When finding the start position of a sentence which contains a keyword or a query, the string function *rfind*() can be useful, as this function can be used to search a string for the last occurrence of the period sign. For example, if you find that the query starts at position *queryPos*, then you can use the *rfind*() function like this to locate the period sign before the sentence which contains this query:

```cpp
size_t periodPos = data.rfind(".", queryPos);
```

Here *data* is a string which contains the full content of the document. Once you locate the period sign, you can then skip any possible whitespaces to get to the start of the sentence. And in order to skip whitespaces, you may want to use this next function - *std::isspace*().

- std::isspace: we use this function to check if a given character is a whitespace character.
- find: we use this function to search a string for the first occurrence of some character or some substring.
- substr: we use this function to get a substring of an existing string.
- find_last_of: in this assignment, there might be several situations when you need to find the last slash of a URL. And for that purpose, you can use the *find_last_of*() function. An example usage case is, given the URL "html_files/subdir1/subdir2/file7.html" as a string, if you want to get the directory "html_files/subdir1/subdir2/", you can use *find_last_of*() and *substr*() like this.
```cpp
std::string directory;
// suppose URL is "html_files/subdir1/subdir2/file7.html"
size_t lastSlashPos = URL.find_last_of('/');
if (lastSlashPos != std::string::npos) {
	// directory will now be "html_files/subdir1/subdir2/"
	directory = URL.substr(0, lastSlashPos + 1);
}
```

<!-- erase: when doing a phrase search, we enclose our query with double quotes. Unfortunately, the autograder is not smart enough to handle this, and it will pass the double quotes as a part of the query string. And therefore, in your program, you need to remove the double quotes, and you can do so using code like this:

```cpp
size_t quotePos;
// unfortunately, autograder will pass \" to the command line, and thus the double quote will be a part of the string.
if( (quotePos = tmpString.find('"')) != std::string::npos ){
	tmpString.erase(quotePos, 1); // remove the double quote character at the found position; here number 1 as the second argument means erasing 1 character.
}
```

Here *tmpString* is a string which might contain one double quote character, for example, *tmpString* might be **"Tom**, or it might be **Cruise"**.
-->

## Provided Functions

Parsing an HTML file and extract all the links from this file may require some regular expression library functions, and using these regular expression library functions is beyond the scope of this course, and thus the following function (which calls regular expression library functions) is provided for you. This function takes a std::string argument, representing the content of an HTML file, and this function will extract all links in this HTML file, and return them as a linked list, represented by an std::list&lt;std::string&gt; object.

```cpp
// function to parse an HTML file and extract links to local files
std::list<std::string> extractLinksFromHTML(const std::string& fileContent) {
    std::list<std::string> links;
    // regular expression to match href attributes in anchor tags
    std::regex linkRegex("<a\\s+[^>]*href\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>");
    std::smatch match;

    // search for links in the HTML content
    std::string::const_iterator start = fileContent.cbegin();
    while (std::regex_search(start, fileContent.cend(), match, linkRegex)) {
        if (match.size() > 1) {
            links.push_back(match[1].str());
        }
        start = match.suffix().first;
    }

    return links;
}
```

In order to use this function, you need to include the regex library like this:

```cpp
#include <regex>
```

## Other Useful Code

Unlike previous assignments where you read input files and parse it line by line, in this assignment, when you open an HTML file, you may want to store the full content of this file into a string. For example, you want to open the file file3.html, whose path is "html_files/subdir1/file3.html", and store the full content of this file into a string, then you can do this:

```cpp
std::ifstream fileStream(filePath);
if (fileStream.is_open()) {
	std::string fileContent((std::istreambuf_iterator<char>(fileStream)), std::istreambuf_iterator<char>());
	// suppose filePath is the string "html_files/subdir1/file3.html", then at this point, the string fileContent will be the full content of this file file3.html.
	// do something with fileContent
}
```

Make sure you still include the fstream library.

```cpp
#include <fstream>
```

## Program Requirements & Submission Details

In this assignment, you are required to use either std::map or std::set. You can use both if you want to. You are NOT allowed to use any data structures we have not learned so far, but feel free to use any data structures we have already learned, such as std::string, std::vector, std::list. In addition, **the web crawler component of your program must be recursive**.

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 03/21/2024, Thursday, 10pm.

## Instructor's Code

You can test (but not view) the instructor's code here: [instructor code](http://ds.cs.rpi.edu/hws/search/). This page allows you to view those intermediate results. Note that this site is hosted on RPI's network and you can visit this site only if you are on RPI's network: either on campus or using a VPN service.

## FAQs

Q1: When phrase searching "Tom Cruise", is the keywords density score comprised only of all instances of "Tom Cruise" or is it the combination of "Tom" and "Cruise"?

A1: The combination of "Tom" and "Cruise". In other words, no matter it is a phrase search, or it is a regular search, when computing the keywords density score, always follow the two steps: 1. calculate the density score for each keyword within the document; 2. accumulate these individual density scores into a combined score.

Q2: When it asks for Keyword Density Across All Documents, does it mean all 33 documents or all documents which contain the keyword?

A2: All 33 documents.

## Rubric

21 pts
 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - IMPLEMENTATION AND CODING STYLE (8 pts)
   - No credit (significantly incomplete implementation) (-8)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - At least one function is excessively long (i.e., more than 200 lines). (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (7 pts)
   - Uses data structures which have not been covered in this class. (-7)
   - Uses filesystem library (i.e., #include &lt;filesystem&gt; ). (-7)
   - Neither std::map nor std::set is used. (-7)
   - Paths to all 32 HTML files are manually specified within the program's code. (The paths should be found by the program during runtime) (-5)
   - Member variables are public. (-2)
 - RECURSION (3 pts)
   - Does not use recursion in the web crawler component. (-3)

## Appendix A - HTML File Basics

A typical HTML file consists of two main sections: the &lt;head&gt; section and the &lt;body&gt; section.

1. The &lt;head&gt; section contains metadata about the document, such as its title, character encoding, stylesheets, scripts, and other information that is not directly displayed on the web page.

2. The &lt;body&gt; section contains the actual content of the document that is displayed to the user, such as text, images, links, and other elements.

These two sections together define the structure and content of an HTML document. The following is an example, it is a basic html file.

```html
1. <!DOCTYPE html>
2. <html lang="en">
3. <head>
4.    <meta charset="UTF-8">
5.    <meta name="description" content="Example HTML file with head and body sections">
6.    <meta name="keywords" content="HTML, example, head, body">
7.    <meta name="author" content="Your Name">
8.    <title>Example HTML File</title>
9. </head>
10. <body>
11.    <h1>Welcome to My Website</h1>
12.    <p>This is the body content of the HTML file. You can add any content you like here.</p>
13.    <ul>
14.        <li><a href="https://example.com">Example Website</a></li>
15.        <li><a href="https://www.w3schools.com/html/">HTML Tutorial</a></li>
16.        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs: HTML</a></li>
17.    </ul>
18. </body>
19. </html>
```

Here:

- line 3 and line 9 marks the head section of this html file.

- line 10 and line 18 marks the body section of this html file.

- line 5 is the description tag.

- line 8 is the title tag.

- line 14, line 15, and line 16 are some outgoing links.

<!--
## Appendix B - How to store the full content of a file as a string?

You can follow the example below to read a file and store its full content as a string. And then you can use the length() function to get the length of the full content of the file. You are recommended to compile and run this program so as to understand its behavior.

```cpp
#include <iostream>
#include <fstream>

// run the program like this:
// ./a.out input.txt
// this program will open the input file and print the length of the file content (as a string),
// and then print the file content.
int main(int argc, char ** argv){

        std::string input = std::string(argv[1]);
        std::ifstream inputFile(input);
        if (!inputFile.is_open()) {
                std::cerr << "Failed to open the input file." << std::endl;
                exit(1);
        }

        // this line gets the full content of the file and store it in an std::string object.
        std::string fileContent((std::istreambuf_iterator<char>(inputFile)), std::istreambuf_iterator<char>());
        // prints the length of the file content.
        std::cout << fileContent.length();
        std::cout << std::endl;
        std::cout << std::endl;
        // prints the file content.
        std::cout << fileContent << std::endl;
}
```
-->
