const high_school_questions = [
    {
        "question": "What are the benefits of participating in extracurricular activities in high school?"
    },
    {
        "question": "How can high school students prepare for college admissions?"
    },
    {
        "question": "What are effective study strategies for high school students?"
    },
    {
        "question": "Explain the importance of time management skills in high school."
    },
    {
        "question": "How can high school students balance academics and social life?"
    }
];

const bachelors_questions = [
    {
        "question": "What are the key differences between high school and college education?"
    },
    {
        "question": "How can undergraduate students choose the right major?"
    },
    {
        "question": "What are effective ways to manage student loans and financial aid?"
    },
    {
        "question": "Explain the importance of internships during a Bachelor's degree."
    },
    {
        "question": "How can college students build a strong professional network?"
    }
];

const masters_questions = [
    {
        "question": "What are the benefits of pursuing a Master's degree?"
    },
    {
        "question": "How can Master's students choose a research topic?"
    },
    {
        "question": "What are effective strategies for balancing work and graduate studies?"
    },
    {
        "question": "Explain the role of a thesis or capstone project in a Master's program."
    },
    {
        "question": "How can Master's students prepare for a successful career after graduation?"
    }
];

const phd_questions = [
    {
        "question": "What are the key steps involved in completing a PhD program?"
    },
    {
        "question": "How can PhD students find and apply for research funding?"
    },
    {
        "question": "What are effective strategies for managing PhD dissertation work?"
    },
    {
        "question": "Explain the importance of publishing research during a PhD program."
    },
    {
        "question": "How can PhD students prepare for academic and non-academic careers?"
    }
];

export const high_school = (req, res) => {
    console.log("Fetching High School Questions");
    res.send(high_school_questions);
}

export const bachelors = (req, res) => {
    console.log("Fetching Bachelor's Questions");
    res.send(bachelors_questions);
}

export const masters = (req, res) => {
    console.log("Fetching Master's Questions");
    res.send(masters_questions);
}

export const phd = (req, res) => {
    console.log("Fetching PhD Questions");
    res.send(phd_questions);
}
