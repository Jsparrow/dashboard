---
navbar: false
footer: © jSparrow a brand of Splendit IT-Consulting GmbH 2020
title: jSparrow
---

![jSparrow Linebreak Very-Top](/dashboard/img/git-linebreak-very-top.png)

## jSparrow 4.16.0

We are happy to announce that in our new release we have introduced the availability of our 20 free rules without registration. Additionally, our markers can also be applied on your sources for free.

***“We are stuck with technology when what we really want is just stuff that works.” – Douglas Adams***


## jSparrow 4.15.0

We are happy to announce that in our new release we have once again improved the user experience of our jSparrow Eclipse Plugin. There is a better handling of the UI in connection with the refactoring process.

***“Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.” – Steve Jobs***


## jSparrow 4.14.1

We are happy to announce that our new release fixes the issues for the usage of jSparrow on eclipse 2022-12.

***“We wish You a happy New Year 2023 and happy coding!”***


## jSparrow 4.14.0

We are happy to announce that our new release offers an improved user experience of our jSparrow Eclipse Plugin. We have changed the appearance of the UI for the rule selection and the licensing process.

***“Technology like art is a soaring exercise of the human imagination.” – Daniel Bell***


## jSparrow 4.13.0 and jSparrow Maven Plugin 3.20.0 Released

We are happy to announce that jSparrow September release introduces three new rules. 

### [Replace Set.removeAll With ForEach](https://jsparrow.github.io/rules/replace-set-remove-all-with-for-each.html)

This new rule replaces invocations of the method [java.util.Set#removeAll(java.util.Collection)](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Set.html#removeAll(java.util.Collection)) which may cause performance problems due to a possible O(n^2) complexity.
For example, the following code: 
```java
	void removeStringsFromSet(Set<String> stringSet, List<String> stringList) {
		stringSet.removeAll(stringList);
	}
```

is transformed to: 

```java
	void removeStringsFromSet(Set<String> stringSet, List<String> stringList) {
		stringList.forEach(stringSet::remove);
	}
```

### [Replace Wrong Class for Logger](https://jsparrow.github.io/rules/replace-wrong-class-for-logger.html)

If a given logger is initialized with a class that is different from the class where it is declared, then this new rule will replace the wrong initialization argument with the correct one.
For example, the following code: 
```java
//...
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//...
public class Employee extends User {
	static final Logger LOGGER = LoggerFactory.getLogger(User.class);
	// ...
}
```

is transformed to: 

```java
//...
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//...
public class Employee extends User {
	static final Logger LOGGER = LoggerFactory.getLogger(Employee.class);
	// ...
}
```

### [Replace Multi Branch If By Switch](https://jsparrow.github.io/rules/replace-multi-branch-if-by-switch.html)

This rule replaces multi-branch if statements by corresponding switch expressions or switch statements with switch labeled rules which have been introduced in Java 14.
For example, the following code: 
```java
	String getTitle(int weekDay) {
		if (weekDay == 1 || weekDay == 3 || weekDay == 5) {
			return "Timetable For Monday, Wednesday, Friday";
		} else if (weekDay == 2 || weekDay == 4 || weekDay == 6) {
			return "Timetable For Tuesday, Thursday, Saturday";
		} else {
			return "Timetable For Sunday Or Holiday";
		}
	}
```

is transformed to: 

```java
	String getTitle(int weekDay) {
		return switch (weekDay) {
		case 1, 3, 5 -> "Timetable For Monday, Wednesday, Friday";
		case 2, 4, 6 -> "Timetable For Tuesday, Thursday, Saturday";
		default -> "Timetable For Sunday Or Holiday";
		};
	}
```
---

jSparrow provides now a total of [***117 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-13-0)  and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-20-0)!

### jSparrow Markers

Two new markers have been added to jSparrow. 
Thus, bringing the total number of jSparrow markers to 92.

***"Nothing will come of nothing." ― William Shakespeare***


## jSparrow 4.12.0 and jSparrow Maven Plugin 3.19.0 Released

We are happy to announce that jSparrow midsummer release introduces one new rule. 

### [Replace Request Mapping Annotation](https://jsparrow.github.io/rules/replace-request-mapping-annotation.html)

This new rule embraces the dedicated Spring Web annotations introduced in Spring Framework 4.3 for writing web controllers. 
For example, the following code: 
```java
@RequestMapping(value = "/users/get/{userId}", method = RequestMethod.GET)
public User getUser(@PathVariable String userId) {
	// ...
}
```

is transformed to: 

```java
@GetMapping(value = "/users/get/{userId}")
public User getUser(@PathVariable String userId) {
	// ...
}
```
---

jSparrow provides now a total of [***114 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-12-0)  and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-19-0)!

### jSparrow Markers

One new marker has been added to jSparrow. 
Thus, bringing the total number of jSparrow markers to 90.

***"Intelligence is the ability to avoid doing work, yet getting the work done." ― Linus Torvalds***

## jSparrow 4.11.0 and jSparrow Maven Plugin 3.18.0 Released

We are happy to announce that jSparrow May release introduces one new rule and adds 13 jSparrow markers for existing rules. 

### [Remove Redundant Close](https://jsparrow.github.io/rules/remove-redundant-close.html)

This rule is used to remove redundant `close()` invocations on resources which are declared in the header of try-with-resource statements.
For example, the following code: 
```java
try (BufferedReader br = Files.newBufferedReader(Paths.get(path))) {
	System.out.println("First line: " + br.readLine());
	br.close();
}
```

is transformed to: 

```java
try (BufferedReader br = Files.newBufferedReader(Paths.get(path))) {
	System.out.println("First line: " + br.readLine());
}
```

### jSparrow Markers

Thirteen new markers for existing rules are added to jSparrow. 
Thus, bringing the total number of jSparrow markers to 89.

Here is an example of a jSparrow Marker that transforms a multi-line string literal concatenation into a text block: 
![jSparrow Markers](/dashboard/img/use-text-block-marker-001.gif)

---

jSparrow provides now a total of [***113 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-11-0)  and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-18-0)!

***"No code is faster than no code." ― Merb Motto***

## jSparrow 4.10.0 Released

We are happy to announce that jSparrow April release introduces one new rule for removing unused code and adds 10 jSparrow markers for existing rules.
Additionally, this release includes several UI changes to boost the usability of jSparrow refactoring workflow. 

### [Remove Unused Types](https://jsparrow.github.io/rules/remove-unused-types.html)

This rule finds and removes type declarations that are never used.
A dedicated configuration wizard allows users to choose the kind of type declarations they want to remove and how to handle the related test cases. 

![jSparrow Remove Unused Code Wizard](/dashboard/img/remove_unused_code_wizard_003.png)

For example, if users choose to remove unused private types, the following code:
```java
public class Application {

	private void run() {
		System.out.println("Running...");
	}

	public static void main() {
		UnusedMethodsSample instance = new UnusedMethodsSample();
		instance.run();
	}

	private class UnusedType {}
}
```

is transformed to: 

```java
public class Application {

	private void run() {
		System.out.println("Running...");
	}

	public static void main() {
		UnusedMethodsSample instance = new UnusedMethodsSample();
		instance.run();
	}
}
```

### jSparrow Context Menu

The jSparrow context menu is extended with new entires: 
* *Refactor with Default Profile* - starts jSparrow in the selected sources with the rules defined in the default profile. 
In this way, the select rules wizard is skipped and the preview wizard will open immediately after the refactoring computation is completed. 
* *Edit profiles...* - opens the jSparrow preference page for editing profiles and selecting the default profile. 

![jSparrow Context Menu](/dashboard/img/jsparrow_context_menu_dark_002.png)

### jSparrow Markers Preference Page

The jSparrow Markers preference page is extended with a search field that allows users to find jSparrow markers by their name and category:

![jSparrow Markers Preference Page](/dashboard/img/jsparrow_markers_preference_page_dark_003.png)

### jSparrow Markers Deactivate Quick-Fix

All jSparrow markers are extended with a quick-fix that allows users to deactivate markers. 
This quick-fix automatically opens the preference page and searches for the corresponding marker by its name:

![jSparrow Markers Deactivate Quick-Fix](/dashboard/img/jsparrow_markers_deactivate_quickfix_dark_003.gif)

### New jSparrow Markers

Ten new markers for existing rules are added to jSparrow. 
Thus, bringing the total number of jSparrow markers to 76.

---

jSparrow provides now a total of [***112 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-10-0!).

***"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away." ― Antoine do Saint-Exupery***

## jSparrow 4.9.0 and jSparrow Maven Plugin 3.16.0 Released

We are happy to announce that jSparrow March release introduces two new rules for removing unused code and adds 10 jSparrow markers for existing rules. 

### [Remove Unused Methods](https://jsparrow.github.io/rules/remove-unused-methods.html)

This rule finds and removes method declarations that are never used.
A dedicated configuration wizard allows users to choose the kind of methods they want to remove and how to handle the related test cases. 

![jSparrow Remove Unused Code Wizard](/dashboard/img/remove_unused_code_wizard_002.png)

If users choose to remove private methods, the following class:
```java
public class UnusedMethodsSample {

	private void unusedPrivateMethod() {}

	private void run() {
		System.out.println("Running...");
	}

	public static void main() {
		UnusedMethodsSample instance = new UnusedMethodsSample();
		instance.run();
	}
}
```

is transformed to: 

```java
public class UnusedMethodsSample {

	private void run() {
		System.out.println("Running...");
	}

	public static void main() {
		UnusedMethodsSample instance = new UnusedMethodsSample();
		instance.run();
	}
}
```

### [Remove Unused Local Variables](https://jsparrow.github.io/rules/remove-unused-local-variables.html)

This rule finds declarations of local variables that are never used and removes them. 
Reassignments as well as increment and decrement operations are not counted as active usages. 
Any annotation except for `@Deprecated` and `@SuppressWarnings` prevents the local variable from being considered as unused. 

As an example, the following code:
```java
String usedLocalVariable = "";
String unusedLocalVariable = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

is refactored to:
```java
String usedLocalVariable = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

### jSparrow Markers

Ten new markers for existing rules are added to jSparrow. 
Thus, bringing the total number of jSparrow markers to 66.

![jSparrow Markers](/dashboard/img/jSparrowMarker.gif)

---

jSparrow provides now a total of [***111 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-9-0)  and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-16-0)!

***"Deleted code is debugged code." ― Jeff Sickel***

## jSparrow 4.8.0 Released

We are happy to announce that jSparrow February release introduces a new rule and adds 15 jSparrow markers for existing rules. 

### [Remove Unused Fields](https://jsparrow.github.io/rules/remove-unused-fields.html)

This rule finds and removes field declarations that are never used.
A dedicated configuration wizard allows users to choose the kind of fields they want to analyze and remove.

![jSparrow Remove Unused Code Wizard](/dashboard/img/remove_unused_code_wizard.png)

If users choose to remove public fields, the following class:
```java
public class UnusedFieldSample {
	
	public String publicUsedField = "";
	public String publicUnusedReassignedField = "";
	private String privateUsedField = "";
	
	void foo() {
		publicUnusedReassignedField = "";
		BlackHole blackHole = new BlackHole();
		blackHole.use(publicUsedField);
		blackHole.use(privateUsedField);
	}
}
```

is transformed to: 

```java
public class UnusedFieldsSample {
	
	public String publicUsedField = "";
	private String privateUsedField = "";
	
	void foo() {
		BlackHole blackHole = new BlackHole();
		blackHole.use(publicUsedField);
		blackHole.use(privateUsedField);
	}
}
```

### jSparrow Markers

Fifteen new markers for existing rules are added to jSparrow. 
Thus, bringing the total number of jSparrow markers to 56.

![jSparrow Markers](/dashboard/img/jSparrowMarker.gif)

---

jSparrow provides now a total of [***109 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-8-0)!

***"Low-level programming is good for the programmer’s soul." ― John Carmack***

## jSparrow 4.7.0 and jSparrow Maven Plugin 3.14.0 Released

We are happy to announce that jSparrow January release introduces a new rule and adds 21 jSparrow markers for existing rules. 

### [Use Dedicated AssertJ Assertions](https://jsparrow.github.io/rules/use-dedicated-assert-j-assertions.html)

AssertJ contains a rich API for writing specific assertions about different types of objects. 
This rule encourages developers to make use of the dedicated assertions provided by AssertJ. 
Thus, simplifying the test code and improving the assertion failure messages. 

__Pre__
```java
assertThat(expectedString.equals("value")).isTrue();
assertThat(expectedList.contains("value")).isTrue();
assertThat(expectedMap.containsKey("key")).isTrue();
assertThat(expectedFile.isFile()).isTrue();
assertThat(expectedPath.isAbsolute()).isTrue();
```

__Post__
```java
assertThat(expectedString).isEqualTo("value");
assertThat(expectedList).contains("value");
assertThat(expectedMap).containsKey("key");
assertThat(expectedFile).isFile();
assertThat(expectedPath).isAbsolute();
```

### jSparrow Markers

Twenty-one new markers are added to jSparrow. 
Thus, bringing the total number of jSparrow markers to 41. 
The preference page is redesigned to group markers by their tags:

![jSparrow Markers Preference Page](/dashboard/img/jsparrow_markers_preference_page_redesign_light.png)

---

jSparrow provides now a total of [***108 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-7-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-14-0)!

***"A clever person solves a problem. A wise person avoids it." ― Albert Einstein***

## jSparrow 4.6.0 and jSparrow Maven Plugin 3.13.0 Released

The winter solstice jSparrow release arrives with plenty of new features providing a new flexible licensing model, extending the set of jSparrow Markers, and opening a new chapter on jSparrow rules for AssertJ. 

### NEW: jSparrow Pay-Per-Use License Model

After talking to our customers we are announcing the possibility that customers can use jSparrow as they would like to: clear costs and unrestricted use.  
You can choose between a 50 or 100 Euro pre-paid [voucher](https://jsparrow.io/pricing), and you will get a package of 675 or 1.350 credits for automatical code fixes.  
::: tip How is a credit calculated? 
For each usage we charge the credits quoted as remediation cost for the selected rule. 
:::
Customers loved the idea of being flexible with our tool. 
To give you more details please read our [documentation](https://jsparrow.github.io/eclipse/release-notes.html#pay-per-use-license-model) or give us a call.

### jSparrow Markers

Ten additional markers are now available in jSparrow. 
Furthermore, a new preference page allows users to activate the preferred jSparrow Markers. 
![jSparrow Markers Preference Page](/dashboard/img/jsparrow_markers_preference_page_light.png)

### [Chain AssertJ AssertThat Statements](https://jsparrow.github.io/rules/chain-assert-j-assert-that-statements.html)

AssertJ encourages writing fluent test cases by chaining the assertions that target the same object instead of invoking [`assertThat`](https://javadoc.io/doc/org.assertj/assertj-core/latest/org/assertj/core/api/Assertions.html) multiple times.
This rule replaces consecutive AssertJ assertThat invocations targeting the same object with an assertion chain. 
Thus, eliminating some redundant code and increasing the readability of test cases.  

__Pre__
```java
assertThat(expectedHelloWorld).isNotNull();
assertThat(expectedHelloWorld).isNotEmpty();
assertThat(expectedHelloWorld).startsWith("Hello");
assertThat(expectedHelloWorld).contains(" ");
assertThat(expectedHelloWorld).contains("World");
assertThat(expectedHelloWorld).endsWith("!");
```

__Post__
```java
assertThat(expectedHelloWorld)
	.isNotNull()
	.isNotEmpty()
	.startsWith("Hello")
	.contains(" ")
	.contains("World")
	.endsWith("!");
```

### [Shift AssertJ Description Before Assertion](https://jsparrow.github.io/rules/shift-assert-j-description-before-assertion.html)

AssertJ provides methods for setting descriptions or error messages of assertions, e.g.: [as](https://www.javadoc.io/doc/org.assertj/assertj-core/3.2.0/org/assertj/core/api/Descriptable.html#as-java.lang.String-java.lang.Object...-), [describedAs](https://www.javadoc.io/doc/org.assertj/assertj-core/3.2.0/org/assertj/core/api/Descriptable.html#describedAs-java.lang.String-java.lang.Object...-), [withFailMessage](https://javadoc.io/doc/org.assertj/assertj-core/2.3.0/org/assertj/core/api/AbstractAssert.html#withFailMessage(java.lang.String,%20java.lang.Object...)), and [overridingErrorMessage](https://javadoc.io/doc/org.assertj/assertj-core/2.3.0/org/assertj/core/api/AbstractAssert.html#overridingErrorMessage(java.lang.String,%20java.lang.Object...)).
These methods should always be invoked before the actual assertion they intend to describe, otherwise, they have no effect. 
This rule, swaps the invocation of the assertions with the invocation of the descriptions setting for the corresponding assertions.

__Pre__
```java
assertThat(user.getName())
    .isEqualTo("John")
    .describedAs("Asserting the correct name");
```

__Post__
```java
assertThat(user.getName())
    .describedAs("Asserting the correct name")
    .isEqualTo("John");
```
---

jSparrow provides now a total of [***107 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-6-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-13-0)!

***"Optimism is an occupational hazard of programming: testing is the treatment." ― Kent Beck***

## jSparrow 4.5.0 and jSparrow Maven Plugin 3.12.0 Released

We are happy to announce the jSparrow November release with one new refactoring rule!
The new rule is motivated by Java Records.

### [Use Java Records](https://jsparrow.github.io/rules/use-java-records.html)

Since Java 16, record classes are a new kind of class in the Java language. 
Record classes help to model plain data aggregates with less ceremony than normal classes.
This rule replaces the declarations of local classes, inner classes, and package private root classes with record class declarations.

For instance, the following inner class:
```java
class Point {
	private final int x;
	private final int y;

	Point(int x, int y) {
	this.x = x;
		this.y = y;
	}

	public int x() {
		return x;
	}

	public int y() {
		return y;
	}
}
```
is transformed to:
```java
record Point(int x, int y) {}
```

The new rule brings jSparrow to a total of [***105 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-5-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-12-0)!


***"Good code is its own best documentation." ― Steve McConnell***

## jSparrow 4.4.0 and jSparrow Maven Plugin 3.11.0 Released

We are happy to announce the jSparrow October release with one new refactoring rule!
The new rule makes use of a Stream API extension in Java 16. 

### [Replace Stream Collect by toList](https://jsparrow.github.io/rules/replace-stream-collect-by-to-list.html)

Java 16 introduced [`Stream.toList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Stream.html#toList()) as a shorthand method for converting a Stream into an unmodifiable List.
This rule replaces invocations of `collect(Collectors.toUnmodifiableList())` by the new method `Stream.toList()`.

For instance, the following code:
```java
List<String> List = collection
		.stream()
		.map(function)
		.filter(predicate)
		.collect(Collectors.toUnmodifiableList());
```
is transformed to:
```java
List<String> List = collection
		.stream()
		.map(function)
		.filter(predicate)
		.toList();
```
In certain scenarios with immutable context state, `collect(Collectors.toList())` is supported, too.

The new rule brings jSparrow to a total of [***104 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-4-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-11-0)!


***"Programming is the art of telling another human being what one wants the computer to do." ― Donald E. Knuth***

## jSparrow 4.3.0 and jSparrow Maven Plugin 3.10.0 Released

We are excited to announce that this autumn release brings three additional jSparrow rules!
The new rules embrace some recent Java features like Switch Expressions and Text Blocks. 

### [Use Switch Expression](https://jsparrow.github.io/rules/use-switch-expression.html)

This rule replaces the traditional switch statements with switch expressions which turned into a standard feature in Java 14.

For instance, the following code:
```java
String medal;
switch(finished) {
case 1 : 
    medal = "Gold";
    break;
case 2: 
    medal = "Silver";
    break;
case 3: 
    medal = "Bronze";
    break;
default:
    medal = "None";
}
```

is transformed to:
```java
String medal = switch (finished) {
    case 1 -> "Gold";
    case 2 -> "Silver";
    case 3 -> "Bronze";
    default -> "None";
}
```

### [Use Text Block](https://jsparrow.github.io/rules/use-text-block.html)

Java 15 introduced [Text Blocks](https://openjdk.java.net/jeps/378) to express String literals spanning several lines. 
This rule replaces multiline String concatenation expressions with Text Block String literals. 

For instance, the following string concatenation:
```java
String html = "" +
		"<html>\n" +
		"\t<head>\n" +
		"\t\t<meta charset=\"utf-8\">" +
		"\t</head>\n" +
		"\t<body class=\"default-view\" style=\"word-wrap: break-word;\">\n"+ 
		"\t\t<p>Hello world!</p>\n" + 
		"\t</body>\n"+
		"</html>\n";
```

is transformed to:
```java
String html = """
		<html>
			<head>
				<meta charset="utf-8">
			</head>
			<body class="default-view" style="word-wrap: break-word;">
				<p>Hello world!</p>
			</body>
		</html>
		""";
```

### [Replace String Format by Formatted](https://jsparrow.github.io/rules/replace-string-format-by-formatted.html)

This rule replaces the static invocations of [`String.format`](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/lang/String.html#format(java.lang.String,java.lang.Object...)) by invocations of the new instance method [`String::formatted​`](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/lang/String.html#formatted(java.lang.Object...)) from Java 15.

For instance, the following text block:
```java
String output = String.format("""
		Name:    %s
		Phone:   %s
		Address: %s
		Salary:  $%.2f
		""", 
        name, phone, address, salary);
```

can be formatted as follows:
```java
String output = """
		Name:    %s
		Phone:   %s
		Address: %s
		Salary:  $%.2f
		""".formatted(name, phone, address, salary);
```

These three new rules bring jSparrow to a total of [***103 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-3-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-10-0)!


***"The art of programming is the art of organizing complexity." ― Edsger W. Dijkstra***

## jSparrow 4.2.0 Released

This new jSparrow release supports upgrading to Java 16.

### [Use Pattern Matching for Instanceof](https://jsparrow.github.io/rules/use-pattern-matching-for-instanceof.html)

This rule replaces instanceof expressions by [Pattern Matching for instanceof](https://openjdk.java.net/jeps/394) introduced in Java 16. 

It is common for Java programs to contain logic that combines type checking using `instanceof` with explicit type casting. 
Naturally, an `instanceof` expression is followed by a local variable declaration initialized with a casting expression. 
Pattern Matching for instanceof combines these three steps (i.e., type checking, variable declaration, and type casting) into a single step, thus reducing boilerplate code and eliminating sources of errors. 

The following code:
```java
if(athlete instanceof Swimmer) {
    Swimmer swimmer = (Swimmer)athlete;		
    sendGoldMedal(swimmer);
}
```

is transformed to:
```java
if(athlete instanceof Swimmer swimmer) {	
    sendGoldMedal(swimmer);
}
```

This new rule brings jSparrow to a total of [***100 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-2-0)!


***"Brevity is the soul of wit." ― William Shakespeare.***

## jSparrow 4.1.0 and jSparrow Maven Plugin 3.8.0 Released

This new jSparrow release brings more assistance on migrating JUnit 3 Tests. 

### [Replace JUnit 3 Test Cases](https://jsparrow.github.io/rules/replace-j-unit3-test-cases.html)

This rule migrates JUnit 3 tests to either JUnit JUpiter or JUnit 4 depending on the most up-to-date JUnit version available in the classpath. 

The following test:
```java
import junit.textui.TestRunner;
import junit.framework.TestCase;

public class CalculatorTest extends TestCase {

	private Calculator calculator;

	@Override
	protected void setUp() {
		calculator = new Calculator();
	}

	public void testAddition() {
		assertEquals(0x7fffffff, calculator.add(Integer.MAX_VALUE, 0));
	}

	public static void main(String[] args) {
		TestRunner.run(ReplaceJUnit3TestCasesWithJupiterRule.class);
	}
}
```

is transformed to:
```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;

public class CalculatorTest {

	private Calculator calculator;

	@BeforeEach
	protected void setUp() {
		calculator = new Calculator();
	}

	@Test
	public void testAddition() {
		assertEquals(0x7fffffff, calculator.add(Integer.MAX_VALUE, 0));
	}
}
```

This new rule brings jSparrow to a total of [***99 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-1-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-8-0)!


***"The unavoidable price of reliability is simplicity." ― C.A.R. Hoare***

## jSparrow 4.0.0 and jSparrow Maven Plugin 3.7.0 Released

We are excited to announce that this midsummer release brings a major update to **jSparrow 4.0.0**.
The key new feature in this release is the **jSparrow Marker**. 
Additionally, 3 more rules for refactoring JUnit tests are added to the jSparrow rule set, thus reaching a total of **98 rules**.

### jSparrow Markers. 

For the first time, we introduce **jSparrow Markers** to help developers mitigate issues and code smells in real-time, while writing new code. 

![jSparrow Markers](/dashboard/img/jSparrowMarker.gif)

The markers for the first 10 jSparrow Rules are available to everyone. 
More markers for more rules are about to come. 

### [Use Dedicated Assertions](https://jsparrow.github.io/rules/use-dedicated-assertions.html)

Replaces boolean assertions (e.g., `assertTrue` and `assertFalse`) with the corresponding dedicated assertions when testing for equality or **null** values. 
Thus, improving the assertion failure messages and the readability of the test code. 
It supports both, JUnit 4 and JUnit Jupiter assertions.  

The following assertion:
```java
assertTrue(expected.equals(actual));
```

is transformed to:
```java
assertEquals(expected, actual);
```

### [Replace JUnit Assumptions with Hamcrest JUnit](https://jsparrow.github.io/rules/replace-j-unit4-assumptions-with-hamcrest-j-unit.html)

This rule replaces the JUnit 4 assumptions [`assumeThat`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeThat(java.lang.String,%20T,%20org.hamcrest.Matcher)), [`assumeNoException`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeNoException(java.lang.String,%20java.lang.Throwable)), and [`assumeNotNull`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeNotNull(java.lang.Object...)) by the equivalent invocations of Hamcrest JUnit assumption [`MatcherAssume.assumeThat`](https://www.javadoc.io/doc/org.hamcrest/hamcrest-junit/1.0.0.0/org/hamcrest/junit/MatcherAssume.html#assumeThat(java.lang.String,%20T,%20org.hamcrest.Matcher)). 

Since JUnit 5 contains no equivalent assumption methods, this rule eliminates an obstacle when migrating to JUnit 5. 

The following test:
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.junit.Assume.assumeThat;
//..
	@Test
	public void test() {
		//...
		assumeThat(value, equalToIgnoringCase("value"));
	}
```

is transformed to:
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.hamcrest.junit.MatcherAssume.assumeThat;
//..
	@Test
	public void test() {
		//...
		assumeThat(value, equalToIgnoringCase("value"));
	}
```

### [Replace JUnit 4 Category with JUnit Jupiter Tag](https://jsparrow.github.io/rules/replace-j-unit4-category-with-jupiter-tag.html)

This rule replaces JUnit 4 [@Category](https://junit.org/junit4/javadoc/latest/org/junit/experimental/categories/Category.html) annotations with one or more JUnit Jupiter [@Tag](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Tag.html) annotations. 
This replacement is a further step toward transitioning to JUnit Jupiter.

The following test:
```java
@Category({ FirstCategory.class, SecondCategory.class })
@Test
public void test() {
	// ...
}
```

is transformed to:
```java
@Tag("io.jsparrow.examples.FirstCategory")
@Tag("io.jsparrow.examples.SecondCategory")
@Test
public void test() {
	// ...
}
```

The new rules bring jSparrow to a total of [***98 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_4-0-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-7-0)!


***"The function of a good software is to make the complex appear to be simple." ― Grady Booch***

## jSparrow 3.30.0 and jSparrow Maven Plugin 3.6.0 Released

This new jSparrow release brings more assistance on transitioning to JUnit 5!

### [Replace JUnit 4 Assumptions with JUnit Jupiter](https://jsparrow.github.io/rules/replace-j-unit4-assumptions-with-jupiter.html)

This rule contributes to a stepwise transition to JUnit 5 by replacing the JUnit 4 assumption methods (namely, `assumeTrue` and `assumeFalse`) by the equivalent JUnit 5 ones.
Here is a short transformation example of the new rule:

The following test:
```java
import static org.junit.Assume.assumeTrue;
//...
class OrderTest {
	//...
	@Test
	void testService() {
		assumeTrue(orderService.isAvailableInStock("1", 5));
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

is transformed to:
```java
import static org.junit.jupiter.api.Assumptions.assumeTrue;
//...
class OrderTest {
	//...
	@Test
	void testService() {
		assumeTrue(orderService.isAvailableInStock("1", 5));
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

This new rule brings jSparrow to a total of [***95 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-30-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-6-0)!


***"Everyday life is like programming, I guess. If you love something you can put beauty into it." ― Donald E. Knuth***


## jSparrow 3.29.0 and jSparrow Maven Plugin 3.5.0 Released

This new jSparrow release eliminates some obstacles for migrating to JUnit 5!

### [Replace JUnit assertThat with Hamcrest](https://jsparrow.github.io/rules/replace-j-unit-assert-that-with-hamcrest.html)

The JUnit [`Assert.assertThat`](https://junit.org/junit4/javadoc/4.13/org/junit/Assert.html#assertThat(T,%20org.hamcrest.Matcher)) method is deprecated. Its sole purpose is to forward the call to the [`MatcherAssert.assertThat`](http://hamcrest.org/JavaHamcrest/javadoc/1.3/org/hamcrest/MatcherAssert.html#assertThat(T,%20org.hamcrest.Matcher)) defined in Hamcrest 1.3. 
Therefore, it is recommended to directly use the equivalent assertion defined in the third party Hamcrest library.  
Since JUnit 5 contains no equivalent assertion for `assertThat`, this rule also eliminates an obstacle for migration to JUnit 5. 
Here is a short transformation example of the new rule:

The following test class:
```java
import static org.junit.Assert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
		User user = userRepo.findById("0");
		assertThat(user, equalTo(new User("Robb", "Stark")));
	}
}
```

is transformed to:
```java
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
		User user = userRepo.findById("0");
		assertThat(user, equalTo(new User("Robb", "Stark")));
	}
}
```

This new rule brings jSparrow to a total of [***94 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-29-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-5-0)!


***"Code teaches you how to face really big problems." ― Jack Dorsey***

## jSparrow 3.28.0 and jSparrow Maven Plugin 3.4.0 Released

This new jSparrow release brings the final step on transitioning to JUnit 5!

### [Replace JUnit 4 Assertions with JUnit Jupiter](https://jsparrow.github.io/rules/replace-j-unit4-assertions-with-jupiter.html)

This rule contributes to a stepwise transition to JUnit 5 by replacing the JUnit 4 assertion methods by the equivalent JUnit 5 ones.
For more details, visit our [online documentation](https://jsparrow.github.io/rules/replace-j-unit4-assertions-with-jupiter.html).
Here is a short example:

The following test class:
```java
import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

public class UserRepoTest {
	private UserRepository userRepo;
	@BeforeEach
	public void init() {
		userRepo = new UserRepository();
	}

	@Test
	void test() {
		User user = userRepo.findById("0");
		assertEquals("John is always first", "John", user.getName());
	}
}
```

is transformed to:
```java
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class UserRepoTest {
	private UserRepository userRepo;
	@BeforeEach
	public void init() {
		userRepo = new UserRepository();
	}

	@Test
	void test() {
		User user = userRepo.findById("0");
		assertEquals("John", user.getName(), "John is always first.");
	}
}
```

This new rule brings jSparrow to a total of [***93 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-28-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-4-0)!


***"Simple things should be simple, complex things should be possible." ― Alan Kay***

## jSparrow 3.27.0 and jSparrow Maven Plugin 3.3.0 Released

This new jSparrow release brings further assistance in migrating to JUnit 5!

### [Replace JUnit 4 Annotations with JUnit Jupiter](https://jsparrow.github.io/rules/replace-j-unit4-annotations-with-jupiter.html)

By replacing the JUnit 4 annotations with the corresponding [Jupiter](https://junit.org/junit5/docs/current/user-guide/#overview) alternatives, this rule promotes an automated transition to JUnit Jupiter.
For more details, visit our [online documentation](https://jsparrow.github.io/rules/replace-j-unit4-annotations-with-jupiter.html).
Here is a short example:

__Pre__
```java
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

public class ExampleTest {

	@Before
	public void beforeTestMethod() {}

	@Ignore
	@Test
	public void test() {}
}
```

__Post__
```java
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class ExampleTest {

	@BeforeEach
	public void beforeTestMethod() {}

	@Disabled
	@Test
	public void test() {}
}
```

This new rule brings jSparrow to a total of [***92 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-27-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-3-0)!


***"Never allow the same bug to bite you twice." ― Steve Maguire***

## jSparrow 3.26.0 and jSparrow Maven Plugin 3.2.0 Released

jSparrow adds a new rule to help migrating to JUnit 5. 

### [Replace JUnit Timeout Annotation Property with assertTimeout](https://jsparrow.github.io/rules/replace-j-unit-timeout-annotation-property.html)

The JUnit [Jupiter API](https://junit.org/junit5/docs/current/user-guide/#overview) provides timeout assertions, i.e., assertions that make sure an executable completes before a timeout is exceeded.  
In JUnit 4 this is achieved by using annotation properties, e.g., `@Test(timeout=...)`.

This rule removes the `timeout` annotation property and inserts an  [`assertTimeout`](https://junit.org/junit5/docs/5.0.1/api/org/junit/jupiter/api/Assertions.html#assertTimeout-java.time.Duration-org.junit.jupiter.api.function.Executable-) instead.
For example, the following test case:

```java
@Test(timeout=100)
public void timeoutTest() throws PersistenceException {
	userRepository.save(new User("10", "Jay", "Sparrow"));
}
```

is refactored to:

```java
@Test
public void timeoutTest() throws PersistenceException {
	assertTimeout(ofMillis(100), () -> userRepository.save(new User("10", "Jay", "Sparrow")));
}
```

This brings jSparrow to a total of [***91 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-26-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-2-0)!


***"With good program architecture debugging is a breeze, because bugs will be where they should be." ― David May***

## jSparrow 3.25.0 Released

jSparrow has a Christmas present for you! **Five** more rules are added for **free** in jSparrow Starter:

* [Remove Null-Checks Before Instanceof](https://jsparrow.github.io/rules/remove-null-check-before-instanceof.html)
* [Use Optional::filter](https://jsparrow.github.io/rules/optional-filter.html)
* [Collapse If Statements](https://jsparrow.github.io/rules/collapse-if-statements.html)
* [Use SecureRandom](https://jsparrow.github.io/rules/use-secure-random.html)
* [Use Offset Based String Methods](https://jsparrow.github.io/rules/use-offset-based-string-methods.html)

[Register now](https://jsparrow.github.io/rules/#free-rules-in-jsparrow-starter) and get [**20 rules**](https://jsparrow.github.io/tags/#free) **Free** of charge in *jSparrow Starter*. 

***"Merry Christmas and Happy New Year!" ― Your jSparrow Team***

## jSparrow 3.24.0 and jSparrow Maven Plugin 3.1.0 Released

The winter solstice jSparrow release adds three new refactoring rules and opens a new chapter in refactoring towards JUnit 5. 

### [Replace JUnit ExpectedException with assertThrows](https://jsparrow.github.io/rules/replace-j-unit-expected-exception.html)
In JUnit 4.13, the [`ExpectedException.none()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#none()) rule is deprecated.
The recommended alternative is to use [`assertThrows()`](https://junit.org/junit4/javadoc/latest/org/junit/Assert.html#assertThrows(java.lang.Class,%20org.junit.function.ThrowingRunnable)). 
This new jSparrow rule performs such a transformation automatically. 

__Pre__
```java
@Rule
public ExpectedException expectedException = ExpectedException.none();

@Test
public void invalidRepo_shouldThrowPersistenceException() throws PersistenceException {
	User user = new User("10", "John", "wolf");
	expectedException.expect(PersistenceException.class);
	invalidUserRepository.save(user);
}
```

__Post__
```java
@Test
public void invalidRepo_shouldThrowPersistenceException() {
	User user = new User("10", "John", "wolf");
	assertThrows(PersistenceException.class, () -> invalidUserRepository.save(user));
}
```

### [Replace JUnit Expected Annotation Property with assertThrows](https://jsparrow.github.io/rules/replace-j-unit-expected-annotation-property.html)

Using the [`expected`](https://junit.org/junit4/javadoc/latest/org/junit/Test.html#expected()) annotation property for testing the thrown exceptions is rather misleading. 
Often it becomes unclear which part of the test code is responsible for throwing the exception. 
This rule aims to overcome this problem by replacing the `expected` annotation property with [`assertThrows`](https://junit.org/junit4/javadoc/latest/org/junit/Assert.html#assertThrows(java.lang.Class,%20org.junit.function.ThrowingRunnable)).

__Pre__
```java
@Test(expected = PersistenceException.class)
public void invalidRepo_shouldThrowPersistenceException() throws PersistenceException {
    User user = new User("10", "John", "wolf");
    invalidUserRepository.save(user);
}
```

__Post__
```java
@Test
public void invalidRepo_shouldThrowPersistenceException() {
    User user = new User("10", "John", "wolf");
    assertThrows(PersistenceException.class, () -> invalidUserRepository.save(user));
}
```

### [Use Files.writeString](https://jsparrow.github.io/rules/use-files-write-string.html)

Java 11 introduced [`Files.writeString(Path, CharSequence, Charset, OpenOption...)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html#writeString(java.nio.file.Path,java.lang.CharSequence,java.nio.charset.Charset,java.nio.file.OpenOption...)) for writing small text files in an efficient manner. 
This rule replaces `BufferedWriter`s that are used to write a single value into a file, with `Files.write(...)`.

__Pre__
```java
try (BufferedWriter bufferedWriter = new BufferedWriter(
    new FileWriter(path, StandardCharsets.UTF_8))) {
  bufferedWriter.write("Hello World!");
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

__Post__
```java
try {
  Files.writeString(Paths.get(path), "Hello World!", StandardCharsets.UTF_8);
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```
---

jSparrow provides now a total of [***90 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-24-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3-1-0)!

***"First do it, then do it right, then do it better." ― Addy Osmani***

## jSparrow 3.23.0 and jSparrow Maven Plugin 3.0.0 Released

We are excited to announce the major update of ***jSparrow Maven Plugin 3.0.0*** with our regular monthly release. 
The new key feature in this update is the Maven goal [`jsparrow:report`](https://jsparrow.github.io/maven/getting-started.html#report) that makes jSparrow's static analysis capabilities available to ***everyone***.
More features are added to support **standard formatters** and to specify the sources to refactor using [glob expressions](ssh://git@bitbucket.splendit.loc:7999/jtp/maven-plugin-tests.git).
The new updates make jSparrow more friendly to users who work with diverse IDEs or DevOps tools.

### [The jSparrow `report` Goal](https://jsparrow.github.io/maven/getting-started.html#report)

This Maven plugin goal is introduced to allow users to try the jSparrow Maven plugin on their sources for free. 
Similar to the [`refactor`](https://jsparrow.github.io/maven/getting-started.html#refactor) goal, the `report` goal analyzes the project and computes refactorings with the selected rules.  
As a result, jSparrow generates an HTML report with the computed findings. Similar reports are available in the statistics page (e.g., for [jenkins-core](https://jsparrow.github.io/statistics/jenkins-statistics.html?p=jenkins-core)).

### [The `formatter` Parameter](https://jsparrow.github.io/maven/additional-configuration.html#eclipse-formatter-file)

A new parameter is added to the `refactor` goal, to allow users to specify a customized Eclipse formatter.  
Any customized formatter can be exported from the Eclipse IDE and provided to the `refactor` goal through the `formatter` parameter. 

### [The `selectedSources` Parameter](https://jsparrow.github.io/maven/getting-started.html#refactor)

A new parameter is added to the `refactor` goal to allow users to specify sources that jSparrow shall consider for refactorings.
[Glob expressions](https://docs.oracle.com/javase/tutorial/essential/io/fileOps.html#glob) can be used for specifying the selected sources. 


### [**Use Comparator Methods**](https://jsparrow.github.io/rules/use-comparator-methods.html)

The topic of jSparrow rules during this month has been to refactor the constructs used as [`Comparator`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html) instances. For example, the following code:
```java
users.sort((user1, user2) -> user1.getUserId().compareTo(user2.getUserId()));
```

is transformed to: 

```java
users.sort(Comparator.comparingLong(User::getUserId));
```

This brings jSparrow to a total of [***87 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-23-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_3.0.0)!


***"Programs must be written for people to read, and only incidentally for machines to execute."***  
***― Harold Abelson***

## jSparrow 3.22.0 and jSparrow Maven Plugin 2.19.0 Released

jSparrow introduces a new rule for optimizing the I/O operations on text files. 

### [Use Files.newBufferedWriter](https://jsparrow.github.io/rules/use-files-buffered-writer.html)

This rule makes use of the [`Files.newBufferedWriter`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html#newBufferedWriter(java.nio.file.Path,%20java.nio.charset.Charset,%20java.nio.file.OpenOption...)) method for initializing [`BufferedWriter`](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedWriter.html) objects to write text files in an efficient manner.
For instance, the following code:

```java
String location = "path/to/file";
try (BufferedWriter bufferedWriter = new BufferedWriter(
		new FileWriter(new File(location), charset))) {
	//...
}
```

is refactored to:

```java
String location = "path/to/file";
try (BufferedWriter bufferedWriter = Files.newBufferedWriter(
		Paths.get(location), charset)) {
	//...
}
```

This brings jSparrow to a total of [***86 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-22-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-19-0)!


***"Simplicity is prerequisite for reliability." ― Edsger W. Dijkstra***

## jSparrow 3.21.0 and jSparrow Maven Plugin 2.18.0 Released

The autumn jSparrow release brings improvements in performance, security, and I/O operations. 

### [Use Offset Based String Methods](https://jsparrow.github.io/rules/use-offset-based-string-methods.html)

This rule avoids creating intermediate String instances by making use of the overloaded offset based methods in the String API.

__Pre__
```java
String greeting = "Hello World!";
boolean startsWith = greeting.substring(6).startsWith("World");
```

__Post__
```java
String greeting = "Hello World!";
boolean startsWith = greeting.startsWith("World", 6);
```

### [Create Temp Files Using Java NIO](https://jsparrow.github.io/rules/create-temp-files-using-java-nio.html)

A suitable alternative for creating temporary files in security-sensitive applications is to use [`Files.createTempFile(String, String, FileAttribute<?>...)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html#createTempFile(java.lang.String,java.lang.String,java.nio.file.attribute.FileAttribute...)). This rule replaces the temporary file creation using `java.io.File` by the alternative methods defined in `java.nio.file.Files`.

__Pre__
```java
File file = File.createTempFile("myFile", ".tmp");
```

__Post__
```java
File file = Files.createTempFile("myFile", ".tmp").toFile();
```

### [Use Files.newBufferedReader](https://jsparrow.github.io/rules/use-files-buffered-reader.html)

Java 7 introduced the [`java.nio.file.Files`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html) class that contains convenience methods for operating on files. This rule makes use of the [`Files.newBufferedReader`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html#newBufferedReader(java.nio.file.Path,%20java.nio.charset.Charset)) method for initializing `BufferedReader` objects to read text files in an efficient non-blocking manner.

__Pre__
```java
String location = "path/to/file";
BufferedReader br = new BufferedReader(new FileReader(location));
```

__Post__
```java
String location = "path/to/file";
BufferedReader br = Files.newBufferedReader(Paths.get(location), Charset.defaultCharset());
```

### [Use Predefined Standard Charset](https://jsparrow.github.io/rules/use-predefined-standard-charset.html)

The invocations of [`Charset.forName(String)`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html#forName(java.lang.String)) are replaced by the constants defined in [`StandardCharsets`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/StandardCharsets.html).

__Pre__
```java
Charset c = Charset.forName("UTF-8");
```

__Post__
```java
Charset c = StandardCharsets.UTF_8;
```

---

jSparrow provides now a total of [***85 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-21-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-18-0)!

***"'That hardly ever happens' is another way of saying 'it happens'." ― Douglas Crockford***

## jSparrow 3.20.0 and jSparrow Maven Plugin 2.17.0 Released

The focus of the new rules for jSparrow's 3.20.0 release is on securing random number generators.  

### [Reuse Random Objects](https://jsparrow.github.io/rules/reuse-random-objects.html)

This rule extracts reusable [`java.util.Random`](https://docs.oracle.com/javase/8/docs/api/java/util/Random.html) objects from local variables to class or instance fields. 
The goal is to improve the unpredictability of the generated values. Moreover, the rule reduces the number of objects created by the program.
For instance, the following code:

```java
public void foo() {
    Random random = new Random();
    int nextIndex = random.nextInt();
    //...
}
```

is refactored to:

```java
private Random random = new Random();

public void foo() {
    int nextIndex = random.nextInt();
    //...
}
```

### [Use SecureRandom](https://jsparrow.github.io/rules/use-secure-random.html)

This rule replaces pseudo-random number generators (PRNG), i.e., instances of [`Random`](https://docs.oracle.com/javase/8/docs/api/java/util/Random.html) with cryptographically strong random number generators (RNG), i.e., instances of [`SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html). For instance, the following code snippet:

```java
Random random = new Random();
int nextIndex = random.nextInt();
```

is refactored to: 

```java
Random random = new SecureRandom();
int nextIndex = random.nextInt();
```

This brings jSparrow to a total of [***81 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-20-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-17-0)!


***"Creativity is the ability to introduce order into the randomness of nature." ― Eric Hoffer***

## jSparrow 3.19.0 and jSparrow Maven Plugin 2.16.0 Released

jSparrow 3.19.0 continues the series of security rules concerning injection attacks.

### [Use Parameterized LDAP Query](https://jsparrow.github.io/rules/use-parameterized-ldap-query.html)

Similar to SQL queries, the [LDAP](https://ldap.com/) search filters are also vulnerable to injection attacks.
This rule parameterizes all potential user supplied input that are concatenated into an LDAP search filter. For instance, the following code:

```java
String userId = request.getParameter("user");
String userPassword = request.getParameter("pass");
NamingEnumeration<SearchResult> results = dirContext.search(
		"ou=system", 
		"(&(uid=" + userId + ")(userPassword=" + userPassword + "))", 
		new SearchControls());
```

is transformed to: 
```java
String userId = request.getParameter("user");
String userPassword = request.getParameter("pass");
NamingEnumeration<SearchResult> results = dirContext.search(
		"ou=system", 
		"(&(uid={0})(userPassword={1}))", 
		new Object[] { userId, userPassword }, 
		new SearchControls());
```

This brings jSparrow to a total of [***79 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-19-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-16-0)!


***"Technology trust is a good thing, but control is a better one." ― Stephane Nappo***

## jSparrow 3.18.0 and jSparrow Maven Plugin 2.15.0 Released

The midsummer release of jSparrow 3.18.0 enriches the refactoring ruleset with three additional rules concerning SQL injection vulnerabilities and performance improvements. 

### Security and Performance Rules

* [*Use Parameterized JPA Query*](https://jsparrow.github.io/rules/use-parameterized-jpa-query.html):
It is a common misconception that JPA queries are immune to SQL injections, however, there are ways to secure them. 
This rule finds [JPQL](https://docs.oracle.com/javaee/7/tutorial/persistence-querylanguage005.htm#BNBUF) queries that are built by dynamically concatenating query fragments with potential user inputs and replaces them with parameterized JPQL queries. 
With this measure, the JDBC driver will escape input data before it is executed and therefore prevent SQL injection. 

* [*Avoid Concatenation in Logging Statements*](https://jsparrow.github.io/rules/avoid-concatenation-in-logging-statements.html):
Replaces string concatenations passed in logging statements with built-in string formatting. 
This spares some needless computation in case the logging level is not low enough to show the message. 
Additionally, a built-in formatted string message improves the readability, too. 

* [*Use Arrays Stream*](https://jsparrow.github.io/rules/use-arrays-stream.html):
Transforms `Arrays.asList(T..values).stream()` into an un-boxed specialized stream (i.e., [`IntStream`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html), [`LongStream`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/DoubleStream.html),
 or [`DoubleStream`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/DoubleStream.html)) whenever possible. 
Otherwise, the same stream generation is replaced with the shorthand method [Stream.of(T... values)](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#of-T...-).

This brings jSparrow to a total of [***78 automatic refactoring rules***](https://jsparrow.github.io/rules/).

Find out more information in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-18-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-15-0)!

***"Security is always excessive until it’s not enough."  
― Robbie Sinclair***

## jSparrow 3.17.0 and jSparrow Maven Plugin 2.14.0 Released

*I stared at code silently  
And watched bugs crawl by.  
They reminded me of jSparrow,  
I should give it a try.*

jSparrow 3.17.0 brings a second security rule for preventing SQL injection vulnerabilities.

[**Escape User Inputs in SQL Queries:**](https://jsparrow.github.io/rules/escape-user-inputs-in-sql-queries.html)
This rule detects potential user inputs that are concatenated with SQL queries and wraps them in [ESAPI.encoder().encodeForSql(codec, input)](https://javadoc.io/doc/org.owasp.esapi/esapi/latest/org/owasp/esapi/Encoder.html). 
In this way, the contents of the user input will only be considered as values and not as code, thus preventing the SQL injection vulnerabilities.

jSparrow supports [***75 automatic refactoring rules***](https://jsparrow.github.io/rules/) in total.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-17-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-14-0)!

***"A good programmer is someone who always looks both ways before crossing a one-way street."  
― Doug Linder***

## jSparrow 3.16.0 and jSparrow Maven Plugin 2.13.0 Released

*When refactoring is harassing  
And is driving you mad,  
Simply use jSparrow  
You will end up being glad.*

jSparrow 3.16.0 brings a new refactoring rule for eliminating security flaws.

* [Use Parameterized Query](https://jsparrow.github.io/rules/use-parameterized-query.html): This rule prevents SQL injections by replacing SQL [Statements](https://docs.oracle.com/javase/8/docs/api/java/sql/Statement.html) with [PreparedStatements](https://docs.oracle.com/javase/8/docs/api/java/sql/PreparedStatement.html) and extracting the user inputs that are dynamically concatenated with the SQL query into parameters of the PreparedStatement. 

jSparrow supports [***74 automatic refactoring rules***](https://jsparrow.github.io/rules/) in total.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-16-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-13-0)!

***"Rarely is anyone thanked for the work they did to prevent the disaster that didn't happen." ― Mikko Hypponen***

## jSparrow 3.15.0 and jSparrow Maven Plugin 2.12.0 Released

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
casting expressions where the target type and the type of the original expression are identical.  
* [Remove Collection::addAll](https://jsparrow.github.io/rules/remove-collection-add-all.html): Moves the parameters 
used in [Collection::addAll](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#addAll-java.util.Collection-) 
to the constructor which is used for initializing the collection. 
    

### UI Improvements

* **Starting jSparrow from multiple projects simultaneously.** From now on, it is possible to run jSparrow in more than 
one project simultaneously either by selecting multiple projects in 
the project explorer or by selecting a parent project consisting of multiple child projects.
* **Sorting the results in Summary Page.** The results in jSparrow Summary Page can now be sorted by the number of 
findings, the remediation costs or by the rule names.  

[***73 automatic refactoring rules***](https://jsparrow.github.io/rules/) are now supported by jSparrow.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-15-0) 
and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-12-0)!

***"Programs must be written for people to read, and only incidentally for machines to execute." ― Harold Abelson***

## jSparrow 3.14.0 and jSparrow Maven Plugin 2.11.0 Released

*With a break in the weather the sun shines through  
The grass spangles with the morning dew  
As everything thaws our sparrow starts to sing  
Getting rid of bugs just reminds us it's spring.*

jSparrow 3.14.0 comes with a new refactoring rule for improving `java.util.Optional`.

* [Use Optional::filter](https://jsparrow.github.io/rules/optional-filter.html): This rule extracts an `Optional::filter` from the consumer used in `Optional::ifPresent`. This simplifies the lambda expression used with Optional operations.

jSparrow supports [***70 automatic refactoring rules***](https://jsparrow.github.io/rules/) now.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-14-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-11-0)!

***"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." ― Martin Fowler***

## jSparrow 3.13.0 and jSparrow Maven Plugin 2.10.0 Released

*Little darling of the snow,  
Careless how the winds may blow,  
Happy as a bird can be,  
[Try jSparrow now, for free.](https://jsparrow.github.io/eclipse/starter-registration.html)*  

jSparrow 3.13.0 contains a new refactoring rule for `java.util.Optional`.

* [Use Optional::map](https://jsparrow.github.io/rules/optional-map.html): This rule extracts an `Optional::map` from the consumer used in `Optional::ifPresent`. This makes complicated code blocks easier to read and reuse.

jSparrow supports [***69 automatic refactoring rules***](https://jsparrow.github.io/rules/) now.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-13-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-10-0)!

***"Without requirements or design, programming is the art of adding bugs to an empty text file." ― Louis Srygley***

## jSparrow 3.12.0 and jSparrow Maven Plugin 2.9.0 Released

*I heard a bird sing  
In the dark of December.  
A magical thing  
And sweet to remember.*

jSparrow 3.12.0 adds a new refactoring rule for improving source code readability. This brings jSparrow to a total of [***68 automatic refactoring rules***](https://jsparrow.github.io/rules/).

* [Make Fields And Variables Final](https://jsparrow.github.io/rules/make-fields-and-variables-final.html):
This rule declares `private` fields and local variables `final`, if they are effectively `final`. Readability and maintainability of code is improved and accidental reassignments are prevented for affected fields and variables.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-12-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-9-0)!

***"Assignment statements are abstractions of destructive modifications of memory cells" ― Programming Language Concepts. Carlo Ghezzi, Mehdi Jazayeri***

## jSparrow 3.11.0 and jSparrow Maven Plugin 2.8.0 Released

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

## New Rule in jSparrow 3.10.0 and jSparrow Maven Plugin 2.7.0

*Against the black void, looms the lunar sphere.  
Hungry bugs haunt, satisfied by fright.  
Oh my! The programmer's faces blanch in fear.  
And thus jSparrow will eat all night.* 

jSparrow brings a new rule to simplify the use of [`Optional`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html) in Java 9 and above.

* [Use Optional::ifPresentOrElse](https://jsparrow.github.io/rules/optional-if-present-or-else.html) replaces if-then-else statements checking for [`Optional#isPresent`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html#isPresent()) with a single call to [`Optional#ifPresentOrElse`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html#ifPresentOrElse(java.util.function.Consumer,java.lang.Runnable)). 

[***66 automatic refactoring rules***](https://jsparrow.github.io/rules/) are now supported by jSparrow.

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-10-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-7-0)!

***"Real Programmers always confuse Christmas and Halloween because Oct31 == Dec25." ― Andrew Rutherford***

## jSparrow 3.9.0 and jSparrow Maven Plugin 2.6.0 Released!

*His eyes with elf-like air did peer,  
And cheekily, he flew down near;  
Rightfully so, he posed with pride,  
Since he removed code smells, code-base wide!*

jSparrow introduces a new automatic refactoring rule that has the potential to greatly improve loop performance! Now there are [***65 automatic refactoring rules***](https://jsparrow.github.io/rules/) ready to be applied!

### A New Rule to Improve Performance!

* [Insert Break Statements in For-loops](https://jsparrow.github.io/rules/insert-break-statement-in-loops.html) finds instances where Enhanced For-loops would benefit from an early stopping mechanism and adds `break` statements to avoid redundant loop cycles.  

***“Truth can only be found in one place: the code.” ― Robert C. Martin***

## Two New Rules in jSparrow 3.8.0 and jSparrow Maven Plugin 2.5.0!

*A little bird, with plumage brown,  
On top my codebase flutters down,  
In search for issues where they may lay,  
Till, full on bugs, it flies away.*

jSparrow has been busy studying new rules and is therefore happy to announce that he already knows $2^6$ rules! That's right, jSparrow supports [***64 automatic refactoring rules!***](https://jsparrow.github.io/rules/)

### New Rules to Improve Performance and Readability!

* [Use Collections Singleton List](https://jsparrow.github.io/rules/use-collections-singleton-list.html) offers an efficient way to create empty or single-element lists. 
* [Remove Null-Checks Before Instanceof](https://jsparrow.github.io/rules/remove-null-check-before-instanceof.html) recognizes redundant null-checks before `instanceof` and removes them. 

Find out more in the Release Notes for [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-8-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-5-0)!

***"The most important property of a program is whether it accomplishes the intention of its user.” ― C.A.R. Hoare***


## jSparrow 3.7.0 and jSparrow Maven Plugin 2.4.0 Released and Are Lombok Ready!

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

## jSparrow 3.6.0 and jSparrow Maven Plugin 2.3.0 Released!

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

## jSparrow 3.5.1 Released!

We have introduced a [Customer Portal](https://jsparrow.atlassian.net/servicedesk/customer/portal/1), where you can report bugs and get support. There is also a new email address for customer support: [support@jsparrow.eu](mailto:support@jsparrow.eu) 

This release adds the link to our Customer Portal and the new email address to the help dialogs in jSparrow.

## jSparrow 3.5.0 and jSparrow Maven Plugin 2.2.0 Released!

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

## jSparrow 3.4.0 and jSparrow Maven Plugin 2.1.0 Released!

Winter's days are past and it is time to start spring cleaning!

The [Remove Unused Parameters in Private Methods](https://jsparrow.github.io/rules/remove-unused-parameter.html) rule automatically removes unused parameters of private methods. This rule has been inspired by SonarQube's [Unused method parameters should be removed](https://sonarcloud.io/organizations/default/rules?languages=java&open=squid%3AS1172&q=squid%3AS1172) major code smell.

Find more information in our [jSparrow Eclipse](https://jsparrow.github.io/eclipse/release-notes.html#_3-4-0) and [jSparrow Maven](https://jsparrow.github.io/maven/release-notes.html#_2-1-0) Release Notes!

***"Make Simple Tasks Simple!" — Bjarne Stroustrup***

## jSparrow Maven Plugin 2.0.0 Released!

We are happy to announce the release of version 2.0.0 of the jSparrow Maven plugin!

This release brings lots of new rules, performance improvements, Java 11 support, and much more!
Check out the [Release Notes](https://jsparrow.github.io/maven/release-notes.html#_2-0-0) for more information!

***Improve code in your build pipeline with the jSparrow Maven plugin!***

## jSparrow Maven Plugin 2.0.0 Announcement!

On Thursday, March 28th, jSparrow Maven Plugin 2.0.0 will be released.
This version is compatible with both Java 8 and Java 11.
Additionally, the jSparrow Maven Plugin 2.0.0 includes internal stability improvements and naturally the new features of the latest jSparrow Eclipse Plugin 3.3.0.

***Stay IDE independent with the jSparrow Maven Plugin!***

## jSparrow 3.3.0 Released!!!

jSparrow 3.3.0 is ready with new rules and supports Eclipse 2019-03! This brings jSparrow to a total number of [***56 automatic refactoring rules!***](https://jsparrow.github.io/rules/)

**Check out the new rule set extensions:**
* [Replace For-Loop with Stream::Match](https://jsparrow.github.io/rules/enhanced-for-loop-to-stream-any-match.html)
* [Use BufferedReader::lines](https://jsparrow.github.io/rules/buffered-reader-lines.html)
* [Remove Modifiers in Interface Properties](https://jsparrow.github.io/rules/remove-modifiers-in-interface-properties.html)

Additionally, there are improvements to Java version handling and minor UI improvements.
Have a look at the complete [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-3-0)!

***Have fun saving time with jSparrow!***

## New Rules Are Coming in jSparrow 3.3.0!!!

We are happy to announce that we plan to release new rules with jSparrow 3.3.0!

On Thursday, March 21, 2019, two new rules and one improved rule will be released.
Out of those three rules, two will have the [Lambda](https://jsparrow.github.io/tags.html#Lambda) and [Loop](https://jsparrow.github.io/tags.html#Loop) tags.
The third rule will have the [Readability](https://jsparrow.github.io/tags.html#Readability) tag.

***Stay tuned for more information!***

## jSparrow 3.2.0 Released!!!

On Thursday, February 21, 2019, jSparrow 3.2.0 release arrived.
This brings a new rule and a link to our documentation space from each rule in the select rules wizard.

We are also happy to announce that with this release jSparrow is ready for Java 11.

For more information, check out our [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-2-0).

## jSparrow 3.1.0 Released!!!

jSparrow 3.1.0 has been thoroughly tested and is now ready for [Eclipse 2018-12](https://www.eclipse.org/downloads/packages/release/2018-12).
Some additional UI improvements and bug fixes are also included in jSparrow 3.1.0.
For more information, check out our [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-1-0).

Let jSparrow identify and automatically fix code smells for you.
Register for free to get jSparrow Starter and apply [15 rules](https://jsparrow.github.io/rules/#free-rules-in-jsparrow-starter).
Or go with the full power [jSparrow Pro](https://jsparrow.eu/get-jsparrow/) to perform ***automatic refactoring*** on your code base with [***53 rules***](https://jsparrow.github.io/rules/).

Thank you for supporting jSparrow!

***Keep your code clean!***

## jSparrow 3.1.0 Announcement

On Tuesday, January 29th, jSparrow 3.1.0 will come with support for [Eclipse 2018-12](https://www.eclipse.org/downloads/packages/release/2018-12) and further UI improvements.
Enjoy refactoring with jSparrow on the latest Eclipse version.

Don't forget to register for jSparrow Starter and get [***15 rules free of charge***](https://jsparrow.github.io/rules/#free-rules-in-jsparrow-starter).

***Happy Coding!***

## jSparrow Starter Released!!!
Promised and kept - ***jSparrow Eclipse Starter*** is ***released***!

With this new version of jSparrow you will be able to [apply 15 rules free of charge](https://jsparrow.github.io/rules/#free-rules-in-jsparrow-starter). After a short registration, you will get a license key, allowing you to apply the rules on your projects.

You can then decide if you want to use the *jSparrow Free* version, as usual, or the new features of ***jSparrow Starter for automatic refactoring***.

***Have fun with the new features!***

Check out the [Release Notes](https://jsparrow.github.io/eclipse/release-notes.html#_3-0-0)!

## jSparrow Starter Is Coming!!!

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