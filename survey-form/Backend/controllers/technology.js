const java_question = [
    {
        "question": "Explain the concept of inheritance in Java. How does it help in code reuse?"
    },
    {
        "question": "What is the difference between an abstract class and an interface in Java?"
    },
    {
        "question": "How does Java handle memory management and garbage collection?"
    },
    {
        "question": "Write a Java program to reverse a linked list."
    },
    {
        "question": "Explain the significance of the 'final' keyword in Java. How can it be used with variables, methods, and classes?"
    }
];

const python_question = [
    {
        "question": "What is the difference between Python 2 and Python 3?"
    },
    {
        "question": "Explain the concept of list comprehension in Python."
    },
    {
        "question": "How does Python handle memory management and garbage collection?"
    },
    {
        "question": "Write a Python program to reverse a linked list."
    },
    {
        "question": "What is the significance of the 'yield' keyword in Python?"
    }
];

const c_question = [
    {
        "question": "What is the difference between 'int' and 'int *' in C?"
    },
    {
        "question": "Explain the concept of pointers in C. How are they different from variables?"
    },
    {
        "question": "How does C handle memory management?"
    },
    {
        "question": "Write a C program to reverse a linked list."
    },
    {
        "question": "What is the significance of the 'const' keyword in C?"
    }
];



export const java = (req, res) => {
    console.log("Fetching Java Questions");
    res.send(java_question);
}

export const python = (req, res) => {
    console.log("Fetching Python Questions");
    res.send(python_question);
}

export const c = (req, res) => {
    console.log("Fetching C Questions");
    res.send(c_question);
}
