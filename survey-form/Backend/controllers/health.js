const vegetarian_questions = [
    {
        "question": "What are the health benefits of a vegetarian diet?"
    },
    {
        "question": "How can vegetarians ensure they get enough protein?"
    },
    {
        "question": "What are some common nutrient deficiencies in a vegetarian diet?"
    },
    {
        "question": "Explain the environmental impact of a vegetarian diet."
    },
    {
        "question": "How can vegetarians maintain a balanced diet?"
    }
];

const vegan_questions = [
    {
        "question": "What are the differences between a vegan and a vegetarian diet?"
    },
    {
        "question": "How can vegans ensure they get enough Vitamin B12?"
    },
    {
        "question": "What are some common challenges of a vegan diet?"
    },
    {
        "question": "Explain the ethical reasons behind a vegan lifestyle."
    },
    {
        "question": "How can vegans maintain a balanced diet?"
    }
];

const non_vegetarian_questions = [
    {
        "question": "What are the health benefits and risks of a non-vegetarian diet?"
    },
    {
        "question": "How can non-vegetarians ensure they are eating a balanced diet?"
    },
    {
        "question": "What are some common nutrient deficiencies in a non-vegetarian diet?"
    },
    {
        "question": "Explain the environmental impact of a non-vegetarian diet."
    },
    {
        "question": "How can non-vegetarians incorporate more plant-based foods into their diet?"
    }
];

export const vegetarian = (req, res) => {
    console.log("Fetching Vegetarian Questions");
    res.send(vegetarian_questions);
}

export const vegan = (req, res) => {
    console.log("Fetching Vegan Questions");
    res.send(vegan_questions);
}

export const non_vegetarian = (req, res) => {
    console.log("Fetching Non-Vegetarian Questions");
    res.send(non_vegetarian_questions);
}
