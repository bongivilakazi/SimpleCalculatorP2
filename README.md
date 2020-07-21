# simpleCalculatorPartTwo

    Umuzi Remote work
    1. Syllabus
    2. Topics
    3. Workshops
    4. Projects
        Android with Kotlin Projects
            Constraint Layout Using Layout Editor
            Data Binding Basics
            Linear layout using the Layout Editor
            User Activity
        Androids
            Incremental Counter
            Information Page
        Angular Tutorial
        Assertive programming kata
        Bootcamp Writing Assignment
        Build your first personal website
        Capstone project
            Gmail Text Scraper
            Pair Stairs
            Spaced Repitition machine to help you remember what you read
            The Quizmaster
            build a Chrome Extension that measures time spent in meetings
        Consume Github API
        DAGs with Airflow
        Data-science-specifics
            MEDIUM: Cross-validation & Simple Linear Regression
            Dashboard Assignment
                EASY: Google Data Studio Assignment
                HARD: Live Dashboard Assignment
                EASY: Plotly Dashboard Assignment
                HARD: Webscraping and Live Dashboard Assignment
            Data Modelling Challenges
                HARD: Network Intrusion
            Data Visualisation Projects
                MEDIUM: Evolution of Linux Visualisation
                MEDIUM: Financial Services Use in Tanzania
            MEDIUM: Data Wrangling
            MEDIUM: Decision Trees
            Introduction to Jupyter Notebooks
            MEDIUM: K-Means Clustering Assignment
            Logistic regression
                MEDIUM: Predict breast cancer
                MEDIUM: Predict credit card approvals
            MEDIUM: Multivariate Linear Regression
            MEDIUM: Natural language processing
            MEDIUM: OOP for data science
            MEDIUM: Statistical Thinking
            Webscraping Assignment
        Distributed workloads with ZeroMQ
        Email random inspirational quote
        ExpressJS
        Game of life: Angular elements
        Git Basic Exercises
        Java Projects
            File IO + Logging + Errors
            Introduction to Spring Boot
                Introduction to Spring Boot - part 1
                Introduction to Spring Boot - part 2
                Introduction to Spring Boot - part 3
                Introduction to Spring Boot - part 4
            Java Generics
            Java collections
            Java data structures
            SQL Extended
        Level 1 programming katas
        Linux challenges
            Advanced Linux challenges
            Beginner Linux challenges
        Memory Game: rebuild using a modern web frontend framework
        Memory game in vanilla js
        Memory game using Angular Material
        Nodejs Challenges
            1: Node & File IO
            2 (alt): Node & mongoDB assignment
            3: Express, forms and templates
            4: Expose a JSON API
            Add a little Ajax
            Node & SQL assignment
        OOP Excercises
            Animals
                Animals Part 1. OOP basics
                Animals Part 2. Adding Tests
            Bank Accounts
            Dice
            Person
        Pre bootcamp challenges
        Python projects
            Database migrations with SQLAlchemy
            Django - exposing a REST api with a real database
            Getting to know Python
            Python and Kafka
            Python and MongoDB
            Python and Spark
            create a REST api to interact with actual database
            expose a simple JSON rest api
        RabbitMQ
        SQL
        Semitone Challenge
            1. semitone difference - basic algorithm
            1. Make a simple GUI
            3. Advanced algorithm
            4. A gui that is more...awesome
            Add Redux to your semitone game
        Test Driven Development
            Password Checker
                Add logging to password checker
                password-checker
            MEDIUM: Resturaunt menu system
            EASY: factorials
            MEDIUM: lots and lots of tdd katas
            MEDIUM: recursive search
            EASY: simple-calculator part 1
            MEDIUM: simple-calculator part 2
            string-calculator
            HARD: ten-pin bowling scoring system
        Validating user input for web
        consuming APIs with the requests module
        iOS Mobile
            Codable, File Manager, URL
            Drag and Drop, Multithreading and Delegation
            More Swift, Gestures and Animations
            Multithreading Layout and Other Functionality - Animated Set
            Multithreading Layout and Other Functionality - Graphical Set
            Swift and More
    5. Katas
    6. Department Processes
    Code Review Feedback Notes
    Contact
    Credits
    How to Contribute
    Online Learning and bootcamp

More

    Github repo
    Credits

Edit this page
Umuzi Tech Department > Projects > Test Driven Development > simple-calculator part 2
simple-calculator part 2
Story points 	8
Tags 	tdd
Hard Prerequisites 	
PROJECTS: simple-calculator part 1

This a continuation of PROJECTS: simple-calculator part 1 . If you haven’t done that yet then please do. At this point you should have a well tested add and multiply function.

This exercise will require a little OOP knowledge. Brace yourself.
Set up your environment
Javascript

Please test your code using jasmine.

Your directory structure should look like this.

    >node_modules    <---- make sure this is in your .gitignore
    >spec
        > support
            - jasmine.json
        - string_calculator_spec.js
    >src
        - string_calculator.js
    - package.json

Python

Your project is expected to be completed using pytest. You are expected to follow industry best practices in all things. This means that you need to have a directory structure that is in good shape. Please name your files and folders like this:

├── simple_calculator   the package under test
│   └── calculator.py
├── requirements.txt    installation requiremnts
├── setup.py            installation script for the package under test
└── tests               all package tests go in this directory
    └── test_calculator.py

Please take a look at this topic to see an explanation of the required directory structure. : [TODO] Umuzi Tech Department
Introducing the calculator class

Update your tests so that they expect the add and multiply functions to be part of a class. Now make those tests pass.

For now on this document will just describe the features we need the Calculator to have. You need to figure out the tests and implementation yourself.
Note

This is an extension of PROJECTS: simple-calculator part 1 . In other words, previously implemented functionality should still work.

# this should still work
calculator_instance.add(3,5) # should return 8
calculator_instance.multiply(30,2) # should return 60

# and multiple arguments should work too
calculator_instance.add(3,5,2) # should return 10

The multiply functionality should also still work.
Remember the last result

The calculator should have a function called last that returns the last result. Example usage:

calculator_instance.add(1,2)
calculator_instance.last() # should return 3

Use the last result in other calculations

The add and multiply functions should allow "LAST" as a parameter.

Example usage:

calculator_instance.add(1,2)
calculator_instance.multiply("LAST",5) # should return 15

Memory Slots

Allow the calculator to remember more stuff by implementing a set_slot function. The set_slot function should take a single number as an argument. That argument is called the slot number. Also implement get_slot for getting the value from a memory slot. Neither get_slot or set_slot should effect the output of last.

Example usage:

calculator_instance.add(1,2)
calculator_instance.set_slot(1)
calculator_instance.get_slot(1) # should return 3
calculator_instance.add(10,20)

calculator_instance.set_slot(2)
calculator_instance.get_slot(2) # should return 30

calculator_instance.add(100,200) # returns 300. The "last" value is updated
calculator_instance.get_slot(1) # should return 3
calculator_instance.get_slot(2) # should return 30
calculator_instance.last() # should return 300

Allow the use of memory slots and LAST as arguments

The add and multiply functions should allow memory slots as parameters. If we were using memory slot 5 as an argument then we would represent it like this "SLOT_5".

Example usage: Following from the previous example:

calculator_instance.add(100,200) # returns 300. The "last" value is updated
calculator_instance.get_slot(1) # should return 3
calculator_instance.get_slot(2) # should return 30
calculator_instance.last() # should return 300 (just like before)

# THE FOLLOWING FUNCTIONALITY SHOULD WORK

calculator_instance.add("LAST",10) # should return 310 (= 300 + 10)
calculator_instance.add("SLOT_1",5) # should return 8 (= 3 + 5)
calculator_instance.multiply("SLOT_2",2) # should return 60 (= 30 * 2)

RAW CONTENT URL




