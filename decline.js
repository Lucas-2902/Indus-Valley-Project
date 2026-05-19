const percentages = {
    drought: "40.7%",
    migration: "34.5%",
    floods: "19.8%",
    other: "5.0%"
};

let alreadyVoted = localStorage.getItem("indusVoteDone");

function vote(option) {
    if (alreadyVoted) {
        return;
    }

    localStorage.setItem("indusVoteDone", "true");
    alreadyVoted = true;

    const buttons = document.querySelectorAll(".vote-options button");

    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "not-allowed";
    });

    document.getElementById("vote-message").innerHTML =
        "✅ Your vote has been counted.";

    document.getElementById("results-box").style.display = "block";

    document.getElementById("drought-percent").innerText =
        percentages.drought;

    document.getElementById("migration-percent").innerText =
        percentages.migration;

    document.getElementById("floods-percent").innerText =
        percentages.floods;

    document.getElementById("other-percent").innerText =
        percentages.other;
}

if (alreadyVoted) {
    window.onload = () => {
        const buttons =
            document.querySelectorAll(".vote-options button");

        buttons.forEach(button => {
            button.disabled = true;
            button.style.opacity = "0.5";
            button.style.cursor = "not-allowed";
        });

        document.getElementById("vote-message").innerHTML =
            "✅ Your vote has already been counted.";

        document.getElementById("results-box").style.display = "block";

        document.getElementById("drought-percent").innerText =
            percentages.drought;

        document.getElementById("migration-percent").innerText =
            percentages.migration;

        document.getElementById("floods-percent").innerText =
            percentages.floods;

        document.getElementById("other-percent").innerText =
            percentages.other;
    };
}
