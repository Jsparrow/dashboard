---
navbar: false
footer: © jSparrow a brand of Splendit IT-Consulting GmbH 2018
title: jSparrow
---

![jSparrow Linebreak Very-Top](/dashboard/img/git-linebreak-very-top.png)

## jSparrow 3.15.0 and jSparrow Maven Plugin 2.12.0 released

*Glad to see you, little bird;  
 'Twas your little chirp I heard:  
 What did you intend to say?  
 "Let me jSparrow your code today"?*

jSparrow 3.15.0 introduces a rich extension of the rules set and also brings some important UI improvements.

### New Rules to Improve Performance and Readability

* [Use String Join](https://jsparrow.github.io/rules/use-string-join.html): Replaces 
[stream().collect(Collectors.joining())](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#collect-java.util.stream.Collector-) 
with [String.join](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#join-java.lang.CharSequence-java.lang.Iterable-) 
in cases where a collection of Strings is converted into a stream for the sole purpose of concatenating its values.
* [Remove Redundant Type Casts](https://jsparrow.github.io/rules/remove-redundant-type-cast.html): Finds and removes 
casting expressions whose target types matches exactly the type of the original expression.  
* [Remove Collection::addAll](https://jsparrow.github.io/rules/remove-collection-add-all.html): Moves the parameters 
used in [Collection::addAll](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#addAll-java.util.Collection-) 
to the constructor which is used for initializing the collection. 
    

### UI Improvements

* **Starting jSparrow from multiple projects simultaneously.** From now on, it is possible to run jSparrow in more than 
one project simultaneously either by selecting multiple projects in 
the project explorer or by selecting a parent project consisting of multiple child projects.
* **Sorting the results in Summary Page.** The results in jSparrow Summary Page can now be sorted by the number of 
findings, the remediation costs or by the rule names.  

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-15-0) 
and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-12-0)!

***"Programs must be written for people to read, and only incidentally for machines to execute." ― Harold Abelson***

## jSparrow 3.14.0 and jSparrow Maven Plugin 2.11.0 released

*With a break in the weather the sun shines through  
The grass spangles with the morning dew  
As everything thaws our sparrow starts to sing  
Getting rid of bugs just reminds us it's spring.*

jSparrow 3.14.0 comes with a new refactoring rule for improving `java.util.Optional`.

* [Use Optional::filter](https://jsparrow.github.io/rules/optional-filter.html): This rule extracts an `Optional::filter` from the consumer used in `Optional::ifPresent`. This simplifies the lambda expression used with Optional operations.

jSparrow supports [***70 automatic refactoring rules***](https://jsparrow.github.io/rules/) now.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-14-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-11-0)!

***"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." ― Martin Fowler***

## jSparrow 3.13.0 and jSparrow Maven Plugin 2.10.0 released

*Little darling of the snow,  
Careless how the winds may blow,  
Happy as a bird can be,  
[Try jSparrow now, for free.](https://jsparrow.github.io/eclipse/starter-registration.html)*  

jSparrow 3.13.0 contains a new refactoring rule for `java.util.Optional`.

* [Use Optional::map](https://jsparrow.github.io/rules/optional-map.html): This rule extracts an `Optional::map` from the consumer used in `Optional::ifPresent`. This makes complicated code blocks easier to read and reuse.

jSparrow supports [***69 automatic refactoring rules***](https://jsparrow.github.io/rules/) now.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-13-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-10-0)!

***"Without requirements or design, programming is the art of adding bugs to an empty text file." ― Louis Srygley***

## jSparrow 3.12.0 and jSparrow Maven Plugin 2.9.0 released

*I heard a bird sing  
In the dark of December.  
A magical thing  
And sweet to remember.*

jSparrow 3.12.0 adds a new refactoring rule for improving source code readability. This brings jSparrow to a total of [***68 automatic refactoring rules***](https://jsparrow.github.io/rules/).

* [Make Fields And Variables Final](https://jsparrow.github.io/rules/make-fields-and-variables-final.html):
This rule declares `private` fields and local variables `final`, if they are effectively `final`. Readability and maintainability of code is improved and accidental reassignments are prevented for affected fields and variables.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-12-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-9-0)!

***"Assignment statements are abstractions of destructive modifications of memory cells" ― Programming Language Concepts. Carlo Ghezzi, Mehdi Jazayeri***

## jSparrow 3.11.0 and jSparrow Maven Plugin 2.8.0 released

*Glad to see you, little bird;  
'Twas your little chirp I heard:  
What did you intend to say?  
"I have a new rule for your today!"*  

jSparrow 3.11.0 brings a new rule for enforcing coding conventions.

* [Hide Default Constructor In Utility Classes](https://jsparrow.github.io/rules/hide-default-constructor-in-utility-classes.html):
Utility classes are classes containing `static` methods and fields only. Such classes should not be instantiated. The default constructor will be hidden by adding a private constructor to utility classes, which prevents their instantiation.

jSparrow supports [***67 automatic refactoring rules***](https://jsparrow.github.io/rules/) now.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-11-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-8-0)!

***"Walking on water and developing software from a specification are easy if both are frozen." ― Edward V Berard***

## New rule in jSparrow 3.10.0 and jSparrow Maven Plugin 2.7.0

*Against the black void, looms the lunar sphere.  
Hungry bugs haunt, satisfied by fright.  
Oh my! The programmer's faces blanch in fear.  
And thus jSparrow will eat all night.*

jSparrow brings a new rule to simplify the use of [`Optional`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html) in Java 9 and above.

* [Use Optional::ifPresentOrElse](https://jsparrow.github.io/rules/optional-if-present-or-else.html) replaces if-then-else statements checking for [`Optional#isPresent`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html#isPresent()) with a single call to [`Optional#ifPresentOrElse`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html#ifPresentOrElse(java.util.function.Consumer,java.lang.Runnable)).

[***66 automatic refactoring rules***](https://jsparrow.github.io/rules/) are now supported by jSparrow.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-10-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-7-0)!

***"Real Programmers always confuse Christmas and Halloween because Oct31 == Dec25." ― Andrew Rutherford***

## jSparrow 3.9.0 and jSparrow Maven Plugin 2.6.0 released!

*His eyes with elf-like air did peer,  
And cheekily, he flew down near;  
Rightfully so, he posed with pride,  
Since he removed code smells, code-base wide!*

jSparrow introduces a new automatic refactoring rule that has the potential to greatly improve loop performance! Now there are [***65 automatic refactoring rules***](https://jsparrow.github.io/rules/) ready to be applied!

### A new rule to improve performance!

* [Insert Break Statements in For-loops](https://jsparrow.github.io/rules/insert-break-statement-in-loops.html) finds instances where Enhanced For-loops would benefit from an early stopping mechanism and adds `break` statements to avoid redundant loop cycles.  

***“Truth can only be found in one place: the code.” ― Robert C. Martin***

## Two new rules in jSparrow 3.8.0 and jSparrow Maven Plugin 2.5.0!

*A little bird, with plumage brown,  
On top my codebase flutters down,  
In search for issues where they may lay,  
Till, full on bugs, it flies away.*

jSparrow has been busy studying new rules and is therefore happy to announce that he already knows $2^6$ rules! That's right, jSparrow supports [***64 automatic refactoring rules!***](https://jsparrow.github.io/rules/)

### New rules to improve performance and readability!

* [Use Collections Singleton List](https://jsparrow.github.io/rules/use-collections-singleton-list.html) offers an efficient way to create empty or single-element lists.
* [Remove Null-Checks Before Instanceof](https://jsparrow.github.io/rules/remove-null-check-before-instanceof.html) recognizes redundant null-checks before `instanceof` and removes them.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-8-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-5-0)!

***"The most important property of a program is whether it accomplishes the intention of its user.” ― C.A.R. Hoare***


## jSparrow 3.7.0 and jSparrow Maven Plugin 2.4.0 released and are Lombok ready!

*"I hope you love sparrows too. It is economical. It saves going to heaven."*

This release makes jSparrow compatible with [**Lombok**](https://projectlombok.org/) and introduces a new refactoring rule.

The new rule [Replace For-Loop with `Stream::takeWhile`](https://jsparrow.github.io/rules/enhanced-for-loop-to-stream-take-while-rule.html) automatically replaces the enhanced for-loops iterating over the first elements of a collection with [`Stream::takeWhile`](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html#takeWhile-java.util.function.Predicate-), thus extending the scope of functional programming offered by Java.

This new rule brings jSparrow to a total of [***62 automatic refactoring rules!***](https://jsparrow.github.io/rules/)

Find more information in our [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-7-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-4-0) Release Notes!

***"Object oriented programming makes code understandable by encapsulating moving parts. Functional programming makes code understandable by minimizing moving parts." ― Michael Feathers***

## New Rule in jSparrow 3.7.0 and jSparrow Maven Plugin 2.4.0

We are looking forward to the next jSparrow release which will include an additional refactoring rule and some bug fixes.

jSparrow 3.7.0 and jSparrow Maven Plugin 2.4.0 have been tested extensively and are ready to be released on Thursday, July 18, 2019.
The new rule will have [Java 9](https://jsparrow.github.io/tags.html#Java_9), [Loop](https://jsparrow.github.io/tags.html#Loop) and [Lambda](https://jsparrow.github.io/tags.html#Lambda) tags.

***Stay tuned!***

## jSparrow 3.6.0 and jSparrow Maven Plugin 2.3.0 released!

*The earth is warm, the sun's ablaze, it is a time of bug-free days!*

jSparrow is not resting and brings three new rules with this latest release!

**Checkout the new rules:**
* [**Use Factory Methods for Collections**](https://jsparrow.github.io/rules/collections-factory-methods.html):
Replaces ```Collections.unmodifiable{List|Set|Map}``` with  convenient factory methods introduced in Java 9 for creating immutable collections [```List.of```](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of-E...-), [```Set.of```](https://docs.oracle.com/javase/9/docs/api/java/util/Set.html#of-E...-) and [```Map.ofEntries```](https://docs.oracle.com/javase/9/docs/api/java/util/Map.html#ofEntries-java.util.Map.Entry...-).
* [**Reorder Modifiers**](https://jsparrow.github.io/rules/reorder-modifiers.html):
Reorders the modifiers on class declarations, field declarations and method declarations according to the Java conventions.
* [**Use List Sort**](https://jsparrow.github.io/rules/use-list-sort.html):
Replaces static invocations of `Collections.sort(List, Comparator)` with `List.sort(Comparator)` introduced in Java 8.

Now jSparrow offers a total number of [***61 automatic refactoring rules!***](https://jsparrow.github.io/rules/)!

Check out our release notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-6-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-3-0)!

***“Any tool should be useful in the expected way, but a truly great tool lends itself to uses you never expected.“ — Eric S. Raymond***

## New Rules in jSparrow 3.6.0 and jSparrow Maven Plugin 2.3.0

We are happy to announce that the next jSparrow release will have ***three*** additional refactoring rules.

jSparrow 3.6.0 and jSparrow Maven Plugin 2.3.0 have been tested extensively and are ready to be released on Wednesday, June 19, 2019.
The new rules will contain tags like [Java 9](https://jsparrow.github.io/tags.html#Java_9), [Old Language Constructs](https://jsparrow.github.io/tags.html#Old_Language_Constructs), [Coding Conventions](https://jsparrow.github.io/tags.html#Coding_Conventions), and more.

Moreover, jSparrow 3.6.0 will be ready for [Eclipse 2019-06](https://www.eclipse.org/downloads/packages/release/2019-06) which will be released on the same date.

***Stay tuned!***

## jSparrow 3.5.1 released!

We have introduced a [Customer Portal](https://jsparrow.atlassian.net/servicedesk/customer/portal/1), where you can report bugs and get support. There is also a new email address for customer support: [support@jsparrow.eu](mailto:support@jsparrow.eu)

This release adds the link to our Customer Portal and the new email address to the help dialogs in jSparrow.

## jSparrow 3.5.0 and jSparrow Maven Plugin 2.2.0 released!

*The sparrows round their new nests chirp with glee as jSparrow is hatching a rule in the syntax tree!*

The new [Replace Map::get by Map::getOrDefault](https://jsparrow.github.io/rules/map-get-or-default.html) rule automatically replaces invocations of [```Map::get```](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#get-java.lang.Object-) with the alternative [```Map::getOrDefault```](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#getOrDefault-java.lang.Object-V-), thus eliminating the succeeding null-checks.

This new rule brings jSparrow to a total of [***58 automatic refactoring rules!***](https://jsparrow.github.io/rules/)

Find more information in our [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-5-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-2-0) Release Notes!

***“Controlling complexity is the essence of computer programming.” — Brian Kernigan***

## New rule in jSparrow 3.5.0 and jSparrow Maven Plugin 2.2.0!!!

We are happy to announce that jSparrow will soon be enriched with a new rule!

jSparrow 3.5.0 and jSparrow Maven Plugin 2.2.0 are thoroughly tested and will be released on Thursday, May 16, 2019.
This release contains a new rule with the [Old Language Constructs](https://jsparrow.github.io/tags.html#Old_Language_Constructs) tag.

***Stay tuned for more information!***

## jSparrow 3.4.0 and jSparrow Maven Plugin 2.1.0 released!

Winter's days are past and it is time to start spring cleaning!

The [Remove Unused Parameters in Private Methods](https://jsparrow.github.io/rules/remove-unused-parameter.html) rule automatically removes unused parameters of private methods. This rule has been inspired by SonarQube's [Unused method parameters should be removed](https://sonarcloud.io/organizations/default/rules?languages=java&open=squid%3AS1172&q=squid%3AS1172) major code smell.

Find more information in our [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-4-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-1-0) Release Notes!

***"Make Simple Tasks Simple!" — Bjarne Stroustrup***

## jSparrow Maven Plugin 2.0.0 released!

We are happy to announce the release of version 2.0.0 of the jSparrow Maven plugin!

This release brings lots of new rules, performance improvements, Java 11 support, and much more!
Check out the [Release Notes](https://jsparrow.github.io/maven/release-notes.html#_2-0-0) for more information!

***Improve code in your build pipeline with the jSparrow Maven plugin!***

## jSparrow Maven Plugin 2.0.0 announcement!

On Thursday, March 28th, jSparrow Maven Plugin 2.0.0 will be released.
This version is compatible with both Java 8 and Java 11.
Additionally, the jSparrow Maven Plugin 2.0.0 includes internal stability improvements and naturally the new features of the latest jSparrow Eclipse Plugin 3.3.0.

***Stay IDE independent with the jSparrow Maven Plugin!***

## jSparrow 3.3.0 released!!!

jSparrow 3.3.0 is ready with new rules and supports Eclipse 2019-03! This brings jSparrow to a total number of [***56 automatic refactoring rules!***](https://jsparrow.github.io/rules/)

**Check out the new rule set extensions:**
* [Replace For-Loop with Stream::Match](https://jsparrow.github.io/rules/enhanced-for-loop-to-stream-any-match.html)
* [Use BufferedReader::lines](https://jsparrow.github.io/rules/buffered-reader-lines.html)
* [Remove Modifiers in Interface Properties](https://jsparrow.github.io/rules/remove-modifiers-in-interface-properties.html)

Additionally, there are improvements to Java version handling and minor UI improvements.
Have a look at the complete [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-3-0)!

***Have fun saving time with jSparrow!***

## New rules are coming in jSparrow 3.3.0!!!

We are happy to announce that we plan to release new rules with jSparrow 3.3.0!

On Thursday, March 21, 2019, two new rules and one improved rule will be released.
Out of those three rules, two will have the [Lambda](https://jsparrow.github.io/tags.html#Lambda) and [Loop](https://jsparrow.github.io/tags.html#Loop) tags.
The third rule will have the [Readability](https://jsparrow.github.io/tags.html#Readability) tag.

***Stay tuned for more information!***

## jSparrow 3.2.0 released!!!

On Thursday, February 21, 2019, jSparrow 3.2.0 release arrived.
This brings a new rule and a link to our documentation space from each rule in the select rules wizard.

We are also happy to announce that with this release jSparrow is ready for Java 11.

For more information, check out our [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-2-0).

## jSparrow 3.1.0 released!!!

jSparrow 3.1.0 has been thoroughly tested and is now ready for [Eclipse 2018-12](https://www.eclipse.org/downloads/packages/release/2018-12).
Some additional UI improvements and bug fixes are also included in jSparrow 3.1.0.
For more information, check out our [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-1-0).

Let jSparrow identify and automatically fix code smells for you.
Register for free to get jSparrow Starter and apply [15 rules](https://jsparrow.github.io/rules/#free-rules-in-jsparrow-starter).
Or go with the full power [jSparrow Pro](https://jsparrow.eu/get-jsparrow/) to perform ***automatic refactoring*** on your code base with [***53 rules***](https://jsparrow.github.io/rules/).

Thank you for supporting jSparrow!

***Keep your code clean!***

## jSparrow 3.1.0 announcement

On Tuesday, January 29th, jSparrow 3.1.0 will come with support for [Eclipse 2018-12](https://www.eclipse.org/downloads/packages/release/2018-12) and further UI improvements.
Enjoy refactoring with jSparrow on the latest Eclipse version.

Don't forget to register for jSparrow Starter and get [***15 rules free of charge***](https://jsparrow.github.io/rules/#free-rules-in-jsparrow-starter).

***Happy Coding!***

## jSparrow Starter released!!!
Promised and kept - ***jSparrow Eclipse Starter*** is ***released***!

With this new version of jSparrow you will be able to [apply 15 rules free of charge](https://jsparrow.github.io/rules/#free-rules-in-jsparrow-starter). After a short registration, you will get a license key, allowing you to apply the rules on your projects.

You can then decide if you want to use the *jSparrow Free* version, as usual, or the new features of ***jSparrow Starter for automatic refactoring***.

***Have fun with the new features!***

Check out the [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-0-0)!

## jSparrow Starter is coming!!!

On ***December 21st 2018***, our solstice release, jSparrow surprises you with a new jSparrow Starter Version. Look forward to apply ***15 rules free of charge*** with jSparrow Eclipse 3.0.0!

After a short registration, you will get a license key, allowing you to apply 15 rules on your projects. You can then decide if you want to use the jSparrow Free version, as usual, or the new features of jSparrow Starter.

***Stay tuned!***

## jSparrow 3.0.0

Thank you for choosing our tool for automatic code improvement!
We greatly appreciate your suggestions and general feedback in order to further enhance jSparrow!

#### Quick Start

![Eclipse](/dashboard/img/quick-start.jpg)

| [Buy License](https://jsparrow.eu/get-jsparrow/) | [jSparrow Website](https://jsparrow.eu/) | [Documentation](https://jsparrow.github.io/) | [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html) | [Blog](https://jsparrow.info/) | [Contact Us](https://jsparrow.eu/about-splendit/) |

## Blog

![jSparrow Linebreak Top](/dashboard/img/git-linebreak-top.png)

[jSparrow 3.0.0!!](https://jsparrow.github.io/eclipse/release-notes.html#_3-0-0)
This release brings free automatic rules and improvements!

Make sure to checkout how to get the free automatic rules at [Registration for 15 free rules](https://jsparrow.github.io/eclipse/installation-guide.html#jsparrow-starter-registration).

Check the full documentation for more information in jSparrow's [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html).
...
*Dec 21, 2018*


[jSparrow 2.7.0!!](https://jsparrow.github.io/eclipse/release-notes.html#_2-7-0)
This release brings 6 new rules and a news dashboard!
* Remove Unnecessary Thrown Exceptions on Method Signatures
* Remove Double Negations
* Remove Explicit Call To super()
* Remove Unnecessary Semicolons
* Use StringBuilder::append
* Use Guard Condition

Check the full documentation for more information in jSparrow's [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html).
...
*Nov 21, 2018*

---

[User statistics are finally here!](https://www.jsparrow.info/home/user-statistics-are-finally-here)
The measurement results of the automatical Java code refactoring are impressive! Check them out [here](https://jsparrow.github.io/github/statistics.html)!
...
*Nov 19, 2018*

---

["Wiener"​ Java Spezialitäten](https://www.jsparrow.info/home/wiener-java-spezialit%C3%A4ten)
The jSparrow lecture series will start on Thursday.
Eclipse supports lots of languages and offers lots of tools to help you develop products. This webinar will cover short demonstration on how to build simple Eclipse plugin, that will extend existing Eclipse menu and use Eclipse API to operate on eclipse project.
#WienerJavaSpezialitaeten
...
*Sep 11, 2018*

---

[jSparrow - Photon ready!](https://www.jsparrow.info/home/jsparrow-eclipse-photon)
jSparrow - is intensively tested so the new release this Tuesday will be photon-ready.
The Organize-Import functionality in Eclipse has been postponed, this has been adjusted in jSparrow, and with the Tuesday release
...
*Jul 31, 2017*

---

[jSparrow - Eclipse Photon](https://www.jsparrow.info/home/jsparrow-eclipse-photon)
jSparrow - is intensively tested so the new release this Tuesday will be photon-ready.
The Organize-Import functionality in Eclipse has been postponed, this has been adjusted in jSparrow, and with the Tuesday release
...
*Jun 21, 2017*

---

[jSparrow - Java refactoring now possible in the build process](https://www.jsparrow.info/home/jsparrow-java-refactoring-now-possible-in-the-build-process)
After jSparrow passed the 1500 user mark as an Eclipse plugin, the jSparrow Midsummer release 2018 was another step in the direction of automated Java code modernization. jSparrow is now also available as a Maven Plugin
...
*Mar 31, 2017*

---

[The jSparrow Midsummer Release 2.0](https://www.jsparrow.info/home/the-jsparrow-midsummer-release-2-0)
The jSparrow Midsummer Release 2.0 was released today:
In addition, jSparrow is today listed on the Eclipse Marketplace:
Thanks a lot to our dedicated team who have done a great job! Everyone is fully committed to the idea
...
*Jun 22, 2017*

![jSparrow Linebreak Bottom](/dashboard/img/git-linebreak-bottom.png)

<Footer />
